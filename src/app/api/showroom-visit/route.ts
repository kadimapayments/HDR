import { NextResponse } from "next/server";
import { postToSlack, sendEmail } from "@/lib/notifications";
import { COMPANY } from "@/lib/constants";

export const runtime = "nodejs";

export async function POST(req: Request) {
  try {
    const form = await req.formData();

    const honey = (form.get("website") as string) || "";
    if (honey) return NextResponse.json({ ok: true });

    const name = (form.get("name") as string) || "";
    const email = (form.get("email") as string) || "";
    const phone = (form.get("phone") as string) || "";
    const date = (form.get("date") as string) || "";
    const time = (form.get("time") as string) || "";
    const visitors = (form.get("visitors") as string) || "";
    const notes = (form.get("notes") as string) || "";

    if (!name || !email || !date || !time) {
      return NextResponse.json(
        { ok: false, error: "Name, email, date, and time are required." },
        { status: 400 },
      );
    }

    // Format date for readability
    const dateFormatted = new Date(date + "T12:00:00").toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });

    const summary = [
      `*New Showroom Visit Request*`,
      `*Name:* ${name}`,
      `*Email:* ${email}`,
      phone && `*Phone:* ${phone}`,
      `*Requested Date:* ${dateFormatted}`,
      `*Requested Time:* ${time}`,
      visitors && `*Number of Visitors:* ${visitors}`,
      notes && `*Notes:* ${notes}`,
    ]
      .filter(Boolean)
      .join("\n");

    await Promise.all([
      postToSlack("SLACK_WEBHOOK_LEADS", { text: summary }),
      sendEmail({
        to: process.env.LEADS_EMAIL_TO ?? COMPANY.email,
        subject: `Showroom Visit Request — ${name} — ${dateFormatted} at ${time}`,
        text: summary.replace(/\*/g, ""),
        attachments: [],
      }),
    ]);

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[showroom-visit] error", err);
    return NextResponse.json(
      { ok: false, error: "Submission failed. Please try again." },
      { status: 500 },
    );
  }
}
