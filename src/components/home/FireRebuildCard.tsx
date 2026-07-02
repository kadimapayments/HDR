"use client";

import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import Image from "next/image";
import { AnimatedReveal } from "@/components/shared/AnimatedReveal";
import { trackEvent } from "@/lib/analytics";

export function FireRebuildCard() {
  return (
    <Section className="pt-0">
      <Container>
        <AnimatedReveal>
          <div className="relative overflow-hidden bg-neutral-warm-950">
            <div className="grid items-stretch lg:grid-cols-2">
              {/* Content */}
              <div className="order-2 flex flex-col justify-center p-10 md:p-14 lg:order-1">
                <p className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-brand-terracotta">
                  Palisades, Eaton & Malibu Fires
                </p>
                <h2 className="font-serif text-3xl font-semibold text-white md:text-4xl">
                  Helping You Rebuild
                </h2>
                <p className="mt-6 text-neutral-warm-400 leading-relaxed">
                  We&apos;ve coordinated discounted manufacturer specials for
                  homeowners and rebuilders impacted by the CA wildfires.
                </p>

                <div className="mt-10 flex flex-wrap items-center gap-4">
                  <Button
                    href="/fire-rebuild"
                    variant="primary"
                    size="lg"
                    onClick={() =>
                      trackEvent("cta_click", {
                        label: "Learn About the Rebuild Program",
                        location: "home_fire_rebuild_card",
                      })
                    }
                  >
                    Learn About the Program
                  </Button>
                  <Button
                    href="/contact?source=fire-rebuild"
                    variant="outline"
                    size="lg"
                    className="border-neutral-warm-700 text-white hover:bg-white/5 hover:text-white"
                    onClick={() =>
                      trackEvent("cta_click", {
                        label: "Contact Us — Fire Rebuild",
                        location: "home_fire_rebuild_card",
                      })
                    }
                  >
                    Contact Us
                  </Button>
                </div>
              </div>

              {/* Image */}
              <div className="relative order-1 aspect-[16/10] lg:order-2 lg:aspect-auto">
                <Image
                  src="/images/fire-rebuild/hero.jpg"
                  alt="CA wildfire rebuild support from HDR Windows"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-neutral-warm-950/30 lg:hidden" />
              </div>
            </div>
          </div>
        </AnimatedReveal>
      </Container>
    </Section>
  );
}
