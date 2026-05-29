"use client";

import Image from "next/image";
import { AnimatedReveal } from "@/components/shared/AnimatedReveal";

/**
 * Real photos from the HDR showroom.
 * Files live at: public/images/showroom/<filename>
 */
const photos = [
  {
    src: "/images/showroom/162A2571.jpg",
    alt: "HDR Windows & Doors showroom — premium glazing and door system displays",
    caption: "Glazing Systems",
    filter: "brightness(1.03) contrast(1.03) saturate(0.87)",
  },
  {
    src: "/images/showroom/162A0765.jpg",
    alt: "HDR Windows & Doors showroom interior — architectural window and door displays",
    caption: "Showroom Display",
    filter: "brightness(1.02) contrast(1.03) saturate(0.87)",
  },
  {
    src: "/images/showroom/162A2433.jpg",
    alt: "HDR showroom featuring premium architectural door and window specifications",
    caption: "Door & Window Details",
    filter: "brightness(1.02) contrast(1.04) saturate(0.86)",
  },
  {
    src: "/images/showroom/162A2521.jpg",
    alt: "HDR Windows showroom — full-scale display of architectural window systems",
    caption: "Architectural Windows",
    filter: "brightness(1.02) contrast(1.04) saturate(0.86)",
  },
  {
    src: "/images/showroom/showroom-andersen.jpg",
    alt: "Andersen Windows & Doors full-scale display — casement windows, arched entry and AW Architectural Collection",
    caption: "Andersen Windows & Doors",
    filter: "brightness(1.02) contrast(1.04) saturate(0.87)",
  },
  {
    src: "/images/showroom/162A0730.jpg",
    alt: "HDR showroom interior showcasing high-performance window and door specifications",
    caption: "Showroom Interior",
    filter: "brightness(1.02) contrast(1.03) saturate(0.87)",
  },
  {
    src: "/images/showroom/showroom-doors.jpg",
    alt: "Multi-panel steel and wood folding door systems on display — blue frames with warm oak detailing",
    caption: "Folding & Sliding Systems",
    filter: "brightness(0.98) contrast(1.04) saturate(0.87)",
  },
  {
    src: "/images/showroom/showroom-pivot.jpg",
    alt: "Pivot entry door in warm wood with NanaWall sliding glass wall systems",
    caption: "Pivot Doors & NanaWall",
    filter: "brightness(0.99) contrast(1.04) saturate(0.86)",
  },
  {
    src: "/images/showroom/showroom-loewen-steel.jpg",
    alt: "Loewen steel-frame hinged door display with warm wood shelving and material library",
    caption: "Loewen Windows & Doors",
    filter: "brightness(1.04) contrast(1.05) saturate(0.85)",
  },
  {
    src: "/images/showroom/showroom-loewen-wood.jpg",
    alt: "Loewen warm wood folding door system open to the showroom floor — interior view",
    caption: "Loewen Wood Folding Doors",
    filter: "brightness(1.02) contrast(1.04) saturate(0.88)",
  },
  {
    src: "/images/showroom/162A0773.jpg",
    alt: "HDR Windows showroom — architectural window and door systems on display",
    caption: "Showroom Display",
    filter: "brightness(1.02) contrast(1.03) saturate(0.87)",
  },
  {
    src: "/images/showroom/162A0856.jpg",
    alt: "HDR Windows showroom — architectural window and door systems on display",
    caption: "Showroom Display",
    filter: "brightness(1.02) contrast(1.03) saturate(0.87)",
  },
  {
    src: "/images/showroom/162A2494.jpg",
    alt: "HDR Windows showroom — premium window and door specifications",
    caption: "Window & Door Systems",
    filter: "brightness(1.02) contrast(1.04) saturate(0.86)",
  },
  {
    src: "/images/showroom/162A2495.jpg",
    alt: "HDR Windows showroom — architectural glazing displays",
    caption: "Architectural Glazing",
    filter: "brightness(1.02) contrast(1.03) saturate(0.87)",
  },
  {
    src: "/images/showroom/162A2538.jpg",
    alt: "HDR Windows showroom interior — full-scale operating displays",
    caption: "Operating Displays",
    filter: "brightness(1.02) contrast(1.04) saturate(0.86)",
  },
  {
    src: "/images/showroom/162A2553.jpg",
    alt: "HDR Windows showroom — material and finish library",
    caption: "Material Library",
    filter: "brightness(1.03) contrast(1.03) saturate(0.87)",
  },
  {
    src: "/images/showroom/IMG_3784.jpg",
    alt: "HDR Windows showroom — premium architectural door and window displays",
    caption: "Showroom Interior",
    filter: "brightness(1.02) contrast(1.04) saturate(0.87)",
  },
];

export function ShowroomGallery() {
  return (
    <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
      {photos.map((photo, i) => (
        <AnimatedReveal key={photo.src} delay={i * 0.1}>
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
