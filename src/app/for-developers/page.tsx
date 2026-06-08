import type { Metadata } from "next";
import Image from "next/image";
import { generatePageMetadata } from "@/lib/metadata";
import { PageHero } from "@/components/layout/PageHero";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Heading } from "@/components/ui/Heading";
import { Button } from "@/components/ui/Button";
import { AnimatedReveal } from "@/components/shared/AnimatedReveal";
import { FinalCTA } from "@/components/home/FinalCTA";

export const metadata: Metadata = generatePageMetadata({
  title: "For Developers",
  description:
    "HDR Windows partners with residential and mixed-use developers on multi-unit window and door programs: volume pricing, spec consistency, and coordinated delivery across every phase.",
  path: "/for-developers",
});

const steps = [
  {
    step: "01",
    title: "Design Review & Specification",
    description:
      "We review your plans and unit types, then develop a consistent window and door specification across the project, balancing design intent, energy performance, and cost targets.",
  },
  {
    step: "02",
    title: "Volume Pricing & Value Engineering",
    description:
      "With confirmed specifications, we engage our manufacturer partners for volume pricing programs. Where needed, we explore alternative systems that deliver the same aesthetic at a better margin.",
  },
  {
    step: "03",
    title: "Production Scheduling",
    description:
      "We coordinate with manufacturers to align production runs with your construction schedule: phased delivery, staged releases, and lead time tracking from day one.",
  },
  {
    step: "04",
    title: "Delivery, Installation & Warranty",
    description:
      "Coordinated deliveries across building phases, installation support for your crews, and centralized warranty management across all units and manufacturers.",
  },
];

const capabilities = [
  "Volume pricing across 9+ premium manufacturers",
  "Spec consistency across all unit types and buildings",
  "Value engineering without downgrading aesthetics",
  "Phase-based delivery coordination",
  "Title 24 energy compliance documentation",
  "Custom color and finish programs for branded developments",
  "Centralized post-installation warranty management",
];

export default function ForDevelopersPage() {
  return (
    <>
      <PageHero
        title="Scale Without Compromise"
        subtitle="For Developers"
        description="Multi-unit and mixed-use developments demand consistency, volume coordination, and value engineering, without sacrificing the luxury aesthetic your buyers expect."
      />

      {/* Value Prop */}
      <Section>
        <Container>
          <div className="grid gap-16 lg:grid-cols-2">
            <AnimatedReveal>
              <Heading level="h2">
                One Partner Across the Entire Development
              </Heading>
              <div className="mt-8 space-y-6 text-neutral-warm-600 leading-relaxed">
                <p>
                  Managing window and door procurement across dozens or hundreds
                  of units means coordinating manufacturers, lead times,
                  deliveries, and installation crews, all while keeping costs
                  in line and finishes consistent. We handle all of it.
                </p>
                <p>
                  We carry nine premium manufacturers and can develop a unified
                  specification across your project, or value-engineer specific
                  unit types, while maintaining a cohesive design language
                  throughout the development.
                </p>
              </div>
            </AnimatedReveal>

            <AnimatedReveal delay={0.2}>
              <div className="relative aspect-[4/3] overflow-hidden bg-neutral-warm-200">
                <Image
                  src="/images/projects/development.jpg"
                  alt="11961 Dorothy St — HDR Windows development project"
                  fill
                  className="object-cover"
                />
              </div>
            </AnimatedReveal>
          </div>
        </Container>
      </Section>

      {/* Process */}
      <Section className="bg-neutral-warm-100">
        <Container>
          <AnimatedReveal className="mb-16 text-center">
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-brand-terracotta">
              How We Work Together
            </p>
            <Heading level="h2">From Groundbreak to Closeout</Heading>
          </AnimatedReveal>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((item, i) => (
              <AnimatedReveal key={item.step} delay={i * 0.1}>
                <div className="border-t-2 border-brand-terracotta pt-6">
                  <span className="text-xs font-medium text-brand-terracotta">
                    {item.step}
                  </span>
                  <h3 className="mt-3 font-serif text-lg font-semibold text-neutral-warm-900">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-neutral-warm-500">
                    {item.description}
                  </p>
                </div>
              </AnimatedReveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* Capabilities */}
      <Section>
        <Container>
          <div className="grid gap-16 lg:grid-cols-2">
            <AnimatedReveal>
              <p className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-brand-terracotta">
                What We Offer
              </p>
              <Heading level="h2">Built for Multi-Unit Scale</Heading>
              <ul className="mt-8 space-y-4">
                {capabilities.map((item) => (
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
              <div className="mt-10 flex flex-wrap gap-4">
                <Button href="/submit-plans" variant="primary" size="lg">
                  Submit Plans
                </Button>
                <Button href="/contact" variant="outline" size="lg">
                  Get in Touch
                </Button>
              </div>
            </AnimatedReveal>

            <AnimatedReveal delay={0.2}>
              <div className="relative aspect-square overflow-hidden bg-neutral-warm-200">
                <Image
                  src="/images/projects/multi-unit.jpg"
                  alt="Multi-unit development project — HDR Windows"
                  fill
                  className="object-cover"
                />
              </div>
            </AnimatedReveal>
          </div>
        </Container>
      </Section>

      <FinalCTA />
    </>
  );
}
