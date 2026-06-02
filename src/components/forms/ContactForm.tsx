"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div className="border border-accent-sage/30 bg-accent-sage/5 p-8 text-center">
        <h3 className="font-serif text-xl font-semibold text-neutral-warm-900">
          Thank You
        </h3>
        <p className="mt-2 text-neutral-warm-600">
          We&apos;ve received your message and will be in touch as soon as possible.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSubmitted(true);
      }}
      className="space-y-6"
    >
      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <label
            htmlFor="name"
            className="mb-2 block text-xs font-medium uppercase tracking-wider text-neutral-warm-500"
          >
            Name *
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            className="w-full border border-neutral-warm-200 bg-white px-4 py-3 text-sm text-neutral-warm-900 transition-colors focus:border-brand-terracotta focus:outline-none"
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="mb-2 block text-xs font-medium uppercase tracking-wider text-neutral-warm-500"
          >
            Email *
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="w-full border border-neutral-warm-200 bg-white px-4 py-3 text-sm text-neutral-warm-900 transition-colors focus:border-brand-terracotta focus:outline-none"
          />
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <label
            htmlFor="phone"
            className="mb-2 block text-xs font-medium uppercase tracking-wider text-neutral-warm-500"
          >
            Phone *
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            className="w-full border border-neutral-warm-200 bg-white px-4 py-3 text-sm text-neutral-warm-900 transition-colors focus:border-brand-terracotta focus:outline-none"
          />
        </div>
        <div>
          <label
            htmlFor="role"
            className="mb-2 block text-xs font-medium uppercase tracking-wider text-neutral-warm-500"
          >
            I am a... *
          </label>
          <select
            id="role"
            name="role"
            required
            className="w-full border border-neutral-warm-200 bg-white px-4 py-3 text-sm text-neutral-warm-900 transition-colors focus:border-brand-terracotta focus:outline-none"
          >
            <option value="">Select one</option>
            <option value="homeowner">Homeowner</option>
            <option value="architect">Architect</option>
            <option value="builder">Builder / General Contractor</option>
            <option value="developer">Developer</option>
            <option value="other">Other</option>
          </select>
        </div>
      </div>

      <div>
        <label
          htmlFor="stage"
          className="mb-2 block text-xs font-medium uppercase tracking-wider text-neutral-warm-500"
        >
          Project Stage
        </label>
        <select
          id="stage"
          name="stage"
          className="w-full border border-neutral-warm-200 bg-white px-4 py-3 text-sm text-neutral-warm-900 transition-colors focus:border-brand-terracotta focus:outline-none"
        >
          <option value="">Select one</option>
          <option value="planning">Planning / Early Design</option>
          <option value="design">Design Development</option>
          <option value="permitting">Permitting</option>
          <option value="construction">Construction</option>
          <option value="replacing">Replacing Existing Windows</option>
        </select>
      </div>

      <div>
        <label
          htmlFor="message"
          className="mb-2 block text-xs font-medium uppercase tracking-wider text-neutral-warm-500"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          className="w-full border border-neutral-warm-200 bg-white px-4 py-3 text-sm text-neutral-warm-900 transition-colors focus:border-brand-terracotta focus:outline-none"
          placeholder="Tell us about your project..."
        />
      </div>

      {/* Honeypot */}
      <div className="hidden" aria-hidden="true">
        <input type="text" name="website" tabIndex={-1} autoComplete="off" />
      </div>

      <Button type="submit" variant="primary" size="lg">
        Send Message
      </Button>
    </form>
  );
}
