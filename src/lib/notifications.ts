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

  // Join the channel first (in case the bot isn't a member)
  await fetch("https://slack.com/api/conversations.join", {
    method: "POST",
    headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" },
    body: JSON.stringify({ channel: channelId }),
  });

  // Upload each file using the newer Slack upload API
  for (const file of files) {
    try {
      // Step 1: Get upload URL
      const urlRes = await fetch("https://slack.com/api/files.getUploadURLExternal", {
        method: "POST",
        headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" },
        body: JSON.stringify({ filename: file.filename, length: file.content.length }),
      });
      const urlData = await urlRes.json();
      if (!urlData.ok) {
        console.error("[slack upload] getUploadURLExternal failed", urlData.error);
        continue;
      }

      // Step 2: Upload file content
      await fetch(urlData.upload_url, {
        method: "POST",
        headers: { "Content-Type": file.contentType },
        body: new Uint8Array(file.content),
      });

      // Step 3: Complete upload and share to channel
      const completeRes = await fetch("https://slack.com/api/files.completeUploadExternal", {
        method: "POST",
        headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" },
        body: JSON.stringify({
          files: [{ id: urlData.file_id }],
          channel_id: channelId,
          initial_comment: files.indexOf(file) === 0 ? message : undefined,
        }),
      });
      const completeData = await completeRes.json();
      if (!completeData.ok) {
        console.error("[slack upload] completeUploadExternal failed", completeData.error);
      }
    } catch (err) {
      console.error("[slack upload] error uploading file", file.filename, err);
    }
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
