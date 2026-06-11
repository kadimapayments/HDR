import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { generatePageMetadata } from "@/lib/metadata";
import { PageHero } from "@/components/layout/PageHero";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { AnimatedReveal } from "@/components/shared/AnimatedReveal";
import { FinalCTA } from "@/components/home/FinalCTA";
import { SYSTEMS } from "@/lib/constants";

export const metadata: Metadata = generatePageMetadata({
  title: "Window & Door Systems",
  description:
    "Explore architectural window and door systems: multi-slide doors, pivot doors, steel windows, aluminum systems, and more.",
  path: "/systems",
});

const systemImages: Record<string, string> = {
  "multi-slide-doors": "/images/systems/multi-slide-doors.jpg",
  "pivot-doors": "/images/systems/pivot-doors.jpg",
  "steel-windows": "/images/systems/steel-windows.jpg",
  "contemporary-aluminum": "/images/systems/contemporary-aluminum.jpg",
  "energy-efficient": "/images/systems/energy-efficient.jpg",
  "oversized-openings": "/images/systems/oversized-openings.jpg",
  "security-glass": "/images/showroom/162A2571.jpg",
  "automated-systems": "/images/systems/automated-systems.jpg",
  "bifold-doors": "/images/systems/folding-doors.jpg",
  "window-wall": "/images/systems/window-wall.jpg",
  "pocket-doors": "/images/systems/pocket-doors.jpg",
};

const systemImagePositions: Record<string, string> = {
  "pivot-doors": "object-right",
};

const systemDetails: Record<string, { description: string }> = {
  "multi-slide-doors": {
    description:
      "Expansive glass panels that stack or pocket away, creating seamless transitions between indoor and outdoor spaces.",
  },
  "pivot-doors": {
    description:
      "Oversized architectural entries that rotate on a central pivot point, creating dramatic first impressions.",
  },
  "steel-windows": {
    description:
      "Slender sightlines and industrial elegance with thermally broken steel profiles for modern and traditional architecture.",
  },
  "contemporary-aluminum": {
    description:
      "High-performance thermally broken aluminum window systems designed for clean-line contemporary architecture.",
  },
  "energy-efficient": {
    description:
      "Advanced glazing solutions that exceed California Title 24 requirements without compromising design intent.",
  },
  "oversized-openings": {
    description:
      "Engineered solutions for floor-to-ceiling and wall-to-wall glass installations requiring structural coordination.",
  },
  "bifold-doors": {
    description:
      "Multi-panel folding door systems that stack compactly to one or both sides, creating a wide-open clear opening.",
  },
  "security-glass": {
    description:
      "Laminated glazing that adds meaningful protection against forced entry, without compromising the architectural look of your windows and doors.",
  },
  "automated-systems": {
    description:
      "Smart home integration for windows and doors with motorized operation, home automation compatibility, and effortless control.",
  },
  "window-wall": {
    description:
      "Floor-to-ceiling glazing from slab to slab: maximum transparency, minimal framing, and the seamless glass facade of contemporary high-end residential architecture.",
  },
  "pocket-doors": {
    description:
      "Pocket door systems slide completely into the wall cavity when open, disappearing entirely and maximizing clear opening width without any visible panel stack.",
  },
};

export default function SystemsPage() {
  return (
    <>
      <PageHero
        title="Window & Door Systems"
        subtitle="Innovation"
        description="We match the system to the architecture, not just the brand. Every challenge demands the right combination of performance, aesthetics, and engineering."
      />

      <Section>
        <Container>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[...SYSTEMS]
              .sort((a, b) => a.category.localeCompare(b.category) || a.name.localeCompare(b.name))
              .map((system, i) => (
              <AnimatedReveal key={system.slug} delay={i * 0.05}>
                <Link
                  href={`/systems/${system.slug}`}
                  className="group flex h-full flex-col overflow-hidden bg-white transition-shadow duration-300 hover:shadow-lg"
                >
                  <div className="relative aspect-[16/10] bg-neutral-warm-200">
                    {systemImages[system.slug] ? (
                      <Image
                        src={systemImages[system.slug]}
                        alt={system.name}
                        fill
                        className={`object-cover transition-transform duration-500 group-hover:scale-105 ${systemImagePositions[system.slug] ?? ""}`}
                      />
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-xs uppercase tracking-widest text-neutral-warm-400">
                          {system.name}
                        </span>
                      </div>
                    )}
                  </div>
                  <div className="flex flex-1 flex-col p-8">
                    <span className="mb-2 text-xs font-medium uppercase tracking-wider text-brand-terracotta">
                      {system.category}
                    </span>
                    <h3 className="font-serif text-xl font-semibold text-neutral-warm-900 transition-colors group-hover:text-brand-terracotta">
                      {system.name}
                    </h3>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-neutral-warm-500">
                      {systemDetails[system.slug]?.description}
                    </p>
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
