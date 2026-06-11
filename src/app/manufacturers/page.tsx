import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { generatePageMetadata } from "@/lib/metadata";
import { PageHero } from "@/components/layout/PageHero";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Badge } from "@/components/ui/Badge";
import { AnimatedReveal } from "@/components/shared/AnimatedReveal";
import { FinalCTA } from "@/components/home/FinalCTA";
import { MANUFACTURERS } from "@/lib/constants";

const logoMetaBySlug = Object.fromEntries(
  MANUFACTURERS.map((m) => [
    m.slug,
    {
      logo: m.logo,
      scale: "logoScale" in m ? (m.logoScale as number) : 1,
    },
  ]),
) as Record<string, { logo: string; scale: number } | undefined>;

export const metadata: Metadata = generatePageMetadata({
  title: "Manufacturers",
  description:
    "HDR Windows is an authorized dealer for Fleetwood, Andersen, Marvin, Loewen, Euroline, LaCantina, and more. Explore our manufacturer partners.",
  path: "/manufacturers",
});

const LOGO_HEIGHT: Record<string, string> = {
  fleetwood: "h-20",
  andersen: "h-14",
  marvin: "h-14",
  loewen: "h-14",
  euroline: "h-14",
  plygem: "h-20",
  nanawall: "h-8",
};

const manufacturers = [
  // Alphabetical, All Weather / IWC / Ply Gem at bottom
  // Ultra-Premium
  {
    name: "Andersen",
    slug: "andersen",
    tagline: "Trusted Performance, Refined Design",
    tier: "Premium",
    materials: ["Aluminum-Clad", "Composite", "Fiberglass", "Vinyl-Clad"],
    description:
      "America's most recognized window brand with the E-Series and A-Series offering exceptional versatility for luxury residential projects.",
  },
  {
    name: "Euroline",
    slug: "euroline",
    tagline: "Authentic Steel, Modern Performance",
    tier: "Ultra-Premium",
    materials: ["Steel"],
    description:
      "Thermally broken steel window and door systems with authentic profiles. The definitive choice for steel-framed architecture.",
  },
  {
    name: "Fleetwood",
    slug: "fleetwood",
    tagline: "The Gold Standard in Aluminum",
    tier: "Ultra-Premium",
    materials: ["Aluminum"],
    description:
      "Industry-leading multi-slide and bi-fold door systems. Fleetwood is the go-to for architects designing expansive openings with minimal sightlines.",
  },
  {
    name: "LaCantina",
    slug: "lacantina",
    tagline: "Opening Walls for Living",
    tier: "Premium",
    materials: ["Aluminum", "Wood"],
    description:
      "Folding, sliding, and stacking door systems that transform walls into openings. Excellent value in the multi-panel category.",
  },
  {
    name: "Loewen",
    slug: "loewen",
    tagline: "Craftsmanship Without Compromise",
    tier: "Premium",
    materials: ["Aluminum-Clad", "Wood"],
    description:
      "Canadian-crafted windows and doors with exceptional wood quality and hardware. Ideal for projects demanding uncompromising craftsmanship.",
  },
  {
    name: "Marvin",
    slug: "marvin",
    tagline: "Modern Elegance in Wood & Aluminum",
    tier: "Premium",
    materials: ["Aluminum-Clad", "Fiberglass", "Wood"],
    description:
      "The Modern line delivers clean contemporary aesthetics with the warmth of natural wood interiors and durable aluminum exteriors.",
  },
  {
    name: "NanaWall",
    slug: "nanawall",
    tagline: "The Original Opening Glass Wall",
    tier: "Premium",
    materials: ["Aluminum", "Aluminum-Clad", "Composite", "Wood"],
    description:
      "The pioneer of the modern folding glass wall. NanaWall systems open entire walls with engineered precision: folding, sliding, frameless, and single-track configurations for every architectural intent.",
  },
  {
    name: "Windsor",
    slug: "windsor",
    tagline: "Quiet Craftsmanship in Wood & Clad",
    tier: "Premium",
    materials: ["Aluminum-Clad Wood", "Fiberglass", "Vinyl"],
    description:
      "Family-owned Iowa manufacturer with a strong design point of view. The Pinnacle line delivers premium aluminum-clad wood with refined sightlines, while Legend, Next Dimension, and Pioneer cover wood, fiberglass, and vinyl across price points.",
  },
  // Value
  {
    name: "All Weather",
    slug: "all-weather",
    tagline: "Reliable Vinyl & Aluminum Solutions",
    tier: "Value",
    materials: ["Aluminum", "Vinyl"],
    description:
      "Dependable window and door systems with strong energy performance. A trusted choice for projects balancing budget and quality.",
  },
  {
    name: "IWC",
    slug: "iwc",
    tagline: "Versatile Custom Solutions",
    tier: "Value",
    materials: ["Aluminum", "Vinyl"],
    description:
      "International Window Corporation delivers flexible configurations and reliable performance for diverse residential applications.",
  },
  {
    name: "Ply Gem",
    slug: "plygem",
    tagline: "Dependable Vinyl at Scale",
    tier: "Value",
    materials: ["Vinyl"],
    description:
      "Ply Gem manufactures dependable vinyl windows and doors with strong energy performance and broad availability. The right fit for ADUs, value-tier rooms, and projects where supply consistency and code compliance lead the brief.",
  },
];

export default function ManufacturersPage() {
  return (
    <>
      <PageHero
        title="Our Manufacturers"
        subtitle="From classic to contemporary"
        description="We carry the industry's most respected window and door manufacturers, each selected for their quality, performance, and architectural relevance."
      />

      <Section>
        <Container>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {manufacturers.map((m, i) => (
              <AnimatedReveal key={m.slug} delay={i * 0.05}>
                <Link
                  href={`/manufacturers/${m.slug}`}
                  className="group flex h-full flex-col border border-neutral-warm-200 bg-white p-8 transition-all duration-300 hover:border-brand-terracotta/30 hover:shadow-lg"
                >
                  <div className="mb-6 flex h-14 items-center">
                    {logoMetaBySlug[m.slug] ? (
                      <div className={`relative w-44 ${LOGO_HEIGHT[m.slug] ?? "h-10"}`}>
                        <Image
                          src={logoMetaBySlug[m.slug]!.logo}
                          alt={`${m.name} logo`}
                          fill
                          className="object-contain object-left"
                        />
                      </div>
                    ) : (
                      <span className="font-serif text-xl font-semibold uppercase tracking-wide text-neutral-warm-700">
                        {m.name}
                      </span>
                    )}
                  </div>
                  <div className="mb-4 flex items-center justify-between">
                    <Badge variant="terracotta">{m.tier}</Badge>
                  </div>
                  <h3 className="font-serif text-2xl font-semibold text-neutral-warm-900 transition-colors group-hover:text-brand-terracotta">
                    {m.name}
                  </h3>
                  <p className="mt-1 text-xs font-medium text-brand-brown">
                    {m.tagline}
                  </p>
                  <p className="mt-4 flex-1 text-sm leading-relaxed text-neutral-warm-500">
                    {m.description}
                  </p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {m.materials.map((mat) => (
                      <Badge key={mat} variant="outline">
                        {mat}
                      </Badge>
                    ))}
                  </div>
                </Link>
              </AnimatedReveal>
            ))}
          </div>
        </Container>
      </Section>

      <FinalCTA />
    </>
  );
}
