"use client";

import Image from "next/image";
import Link from "next/link";
import { MARQUEE_BRANDS } from "@/lib/constants";
import { Container } from "@/components/ui/Container";

const BASE_HEIGHT = 48;

export function ManufacturerStrip() {
  const doubled = [...MARQUEE_BRANDS, ...MARQUEE_BRANDS];

  return (
    <section className="border-y border-neutral-warm-200 bg-neutral-warm-50 py-14">
      <Container>
        <p className="mb-10 text-center text-[11px] font-medium uppercase tracking-[0.2em] text-neutral-warm-500">
          Authorized Dealer &mdash; Premium Manufacturer Partners
        </p>
      </Container>

      <div className="relative overflow-hidden">
        <div className="flex animate-[scroll_22s_linear_infinite] items-center gap-20 px-8">
          {doubled.map((m, i) => {
            const h = Math.round(BASE_HEIGHT * m.scale);
            return (
              <Link
                key={`${m.slug}-${i}`}
                href={`/manufacturers/${m.slug}`}
                aria-label={`${m.name} — view manufacturer details`}
                className="flex shrink-0 items-center justify-center grayscale opacity-60 transition-all duration-300 hover:grayscale-0 hover:opacity-100"
                style={{ height: `${Math.round(BASE_HEIGHT * 1.15)}px` }}
              >
                <Image
                  src={m.logo}
                  alt={m.name}
                  width={Math.round(220 * m.scale)}
                  height={h}
                  className="w-auto object-contain"
                  style={{ height: `${h}px` }}
                />
              </Link>
            );
          })}
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  );
}
