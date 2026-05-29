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
  title: "Interiors — Doors & Hardware",
  description:
    "HDR specifies and supplies architectural interior doors from TruStile and the full Emtek hardware library. The natural counterpart to our window and door specifications.",
  path: "/interiors",
});

const partners = [
  {
    name: "TruStile Doors",
    slug: "trustile",
    logo: "/images/interiors/trustile.webp" as string | null,
    logoHeight: "h-10",
    category: "Interior Doors",
    tagline: "Architectural Interior Doors",
    description:
      "TruStile builds the most refined interior doors in the industry — flush, MDF, glass, and stile-and-rail with custom architectural details. A Marvin company, TruStile is the natural complement to Marvin window and door specifications.",
    points: [
      "Flush, MDF, glass, and stile-and-rail configurations",
      "Custom sizes, panel layouts, and sticking profiles",
      "Pre-hung and slab options",
      "Paint-grade and stain-grade finishes coordinated to exterior systems",
    ],
  },
  {
    name: "Metrie El & El Wood Products",
    slug: "metrie",
    logo: "/images/interiors/metrie.svg" as string | null,
    logoHeight: "h-10",
    category: "Interior Doors",
    tagline: "Architectural Wood Doors & Millwork",
    description:
      "Metrie El & El produces premium architectural wood interior doors and millwork with an emphasis on quality craftsmanship and design flexibility. A trusted specification for projects requiring custom profiles, species, and coordinated moulding programs.",
    points: [
      "Architectural wood interior doors in a range of panel configurations",
      "Custom species, finishes, and sizing",
      "Coordinated moulding and casing profiles",
      "Paint-grade and stain-grade options",
    ],
  },
  {
    name: "AAW Inc Quality Wood Doors",
    slug: "aaw",
    logo: "/images/interiors/aaw.png" as string | null,
    logoHeight: "h-10",
    category: "Interior Doors",
    tagline: "Quality Wood Doors",
    description:
      "AAW Inc manufactures quality wood interior doors built for residential applications that demand reliable craftsmanship and consistent supply. A practical specification for projects requiring well-made wood doors across a range of styles.",
    points: [
      "Solid and engineered wood construction",
      "Custom sizing and panel layouts available",
      "Pre-hung and slab configurations",
      "Competitive lead times for production schedules",
    ],
  },
  {
    name: "American Building Supply",
    slug: "abs",
    logo: "/images/interiors/abs-new.jpg" as string | null,
    logoHeight: "h-14",
    category: "Interior Doors",
    tagline: "Premium Doors & Building Products",
    description:
      "American Building Supply offers a comprehensive catalog of premium interior doors and building products, covering a wide range of styles, materials, and custom configurations for residential and commercial applications.",
    points: [
      "Broad door catalog across styles and materials",
      "Custom sizing and configuration options",
      "Residential and commercial applications",
      "Reliable regional supply and distribution",
    ],
  },
  {
    name: "Emtek",
    slug: "emtek",
    logo: "/images/interiors/emtek.jpg" as string | null,
    logoHeight: "h-6",
    category: "Hardware",
    tagline: "Architectural Door Hardware",
    description:
      "Emtek manufactures the most comprehensive line of architectural door hardware in North America — knobs, levers, pulls, multi-points, and electronic locks across a wide range of finishes and design vocabularies.",
    points: [
      "Knobs, levers, and pulls in dozens of finishes",
      "Multi-point hardware for tall and oversized doors",
      "Electronic and smart-lock options",
      "Coordinated bath, cabinet, and accessory lines",
    ],
  },
];

// Interior Doors gallery — add up to 4 images
// Place files at: public/images/interiors/doors-1.jpg through doors-4.jpg
const doorImages: { src: string; alt: string }[] = [
  // { src: "/images/interiors/doors-1.jpg", alt: "Interior door example 1" },
  // { src: "/images/interiors/doors-2.jpg", alt: "Interior door example 2" },
  // { src: "/images/interiors/doors-3.jpg", alt: "Interior door example 3" },
  // { src: "/images/interiors/doors-4.jpg", alt: "Interior door example 4" },
];

// Hardware gallery — add up to 4 images
// Place files at: public/images/interiors/hardware-1.jpg through hardware-4.jpg
const hardwareImages: { src: string; alt: string }[] = [
  // { src: "/images/interiors/hardware-1.jpg", alt: "Hardware example 1" },
  // { src: "/images/interiors/hardware-2.jpg", alt: "Hardware example 2" },
  // { src: "/images/interiors/hardware-3.jpg", alt: "Hardware example 3" },
  // { src: "/images/interiors/hardware-4.jpg", alt: "Hardware example 4" },
];

const PLACEHOLDER_COUNT = 4;

export default function InteriorsPage() {
  return (
    <>
      <PageHero
        title="Interiors"
        subtitle="Doors & Hardware"
        description="A complete residential package extends past the exterior envelope. We specify and supply architectural interior doors from TruStile and the full Emtek hardware library — coordinated to the same standard as our window and door work."
      />

      {/* Partners */}
      <Section>
        <Container>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {partners.map((p, i) => (
              <AnimatedReveal key={p.slug} delay={i * 0.1}>
                <div className="flex h-full flex-col border border-neutral-warm-200 bg-white p-8">
                  <div className="mb-6 flex h-14 items-center">
                    {p.logo ? (
                      <div className={`relative w-44 ${p.logoHeight}`}>
                        <Image
                          src={p.logo}
                          alt={`${p.name} logo`}
                          fill
                          className="object-contain object-left"
                        />
                      </div>
                    ) : (
                      <span className="font-serif text-lg font-semibold text-neutral-warm-700">
                        {p.name}
                      </span>
                    )}
                  </div>
                  <p className="text-xs font-medium uppercase tracking-[0.15em] text-brand-terracotta">
                    {p.category}
                  </p>
                  <h3 className="mt-2 font-serif text-2xl font-semibold text-neutral-warm-900">
                    {p.name}
                  </h3>
                  <p className="mt-1 text-xs font-medium text-brand-brown">
                    {p.tagline}
                  </p>
                  <p className="mt-4 text-sm leading-relaxed text-neutral-warm-500">
                    {p.description}
                  </p>
                  <ul className="mt-6 space-y-2">
                    {p.points.map((point) => (
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

      {/* Photo Galleries */}
      <Section className="bg-neutral-warm-100">
        <Container>
          {/* Interior Doors Gallery */}
          <AnimatedReveal className="mb-10">
            <p className="mb-2 text-xs font-medium uppercase tracking-[0.2em] text-brand-terracotta">
              Gallery
            </p>
            <Heading level="h2">Interior Doors</Heading>
          </AnimatedReveal>

          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {Array.from({ length: PLACEHOLDER_COUNT }).map((_, i) => {
              const img = doorImages[i];
              return (
                <AnimatedReveal key={i} delay={i * 0.05}>
                  <div className="relative aspect-[3/4] overflow-hidden bg-neutral-warm-200">
                    {img ? (
                      <Image
                        src={img.src}
                        alt={img.alt}
                        fill
                        className="object-cover transition-transform duration-500 hover:scale-105"
                      />
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-xs uppercase tracking-widest text-neutral-warm-400">
                          Coming Soon
                        </span>
                      </div>
                    )}
                  </div>
                </AnimatedReveal>
              );
            })}
          </div>

          {/* Hardware Gallery */}
          <AnimatedReveal className="mb-10 mt-16">
            <Heading level="h2">Hardware</Heading>
          </AnimatedReveal>

          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {Array.from({ length: PLACEHOLDER_COUNT }).map((_, i) => {
              const img = hardwareImages[i];
              return (
                <AnimatedReveal key={i} delay={i * 0.05}>
                  <div className="relative aspect-[3/4] overflow-hidden bg-neutral-warm-200">
                    {img ? (
                      <Image
                        src={img.src}
                        alt={img.alt}
                        fill
                        className="object-cover transition-transform duration-500 hover:scale-105"
                      />
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-xs uppercase tracking-widest text-neutral-warm-400">
                          Coming Soon
                        </span>
                      </div>
                    )}
                  </div>
                </AnimatedReveal>
              );
            })}
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
