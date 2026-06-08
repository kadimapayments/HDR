import type { Metadata } from "next";
import Image from "next/image";
import { generatePageMetadata } from "@/lib/metadata";
import { PageHero } from "@/components/layout/PageHero";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Heading } from "@/components/ui/Heading";
import { AnimatedReveal } from "@/components/shared/AnimatedReveal";
import { FinalCTA } from "@/components/home/FinalCTA";

export const metadata: Metadata = generatePageMetadata({
  title: "About HDR Windows",
  description:
    "Learn about Horizon Design & Renovation, Los Angeles's trusted partner in choosing the right luxury architectural windows and doors.",
  path: "/about",
});

const stats = [
  { value: "1,000+", label: "Projects Completed" },
  { value: "15+", label: "Premium Manufacturers" },
  { value: "36", label: "Years of Experience" },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="Who We Are"
        subtitle="About HDR"
        description="More than a window dealer: we guide product selection for luxury architectural projects across Los Angeles."
      />

      {/* Story */}
      <Section>
        <Container>
          <div className="grid gap-16 lg:grid-cols-2">
            <AnimatedReveal>
              <Heading level="h2">
                Built on Expertise, Driven by Precision
              </Heading>
              <div className="mt-8 space-y-6 text-neutral-warm-600 leading-relaxed">
                <p>
                  Horizon Design & Renovation was founded with a singular
                  focus: to bridge the gap between the world&apos;s finest
                  window and door manufacturers and the architects, builders,
                  and homeowners who demand the best.
                </p>
                <p>
                  We don&apos;t just sell windows. We consult on product selection,
                  navigate complex decisions, manage procurement and
                  lead times, and ensure every unit arrives and installs
                  correctly. Our team understands the technical demands of
                  modern architecture, from oversized structural openings to
                  coastal performance ratings to Title 24 compliance.
                </p>
                <p>
                  Based in Los Angeles, we serve the most discerning residential
                  projects in Beverly Hills, Pacific Palisades, Malibu, Bel Air,
                  Brentwood, and throughout Southern California.
                </p>
              </div>
            </AnimatedReveal>

            <AnimatedReveal delay={0.2}>
              <div className="relative aspect-[4/3] overflow-hidden bg-neutral-warm-200">
                <Image
                  src="/images/team/team.jpeg"
                  alt="The HDR Windows team"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                  style={{ objectPosition: "center 65%" }}
                />
              </div>
            </AnimatedReveal>
          </div>
        </Container>
      </Section>

      {/* Stats */}
      <Section className="bg-neutral-warm-100">
        <Container>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
            {stats.map((stat, i) => (
              <AnimatedReveal key={stat.label} delay={i * 0.1}>
                <div className="text-center">
                  <p className="font-serif text-4xl font-semibold text-brand-terracotta md:text-5xl">
                    {stat.value}
                  </p>
                  <p className="mt-2 text-sm text-neutral-warm-500">
                    {stat.label}
                  </p>
                </div>
              </AnimatedReveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* Approach */}
      <Section>
        <Container>
          <AnimatedReveal className="mx-auto max-w-3xl text-center">
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-brand-terracotta">
              Our Approach
            </p>
            <Heading level="h2">
              Architecture-First, Every Time
            </Heading>
            <p className="mt-6 text-neutral-warm-500 leading-relaxed">
              Architecture comes first; the product catalog comes second. By
              understanding the design intent, structural requirements, energy
              targets, and aesthetic vision, we recommend the right system from
              the right manufacturer, not the most expensive one.
            </p>
          </AnimatedReveal>

          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {[
              {
                step: "01",
                title: "Consult & Recommend",
                description:
                  "We review plans, discuss design intent, and recommend the optimal window and door systems for your project.",
              },
              {
                step: "02",
                title: "Source & Procure",
                description:
                  "We manage manufacturer relationships, pricing, lead times, and logistics to keep your project on track.",
              },
              {
                step: "03",
                title: "Deliver & Support",
                description:
                  "From delivery coordination to installation support and warranty management, we're with you through completion.",
              },
            ].map((item, i) => (
              <AnimatedReveal key={item.step} delay={i * 0.15}>
                <div className="border-t-2 border-brand-terracotta pt-8">
                  <span className="text-xs font-medium text-brand-terracotta">
                    {item.step}
                  </span>
                  <h3 className="mt-3 font-serif text-xl font-semibold text-neutral-warm-900">
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

      <FinalCTA />
    </>
  );
}
