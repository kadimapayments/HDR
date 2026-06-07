"use client";

import { Container } from "@/components/ui/Container";
import { Heading } from "@/components/ui/Heading";
import { Button } from "@/components/ui/Button";
import { AnimatedReveal } from "@/components/shared/AnimatedReveal";

export function FinalCTA() {
  return (
    <section className="relative bg-neutral-warm-950 py-28 md:py-36">
      <div className="absolute inset-0 opacity-5">
        <div
          className="h-full w-full"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <Container className="relative z-10">
        <AnimatedReveal className="mx-auto max-w-3xl text-center">
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-brand-terracotta">
            Start Your Project
          </p>
          <Heading level="h2" className="text-white">
            Let&apos;s Discuss Your Project
          </Heading>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-neutral-warm-400">
            Whether you&apos;re an architect specifying a new build, a builder
            sourcing materials, or a homeowner planning a renovation — we&apos;re
            here to help.
          </p>
          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <Button href="/contact" variant="primary" size="lg">
              Schedule a Consultation
            </Button>
            <Button
              href="/showroom/schedule"
              variant="outline"
              size="lg"
              className="border-neutral-warm-700 text-white hover:bg-white/5 hover:text-white"
            >
              Visit Our Showroom
            </Button>
          </div>
        </AnimatedReveal>
      </Container>
    </section>
  );
}
