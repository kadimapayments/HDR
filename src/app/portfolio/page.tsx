import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/metadata";
import { PageHero } from "@/components/layout/PageHero";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Badge } from "@/components/ui/Badge";
import { AnimatedReveal } from "@/components/shared/AnimatedReveal";
import { FinalCTA } from "@/components/home/FinalCTA";
import Link from "next/link";

export const metadata: Metadata = generatePageMetadata({
  title: "Portfolio",
  description:
    "Explore HDR Windows' portfolio of luxury residential projects across Los Angeles — featuring Fleetwood, Loewen, Andersen, and more.",
  path: "/portfolio",
});

const projects = [
  {
    title: "Las Pulgas Residence",
    neighborhood: "Pacific Palisades",
    type: "New Construction",
    manufacturers: ["Fleetwood", "Western"],
    slug: "1204-las-pulgas",
  },
  {
    title: "Villa Georgina",
    neighborhood: "Santa Monica",
    type: "Renovation",
    manufacturers: ["Euroline"],
    slug: "136-georgina",
  },
  {
    title: "Foothill Modern",
    neighborhood: "Beverly Hills",
    type: "New Construction",
    manufacturers: ["Loewen", "Andersen"],
    slug: "723-foothill",
  },
  {
    title: "Oakdale Custom",
    neighborhood: "Encino",
    type: "Addition",
    manufacturers: ["All Weather"],
    slug: "5946-oakdale",
  },
  {
    title: "Fourth Street Townhomes",
    neighborhood: "Manhattan Beach",
    type: "New Construction",
    manufacturers: ["IWC", "Plygem"],
    slug: "3104-fourth-st",
  },
  {
    title: "Sumac Ridge Estate",
    neighborhood: "Malibu",
    type: "New Construction",
    manufacturers: ["Fleetwood"],
    slug: "3255-sumac-ridge",
  },
  {
    title: "Lubao Residence",
    neighborhood: "Tarzana",
    type: "New Construction",
    manufacturers: ["IWC"],
    slug: "5431-lubao",
  },
  {
    title: "Sunever Hillside",
    neighborhood: "Bel Air",
    type: "Renovation",
    manufacturers: ["IWC"],
    slug: "952-sunever",
  },
];

export default function PortfolioPage() {
  return (
    <>
      <PageHero
        title="Our Work"
        subtitle="Portfolio"
        description="A selection of luxury residential projects across Los Angeles, each with unique architectural requirements and custom solutions."
      />

      <Section>
        <Container>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, i) => (
              <AnimatedReveal key={project.slug} delay={i * 0.05}>
                <Link
                  href={`/portfolio/${project.slug}`}
                  className="group block overflow-hidden bg-white transition-shadow duration-300 hover:shadow-lg"
                >
                  <div className="relative aspect-[4/3] bg-neutral-warm-200">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-xs uppercase tracking-widest text-neutral-warm-400">
                        Project Photo
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="mb-3 flex flex-wrap gap-2">
                      {project.manufacturers.map((m) => (
                        <Badge key={m} variant="terracotta">
                          {m}
                        </Badge>
                      ))}
                      <Badge variant="outline">{project.type}</Badge>
                    </div>
                    <h3 className="font-serif text-lg font-semibold text-neutral-warm-900 transition-colors group-hover:text-brand-terracotta">
                      {project.title}
                    </h3>
                    <p className="mt-1 text-sm text-neutral-warm-500">
                      {project.neighborhood}
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
