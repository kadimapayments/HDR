import { NextResponse } from "next/server";
import { postToSlack, sendEmail } from "@/lib/notifications";
import { verifyRecaptcha } from "@/lib/recaptcha";
import { COMPANY } from "@/lib/constants";

export const runtime = "nodejs";

export async function POST(req: Request) {
  try {
    const form = await req.formData();

    const honey = (form.get("website") as string) || "";
    if (honey) return NextResponse.json({ ok: true });

    const recaptchaToken = (form.get("g-recaptcha-response") as string) || "";
    const isHuman = await verifyRecaptcha(recaptchaToken);
    if (!isHuman) {
      return NextResponse.json(
        { ok: false, error: "reCAPTCHA verification failed. Please try again." },
        { status: 400 }
      );
    }

    const name = (form.get("name") as string) || "";
    const email = (form.get("email") as string) || "";
    const phone = (form.get("phone") as string) || "";
    const role = (form.get("role") as string) || "";
    const stage = (form.get("stage") as string) || "";
    const message = (form.get("message") as string) || "";

    if (!name || !email) {
      return NextResponse.json(
        { ok: false, error: "Name and email are required." },
        { status: 400 }
      );
    }

    const summary = [
      `*New Contact Form Submission*`,
      `*Name:* ${name}`,
      `*Email:* ${email}`,
      phone && `*Phone:* ${phone}`,
      role && `*Role:* ${role}`,
      stage && `*Project Stage:* ${stage}`,
      message && `\n*Message:*\n${message}`,
    ]
      .filter(Boolean)
      .join("\n");

    await Promise.all([
      postToSlack("SLACK_WEBHOOK_LEADS", { text: summary }),
      sendEmail({
        to: process.env.LEADS_EMAIL_TO ?? COMPANY.email,
        subject: `New Contact Form — ${name}`,
        text: summary.replace(/\*/g, ""),
        attachments: [],
      }),
    ]);

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[contact] error", err);
    return NextResponse.json(
      { ok: false, error: "Submission failed. Please try again." },
      { status: 500 }
    );
  }
}
