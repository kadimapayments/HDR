"use client";

import { useState } from "react";

const inputCls =
  "w-full border border-neutral-warm-300 bg-white px-4 py-3 text-sm text-neutral-warm-900 placeholder-neutral-warm-400 focus:border-brand-terracotta focus:outline-none";

export function SubmitPlansForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [error, setError] = useState<string>("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setError("");
    const data = new FormData(e.currentTarget);
    try {
      const res = await fetch("/api/submit-plans", { method: "POST", body: data });
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
        <h3 className="font-serif text-2xl text-neutral-warm-900">Plans received.</h3>
        <p className="mt-3 text-sm text-neutral-warm-600">
          Thanks — our team will review your plans and get back to you as soon as possible.
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
          <label className="mb-1.5 block text-xs font-medium uppercase tracking-wide text-neutral-warm-700">Phone</label>
          <input name="phone" type="tel" className={inputCls} />
        </div>
        <div>
          <label className="mb-1.5 block text-xs font-medium uppercase tracking-wide text-neutral-warm-700">Company</label>
          <input name="company" className={inputCls} />
        </div>
        <div>
          <label className="mb-1.5 block text-xs font-medium uppercase tracking-wide text-neutral-warm-700">Role</label>
          <select name="role" className={inputCls} defaultValue="">
            <option value="" disabled>Select…</option>
            <option>Architect</option>
            <option>Builder / GC</option>
            <option>Developer</option>
            <option>Homeowner</option>
            <option>Designer</option>
            <option>Other</option>
          </select>
        </div>
        <div>
          <label className="mb-1.5 block text-xs font-medium uppercase tracking-wide text-neutral-warm-700">Project Address</label>
          <input name="projectAddress" className={inputCls} />
        </div>
        <div>
          <label className="mb-1.5 block text-xs font-medium uppercase tracking-wide text-neutral-warm-700">Timeline</label>
          <select name="timeline" className={inputCls} defaultValue="">
            <option value="" disabled>Select…</option>
            <option>Specifying now</option>
            <option>Bidding within 30 days</option>
            <option>Construction in 1–3 months</option>
            <option>Construction in 3–6 months</option>
            <option>6+ months out</option>
          </select>
        </div>
        <div>
          <label className="mb-1.5 block text-xs font-medium uppercase tracking-wide text-neutral-warm-700">Estimated Budget</label>
          <select name="budget" className={inputCls} defaultValue="">
            <option value="" disabled>Select…</option>
            <option>Under $50K</option>
            <option>$50K – $150K</option>
            <option>$150K – $500K</option>
            <option>$500K – $1M</option>
            <option>$1M+</option>
          </select>
        </div>
      </div>

      <div>
        <label className="mb-1.5 block text-xs font-medium uppercase tracking-wide text-neutral-warm-700">
          Plans & Lead Sheet (PDF, DWG, JPG — up to 25 MB total)
        </label>
        <input
          name="files"
          type="file"
          multiple
          accept=".pdf,.dwg,.dxf,.jpg,.jpeg,.png,.heic"
          className="block w-full border border-neutral-warm-300 bg-white px-4 py-3 text-sm file:mr-4 file:border-0 file:bg-brand-terracotta file:px-4 file:py-2 file:text-xs file:font-medium file:uppercase file:tracking-wide file:text-white"
        />
      </div>

      <div>
        <label className="mb-1.5 block text-xs font-medium uppercase tracking-wide text-neutral-warm-700">Notes</label>
        <textarea name="notes" rows={4} className={inputCls} placeholder="Scope, manufacturer preferences, key constraints…" />
      </div>

      {status === "error" && (
        <p className="text-sm text-red-600">{error}</p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="bg-brand-terracotta px-8 py-4 text-sm font-medium uppercase tracking-wide text-white transition-colors hover:bg-brand-terracotta-dark disabled:opacity-60"
      >
        {status === "submitting" ? "Submitting…" : "Submit Plans"}
      </button>
    </form>
  );
}
