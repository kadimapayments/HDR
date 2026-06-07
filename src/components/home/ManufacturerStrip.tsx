"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, useEffect } from "react";
import { MARQUEE_BRANDS } from "@/lib/constants";
import { Container } from "@/components/ui/Container";

const LOGO_W = 180;
const LOGO_H = 48;
const BASE_SPEED = 0.5; // px per frame — slow auto-scroll
const MAX_SPEED = 18;   // px per frame — max scroll speed

export function ManufacturerStrip() {
  const doubled = [...MARQUEE_BRANDS, ...MARQUEE_BRANDS];
  const trackRef = useRef<HTMLDivElement>(null);
  const posRef = useRef(0);
  const velRef = useRef(BASE_SPEED);
  const rafRef = useRef<number>(0);
  const touchXRef = useRef(0);

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
      if (Math.abs(e.deltaX) <= Math.abs(e.deltaY)) return;
      e.preventDefault();
      velRef.current = Math.min(velRef.current + e.deltaX * 0.06, MAX_SPEED);
      velRef.current = Math.max(velRef.current, BASE_SPEED);
    };

    const handleTouchStart = (e: TouchEvent) => {
      touchXRef.current = e.touches[0].clientX;
    };

    const handleTouchMove = (e: TouchEvent) => {
      const delta = touchXRef.current - e.touches[0].clientX;
      touchXRef.current = e.touches[0].clientX;
      velRef.current = Math.min(velRef.current + delta * 0.3, MAX_SPEED);
      velRef.current = Math.max(velRef.current, BASE_SPEED);
    };

    const container = track.parentElement!;
    container.addEventListener("wheel", handleWheel, { passive: false });
    container.addEventListener("touchstart", handleTouchStart, { passive: true });
    container.addEventListener("touchmove", handleTouchMove, { passive: true });

    return () => {
      cancelAnimationFrame(rafRef.current);
      container.removeEventListener("wheel", handleWheel);
      container.removeEventListener("touchstart", handleTouchStart);
      container.removeEventListener("touchmove", handleTouchMove);
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
          className="flex items-center gap-10 px-8 will-change-transform"
          style={{ width: "max-content" }}
        >
          {doubled.map((m, i) => (
            <Link
              key={`${m.slug}-${i}`}
              href={`/manufacturers/${m.slug}`}
              aria-label={`${m.name} — view manufacturer details`}
              className="shrink-0 transition-all duration-300"
            >
              <Image
                src={m.logo}
                alt={m.name}
                width={Math.round(LOGO_W * m.scale)}
                height={Math.round(LOGO_H * m.scale)}
                style={{ width: "auto", height: `${Math.round(LOGO_H * m.scale)}px` }}
                className="object-contain"
              />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
