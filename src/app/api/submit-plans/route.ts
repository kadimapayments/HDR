import { NextResponse } from "next/server";
import { postToSlack, sendEmail, uploadFilesToSlack } from "@/lib/notifications";
import { verifyRecaptcha } from "@/lib/recaptcha";
import { COMPANY } from "@/lib/constants";

export const runtime = "nodejs";

const MAX_TOTAL_BYTES = 25 * 1024 * 1024; // 25 MB

export async function POST(req: Request) {
  try {
    const form = await req.formData();

    const honey = (form.get("website") as string) || "";
    if (honey) return NextResponse.json({ ok: true });

    const name = (form.get("name") as string) || "";
    const email = (form.get("email") as string) || "";
    const phone = (form.get("phone") as string) || "";
    const company = (form.get("company") as string) || "";
    const role = (form.get("role") as string) || "";
    const projectAddress = (form.get("projectAddress") as string) || "";
    const timeline = (form.get("timeline") as string) || "";
    const budget = (form.get("budget") as string) || "";
    const notes = (form.get("notes") as string) || "";
    const plansLink = (form.get("plansLink") as string) || "";
    const recaptchaToken = (form.get("g-recaptcha-response") as string) || "";

    const isHuman = await verifyRecaptcha(recaptchaToken);
    if (!isHuman) {
      return NextResponse.json(
        { ok: false, error: "reCAPTCHA verification failed. Please try again." },
        { status: 400 }
      );
    }

    if (!name || !email) {
      return NextResponse.json(
        { ok: false, error: "Name and email are required." },
        { status: 400 },
      );
    }

    const files = form.getAll("files").filter((f): f is File => f instanceof File && f.size > 0 && f.name !== "");

    let totalBytes = 0;
    const attachments = [] as { filename: string; content: Buffer; contentType: string }[];
    for (const f of files) {
      totalBytes += f.size;
      if (totalBytes > MAX_TOTAL_BYTES) {
        return NextResponse.json(
          { ok: false, error: "Total upload size exceeds 25 MB." },
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
      `*New Plans Submission*`,
      `*Name:* ${name}`,
      `*Email:* ${email}`,
      phone && `*Phone:* ${phone}`,
      company && `*Company:* ${company}`,
      role && `*Role:* ${role}`,
      projectAddress && `*Project Address:* ${projectAddress}`,
      timeline && `*Timeline:* ${timeline}`,
      budget && `*Budget:* ${budget}`,
      attachments.length && `*Files:* ${attachments.map((a) => a.filename).join(", ")}`,
      plansLink && `*Plans Link:* ${plansLink}`,
      notes && `\n${notes}`,
    ]
      .filter(Boolean)
      .join("\n");

    await Promise.all([
      postToSlack("SLACK_WEBHOOK_PLANS", { text: summary }),
      uploadFilesToSlack("SLACK_WEBHOOK_PLANS", attachments, `📎 Files from ${name}`),
      sendEmail({
        to: process.env.LEADS_EMAIL_TO ?? COMPANY.email,
        subject: `New Plans Submission — ${name}`,
        text: summary.replace(/\*/g, ""),
        attachments,
      }),
    ]);

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[submit-plans] error", err);
    return NextResponse.json(
      { ok: false, error: "Submission failed. Please try again." },
      { status: 500 },
    );
  }
}
