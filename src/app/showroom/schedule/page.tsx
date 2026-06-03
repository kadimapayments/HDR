"use client";

import { useState } from "react";
import { PageHero } from "@/components/layout/PageHero";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { COMPANY } from "@/lib/constants";

const inputCls =
  "w-full border border-neutral-warm-200 bg-white px-4 py-3 text-sm text-neutral-warm-900 placeholder-neutral-warm-400 focus:border-brand-terracotta focus:outline-none";

const TIME_SLOTS = [
  "10:00 AM",
  "11:00 AM",
  "12:00 PM",
  "1:00 PM",
  "2:00 PM",
  "3:00 PM",
  "4:00 PM",
];

// Minimum date = today
function todayString() {
  return new Date().toISOString().split("T")[0];
}

export default function ShowroomSchedulePage() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setError("");
    try {
      const data = new FormData(e.currentTarget);
      const res = await fetch("/api/showroom-visit", { method: "POST", body: data });
      const json = await res.json();
      if (!res.ok || !json.ok) throw new Error(json.error || "Submission failed");
      setStatus("success");
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Submission failed");
    }
  }

  return (
    <>
      <PageHero
        title="Schedule a Showroom Visit"
        subtitle="West Los Angeles"
        description="Choose a date and time and we'll confirm your appointment. Our showroom is open Monday through Saturday."
      />

      <Section>
        <Container>
          <div className="grid gap-16 lg:grid-cols-3">
            {/* Form */}
            <div className="lg:col-span-2">
              {status === "success" ? (
                <div className="border border-accent-sage/30 bg-accent-sage/5 p-10 text-center">
                  <h3 className="font-serif text-2xl font-semibold text-neutral-warm-900">
                    Request Received
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-neutral-warm-600">
                    Thanks — we&apos;ll reach out to confirm your visit within one business day.
                    If you need to reach us sooner, call{" "}
                    <a href={`tel:${COMPANY.phoneRaw}`} className="text-brand-terracotta hover:underline">
                      {COMPANY.phone}
                    </a>.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <input type="text" name="website" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden />

                  {/* Contact Info */}
                  <div>
                    <h3 className="mb-4 font-serif text-lg font-semibold text-neutral-warm-900">
                      Your Information
                    </h3>
                    <div className="grid gap-5 md:grid-cols-2">
                      <div>
                        <label className="mb-1.5 block text-xs font-medium uppercase tracking-wide text-neutral-warm-700">
                          Name *
                        </label>
                        <input required name="name" className={inputCls} />
                      </div>
                      <div>
                        <label className="mb-1.5 block text-xs font-medium uppercase tracking-wide text-neutral-warm-700">
                          Email *
                        </label>
                        <input required type="email" name="email" className={inputCls} />
                      </div>
                      <div>
                        <label className="mb-1.5 block text-xs font-medium uppercase tracking-wide text-neutral-warm-700">
                          Phone *
                        </label>
                        <input required type="tel" name="phone" className={inputCls} />
                      </div>
                    </div>
                  </div>

                  {/* Date & Time */}
                  <div>
                    <h3 className="mb-4 font-serif text-lg font-semibold text-neutral-warm-900">
                      Preferred Date &amp; Time
                    </h3>
                    <div className="grid gap-5 md:grid-cols-2">
                      <div>
                        <label className="mb-1.5 block text-xs font-medium uppercase tracking-wide text-neutral-warm-700">
                          Date *
                        </label>
                        <input
                          required
                          type="date"
                          name="date"
                          min={todayString()}
                          className={inputCls}
                        />
                        <p className="mt-1.5 text-xs text-neutral-warm-400">
                          Monday – Saturday
                        </p>
                      </div>
                      <div>
                        <label className="mb-1.5 block text-xs font-medium uppercase tracking-wide text-neutral-warm-700">
                          Time *
                        </label>
                        <select required name="time" className={inputCls} defaultValue="">
                          <option value="" disabled>Select a time…</option>
                          {TIME_SLOTS.map((t) => (
                            <option key={t}>{t}</option>
                          ))}
                        </select>
                      </div>
                    </div>
                  </div>

                  {/* Notes */}
                  <div>
                    <label className="mb-1.5 block text-xs font-medium uppercase tracking-wide text-neutral-warm-700">
                      Questions or Notes
                    </label>
                    <textarea
                      name="notes"
                      rows={4}
                      className={inputCls}
                      placeholder="Anything you'd like us to know before your visit — manufacturers you're interested in, project details, etc."
                    />
                  </div>

                  {status === "error" && (
                    <p className="text-sm text-red-600">{error}</p>
                  )}

                  <button
                    type="submit"
                    disabled={status === "submitting"}
                    className="bg-brand-terracotta px-8 py-4 text-sm font-medium uppercase tracking-wide text-white transition-colors hover:bg-brand-terracotta-dark disabled:opacity-60"
                  >
                    {status === "submitting" ? "Submitting…" : "Request Visit"}
                  </button>
                </form>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-8 border-l border-neutral-warm-200 pl-8">
              <div>
                <h4 className="mb-2 text-xs font-semibold uppercase tracking-[0.15em] text-brand-terracotta">
                  Location
                </h4>
                <p className="text-sm text-neutral-warm-700">
                  {COMPANY.address.street}<br />
                  {COMPANY.address.city}, {COMPANY.address.state} {COMPANY.address.zip}
                </p>
                <a
                  href="https://www.google.com/maps/dir/?api=1&destination=1852+S+Sepulveda+Blvd,+Los+Angeles,+CA+90025"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-block text-xs text-brand-terracotta hover:underline"
                >
                  Get Directions →
                </a>
              </div>

              <div>
                <h4 className="mb-2 text-xs font-semibold uppercase tracking-[0.15em] text-brand-terracotta">
                  Hours
                </h4>
                <div className="space-y-1 text-sm text-neutral-warm-700">
                  <p>Monday – Friday: 9:00 AM – 5:00 PM</p>
                  <p>Saturday & Sunday: By Appointment</p>
                  <p>Outside business hours: By Appointment</p>
                </div>
              </div>

              <div>
                <h4 className="mb-2 text-xs font-semibold uppercase tracking-[0.15em] text-brand-terracotta">
                  Phone
                </h4>
                <a
                  href={`tel:${COMPANY.phoneRaw}`}
                  className="text-sm text-neutral-warm-700 hover:text-brand-terracotta"
                >
                  {COMPANY.phone}
                </a>
              </div>

              <div>
                <h4 className="mb-3 text-xs font-semibold uppercase tracking-[0.15em] text-brand-terracotta">
                  What to Expect
                </h4>
                <ul className="space-y-2">
                  {[
                    "Full-scale operating displays",
                    "Side-by-side manufacturer comparisons",
                    "Material & finish library",
                    "Private consultation rooms",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-neutral-warm-600">
                      <div className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-terracotta" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
