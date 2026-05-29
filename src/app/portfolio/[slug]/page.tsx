import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { generatePageMetadata } from "@/lib/metadata";
import { PageHero } from "@/components/layout/PageHero";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { AnimatedReveal } from "@/components/shared/AnimatedReveal";

const projects: Record<
  string,
  {
    title: string;
    neighborhood: string;
    type: string;
    manufacturers: string[];
    systems: string[];
    scope: string;
    description: string;
    year: number;
  }
> = {
  "1204-las-pulgas": {
    title: "Las Pulgas Residence",
    neighborhood: "Pacific Palisades",
    type: "New Construction",
    manufacturers: ["Fleetwood"],
    systems: ["Multi-Slide Doors", "Fixed Glass", "Casement Windows"],
    scope: "42 windows, 6 multi-slide door systems, 2 pivot entries",
    description:
      "A contemporary hillside residence requiring expansive glazing with uncompromised thermal performance. The project demanded careful coordination between multiple manufacturer systems to achieve the architect's vision of seamless indoor-outdoor living.",
    year: 2024,
  },
  "136-georgina": {
    title: "Villa Georgina",
    neighborhood: "Santa Monica",
    type: "Renovation",
    manufacturers: ["Euroline"],
    systems: ["Steel Windows", "Steel Doors"],
    scope: "28 steel windows, 4 steel door systems",
    description:
      "A Mediterranean-modern renovation requiring authentic steel window profiles with contemporary thermal performance. Euroline's thermally broken steel systems delivered the slender sightlines the design demanded.",
    year: 2025,
  },
};

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projects[slug];
  if (!project) return {};

  return generatePageMetadata({
    title: `${project.title} — ${project.neighborhood}`,
    description: project.description,
    path: `/portfolio/${slug}`,
  });
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = projects[slug];

  if (!project) notFound();

  return (
    <>
      <PageHero
        title={project.title}
        subtitle={project.neighborhood}
        description={project.description}
      />

      <Section>
        <Container>
          <div className="grid gap-16 lg:grid-cols-3">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <AnimatedReveal>
                {/* Gallery Placeholder */}
                <div className="grid gap-4">
                  <div className="relative aspect-[16/9] bg-neutral-warm-200">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-xs uppercase tracking-widest text-neutral-warm-400">
                        Main Project Photo
                      </span>
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-4">
                    {Array.from({ length: 3 }).map((_, i) => (
                      <div
                        key={i}
                        className="relative aspect-square bg-neutral-warm-200"
                      >
                        <div className="absolute inset-0 flex items-center justify-center">
                          <span className="text-[10px] uppercase tracking-widest text-neutral-warm-400">
                            {i + 2}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </AnimatedReveal>
            </div>

            {/* Sidebar */}
            <div>
              <AnimatedReveal delay={0.2}>
                <div className="space-y-8 border-l border-neutral-warm-200 pl-8">
                  <div>
                    <h3 className="mb-2 text-xs font-semibold uppercase tracking-[0.15em] text-brand-terracotta">
                      Location
                    </h3>
                    <p className="text-neutral-warm-700">{project.neighborhood}</p>
                  </div>

                  <div>
                    <h3 className="mb-2 text-xs font-semibold uppercase tracking-[0.15em] text-brand-terracotta">
                      Project Type
                    </h3>
                    <p className="text-neutral-warm-700">{project.type}</p>
                  </div>

                  <div>
                    <h3 className="mb-2 text-xs font-semibold uppercase tracking-[0.15em] text-brand-terracotta">
                      Year
                    </h3>
                    <p className="text-neutral-warm-700">{project.year}</p>
                  </div>

                  <div>
                    <h3 className="mb-3 text-xs font-semibold uppercase tracking-[0.15em] text-brand-terracotta">
                      Manufacturers
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {project.manufacturers.map((m) => (
                        <Badge key={m} variant="terracotta">
                          {m}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="mb-3 text-xs font-semibold uppercase tracking-[0.15em] text-brand-terracotta">
                      Systems
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {project.systems.map((s) => (
                        <Badge key={s} variant="outline">
                          {s}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="mb-2 text-xs font-semibold uppercase tracking-[0.15em] text-brand-terracotta">
                      Scope
                    </h3>
                    <p className="text-sm text-neutral-warm-600">
                      {project.scope}
                    </p>
                  </div>

                  <div className="pt-4">
                    <Button href="/contact" variant="primary" size="md" className="w-full">
                      Start a Similar Project
                    </Button>
                  </div>
                </div>
              </AnimatedReveal>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
