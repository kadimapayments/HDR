import type { Metadata } from "next";
import Image from "next/image";
import { generatePageMetadata } from "@/lib/metadata";
import { PageHero } from "@/components/layout/PageHero";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Heading } from "@/components/ui/Heading";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { AnimatedReveal } from "@/components/shared/AnimatedReveal";
import { FinalCTA } from "@/components/home/FinalCTA";
import { INTERIOR_PARTNERS } from "@/lib/constants";

export const metadata: Metadata = generatePageMetadata({
  title: "Interiors — Doors & Hardware",
  description:
    "HDR specifies and supplies architectural interior doors from TruStile and the full Emtek hardware library. The natural counterpart to our window and door specifications.",
  path: "/interiors",
});

const interiorCategories = [
  {
    title: "Interior Doors",
    body: "Flush, MDF, glass, and stile-and-rail interior doors specified to match the architectural intent of the residence — paint-grade and stain-grade, with custom panel layouts, sticking profiles, and glass options.",
    points: [
      "TruStile architectural interior doors",
      "Custom sizes, panel layouts, and sticking profiles",
      "Pre-hung and slab options",
      "Coordinated finish to match exterior systems",
    ],
  },
  {
    title: "Door Hardware",
    body: "Emtek provides one of the deepest hardware libraries in the industry — passage, privacy, dummy, multi-point, and electronic locks — across modern, transitional, and traditional design vocabularies.",
    points: [
      "Knobs, levers, and pulls in dozens of finishes",
      "Multi-point hardware for tall and oversized doors",
      "Electronic and smart-lock options",
      "Coordinated bath, cabinet, and accessory lines",
    ],
  },
];

export default function InteriorsPage() {
  return (
    <>
      <PageHero
        title="Interiors"
        subtitle="Doors & Hardware"
        description="A complete residential package extends past the exterior envelope. We specify and supply architectural interior doors from TruStile and the full Emtek hardware library — coordinated to the same standard as our window and door work."
      />

      {/* Categories */}
      <Section>
        <Container>
          <div className="grid gap-12 md:grid-cols-2">
            {interiorCategories.map((cat, i) => (
              <AnimatedReveal key={cat.title} delay={i * 0.1}>
                <div>
                  <Heading level="h3">{cat.title}</Heading>
                  <p className="mt-4 text-sm leading-relaxed text-neutral-warm-600">
                    {cat.body}
                  </p>
                  <ul className="mt-6 space-y-2">
                    {cat.points.map((point) => (
                      <li
                        key={point}
                        className="flex items-start gap-3 text-sm text-neutral-warm-600"
                      >
                        <div className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-terracotta" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimatedReveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* Partners */}
      <Section className="bg-neutral-warm-100">
        <Container>
          <AnimatedReveal className="mb-12 text-center">
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-brand-terracotta">
              Partners
            </p>
            <Heading level="h2">Specified Interior Brands</Heading>
          </AnimatedReveal>

          <div className="grid gap-8 md:grid-cols-2">
            {INTERIOR_PARTNERS.map((p, i) => (
              <AnimatedReveal key={p.slug} delay={i * 0.1}>
                <div className="flex h-full flex-col border border-neutral-warm-200 bg-white p-8">
                  <div className="mb-6 flex h-16 items-center">
                    <Image
                      src={p.logo}
                      alt={`${p.name} logo`}
                      width={220}
                      height={64}
                      className="max-h-12 w-auto object-contain"
                    />
                  </div>
                  <Badge variant="terracotta">{p.category}</Badge>
                  <h3 className="mt-4 font-serif text-2xl font-semibold text-neutral-warm-900">
                    {p.name}
                  </h3>
                  <p className="mt-1 text-xs font-medium text-brand-brown">
                    {p.tagline}
                  </p>
                  <p className="mt-4 flex-1 text-sm leading-relaxed text-neutral-warm-500">
                    {p.description}
                  </p>
                </div>
              </AnimatedReveal>
            ))}
          </div>

          <AnimatedReveal className="mt-12 text-center">
            <Button href="/contact" variant="primary" size="lg">
              Specify Interiors with HDR
            </Button>
          </AnimatedReveal>
        </Container>
      </Section>

      <FinalCTA />
    </>
  );
}
