"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { Badge } from "@/components/ui/Badge";
import { AnimatedReveal } from "@/components/shared/AnimatedReveal";

const project = {
  title: "Bel Air Residence",
  neighborhood: "Los Angeles",
  type: "New Construction",
  manufacturers: ["Fleetwood"],
  image: "/images/portfolio/bel-air-residence.jpg",
  credit: "Nils Timm Visuals, Inc.",
};

export function PortfolioGrid() {
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const close = useCallback(() => setLightboxOpen(false), []);

  useEffect(() => {
    if (!lightboxOpen) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };

    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [lightboxOpen, close]);

  return (
    <>
      <div className="mx-auto grid max-w-3xl gap-6 sm:grid-cols-2">
        <AnimatedReveal>
          <button
            type="button"
            onClick={() => setLightboxOpen(true)}
            className="group relative block aspect-[4/3] w-full overflow-hidden bg-neutral-warm-200"
          >
            <Image
              src={project.image}
              alt={`${project.title} — ${project.neighborhood}`}
              fill
              sizes="(max-width: 640px) 100vw, 50vw"
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <span className="absolute bottom-2 right-2 bg-black/50 px-2 py-1 text-[10px] uppercase tracking-wide text-white">
              {project.credit}
            </span>
          </button>
          <div className="mt-3">
            <div className="mb-2 flex flex-wrap gap-2">
              {project.manufacturers.map((m) => (
                <Badge key={m} variant="terracotta">
                  {m}
                </Badge>
              ))}
              <Badge variant="outline">{project.type}</Badge>
            </div>
            <h3 className="font-serif text-lg font-semibold text-neutral-warm-900">
              {project.title}
            </h3>
            <p className="mt-1 text-sm text-neutral-warm-500">
              {project.neighborhood}
            </p>
          </div>
        </AnimatedReveal>

        <AnimatedReveal delay={0.05}>
          <div className="relative flex aspect-[4/3] w-full items-center justify-center border border-dashed border-neutral-warm-300 bg-neutral-warm-100">
            <span className="text-xs uppercase tracking-widest text-neutral-warm-400">
              Coming Soon
            </span>
          </div>
        </AnimatedReveal>
      </div>

      {lightboxOpen && (
        <div
          className="fixed inset-0 z-[100] flex flex-col bg-black/90 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          onClick={close}
        >
          <button
            type="button"
            onClick={close}
            aria-label="Close"
            className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          <div
            className="flex flex-1 flex-col items-center justify-center overflow-auto p-4 pt-16 sm:p-10"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative m-auto h-[75vh] w-full max-w-5xl">
              <Image
                src={project.image}
                alt={`${project.title} — ${project.neighborhood}`}
                fill
                sizes="100vw"
                className="object-contain"
                priority
              />
            </div>
            <p className="mt-4 text-center text-sm text-white/80">
              {project.title} · {project.manufacturers.join(", ")} ·
              Photography by {project.credit}
            </p>
          </div>
        </div>
      )}
    </>
  );
}
