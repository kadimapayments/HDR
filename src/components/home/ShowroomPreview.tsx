"use client";

import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Heading } from "@/components/ui/Heading";
import { Button } from "@/components/ui/Button";
import Image from "next/image";
import { AnimatedReveal } from "@/components/shared/AnimatedReveal";

export function ShowroomPreview() {
  return (
    <Section>
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Image */}
          <AnimatedReveal>
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src="/images/showroom/showroom-preview.jpg"
                alt="HDR Windows showroom in Los Angeles"
                fill
                className="object-cover"
              />
            </div>
          </AnimatedReveal>

          {/* Content */}
          <AnimatedReveal delay={0.2}>
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-brand-terracotta">
              Visit Our Showroom
            </p>
            <Heading level="h2">
              Experience the Difference in Person
            </Heading>
            <p className="mt-6 text-neutral-warm-500 leading-relaxed">
              Our Los Angeles showroom features full-scale operating displays
              from the industry&apos;s leading manufacturers. Touch the
              hardware, operate the systems, and see the finishes — there&apos;s
              no substitute for hands-on experience.
            </p>

            <ul className="mt-8 space-y-4">
              {[
                "Full-scale operating displays",
                "Side-by-side manufacturer comparisons",
                "Material and finish samples",
                "Private consultation rooms",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 text-sm text-neutral-warm-600"
                >
                  <div className="flex h-5 w-5 shrink-0 items-center justify-center bg-brand-terracotta/10">
                    <svg
                      className="h-3 w-3 text-brand-terracotta"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  {item}
                </li>
              ))}
            </ul>

            <div className="mt-10">
              <Button href="/showroom" variant="primary" size="lg">
                Schedule a Visit
              </Button>
            </div>
          </AnimatedReveal>
        </div>
      </Container>
    </Section>
  );
}
