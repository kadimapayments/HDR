"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, useEffect } from "react";
import { MARQUEE_BRANDS } from "@/lib/constants";
import { Container } from "@/components/ui/Container";

const BASE_HEIGHT = 48;
const BASE_SPEED = 0.5; // px per frame — slow auto-scroll
const MAX_SPEED = 18;   // px per frame — max scroll speed

export function ManufacturerStrip() {
  const doubled = [...MARQUEE_BRANDS, ...MARQUEE_BRANDS];
  const trackRef = useRef<HTMLDivElement>(null);
  const posRef = useRef(0);
  const velRef = useRef(BASE_SPEED);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const halfWidth = () => track.scrollWidth / 2;

    const tick = () => {
      // Smoothly decay velocity back toward base speed
      velRef.current += (BASE_SPEED - velRef.current) * 0.04;

      posRef.current += velRef.current;

      // Seamless loop: reset when one full set has scrolled through
      if (posRef.current >= halfWidth()) {
        posRef.current -= halfWidth();
      }

      track.style.transform = `translateX(-${posRef.current}px)`;
      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      const delta = Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : e.deltaY;
      velRef.current = Math.min(velRef.current + delta * 0.06, MAX_SPEED);
      velRef.current = Math.max(velRef.current, BASE_SPEED);
    };

    const container = track.parentElement!;
    container.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      cancelAnimationFrame(rafRef.current);
      container.removeEventListener("wheel", handleWheel);
    };
  }, []);

  return (
    <section className="border-y border-neutral-warm-200 bg-neutral-warm-50 py-14">
      <Container>
        <p className="mb-10 text-center text-[11px] font-medium uppercase tracking-[0.2em] text-neutral-warm-500">
          Authorized Dealer &mdash; Premium Manufacturer Partners
        </p>
      </Container>

      <div className="relative overflow-hidden">
        <div
          ref={trackRef}
          className="flex items-center gap-20 px-8 will-change-transform"
          style={{ width: "max-content" }}
        >
          {doubled.map((m, i) => {
            const h = Math.round(BASE_HEIGHT * (m.scale ?? 1));
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
                  width={Math.round(220 * (m.scale ?? 1))}
                  height={h}
                  className="w-auto object-contain"
                  style={{ height: `${h}px` }}
                />
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
