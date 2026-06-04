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
