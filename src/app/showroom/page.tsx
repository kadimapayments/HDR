import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/metadata";
import { PageHero } from "@/components/layout/PageHero";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Heading } from "@/components/ui/Heading";
import { Button } from "@/components/ui/Button";
import { AnimatedReveal } from "@/components/shared/AnimatedReveal";
import { FinalCTA } from "@/components/home/FinalCTA";
import { ShowroomGallery } from "@/components/showroom/ShowroomGallery";
import { COMPANY } from "@/lib/constants";

export const metadata: Metadata = generatePageMetadata({
  title: "Showroom",
  description:
    "Visit the HDR Windows showroom in Los Angeles. Experience full-scale operating displays from Fleetwood, Loewen, Andersen, and more.",
  path: "/showroom",
});

const features = [
  {
    title: "Full-Scale Operating Displays",
    description:
      "See and operate complete window and door systems, not just samples. Experience the hardware, the action, and the scale.",
  },
  {
    title: "Side-by-Side Comparisons",
    description:
      "Compare manufacturers and systems directly. Touch the finishes, feel the weight, and understand the differences.",
  },
  {
    title: "Material & Finish Library",
    description:
      "Browse our comprehensive collection of frame colors, wood species, hardware options, and glass types.",
  },
  {
    title: "Private Consultation Rooms",
    description:
      "Sit down with our product team to review plans, discuss options, and develop your project strategy.",
  },
];

export default function ShowroomPage() {
  return (
    <>
      <PageHero
        title="Visit Our Showroom"
        subtitle="West Los Angeles"
        description="There's no substitute for seeing, touching, and operating the systems that will define your home."
      />

      {/* Gallery */}
      <Section>
        <Container>
          <ShowroomGallery />
        </Container>
      </Section>

      {/* Features */}
      <Section className="bg-neutral-warm-100">
        <Container>
          <AnimatedReveal className="mb-16 text-center">
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-brand-terracotta">
              What to Expect
            </p>
            <Heading level="h2">
              A Showroom Built for Decision-Making
            </Heading>
          </AnimatedReveal>

          <div className="grid gap-8 md:grid-cols-2">
            {features.map((feature, i) => (
              <AnimatedReveal key={feature.title} delay={i * 0.1}>
                <div className="border-l-2 border-brand-terracotta pl-6">
                  <h3 className="font-serif text-lg font-semibold text-neutral-warm-900">
                    {feature.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-neutral-warm-500">
                    {feature.description}
                  </p>
                </div>
              </AnimatedReveal>
            ))}
          </div>

          <AnimatedReveal className="mt-16 text-center">
            <Button href="/showroom/schedule" variant="primary" size="lg">
              Schedule a Showroom Visit
            </Button>
          </AnimatedReveal>
        </Container>
      </Section>

      <FinalCTA />
    </>
  );
}
