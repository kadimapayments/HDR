import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { generatePageMetadata } from "@/lib/metadata";
import { PageHero } from "@/components/layout/PageHero";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Heading } from "@/components/ui/Heading";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { AnimatedReveal } from "@/components/shared/AnimatedReveal";
import { FinalCTA } from "@/components/home/FinalCTA";

const systemData: Record<
  string,
  {
    name: string;
    category: string;
    description: string;
    features: string[];
    bestFor: string[];
    manufacturers: { name: string; slug: string }[];
  }
> = {
  "multi-slide-doors": {
    name: "Multi-Slide Doors",
    category: "Doors",
    description:
      "Multi-slide door systems create expansive openings that blur the boundary between interior and exterior — the defining feature of contemporary California residential architecture.",
    features: [
      "Panel widths up to 5 feet, heights up to 12 feet",
      "Configurations from 2 to 12+ panels",
      "Pocket, stack-back, and bi-parting options",
      "Flush or raised sill profiles",
      "Thermally broken frames for energy performance",
      "Integral screen systems available",
    ],
    bestFor: [
      "Indoor-outdoor living rooms",
      "Pool and patio transitions",
      "Hillside homes with view corridors",
      "Great rooms and entertainment spaces",
      "Modern and contemporary architecture",
    ],
    manufacturers: [
      { name: "Fleetwood", slug: "fleetwood" },
      { name: "LaCantina", slug: "lacantina" },
      { name: "Andersen", slug: "andersen" },
    ],
  },
  "steel-windows": {
    name: "Steel Windows & Doors",
    category: "Windows",
    description:
      "Steel windows and doors deliver the thinnest sightlines in the industry — thermally broken profiles that combine authentic industrial aesthetics with modern energy performance.",
    features: [
      "Sightlines as narrow as 1.5 inches",
      "Thermally broken profiles for energy code compliance",
      "Fixed, casement, awning, and door configurations",
      "Hot-rolled steel construction",
      "Factory-applied finish options",
      "Historic and contemporary profile options",
    ],
    bestFor: [
      "Industrial and loft-inspired designs",
      "Transitional architecture",
      "Mediterranean and Spanish Colonial revivals",
      "Interior glass partitions and doors",
      "Projects requiring maximum transparency",
    ],
    manufacturers: [{ name: "Euroline", slug: "euroline" }],
  },
  "pivot-doors": {
    name: "Pivot Doors",
    category: "Doors",
    description:
      "Pivot doors rotate on a vertical axis, allowing for entry-statement scale that traditional hinges cannot support — an architectural moment that defines the entry of a modern luxury residence.",
    features: [
      "Heights up to 12 feet, widths up to 5 feet",
      "Concealed top-and-bottom pivot hardware",
      "Aluminum, steel, wood, and clad-wood options",
      "Soft-close and hold-open mechanisms",
      "Custom finishes and integrated handle pulls",
      "Glazed, solid, and mixed-material faces",
    ],
    bestFor: [
      "Statement entry doors",
      "Modern and contemporary architecture",
      "Oversized openings that exceed hinge limits",
      "Hospitality-influenced residential design",
      "Garden-to-interior transitions",
    ],
    manufacturers: [
      { name: "Fleetwood", slug: "fleetwood" },
      { name: "Euroline", slug: "euroline" },
    ],
  },
  "contemporary-aluminum": {
    name: "Contemporary Aluminum",
    category: "Windows",
    description:
      "Thermally broken aluminum is the workhorse of contemporary California residential — narrow sightlines, large panel sizes, excellent coastal durability, and full Title 24 compliance.",
    features: [
      "Thermally broken profiles for Title 24 compliance",
      "Sightlines as narrow as 2 inches",
      "Casement, awning, fixed, and tilt-turn options",
      "Wide custom finish library, including factory anodized",
      "High strength-to-weight ratio for large panels",
      "Excellent coastal and weather performance",
    ],
    bestFor: [
      "Modern and minimalist architecture",
      "Coastal and hillside residences",
      "Large fixed glazing and oversized operable panels",
      "Low-maintenance specifications",
      "Mixed-use and high-end multi-family",
    ],
    manufacturers: [
      { name: "Fleetwood", slug: "fleetwood" },
      { name: "Marvin", slug: "marvin" },
      { name: "Andersen", slug: "andersen" },
      { name: "All Weather", slug: "all-weather" },
    ],
  },
  "energy-efficient": {
    name: "Energy Efficient Systems",
    category: "Specialty",
    description:
      "California's Title 24 is among the strictest energy codes in the country — we specify high-performance glazing systems that meet and routinely exceed its requirements without compromising design intent.",
    features: [
      "U-factors as low as 0.20 with triple glazing",
      "SHGC tuning for solar orientation",
      "Argon and krypton gas-filled units",
      "Thermally broken aluminum, steel, and clad-wood",
      "Title 24 compliance documentation",
      "Energy Star and NFRC ratings on all systems",
    ],
    bestFor: [
      "Title 24 prescriptive and performance compliance paths",
      "Net-zero and Passive House projects",
      "High-altitude and desert climates",
      "Large glazed openings where heat gain is a concern",
      "LEED and Living Building Challenge certification targets",
    ],
    manufacturers: [
      { name: "Andersen", slug: "andersen" },
      { name: "Marvin", slug: "marvin" },
      { name: "All Weather", slug: "all-weather" },
      { name: "IWC", slug: "iwc" },
    ],
  },
  "oversized-openings": {
    name: "Oversized Openings",
    category: "Specialty",
    description:
      "When the design exceeds standard catalog limits, we specify and engineer truly oversized assemblies — single panels exceeding 100 sq ft, glass walls spanning 60+ feet, with full structural coordination.",
    features: [
      "Single operable panels up to 12 feet × 16 feet",
      "Opening glass wall runs of 60+ feet",
      "Structural coordination with steel and engineered headers",
      "Specialty glazing — laminated, tempered, oversized panes",
      "Concealed roller and pivot hardware engineered for scale",
      "Custom installation crews for oversized lifts",
    ],
    bestFor: [
      "Architect-led modern residences",
      "View corridors in hillside homes",
      "Great rooms and pavilion-style architecture",
      "Pool houses and outdoor living rooms",
      "Hospitality-influenced residential projects",
    ],
    manufacturers: [
      { name: "Fleetwood", slug: "fleetwood" },
      { name: "NanaWall", slug: "nanawall" },
      { name: "Euroline", slug: "euroline" },
    ],
  },
  "bifold-doors": {
    name: "Bifold Doors",
    category: "Doors",
    description:
      "Bifold systems fold and stack against the jamb without a pocket cavity — ideal for retrofits, tighter footprints, and projects where wall depth is constrained.",
    features: [
      "Panel widths up to 3.5 feet, heights up to 10 feet",
      "Configurations from 3 to 8+ panels",
      "Stack-out or stack-in options",
      "Concealed top-hung and bottom-rolling tracks",
      "Thermally broken aluminum and clad-wood options",
      "Integral screen systems available",
    ],
    bestFor: [
      "Retrofits without pocket cavity space",
      "Indoor-outdoor connections in tight footprints",
      "Kitchen pass-throughs to outdoor cooking areas",
      "Folding glass walls for hospitality-style residences",
      "Projects mixing folding and sliding systems",
    ],
    manufacturers: [
      { name: "Fleetwood", slug: "fleetwood" },
      { name: "NanaWall", slug: "nanawall" },
      { name: "LaCantina", slug: "lacantina" },
    ],
  },
  "automated-systems": {
    name: "Automated Systems",
    category: "Smart Home",
    description:
      "Motorized windows and doors integrate seamlessly with your smart home ecosystem — responding to schedules, sensors, and voice commands via Marvin's Connected Home platform and Windsor's automated systems.",
    features: [
      "Motorized operation via app, remote, or voice",
      "Marvin Connected Home platform integration",
      "Windsor Pinnacle automated gliding door systems",
      "Compatible with Apple Home, Google Home, and Amazon Alexa",
      "Lutron, Control4, Crestron, and Savant integration",
      "Programmable schedules and scene-based automations",
      "Sensor-driven operation — wind, rain, and occupancy",
      "Quiet, precision motors engineered for daily use",
    ],
    bestFor: [
      "Full smart home and connected home projects",
      "High-tech luxury residences",
      "Projects with Lutron or Control4 systems",
      "Indoor-outdoor living with automated control",
      "Homeowners prioritizing convenience and accessibility",
    ],
    manufacturers: [
      { name: "Marvin", slug: "marvin" },
      { name: "Windsor", slug: "windsor" },
    ],
  },
  "window-wall": {
    name: "Window Wall",
    category: "Windows",
    description:
      "Window wall systems span floor-to-ceiling from slab to slab, delivering a continuous glass surface with minimal framing — the defining glazing system of contemporary high-end residential architecture.",
    features: [
      "Floor-to-ceiling glass from slab to slab",
      "Minimal aluminum framing with thermally broken profiles",
      "Fixed, operable, and mixed-panel configurations",
      "Unitized and stick-built installation methods",
      "Custom sightline widths from 2 to 4 inches",
      "High-performance glazing for Title 24 compliance",
      "Interior and exterior flush conditions available",
      "Structural silicone and pressure-cap glazing options",
    ],
    bestFor: [
      "Contemporary residences prioritizing maximum transparency",
      "View corridors in hillside and coastal homes",
      "Great rooms and living spaces with high ceilings",
      "Full-floor master suites and primary living levels",
      "Projects requiring a curtain-wall aesthetic at residential scale",
    ],
    manufacturers: [
      { name: "Fleetwood", slug: "fleetwood" },
      { name: "Marvin", slug: "marvin" },
      { name: "All Weather", slug: "all-weather" },
    ],
  },
  "sliding-doors": {
    name: "Sliding Doors",
    category: "Doors",
    description:
      "Sliding doors are the most-specified opening system in California residential — clean operation, narrow sightlines, and large panel sizes at a lower cost than multi-slide or folding alternatives.",
    features: [
      "Panel widths up to 6 feet, heights up to 10 feet",
      "Single, double, and triple-track configurations",
      "Concealed bottom-rolling hardware",
      "Thermally broken aluminum, steel, and clad-wood options",
      "Soft-close and motorized options",
      "Flush sill profiles for ADA and aesthetic continuity",
    ],
    bestFor: [
      "Master bedroom and den exterior doors",
      "Secondary indoor-outdoor connections",
      "Projects balancing performance and cost",
      "Volume residential and multi-unit projects",
      "Hospitality-influenced suites",
    ],
    manufacturers: [
      { name: "Fleetwood", slug: "fleetwood" },
      { name: "Marvin", slug: "marvin" },
      { name: "Andersen", slug: "andersen" },
      { name: "LaCantina", slug: "lacantina" },
    ],
  },
};

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const system = systemData[slug];
  if (!system) return {};

  return generatePageMetadata({
    title: `${system.name} — Architectural Window & Door Systems`,
    description: system.description.slice(0, 155) + "...",
    path: `/systems/${slug}`,
  });
}

export default async function SystemPage({ params }: Props) {
  const { slug } = await params;
  const system = systemData[slug];

  if (!system) notFound();

  return (
    <>
      <PageHero
        title={system.name}
        subtitle={system.category}
        description={system.description}
      />

      <Section>
        <Container>
          <div className="grid gap-16 lg:grid-cols-3">
            <div className="lg:col-span-2 space-y-16">
              {/* Gallery */}
              <AnimatedReveal>
                <div className="grid gap-4 md:grid-cols-2">
                  {Array.from({ length: 2 }).map((_, i) => (
                    <div
                      key={i}
                      className="relative aspect-[4/3] bg-neutral-warm-200"
                    >
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-xs uppercase tracking-widest text-neutral-warm-400">
                          {system.name} Example {i + 1}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </AnimatedReveal>

              {/* Features */}
              <AnimatedReveal>
                <Heading level="h3">Key Features</Heading>
                <ul className="mt-6 grid gap-3 md:grid-cols-2">
                  {system.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-3 text-sm text-neutral-warm-600"
                    >
                      <div className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-terracotta" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </AnimatedReveal>

              {/* Best For */}
              <AnimatedReveal>
                <Heading level="h3">Ideal Applications</Heading>
                <ul className="mt-6 space-y-3">
                  {system.bestFor.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-3 text-sm text-neutral-warm-600"
                    >
                      <svg
                        className="h-4 w-4 shrink-0 text-accent-sage"
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
                      {item}
                    </li>
                  ))}
                </ul>
              </AnimatedReveal>
            </div>

            {/* Sidebar */}
            <div>
              <AnimatedReveal delay={0.2}>
                <div className="space-y-8 border-l border-neutral-warm-200 pl-8">
                  <div>
                    <h4 className="mb-2 text-xs font-semibold uppercase tracking-[0.15em] text-brand-terracotta">
                      Category
                    </h4>
                    <Badge variant="terracotta">{system.category}</Badge>
                  </div>

                  <div>
                    <h4 className="mb-3 text-xs font-semibold uppercase tracking-[0.15em] text-brand-terracotta">
                      Available From
                    </h4>
                    <div className="space-y-2">
                      {system.manufacturers.map((mfr) => (
                        <Link
                          key={mfr.slug}
                          href={`/manufacturers/${mfr.slug}`}
                          className="block text-sm font-medium text-neutral-warm-700 transition-colors hover:text-brand-terracotta"
                        >
                          {mfr.name} →
                        </Link>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4">
                    <Button
                      href="/contact"
                      variant="primary"
                      size="md"
                      className="w-full"
                    >
                      Explore for Your Project
                    </Button>
                  </div>
                </div>
              </AnimatedReveal>
            </div>
          </div>
        </Container>
      </Section>

      <FinalCTA />
    </>
  );
}
