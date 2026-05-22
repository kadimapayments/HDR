"use client";

import Image from "next/image";
import { AnimatedReveal } from "@/components/shared/AnimatedReveal";

/**
 * Real photos from the HDR showroom.
 * Files live at: public/images/showroom/<filename>
 *
 * Naming convention (save your photos with these exact names):
 *   showroom-andersen.jpg   — Andersen Windows section
 *   showroom-euroline.jpg   — Euroline Steel Windows & Doors display
 *   showroom-doors.jpg      — Multi-panel folding/steel door systems
 *   showroom-pivot.jpg      — Pivot entry door + NanaWall sliding walls
 */
const photos = [
  {
    src: "/images/showroom/showroom-andersen.jpg",
    alt: "Andersen Windows full-scale casement and awning window display in the HDR showroom",
    caption: "Andersen Windows & Doors",
    // Andersen shot is slightly warmer/darker — boost brightness to match the airy interior shots
    filter: "brightness(1.06) contrast(1.04) saturate(0.87)",
  },
  {
    src: "/images/showroom/showroom-euroline.jpg",
    alt: "Euroline Steel Windows & Doors entry display with floor-to-ceiling glass panels",
    caption: "Euroline Steel Windows",
    // Euroline shot has strong daylight from the entrance — nudge up slightly
    filter: "brightness(1.03) contrast(1.03) saturate(0.86)",
  },
  {
    src: "/images/showroom/showroom-doors.jpg",
    alt: "Multi-panel folding and pivot door systems with steel and natural wood frames on display",
    caption: "Folding & Sliding Door Systems",
    // Bright airy interior — dial back a touch to match others
    filter: "brightness(0.96) contrast(1.05) saturate(0.87)",
  },
  {
    src: "/images/showroom/showroom-pivot.jpg",
    alt: "Pivot entry door with NanaWall sliding glass wall systems in the HDR showroom",
    caption: "Pivot Doors & Sliding Walls",
    // Similar treatment to showroom-doors.jpg
    filter: "brightness(0.97) contrast(1.04) saturate(0.87)",
  },
];

export function ShowroomGallery() {
  return (
    <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
      {photos.map((photo, i) => (
        <AnimatedReveal key={photo.src} delay={i * 0.12}>
          <div className="group relative aspect-[4/3] overflow-hidden bg-neutral-warm-200">
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
              style={{ filter: photo.filter }}
            />

            {/*
              Warm unifying overlay — a very subtle amber wash applied identically
              to all photos via mix-blend-mode. This pulls different color temps
              toward the same warm-neutral midpoint without darkening the images.
            */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 mix-blend-overlay"
              style={{ backgroundColor: "rgba(255, 248, 235, 0.07)" }}
            />

            {/* Caption — slides up on hover */}
            <div
              aria-hidden="true"
              className="absolute inset-x-0 bottom-0 translate-y-full bg-gradient-to-t from-neutral-warm-950/80 to-transparent px-5 pb-5 pt-14 transition-transform duration-300 ease-out group-hover:translate-y-0"
            >
              <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-white/85">
                {photo.caption}
              </p>
            </div>
          </div>
        </AnimatedReveal>
      ))}
    </div>
  );
}
