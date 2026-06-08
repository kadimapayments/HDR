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
  title: "For Architects",
  description:
    "HDR Windows is the specification partner architects trust for luxury window and door systems in Los Angeles.",
  path: "/for-architects",
});

const steps = [
  {
    step: "01",
    title: "Review Plans & Design Intent",
    description:
      "Share your drawings and we'll identify the optimal window and door systems for your design, considering aesthetics, performance targets, and budget parameters.",
  },
  {
    step: "02",
    title: "System Recommendation & Specification",
    description:
      "We provide detailed product recommendations with manufacturer cut sheets, frame profiles, glass options, and energy performance data for your specification documents.",
  },
  {
    step: "03",
    title: "Pricing & Procurement",
    description:
      "Once specifications are finalized, we deliver comprehensive pricing and manage the procurement process, including lead time coordination and production scheduling.",
  },
  {
    step: "04",
    title: "Delivery & Installation Support",
    description:
      "We coordinate delivery logistics, provide installation guidelines, and offer on-site support to ensure every unit is installed to manufacturer standards.",
  },
];

const capabilities = [
  "Multi-manufacturer specification across 9+ premium brands",
  "Detailed takeoffs from architectural drawings",
  "Energy performance analysis for Title 24 compliance",
  "Custom configuration and engineering support",
  "Showroom consultations with your clients",
  "Project coordination with GCs and installation crews",
  "Warranty management and post-installation support",
];

export default function ForArchitectsPage() {
  return (
    <>
      <PageHero
        title="Your Specification Partner"
        subtitle="For Architects"
        description="We don't just sell windows. We help you specify, source, and deliver the right systems for your most demanding projects."
      />

      {/* Value Prop */}
      <Section>
        <Container>
          <div className="grid gap-16 lg:grid-cols-2">
            <AnimatedReveal>
              <Heading level="h2">
                We Speak Your Language
              </Heading>
              <div className="mt-8 space-y-6 text-neutral-warm-600 leading-relaxed">
                <p>
                  As architects, you need a window and door partner who
                  understands design intent, not just product catalogs. Our
                  team works from your drawings, understands your aesthetic
                  vision, and recommends systems that deliver on both
                  performance and design.
                </p>
                <p>
                  We carry nine premium manufacturers and can specify across
                  brands to find the optimal solution for each opening in your
                  project. One manufacturer rarely does everything best, and we
                  have the expertise to navigate those decisions with you.
                </p>
              </div>
            </AnimatedReveal>

            <AnimatedReveal delay={0.2}>
              <div className="relative aspect-[4/3] overflow-hidden bg-neutral-warm-200">
                <Image
                  src="/images/showroom/162A0856.jpg"
                  alt="HDR Windows showroom — architect collaboration and product specification"
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
            <Heading level="h2">From Concept to Completion</Heading>
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
              <Heading level="h2">Full-Service Capability</Heading>
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
                  Schedule a Consultation
                </Button>
              </div>
            </AnimatedReveal>

            <AnimatedReveal delay={0.2}>
              <div className="relative aspect-square overflow-hidden bg-neutral-warm-200">
                <Image
                  src="/images/showroom/162A0730.jpg"
                  alt="HDR Windows showroom — reviewing plans and specifications"
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
