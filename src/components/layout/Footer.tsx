"use client";

import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { COMPANY, MANUFACTURERS, SYSTEMS } from "@/lib/constants";
import { trackEvent } from "@/lib/analytics";

const socialLinks = [
  {
    label: "Instagram",
    href: COMPANY.social.instagram,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-4 w-4">
        <rect x="3" y="3" width="18" height="18" rx="4" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="0.75" fill="currentColor" />
      </svg>
    ),
  },
  {
    label: "Facebook",
    href: COMPANY.social.facebook,
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
        <path d="M13 22v-8h2.7l.4-3H13V9.2c0-.9.3-1.5 1.5-1.5h1.7v-2.7C15.9 5 14.9 4.9 13.8 4.9c-2.3 0-3.8 1.4-3.8 3.9V11H7v3h3v8h3z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: COMPANY.social.linkedin,
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
        <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM0 8h5v14H0V8zm7.5 0H12v2.06h.07c.62-1.18 2.14-2.43 4.4-2.43 4.7 0 5.57 3.1 5.57 7.13V22h-5v-6.4c0-1.53-.03-3.5-2.13-3.5-2.13 0-2.46 1.66-2.46 3.38V22h-5V8z" />
      </svg>
    ),
  },
];

export function Footer() {
  return (
    <footer className="bg-neutral-warm-950 text-neutral-warm-400">
      <Container>
        <div className="grid gap-12 py-20 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <Image
                src="/images/logos/hdr-logo-white.svg"
                alt="Horizon Design & Renovation"
                width={240}
                height={58}
                className="h-12 w-auto"
              />
            </div>
            <p className="mb-6 text-sm leading-relaxed">
              Los Angeles&apos;s premier partner in choosing luxury
              architectural windows and doors. Serving architects, builders, and
              homeowners.
            </p>
            <address className="not-italic space-y-2 text-sm">
              <p>{COMPANY.address.street}</p>
              <p>
                {COMPANY.address.city}, {COMPANY.address.state}{" "}
                {COMPANY.address.zip}
              </p>
              <p>
                <a
                  href={`tel:${COMPANY.phoneRaw}`}
                  onClick={() => trackEvent("phone_click", { location: "footer" })}
                  className="transition-colors hover:text-white"
                >
                  {COMPANY.phone}
                </a>
              </p>
              <p>
                <a
                  href={`mailto:${COMPANY.email}`}
                  onClick={() => trackEvent("email_click", { location: "footer" })}
                  className="transition-colors hover:text-white"
                >
                  {COMPANY.email}
                </a>
              </p>
            </address>

            {/* Social */}
            <div className="mt-6 flex items-center gap-4">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-8 w-8 items-center justify-center border border-neutral-warm-800 text-neutral-warm-400 transition-colors hover:border-brand-terracotta hover:text-white"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Company */}
          <div>
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.15em] text-neutral-warm-300">
              Company
            </h3>
            <ul className="space-y-3">
              {[
                { label: "About", href: "/about" },
                { label: "Showroom", href: "/showroom" },
                { label: "Interiors", href: "/interiors" },
                { label: "Resources", href: "/resources" },
                { label: "For Architects", href: "/for-architects" },
                { label: "For Builders", href: "/for-builders" },
                { label: "Submit Plans", href: "/submit-plans" },
                { label: "Service", href: "/service" },
                { label: "Contact", href: "/contact" },
              ].map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm transition-colors hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Manufacturers */}
          <div>
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.15em] text-neutral-warm-300">
              Manufacturers
            </h3>
            <ul className="space-y-3">
              {MANUFACTURERS.map((m) => (
                <li key={m.slug}>
                  <Link
                    href={`/manufacturers/${m.slug}`}
                    className="text-sm transition-colors hover:text-white"
                  >
                    {m.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Systems */}
          <div>
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.15em] text-neutral-warm-300">
              Systems
            </h3>
            <ul className="space-y-3">
              {SYSTEMS.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/systems/${s.slug}`}
                    className="text-sm transition-colors hover:text-white"
                  >
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col items-center justify-between gap-4 border-t border-neutral-warm-800 py-8 text-xs text-neutral-warm-500 md:flex-row">
          <p>
            &copy; {new Date().getFullYear()} {COMPANY.name}. All rights
            reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="transition-colors hover:text-white">
              Privacy Policy
            </Link>
            <Link href="/terms" className="transition-colors hover:text-white">
              Terms of Service
            </Link>
            <a
              href="https://kadimapayments.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Powered by Kadima"
              className="group flex items-center gap-1.5 text-[10px] tracking-wide text-neutral-warm-700 transition-colors hover:text-neutral-warm-400"
            >
              <span>Powered by Kadima</span>
              <Image
                src="/images/kadima-emblem.svg"
                alt=""
                width={20}
                height={18}
                className="h-3 w-auto opacity-50 transition-opacity group-hover:opacity-100"
              />
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
