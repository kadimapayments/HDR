import { NextResponse } from "next/server";
import { postToSlack, sendEmail } from "@/lib/notifications";
import { verifyRecaptcha } from "@/lib/recaptcha";
import { COMPANY } from "@/lib/constants";

export const runtime = "nodejs";

const MAX_TOTAL_BYTES = 15 * 1024 * 1024;

export async function POST(req: Request) {
  try {
    const form = await req.formData();

    const honey = (form.get("website") as string) || "";
    if (honey) return NextResponse.json({ ok: true });

    const name = (form.get("name") as string) || "";
    const email = (form.get("email") as string) || "";
    const phone = (form.get("phone") as string) || "";
    const projectAddress = (form.get("projectAddress") as string) || "";
    const manufacturer = (form.get("manufacturer") as string) || "";
    const purchaseDate = (form.get("purchaseDate") as string) || "";
    const orderNumber = (form.get("orderNumber") as string) || "";
    const lineItem = (form.get("lineItem") as string) || "";
    const issue = (form.get("issue") as string) || "";
    const recaptchaToken = (form.get("g-recaptcha-response") as string) || "";

    const isHuman = await verifyRecaptcha(recaptchaToken);
    if (!isHuman) {
      return NextResponse.json(
        { ok: false, error: "reCAPTCHA verification failed. Please try again." },
        { status: 400 }
      );
    }

    if (!name || !email || !manufacturer || !issue) {
      return NextResponse.json(
        { ok: false, error: "Name, email, manufacturer, and issue are required." },
        { status: 400 },
      );
    }

    const images = form.getAll("images").filter((f): f is File => f instanceof File);

    let totalBytes = 0;
    const attachments = [] as { filename: string; content: Buffer; contentType: string }[];
    for (const f of images) {
      totalBytes += f.size;
      if (totalBytes > MAX_TOTAL_BYTES) {
        return NextResponse.json(
          { ok: false, error: "Total image size exceeds 15 MB." },
          { status: 413 },
        );
      }
      const buf = Buffer.from(await f.arrayBuffer());
      attachments.push({
        filename: f.name,
        content: buf,
        contentType: f.type || "application/octet-stream",
      });
    }

    const summary = [
      `*New Service Ticket*`,
      `*Customer:* ${name}`,
      `*Email:* ${email}`,
      phone && `*Phone:* ${phone}`,
      projectAddress && `*Address:* ${projectAddress}`,
      `*Manufacturer:* ${manufacturer}`,
      purchaseDate && `*Approx. Purchase Date:* ${purchaseDate}`,
      orderNumber && `*Order #:* ${orderNumber}`,
      lineItem && `*Line Item:* ${lineItem}`,
      attachments.length && `*Images:* ${attachments.length} attached`,
      `\n*Issue:*\n${issue}`,
    ]
      .filter(Boolean)
      .join("\n");

    await Promise.all([
      postToSlack("SLACK_WEBHOOK_SERVICE", { text: summary }),
      sendEmail({
        to: process.env.SERVICE_EMAIL_TO ?? COMPANY.serviceEmail,
        subject: `Service Ticket — ${manufacturer} — ${name}`,
        text: summary.replace(/\*/g, ""),
        attachments,
      }),
    ]);

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[service] error", err);
    return NextResponse.json(
      { ok: false, error: "Submission failed. Please try again." },
      { status: 500 },
    );
  }
}
