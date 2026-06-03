"use client";

import { useState } from "react";
import { MANUFACTURERS } from "@/lib/constants";

const inputCls =
  "w-full border border-neutral-warm-300 bg-white px-4 py-3 text-sm text-neutral-warm-900 placeholder-neutral-warm-400 focus:border-brand-terracotta focus:outline-none";

export function ServiceForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [error, setError] = useState<string>("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setError("");
    const data = new FormData(e.currentTarget);
    try {
      const token = await (window as any).grecaptcha.execute(
        process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY,
        { action: "service_request" }
      );
      data.append("recaptchaToken", token);
      const res = await fetch("/api/service", { method: "POST", body: data });
      const json = await res.json();
      if (!res.ok || !json.ok) throw new Error(json.error || "Submission failed");
      setStatus("success");
      e.currentTarget.reset();
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Submission failed");
    }
  }

  if (status === "success") {
    return (
      <div className="border border-accent-sage/30 bg-accent-sage/5 p-8 text-center">
        <h3 className="font-serif text-2xl text-neutral-warm-900">Ticket received.</h3>
        <p className="mt-3 text-sm text-neutral-warm-600">
          Our service team has been notified. We&apos;ll reach out as soon as possible to schedule next steps.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <input type="text" name="website" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden />

      <div className="grid gap-5 md:grid-cols-2">
        <div>
          <label className="mb-1.5 block text-xs font-medium uppercase tracking-wide text-neutral-warm-700">Name *</label>
          <input required name="name" className={inputCls} />
        </div>
        <div>
          <label className="mb-1.5 block text-xs font-medium uppercase tracking-wide text-neutral-warm-700">Email *</label>
          <input required type="email" name="email" className={inputCls} />
        </div>
        <div>
          <label className="mb-1.5 block text-xs font-medium uppercase tracking-wide text-neutral-warm-700">Phone *</label>
          <input required name="phone" type="tel" className={inputCls} />
        </div>
        <div>
          <label className="mb-1.5 block text-xs font-medium uppercase tracking-wide text-neutral-warm-700">Project Address *</label>
          <input required name="projectAddress" className={inputCls} />
        </div>
        <div>
          <label className="mb-1.5 block text-xs font-medium uppercase tracking-wide text-neutral-warm-700">Manufacturer *</label>
          <select required name="manufacturer" className={inputCls} defaultValue="">
            <option value="" disabled>Select…</option>
            {MANUFACTURERS.map((m) => (
              <option key={m.slug}>{m.name}</option>
            ))}
            <option>Other / Don&apos;t know</option>
          </select>
        </div>
        <div>
          <label className="mb-1.5 block text-xs font-medium uppercase tracking-wide text-neutral-warm-700">
            Approx. Date of Purchase
          </label>
          <input name="purchaseDate" type="month" className={inputCls} />
        </div>
        <div>
          <label className="mb-1.5 block text-xs font-medium uppercase tracking-wide text-neutral-warm-700">Order Number</label>
          <input name="orderNumber" className={inputCls} placeholder="If known" />
        </div>
        <div>
          <label className="mb-1.5 block text-xs font-medium uppercase tracking-wide text-neutral-warm-700">
            Line Item / Window or Door
          </label>
          <input name="lineItem" className={inputCls} placeholder="e.g. master bedroom slider, panel #3" />
        </div>
      </div>

      <div>
        <label className="mb-1.5 block text-xs font-medium uppercase tracking-wide text-neutral-warm-700">Describe the Issue *</label>
        <textarea
          required
          name="issue"
          rows={5}
          className={inputCls}
          placeholder="What's happening? When did it start? Any patterns?"
        />
      </div>

      <div>
        <label className="mb-1.5 block text-xs font-medium uppercase tracking-wide text-neutral-warm-700">
          Photos (optional, up to 15 MB total)
        </label>
        <input
          name="images"
          type="file"
          multiple
          accept="image/*"
          className="block w-full border border-neutral-warm-300 bg-white px-4 py-3 text-sm file:mr-4 file:border-0 file:bg-brand-terracotta file:px-4 file:py-2 file:text-xs file:font-medium file:uppercase file:tracking-wide file:text-white"
        />
        <p className="mt-2 text-xs text-neutral-warm-500">
          Photos help us diagnose faster. Include the issue and the surrounding installation if possible.
        </p>
      </div>

      {status === "error" && (
        <p className="text-sm text-red-600">{error}</p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="bg-brand-terracotta px-8 py-4 text-sm font-medium uppercase tracking-wide text-white transition-colors hover:bg-brand-terracotta-dark disabled:opacity-60"
      >
        {status === "submitting" ? "Submitting…" : "Open Service Ticket"}
      </button>
    </form>
  );
}
