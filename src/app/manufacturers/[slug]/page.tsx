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

const data: Record<
  string,
  {
    name: string;
    tagline: string;
    tier: string;
    leadTime: string;
    materials: string[];
    overview: string;
    pros: string[];
    cons: string[];
    systems: { name: string; slug: string }[];
    bestFor: string[];
  }
> = {
  fleetwood: {
    name: "Fleetwood Windows & Doors",
    tagline: "The Gold Standard in Aluminum",
    tier: "Ultra-Premium",
    leadTime: "12–16 weeks",
    materials: ["Thermally Broken Aluminum"],
    overview:
      "Fleetwood is widely regarded as the industry leader in high-performance aluminum window and door systems. Based in Southern California, they manufacture some of the largest operable glass panels available, making them the default choice for architects designing expansive indoor-outdoor living spaces. Their multi-slide systems are legendary for smooth operation, minimal sightlines, and engineering precision.",
    pros: [
      "Industry-leading multi-slide door engineering",
      "Massive panel sizes with slim sightlines",
      "Local SoCal manufacturing — faster lead times",
      "Extensive custom configuration options",
      "Strong coastal performance ratings",
      "Excellent architect and builder support",
    ],
    cons: [
      "Premium pricing — highest in category",
      "Aluminum-only (no wood interior option)",
      "Complex configurations require experienced installers",
    ],
    systems: [
      { name: "Multi-Slide Doors", slug: "multi-slide-doors" },
      { name: "Bifold Doors", slug: "bifold-doors" },
      { name: "Sliding Doors", slug: "sliding-doors" },
      { name: "Contemporary Aluminum", slug: "contemporary-aluminum" },
    ],
    bestFor: [
      "Modern and contemporary architecture",
      "Oversized opening requirements",
      "Indoor-outdoor living design",
      "Coastal and hillside projects",
      "Architect-driven specifications",
    ],
  },
  andersen: {
    name: "Andersen Windows",
    tagline: "Trusted Performance, Refined Design",
    tier: "Premium",
    leadTime: "8–12 weeks",
    materials: ["Wood", "Fibrex Composite", "Aluminum-Clad Wood"],
    overview:
      "Andersen is America's most recognized window manufacturer, with a 120-year track record. For architectural residential work, the E-Series (formerly Eagle) is fully custom aluminum-clad wood — virtually any size, shape, color, or hardware finish — while the A-Series delivers high-performance exteriors with traditional wood interiors. Andersen offers reliable nationwide service, strong warranties, and short lead times relative to ultra-premium peers.",
    pros: [
      "E-Series is fully custom — sizes, shapes, colors, finishes",
      "Reliable lead times and nationwide service network",
      "Excellent warranty and post-installation support",
      "Strong energy-performance options (Title 24 compliant)",
      "Wide hardware and grille selection",
    ],
    cons: [
      "Sightlines are heavier than aluminum-only competitors",
      "Less engineered for oversized operable panels than Fleetwood",
      "Premium custom options can approach ultra-premium pricing",
    ],
    systems: [
      { name: "Contemporary Aluminum", slug: "contemporary-aluminum" },
      { name: "Energy Efficient Systems", slug: "energy-efficient" },
      { name: "Sliding Doors", slug: "sliding-doors" },
    ],
    bestFor: [
      "Traditional and transitional architecture",
      "Projects requiring custom shapes and sizes",
      "Residences where lead time matters",
      "Title 24 compliance with classic aesthetics",
    ],
  },
  marvin: {
    name: "Marvin Windows & Doors",
    tagline: "Modern Elegance in Wood & Aluminum",
    tier: "Premium",
    leadTime: "10–14 weeks",
    materials: ["Wood", "Aluminum-Clad Wood", "Fiberglass"],
    overview:
      "Marvin is a fourth-generation, family-owned manufacturer based in Minnesota with a strong design point of view. The Modern line delivers clean contemporary sightlines with the warmth of natural wood interiors. The Signature line offers the broadest customization for traditional and transitional homes. Marvin balances design ambition, performance, and supply reliability better than nearly anyone in their tier.",
    pros: [
      "Modern line delivers narrow sightlines with wood interiors",
      "Excellent fit and finish, well-engineered hardware",
      "Multiple product lines covering modern through traditional",
      "Strong dealer support and design resources",
      "Reliable lead times and inventory",
    ],
    cons: [
      "Multi-slide door panel sizes smaller than Fleetwood",
      "Aluminum-clad finishes are factory-only — limited field touch-up",
      "Premium pricing vs. mainstream brands",
    ],
    systems: [
      { name: "Contemporary Aluminum", slug: "contemporary-aluminum" },
      { name: "Multi-Slide Doors", slug: "multi-slide-doors" },
      { name: "Sliding Doors", slug: "sliding-doors" },
    ],
    bestFor: [
      "Modern and transitional design",
      "Residences valuing wood interior with clean exteriors",
      "Projects spanning multiple architectural styles",
      "Builders needing reliable supply",
    ],
  },
  nanawall: {
    name: "NanaWall Systems",
    tagline: "The Original Opening Glass Wall",
    tier: "Ultra-Premium",
    leadTime: "12–18 weeks",
    materials: ["Aluminum", "Wood", "Aluminum-Clad Wood", "Composite"],
    overview:
      "NanaWall invented the modern folding glass wall in 1986 and has remained the category leader through more than three decades of engineering refinement. Headquartered in Corte Madera, California, NanaWall offers the broadest portfolio of opening glass walls in the industry — folding, single-track sliding, multi-slide, frameless, and pivoting systems — with options across aluminum, wood, and aluminum-clad wood. For projects where the opening is the architectural moment, NanaWall is the most-specified system in the U.S.",
    pros: [
      "Inventor and category leader for folding glass walls",
      "Broadest portfolio: folding, sliding, frameless, pivoting",
      "Industry-leading air, water, and structural test ratings",
      "Single-track sliding (HSW) and frameless (cero) options unique to NanaWall",
      "Strong coastal and high-wind performance",
      "Exceptional engineering documentation for architects",
    ],
    cons: [
      "Premium pricing — generally above category average",
      "Lead times longer than aluminum-only alternatives",
      "Complex configurations require certified installers",
    ],
    systems: [
      { name: "Bifold Doors", slug: "bifold-doors" },
      { name: "Multi-Slide Doors", slug: "multi-slide-doors" },
      { name: "Sliding Doors", slug: "sliding-doors" },
      { name: "Oversized Openings", slug: "oversized-openings" },
    ],
    bestFor: [
      "Folding glass walls and indoor-outdoor living",
      "Frameless / minimalist contemporary design",
      "Coastal residences with stringent performance requirements",
      "Architect-led specifications where engineering matters",
      "Hospitality and high-end commercial overlap",
    ],
  },
  euroline: {
    name: "Euroline Steel Windows & Doors",
    tagline: "Authentic Steel, Modern Performance",
    tier: "Luxury",
    leadTime: "16–22 weeks",
    materials: ["Thermally Broken Steel"],
    overview:
      "Euroline brings authentic European steel windows and doors to the U.S. market with thermally broken profiles that deliver the slim sightlines of traditional steel without the thermal penalty. Their systems are the definitive choice for steel-framed contemporary architecture, classic industrial conversions, and high-end transitional homes that demand the unique character of true steel.",
    pros: [
      "Authentic narrow steel sightlines",
      "Thermally broken profiles meet Title 24",
      "Distinctive aesthetic unmatched by aluminum",
      "Excellent strength-to-sightline ratio",
      "Custom finishes including factory patinas",
    ],
    cons: [
      "Highest material cost in the category",
      "Long lead times — manufactured in Europe",
      "Specialized installation expertise required",
      "Heavier panels require structural coordination",
    ],
    systems: [
      { name: "Steel Windows & Doors", slug: "steel-windows" },
      { name: "Pivot Doors", slug: "pivot-doors" },
    ],
    bestFor: [
      "Steel-framed contemporary architecture",
      "Industrial loft and warehouse conversions",
      "Classic 1920s-style estate restorations",
      "Pivot entry doors with dramatic scale",
    ],
  },
  lacantina: {
    name: "LaCantina Doors",
    tagline: "Opening Walls for Living",
    tier: "Premium",
    leadTime: "8–12 weeks",
    materials: ["Aluminum", "Wood", "Aluminum-Clad Wood", "Vinyl"],
    overview:
      "LaCantina specializes exclusively in folding, sliding, and stacking door systems. Based in Oceanside, California, they have become a go-to specification for opening walls where budget matters but design integrity cannot be compromised. Their aluminum systems balance performance and price, while wood and aluminum-clad options serve projects where material warmth is required.",
    pros: [
      "Strong value across folding and multi-slide categories",
      "Local Southern California manufacturing",
      "Multiple material options at multiple price points",
      "Reliable lead times relative to ultra-premium peers",
      "Good performance for the cost",
    ],
    cons: [
      "Sightlines slightly heavier than Fleetwood or NanaWall",
      "Maximum panel sizes more limited than premium peers",
      "Hardware finish options narrower than ultra-premium tier",
    ],
    systems: [
      { name: "Bifold Doors", slug: "bifold-doors" },
      { name: "Multi-Slide Doors", slug: "multi-slide-doors" },
      { name: "Sliding Doors", slug: "sliding-doors" },
    ],
    bestFor: [
      "Indoor-outdoor living on a controlled budget",
      "Builder-spec luxury homes",
      "Projects mixing folding and sliding systems",
      "Schedules that cannot accommodate ultra-premium lead times",
    ],
  },
  "all-weather": {
    name: "All Weather Architectural Aluminum",
    tagline: "Reliable Vinyl & Aluminum Solutions",
    tier: "Premium",
    leadTime: "8–12 weeks",
    materials: ["Aluminum", "Vinyl"],
    overview:
      "All Weather Architectural Aluminum manufactures dependable window and door systems for residential and light commercial projects in California. With strong Title 24 performance and reliable supply, All Weather is a sensible specification for projects that need solid energy compliance, clean aesthetics, and predictable scheduling without specifying an ultra-premium brand.",
    pros: [
      "Strong Title 24 energy performance",
      "Reliable Southern California supply chain",
      "Competitive pricing for the performance level",
      "Good for mixed-product specifications",
    ],
    cons: [
      "Less architectural cachet than premium peers",
      "Narrower customization library",
      "Smaller maximum panel sizes",
    ],
    systems: [
      { name: "Contemporary Aluminum", slug: "contemporary-aluminum" },
      { name: "Energy Efficient Systems", slug: "energy-efficient" },
      { name: "Sliding Doors", slug: "sliding-doors" },
    ],
    bestFor: [
      "Production residential where compliance matters",
      "Mixed-budget specifications",
      "Projects needing quick, reliable delivery",
    ],
  },
  windsor: {
    name: "Windsor Windows & Doors",
    tagline: "Quiet Craftsmanship in Wood & Clad",
    tier: "Premium",
    leadTime: "8–12 weeks",
    materials: ["Wood", "Aluminum-Clad Wood", "Fiberglass", "Vinyl"],
    overview:
      "Windsor is a family-owned Iowa manufacturer with a long track record in residential window and door systems. Their Pinnacle line is the architectural anchor — premium aluminum-clad wood with refined sightlines, deep custom options, and excellent fit and finish. Legend (wood), Next Dimension (fiberglass), and Pioneer (vinyl) extend the catalog across price points, making Windsor a useful mixed-tier specification partner for projects that need both architectural moments and sensible value-tier rooms in a single coordinated package.",
    pros: [
      "Pinnacle delivers premium clad-wood at strong value",
      "Deep custom sizing and configuration library",
      "Multiple product lines across price points (Pinnacle / Legend / Next Dimension / Pioneer)",
      "Reliable Midwestern manufacturing and lead times",
      "Strong wood interior aesthetics",
    ],
    cons: [
      "Maximum operable panel sizes more limited than Fleetwood / Marvin Modern",
      "Less brand recognition in California luxury market than peers",
      "Dealer network thinner west of the Rockies — coordination matters",
    ],
    systems: [
      { name: "Contemporary Aluminum", slug: "contemporary-aluminum" },
      { name: "Energy Efficient Systems", slug: "energy-efficient" },
      { name: "Sliding Doors", slug: "sliding-doors" },
    ],
    bestFor: [
      "Transitional and traditional architecture",
      "Mixed-tier specifications spanning architectural and value rooms",
      "Residences valuing wood interiors at premium-tier pricing",
      "Builder-spec luxury homes",
      "Projects where lead-time certainty matters",
    ],
  },
  plygem: {
    name: "Plygem",
    tagline: "Dependable Vinyl at Scale",
    tier: "Value",
    leadTime: "4–8 weeks",
    materials: ["Vinyl"],
    overview:
      "Plygem is one of the largest vinyl window and door manufacturers in North America, with a long track record of dependable energy performance, broad availability, and competitive pricing. For projects where vinyl is the right material — accessory dwelling units, value-tier rooms, secondary residences, and developments where Title 24 compliance and supply consistency lead the brief — Plygem is the workhorse specification.",
    pros: [
      "Strong Title 24 energy performance across the catalog",
      "Short, reliable lead times — domestic manufacturing at scale",
      "Competitive pricing for the performance level",
      "Wide product breadth (windows + doors)",
      "Good warranty support",
    ],
    cons: [
      "Vinyl-only — limited architectural finish options",
      "Smaller maximum operable panel sizes than premium peers",
      "Not specified for primary spaces in luxury residential",
    ],
    systems: [
      { name: "Energy Efficient Systems", slug: "energy-efficient" },
      { name: "Sliding Doors", slug: "sliding-doors" },
    ],
    bestFor: [
      "Accessory dwelling units (ADUs)",
      "Value-tier residential and rental properties",
      "Secondary spaces in mixed-tier specifications",
      "Schedule-driven projects",
      "Title 24 compliance at scale",
    ],
  },
  iwc: {
    name: "IWC — International Window Corporation",
    tagline: "Versatile Custom Solutions",
    tier: "Value",
    leadTime: "6–10 weeks",
    materials: ["Vinyl", "Aluminum"],
    overview:
      "IWC is a California-based manufacturer with a long track record in residential window and door systems. Their flexibility and short lead times make them a useful option for accessory dwellings, value-tier rooms, and projects mixing premium specifications in primary spaces with capable workhorses in secondary ones.",
    pros: [
      "Short lead times — local California manufacturing",
      "Flexible configurations and sizing",
      "Strong value-tier pricing",
      "Reliable Title 24 options",
    ],
    cons: [
      "Less architectural finish library",
      "Smaller maximum sizes than premium peers",
      "Best paired with premium brands in primary spaces",
    ],
    systems: [
      { name: "Contemporary Aluminum", slug: "contemporary-aluminum" },
      { name: "Energy Efficient Systems", slug: "energy-efficient" },
      { name: "Sliding Doors", slug: "sliding-doors" },
    ],
    bestFor: [
      "Accessory dwelling units (ADUs)",
      "Secondary spaces in mixed-tier specifications",
      "Schedule-driven projects",
      "Value-tier residential",
    ],
  },
  loewen: {
    name: "Loewen Windows & Doors",
    tagline: "Craftsmanship Without Compromise",
    tier: "Ultra-Premium",
    leadTime: "14–20 weeks",
    materials: ["Douglas Fir", "Mahogany", "Aluminum-Clad"],
    overview:
      "Loewen is a Canadian manufacturer known for exceptional wood quality, sophisticated hardware, and meticulous craftsmanship. Their windows and doors are built from premium Douglas Fir and optional Mahogany, with aluminum-clad exteriors for durability. Loewen is the choice for projects where material authenticity and artisan-level quality are non-negotiable.",
    pros: [
      "Exceptional wood quality (Douglas Fir standard)",
      "Premium hardware and operation",
      "Highly customizable profiles and configurations",
      "Beautiful interior wood aesthetics",
      "Strong thermal performance",
    ],
    cons: [
      "Longer lead times (Canadian manufacturing)",
      "Higher price point",
      "Wood requires periodic maintenance",
    ],
    systems: [
      { name: "Contemporary Aluminum", slug: "contemporary-aluminum" },
      { name: "Sliding Doors", slug: "sliding-doors" },
    ],
    bestFor: [
      "Luxury homes demanding natural materials",
      "Transitional and contemporary-traditional designs",
      "Projects prioritizing interior aesthetics",
      "High-end custom residences",
    ],
  },
};

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const manufacturer = data[slug];
  if (!manufacturer) return {};

  return generatePageMetadata({
    title: `${manufacturer.name} — Authorized Dealer in Los Angeles`,
    description: `HDR Windows is an authorized ${manufacturer.name} dealer in Los Angeles. ${manufacturer.overview.slice(0, 120)}...`,
    path: `/manufacturers/${slug}`,
  });
}

export default async function ManufacturerPage({ params }: Props) {
  const { slug } = await params;
  const m = data[slug];

  if (!m) notFound();

  return (
    <>
      <PageHero title={m.name} subtitle={m.tagline} description={m.overview} />

      {/* Key Details */}
      <Section>
        <Container>
          <div className="grid gap-16 lg:grid-cols-3">
            <div className="lg:col-span-2 space-y-16">
              {/* Pros & Cons */}
              <AnimatedReveal>
                <div className="grid gap-8 md:grid-cols-2">
                  <div>
                    <Heading level="h3" serif={false}>
                      Advantages
                    </Heading>
                    <ul className="mt-4 space-y-3">
                      {m.pros.map((pro) => (
                        <li
                          key={pro}
                          className="flex items-start gap-3 text-sm text-neutral-warm-600"
                        >
                          <svg
                            className="mt-0.5 h-4 w-4 shrink-0 text-accent-sage"
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
                          {pro}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <Heading level="h3" serif={false}>
                      Considerations
                    </Heading>
                    <ul className="mt-4 space-y-3">
                      {m.cons.map((con) => (
                        <li
                          key={con}
                          className="flex items-start gap-3 text-sm text-neutral-warm-600"
                        >
                          <svg
                            className="mt-0.5 h-4 w-4 shrink-0 text-neutral-warm-400"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M12 9v2m0 4h.01"
                            />
                          </svg>
                          {con}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </AnimatedReveal>

              {/* Best For */}
              <AnimatedReveal>
                <Heading level="h3">Best For</Heading>
                <ul className="mt-4 space-y-3">
                  {m.bestFor.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-3 text-sm text-neutral-warm-600"
                    >
                      <div className="h-1.5 w-1.5 rounded-full bg-brand-terracotta" />
                      {item}
                    </li>
                  ))}
                </ul>
              </AnimatedReveal>

              {/* Available Systems */}
              <AnimatedReveal>
                <Heading level="h3">Available Systems</Heading>
                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  {m.systems.map((system) => (
                    <Link
                      key={system.slug}
                      href={`/systems/${system.slug}`}
                      className="group flex items-center justify-between border border-neutral-warm-200 bg-white p-4 transition-all hover:border-brand-terracotta/30"
                    >
                      <span className="text-sm font-medium text-neutral-warm-700 group-hover:text-brand-terracotta">
                        {system.name}
                      </span>
                      <svg
                        className="h-4 w-4 text-neutral-warm-400 transition-transform group-hover:translate-x-1"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </Link>
                  ))}
                </div>
              </AnimatedReveal>
            </div>

            {/* Sidebar */}
            <div>
              <AnimatedReveal delay={0.2}>
                <div className="space-y-8 border-l border-neutral-warm-200 pl-8">
                  <div>
                    <h4 className="mb-2 text-xs font-semibold uppercase tracking-[0.15em] text-brand-terracotta">
                      Pricing Tier
                    </h4>
                    <Badge variant="terracotta">{m.tier}</Badge>
                  </div>

                  <div>
                    <h4 className="mb-3 text-xs font-semibold uppercase tracking-[0.15em] text-brand-terracotta">
                      Frame Materials
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {m.materials.map((mat) => (
                        <Badge key={mat} variant="outline">
                          {mat}
                        </Badge>
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
                      Get a Quote
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
