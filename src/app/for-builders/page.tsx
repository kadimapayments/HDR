import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/metadata";
import { PageHero } from "@/components/layout/PageHero";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Heading } from "@/components/ui/Heading";
import { Button } from "@/components/ui/Button";
import { AnimatedReveal } from "@/components/shared/AnimatedReveal";
import { FinalCTA } from "@/components/home/FinalCTA";

export const metadata: Metadata = generatePageMetadata({
  title: "For Builders",
  description:
    "HDR Windows provides builders and general contractors with reliable supply, expert coordination, and installation support for luxury window and door projects.",
  path: "/for-builders",
});

const benefits = [
  {
    title: "Reliable Supply Chain",
    description:
      "We manage manufacturer relationships and production schedules to keep your project on track. No surprises, no delays.",
  },
  {
    title: "Accurate Takeoffs",
    description:
      "Detailed window and door schedules from architectural plans — verified against rough opening dimensions before ordering.",
  },
  {
    title: "Lead Time Management",
    description:
      "We track every order from submission through production to delivery, coordinating with your construction schedule.",
  },
  {
    title: "Delivery Coordination",
    description:
      "Staged delivery scheduling aligned with your framing and installation timeline. Secure storage coordination when needed.",
  },
  {
    title: "Installation Support",
    description:
      "On-site guidance, installation documentation, and direct manufacturer support when complex installations demand it.",
  },
  {
    title: "Warranty & Service",
    description:
      "Post-installation warranty management and service coordination. One point of contact for all manufacturer issues.",
  },
];

export default function ForBuildersPage() {
  return (
    <>
      <PageHero
        title="Reliable Partner for Builders"
        subtitle="For Builders & GCs"
        description="We keep your window and door supply chain running smoothly — from accurate takeoffs through delivery and installation support."
      />

      {/* Value Prop */}
      <Section>
        <Container>
          <AnimatedReveal className="mx-auto max-w-3xl text-center">
            <Heading level="h2">
              Your Project Stays on Schedule
            </Heading>
            <p className="mt-6 text-neutral-warm-500 leading-relaxed">
              On luxury residential projects, windows and doors are often the
              longest lead-time items and the most complex to coordinate. We
              take that burden off your plate — managing manufacturer timelines,
              verifying dimensions, staging deliveries, and supporting
              installation crews.
            </p>
          </AnimatedReveal>
        </Container>
      </Section>

      {/* Benefits Grid */}
      <Section className="bg-neutral-warm-100">
        <Container>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {benefits.map((benefit, i) => (
              <AnimatedReveal key={benefit.title} delay={i * 0.08}>
                <div className="h-full border border-neutral-warm-200 bg-white p-8">
                  <h3 className="font-serif text-lg font-semibold text-neutral-warm-900">
                    {benefit.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-neutral-warm-500">
                    {benefit.description}
                  </p>
                </div>
              </AnimatedReveal>
            ))}
          </div>

          <AnimatedReveal className="mt-16 text-center">
            <Button href="/contact" variant="primary" size="lg">
              Get a Project Quote
            </Button>
          </AnimatedReveal>
        </Container>
      </Section>

      <FinalCTA />
    </>
  );
}
