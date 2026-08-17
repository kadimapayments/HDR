import { listSubmissions } from "@/lib/db";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const FORM_LABELS: Record<string, string> = {
  contact: "Contact",
  service: "Service Ticket",
  "submit-plans": "Submit Plans",
  "showroom-visit": "Showroom Visit",
};

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function unauthorized() {
  return new Response("Authentication required.", {
    status: 401,
    headers: { "WWW-Authenticate": 'Basic realm="Admin"' },
  });
}

export async function GET(req: Request) {
  const user = process.env.ADMIN_USER;
  const pass = process.env.ADMIN_PASSWORD;

  if (!user || !pass) {
    return new Response("Admin auth is not configured.", { status: 503 });
  }

  const auth = req.headers.get("authorization") ?? "";
  const expected = "Basic " + Buffer.from(`${user}:${pass}`).toString("base64");
  if (auth !== expected) {
    return unauthorized();
  }

  const submissions = await listSubmissions();

  const cards = submissions
    .map((s) => {
      const rows = Object.entries(s.payload)
        .map(([key, value]) => {
          const display = Array.isArray(value) ? value.join(", ") : String(value ?? "");
          return `<tr><td style="color:#666;vertical-align:top;padding-right:1rem;white-space:nowrap">${escapeHtml(
            key,
          )}</td><td style="word-break:break-word">${escapeHtml(display)}</td></tr>`;
        })
        .join("");
      return `<div style="border:1px solid #ddd;border-radius:8px;padding:1rem">
        <div style="display:flex;justify-content:space-between;margin-bottom:0.5rem">
          <strong>${escapeHtml(FORM_LABELS[s.form_type] ?? s.form_type)}</strong>
          <span style="color:#666;font-size:0.875rem">${escapeHtml(new Date(s.created_at).toLocaleString())}</span>
        </div>
        <table style="width:100%;font-size:0.9rem"><tbody>${rows}</tbody></table>
      </div>`;
    })
    .join("");

  const html = `<!doctype html><html lang="en"><head><meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="robots" content="noindex" />
    <title>Form Submissions</title></head>
    <body style="margin:0;background:#faf9f7">
      <div style="padding:2rem;font-family:system-ui,sans-serif;max-width:1000px;margin:0 auto">
        <h1 style="font-size:1.5rem;margin-bottom:1rem">Form Submissions</h1>
        <p style="color:#666;margin-bottom:1.5rem">Showing the ${submissions.length} most recent submissions across all forms. This is a raw safety-net log — Slack and email are still the primary notification channels.</p>
        ${submissions.length === 0 ? "<p>No submissions recorded yet.</p>" : ""}
        <div style="display:flex;flex-direction:column;gap:1rem">${cards}</div>
      </div>
    </body></html>`;

  return new Response(html, {
    status: 200,
    headers: { "Content-Type": "text/html; charset=utf-8" },
  });
}
