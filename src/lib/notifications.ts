type SlackBlock = Record<string, unknown>;

type SlackPayload = {
  text: string;
  blocks?: SlackBlock[];
};

type EmailAttachment = {
  filename: string;
  content: Buffer;
  contentType: string;
};

type EmailPayload = {
  to: string;
  subject: string;
  text: string;
  html?: string;
  attachments?: EmailAttachment[];
};

// Channel IDs for file uploads (bot token required)
const SLACK_CHANNEL_IDS: Record<string, string> = {
  SLACK_WEBHOOK_CONTACT:  "C0B8AC0CASJ",
  SLACK_WEBHOOK_PLANS:    "C0B892V6N4V",
  SLACK_WEBHOOK_SERVICE:  "C0B96P6P6RW",
  SLACK_WEBHOOK_SHOWROOM: "C0B7X0M2BGX",
};

export async function postToSlack(
  webhookEnvVar: "SLACK_WEBHOOK_LEADS" | "SLACK_WEBHOOK_SERVICE" | "SLACK_WEBHOOK_CONTACT" | "SLACK_WEBHOOK_PLANS" | "SLACK_WEBHOOK_SHOWROOM",
  payload: SlackPayload,
): Promise<void> {
  const webhook = process.env[webhookEnvVar];
  if (!webhook) {
    console.log(`[notifications] ${webhookEnvVar} not set — skipping Slack`, {
      preview: payload.text,
    });
    return;
  }

  const res = await fetch(webhook, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  if (!res.ok) {
    throw new Error(`Slack webhook failed: ${res.status} ${await res.text()}`);
  }
}

export async function uploadFilesToSlack(
  webhookEnvVar: string,
  files: { filename: string; content: Buffer; contentType: string }[],
  message: string,
): Promise<void> {
  const token = process.env.SLACK_BOT_TOKEN;
  const channelId = SLACK_CHANNEL_IDS[webhookEnvVar];

  if (!token || !channelId || files.length === 0) return;

  // Ensure the bot is in the channel
  await fetch("https://slack.com/api/conversations.join", {
    method: "POST",
    headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" },
    body: JSON.stringify({ channel: channelId }),
  });

  const uploadedFileIds: string[] = [];

  for (const file of files) {
    try {
      // Step 1: Get upload URL
      const urlRes = await fetch("https://slack.com/api/files.getUploadURLExternal", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({
          filename: file.filename,
          length: String(file.content.length),
        }),
      });
      const urlData = await urlRes.json();
      if (!urlData.ok) {
        console.error("[slack upload] getUploadURLExternal failed:", urlData.error, file.filename);
        continue;
      }

      // Step 2: Upload raw file bytes to the pre-signed URL
      const uploadRes = await fetch(urlData.upload_url, {
        method: "POST",
        headers: { "Content-Type": "application/octet-stream" },
        body: new Uint8Array(file.content),
      });
      if (!uploadRes.ok) {
        console.error("[slack upload] upload to URL failed:", uploadRes.status, file.filename);
        continue;
      }

      uploadedFileIds.push(urlData.file_id);
    } catch (err) {
      console.error("[slack upload] error uploading", file.filename, err);
    }
  }

  if (uploadedFileIds.length === 0) return;

  // Step 3: Complete upload — share all files to channel in one call
  try {
    const completeRes = await fetch("https://slack.com/api/files.completeUploadExternal", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        files: uploadedFileIds.map((id) => ({ id })),
        channel_id: channelId,
        initial_comment: message,
      }),
    });
    const completeData = await completeRes.json();
    if (!completeData.ok) {
      console.error("[slack upload] completeUploadExternal failed:", completeData.error);
    }
  } catch (err) {
    console.error("[slack upload] error completing upload", err);
  }
}

export async function sendEmail(payload: EmailPayload): Promise<void> {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.log("[notifications] RESEND_API_KEY not set — skipping email", {
      to: payload.to,
      subject: payload.subject,
      attachmentCount: payload.attachments?.length ?? 0,
    });
    return;
  }

  const from = process.env.EMAIL_FROM ?? "HDR Windows <noreply@hdrwindows.com>";

  const body: Record<string, unknown> = {
    from,
    to: payload.to,
    subject: payload.subject,
    text: payload.text,
  };
  if (payload.html) body.html = payload.html;
  if (payload.attachments?.length) {
    body.attachments = payload.attachments.map((a) => ({
      filename: a.filename,
      content: a.content.toString("base64"),
    }));
  }

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });

  if (!res.ok) {
    throw new Error(`Email send failed: ${res.status} ${await res.text()}`);
  }
}
