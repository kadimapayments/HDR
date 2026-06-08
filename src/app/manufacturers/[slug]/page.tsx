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

type ProductLine = {
  name: string;
  material: string;
  priceTier: string;
  priceIndicator: string;
  overview: string;
  bestFor: string[];
  notFor?: string;
};

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
    productLines?: ProductLine[];
    collections?: { name: string; description: string }[];
  }
> = {
  fleetwood: {
    name: "Fleetwood Windows & Doors",
    tagline: "The Gold Standard in Aluminum",
    tier: "Ultra-Premium",
    leadTime: "12–16 weeks",
    materials: ["Aluminum"],
    overview:
      "Fleetwood is the industry standard for high-performance aluminum — Southern California-built multi-slide and bifold systems with the largest operable panel sizes, slimmest sightlines, and engineering precision in the category.",
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
      { name: "Pivot Doors", slug: "pivot-doors" },
      { name: "Contemporary Aluminum", slug: "contemporary-aluminum" },
      { name: "Energy Efficient Systems", slug: "energy-efficient" },
      { name: "Oversized Openings", slug: "oversized-openings" },
      { name: "Hinge Doors", slug: "sliding-doors" },
      { name: "Pocket Doors", slug: "pocket-doors" },
    ],
    bestFor: [
      "Modern and contemporary architecture",
      "Oversized opening requirements",
      "Indoor-outdoor living design",
      "Coastal and hillside projects",
      "Architect-driven specifications",
    ],
    productLines: [
      {
        name: "3-Series",
        material: "Thermally Broken Aluminum",
        priceTier: "Premium",
        priceIndicator: "$$$",
        overview:
          "Fleetwood's entry point into the aluminum system category — a thermally broken aluminum line engineered for solid energy performance and reliable operation at a lower price than the Gen4 and Edge. The 3-Series delivers the Fleetwood build quality and California manufacturing advantage on a more accessible budget, making it a practical specification for secondary spaces, ADUs, and projects where the full Gen4 premium isn't warranted.",
        bestFor: [
          "Secondary and accessory spaces within a larger project",
          "ADUs and guesthouses on architect-led properties",
          "Projects where Fleetwood quality is required but Gen4 is over-budget",
          "Value-conscious new construction in contemporary style",
        ],
        notFor: "Primary living spaces on luxury architect-led projects — Gen4 or Edge is the correct specification there.",
      },
      {
        name: "Gen4",
        material: "Thermally Broken Aluminum",
        priceTier: "Ultra-Premium",
        priceIndicator: "$$$$",
        overview:
          "The Gen4 is Fleetwood's most-specified product line and the industry benchmark for aluminum multi-slide door systems. Engineered for maximum panel size, smooth operation, and slim sightlines, the Gen4 is the default specification for architect-designed indoor-outdoor living in California. Available in pocket, stack-back, and bi-parting configurations across a wide range of widths and heights — with one of the largest operable panel size envelopes in the market.",
        bestFor: [
          "Primary indoor-outdoor living spaces in luxury residential",
          "Architect-led contemporary and modern projects",
          "Large opening configurations — pocket, stack, and bi-parting",
          "Coastal and hillside homes with expansive view corridors",
          "Projects where panel size and sightline precision are the priority",
        ],
        notFor: "Projects requiring absolute minimum sightlines — Edge delivers a slimmer profile.",
      },
      {
        name: "Edge",
        material: "Thermally Broken Aluminum (Ultra-Slim Profiles)",
        priceTier: "Ultra-Premium",
        priceIndicator: "$$$$$",
        overview:
          "The Edge is Fleetwood's flagship line, engineered for projects where the glass-to-frame ratio is the design priority. It delivers the slimmest sightlines in the Fleetwood catalog — maximizing transparency and creating a near-frameless appearance at full architectural scale. The Edge is the right specification when the architect's intent depends on minimal aluminum presence and maximum visual openness.",
        bestFor: [
          "Luxury residences where minimal sightlines are a core design intent",
          "Large fixed and operable lites requiring near-frameless aesthetics",
          "Projects where the architect is specifying for maximum transparency",
          "High-end contemporary architecture with a glass-forward design language",
        ],
        notFor: "Projects where the premium over Gen4 is not justified by the sightline requirement.",
      },
    ],
  },
  andersen: {
    name: "Andersen Windows",
    tagline: "Trusted Performance, Refined Design",
    tier: "Premium",
    leadTime: "8–12 weeks",
    materials: ["Aluminum-Clad", "Composite", "Fiberglass", "Vinyl-Clad"],
    overview:
      "Andersen is America's most recognized window manufacturer — a 120-year-old company with a product line that spans every tier of residential construction. More range under one brand than any competitor in the market.",
    pros: [
      "E-Series is fully custom — sizes, shapes, colors, finishes",
      "Reliable lead times and nationwide service network",
      "Excellent warranty and post-installation support",
      "Strong energy-performance options (Title 24 compliant)",
      "Wide hardware and grille selection",
      "100 Series offers durable, low-maintenance option for value-tier scopes",
    ],
    cons: [
      "Sightlines are heavier than aluminum-only competitors",
      "Less engineered for oversized operable panels than Fleetwood",
      "Premium custom options can approach ultra-premium pricing",
      "100 Series not appropriate for architectural or luxury residential work",
    ],
    systems: [
      { name: "Multi-Slide Doors", slug: "multi-slide-doors" },
      { name: "Pivot Doors", slug: "pivot-doors" },
      { name: "Energy Efficient Systems", slug: "energy-efficient" },
      { name: "Oversized Openings", slug: "oversized-openings" },
      { name: "Hinge Doors", slug: "sliding-doors" },
    ],
    bestFor: [
      "Traditional and transitional architecture (E-Series / A-Series)",
      "Projects requiring custom shapes, sizes, and finishes",
      "Residences where lead time and service network matter",
      "Title 24 compliance with classic aesthetics",
      "ADUs, rentals, and replacement scopes (100 Series)",
    ],
    productLines: [
      {
        name: "100 Series",
        material: "Fibrex® Composite",
        priceTier: "Value",
        priceIndicator: "$",
        overview:
          "Andersen's entry-level line built from Fibrex — a proprietary blend of reclaimed wood fiber and thermoplastic polymer. It won't rot, warp, or require painting, which makes it genuinely low-maintenance. The tradeoff is that it lacks the design flexibility, sightline quality, and hardware options expected on architectural work.",
        bestFor: [
          "Replacement windows in existing homes",
          "ADUs and accessory structures",
          "Rental properties and investment units",
          "Secondary spaces where budget leads the brief",
        ],
        notFor: "Primary spaces in luxury residential or architect-led specifications.",
      },
      {
        name: "200 Series",
        material: "Pine Interior / Vinyl-Clad Exterior",
        priceTier: "Value–Premium",
        priceIndicator: "$$",
        overview:
          "A step up from the 100 Series, the 200 Series introduces a real wood pine interior with an aluminum-clad exterior. It bridges the gap between entry-level and the more specified 400 Series — offering better aesthetics and a wider product selection without moving into full architectural territory.",
        bestFor: [
          "Mid-tier residential construction",
          "Projects that want a wood interior look on a controlled budget",
          "Builder-grade new construction",
          "Secondary rooms in mixed-tier specifications",
        ],
        notFor: "High-end architectural work where E-Series or A-Series is expected.",
      },
      {
        name: "400 Series",
        material: "Pine Interior / Vinyl-Clad Exterior",
        priceTier: "Premium",
        priceIndicator: "$$$",
        overview:
          "The 400 Series is Andersen's best-selling and most versatile line — a pine wood interior with a durable aluminum-clad exterior. It offers a broad range of styles, sizes, and configurations, with good energy performance and solid hardware. A reliable specification for traditional and transitional homes where design matters but the budget doesn't support full E-Series customization.",
        bestFor: [
          "Traditional, craftsman, and transitional architecture",
          "Homeowner-driven projects with a mid-to-upper budget",
          "Reliable performance across a wide style range",
          "Projects wanting wood interiors without full custom pricing",
          "Contemporary architecture requiring slim sightlines",
        ],
        notFor: "Projects requiring very large panels or aluminum-clad exteriors.",
      },
      {
        name: "E-Series",
        material: "Wood Interior / Aluminum-Clad Exterior",
        priceTier: "Premium",
        priceIndicator: "$$$$",
        overview:
          "The E-Series (formerly Eagle) is Andersen's most customizable product line — essentially a bespoke window and door system built to specification. Any size, shape, configuration, color, hardware finish, and glass package is available. It's the right choice when a project demands true architectural flexibility: radius windows, complex shapes, very large fixed lites, and complete design coordination with the rest of the building.",
        bestFor: [
          "Architect-led custom residential specifications",
          "Complex shapes, arches, and non-standard configurations",
          "Projects requiring full coordination of size, finish, and hardware",
          "Luxury estates where every detail is designed",
        ],
        notFor: "Budget-sensitive projects or builds where standard sizing works fine.",
      },
      {
        name: "A-Series",
        material: "Wood Interior / Composite-Clad Exterior",
        priceTier: "Ultra-Premium",
        priceIndicator: "$$$$$",
        overview:
          "The A-Series is Andersen's architectural product — higher performance, more design flexibility, and better hardware than the 400 Series. It supports a wider range of custom sizes, configurations, and finishes, with improved structural performance for larger openings. A strong specification for luxury residential projects that don't require the full custom capability of the E-Series.",
        bestFor: [
          "Luxury residential with traditional or transitional design",
          "Architects needing broader sizing and configuration options",
          "Projects requiring better structural performance than 400 Series",
          "High-end new construction on a defined budget",
        ],
        notFor: "Projects demanding fully custom profiles or the most minimal sightlines.",
      },
    ],
  },
  marvin: {
    name: "Marvin Windows & Doors",
    tagline: "Modern Elegance in Wood & Aluminum",
    tier: "Premium",
    leadTime: "10–14 weeks",
    materials: ["Aluminum-Clad", "Fiberglass", "Wood"],
    overview:
      "Marvin is a fourth-generation family-owned manufacturer spanning entry-level fiberglass to fully custom architectural wood — their Modern collection is the benchmark for contemporary clad-wood design in luxury residential.",
    pros: [
      "Modern line delivers narrow sightlines with wood interiors",
      "Excellent fit and finish, well-engineered hardware",
      "Multiple product lines covering every tier and style",
      "Strong dealer support and design resources",
      "Reliable lead times and inventory",
    ],
    cons: [
      "Multi-slide door panel sizes smaller than Fleetwood",
      "Aluminum-clad finishes are factory-only — limited field touch-up",
      "Premium pricing vs. mainstream brands",
    ],
    systems: [
      { name: "Energy Efficient Systems", slug: "energy-efficient" },
      { name: "Oversized Openings", slug: "oversized-openings" },
      { name: "Hinge Doors", slug: "sliding-doors" },
      { name: "Automated Systems", slug: "automated-systems" },
    ],
    bestFor: [
      "Modern and transitional design",
      "Residences valuing wood interior with clean exteriors",
      "Projects spanning multiple architectural styles",
      "Builders needing reliable supply",
    ],
    productLines: [
      {
        name: "Essential",
        material: "Fiberglass Composite",
        priceTier: "Value",
        priceIndicator: "$",
        overview:
          "Marvin's entry-level collection built from fiberglass composite — durable, low-maintenance, and energy efficient. It won't rot, warp, or require repainting, which makes it a practical choice for replacement windows and budget-constrained scopes. Design flexibility and customization options are limited compared to the upper collections.",
        bestFor: [
          "Replacement windows in existing homes",
          "ADUs and accessory structures",
          "Rental properties and investment units",
          "Secondary spaces where budget leads the brief",
        ],
        notFor: "Architectural or luxury residential where design flexibility and material quality are expected.",
      },
      {
        name: "Elevate",
        material: "Fiberglass Exterior / Pine Interior",
        priceTier: "Value–Premium",
        priceIndicator: "$$",
        overview:
          "The Elevate collection introduces a real pine wood interior paired with a durable fiberglass exterior — a meaningful step up in warmth and aesthetics over the Essential. It's well-suited to production residential and mid-range new construction where a wood interior look is desired without moving into full architectural pricing.",
        bestFor: [
          "Mid-range new construction and production builders",
          "Homeowners wanting a wood interior on a managed budget",
          "Traditional and craftsman-style homes",
          "Secondary rooms in mixed-tier specifications",
        ],
        notFor: "Contemporary architecture or projects requiring slim sightlines and high customization.",
      },
      {
        name: "Vivid",
        material: "Fiberglass / Composite",
        priceTier: "Premium",
        priceIndicator: "$$$",
        overview:
          "The Vivid collection offers a design-forward step up from the Elevate, with broader color and finish options and improved aesthetics for projects where appearance matters more than basic performance. It bridges the gap between production-grade and fully architectural Marvin products.",
        bestFor: [
          "Design-conscious production residential",
          "Projects wanting more finish variety than Elevate offers",
          "Transitional homes with a stronger design brief",
          "Builder-spec luxury where full Modern pricing isn't warranted",
        ],
        notFor: "Projects requiring the slim sightlines or full material quality of the Modern or Ultimate collections.",
      },
      {
        name: "Ultimate",
        material: "Wood or Aluminum-Clad Wood (Fully Custom)",
        priceTier: "Ultra-Premium",
        priceIndicator: "$$$$$",
        overview:
          "The Ultimate collection is Marvin's most customizable product — essentially a bespoke window and door system built to the exact specification of the project. Any size, configuration, species, finish, and hardware combination is available. It's the right choice when a project demands complete design control and material authenticity without compromise.",
        bestFor: [
          "Fully custom architectural residential specifications",
          "Projects requiring unusual sizes, shapes, or configurations",
          "Luxury estates where every detail is designed",
          "Specifications that demand the highest Marvin fit and finish",
        ],
        notFor: "Budget-sensitive projects or builds where standard sizing and configurations work fine.",
      },
      {
        name: "Modern",
        material: "Fiberglass Exterior / Aluminum Interior",
        priceTier: "Premium–Luxury",
        priceIndicator: "$$$$",
        overview:
          "The Modern collection is Marvin's architectural statement — slim high density fiberglass exterior sightlines with a clean aluminum interior. It's designed specifically for contemporary and transitional homes where clean lines and natural materials coexist. The Modern line is the most frequently specified Marvin product on architect-led luxury residential projects in Southern California.",
        bestFor: [
          "Contemporary and modern architecture",
          "Architect-led luxury residential specifications",
          "Projects pairing slim exterior sightlines with clean interiors",
          "High-end new construction where design drives the brief",
        ],
        notFor: "Traditional architecture or projects where panel sizes need to exceed Marvin's maximum configurations.",
      },
    ],
  },
  nanawall: {
    name: "NanaWall Systems",
    tagline: "The Original Opening Glass Wall",
    tier: "Ultra-Premium",
    leadTime: "12–18 weeks",
    materials: ["Aluminum", "Aluminum-Clad", "Composite", "Wood"],
    overview:
      "NanaWall invented the modern folding glass wall and remains the category leader — offering the broadest portfolio of opening glass wall systems in the industry across aluminum, wood, and aluminum-clad options.",
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
      { name: "Energy Efficient Systems", slug: "energy-efficient" },
      { name: "Oversized Openings", slug: "oversized-openings" },
      { name: "Folding Doors", slug: "bifold-doors" },
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
    materials: ["Steel"],
    overview:
      "Euroline brings authentic European steel windows and doors to the U.S. market — thermally broken profiles that deliver the slim sightlines of traditional steel without sacrificing energy performance.",
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
      { name: "Multi-Slide Doors", slug: "multi-slide-doors" },
      { name: "Steel Windows & Doors", slug: "steel-windows" },
      { name: "Energy Efficient Systems", slug: "energy-efficient" },
      { name: "Oversized Openings", slug: "oversized-openings" },
      { name: "Folding Doors", slug: "bifold-doors" },
      { name: "Hinge Doors", slug: "sliding-doors" },
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
    materials: ["Aluminum", "Wood"],
    overview:
      "LaCantina specializes exclusively in folding, sliding, and stacking door systems — a go-to specification for opening walls where performance and design integrity matter without the ultra-premium price tag.",
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
      { name: "Energy Efficient Systems", slug: "energy-efficient" },
      { name: "Oversized Openings", slug: "oversized-openings" },
      { name: "Folding Doors", slug: "bifold-doors" },
      { name: "Hinge Doors", slug: "sliding-doors" },
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
      "All Weather is a reliable California manufacturer offering strong Title 24 energy performance and predictable lead times — the right specification when compliance and supply consistency lead the brief.",
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
    systems: [],
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
    materials: ["Aluminum-Clad Wood", "Fiberglass", "Vinyl"],
    overview:
      "Windsor is a family-owned manufacturer whose Pinnacle line delivers premium aluminum-clad wood at strong value — and whose broader catalog spans fiberglass and vinyl, making them a practical single-source partner for mixed-tier specifications.",
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
      { name: "Multi-Slide Doors", slug: "multi-slide-doors" },
      { name: "Energy Efficient Systems", slug: "energy-efficient" },
      { name: "Oversized Openings", slug: "oversized-openings" },
      { name: "Automated Systems", slug: "automated-systems" },
      { name: "Pocket Doors", slug: "pocket-doors" },
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
      "Plygem is the workhorse vinyl specification — dependable Title 24 energy performance, short lead times, and competitive pricing for ADUs, value-tier rooms, and secondary spaces.",
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
    systems: [],
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
    materials: ["Aluminum", "Vinyl"],
    overview:
      "IWC is a California-based manufacturer offering flexible configurations and short lead times — a capable workhorse for ADUs, secondary spaces, and mixed-tier projects.",
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
    systems: [],
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
    materials: ["Aluminum-Clad", "Wood"],
    overview:
      "Loewen is a Canadian manufacturer built on premium Douglas Fir and artisan-level craftsmanship — the choice for projects where material authenticity and hardware quality are non-negotiable.",
    pros: [
      "Exceptional wood quality (Douglas Fir standard)",
      "Premium hardware and operation",
      "Highly customizable profiles and configurations",
      "Beautiful interior wood aesthetics",
      "Strong thermal performance",
    ],
    cons: [
      "Higher price point",
      "All wood requires periodic maintenance",
    ],
    systems: [
      { name: "Pivot Doors", slug: "pivot-doors" },
      { name: "Energy Efficient Systems", slug: "energy-efficient" },
      { name: "Oversized Openings", slug: "oversized-openings" },
      { name: "Hinge Doors", slug: "sliding-doors" },
      { name: "Window Wall", slug: "window-wall" },
    ],
    bestFor: [
      "Luxury homes demanding natural materials",
      "Transitional and contemporary-traditional designs",
      "Projects prioritizing interior aesthetics",
      "High-end custom residences",
    ],
    collections: [
      {
        name: "Cyprium Collection",
        description:
          "Loewen's Cyprium Collection pairs the warmth of wood interiors with a durable, low-maintenance copper-alloy exterior cladding — engineered for projects that demand a distinctive, modern look without sacrificing the performance and craftsmanship Loewen is known for. It's a striking option for architects seeking a non-traditional exterior finish that develops a natural patina over time.",
      },
      {
        name: "Stormforce Series",
        description:
          "The Stormforce Series is Loewen's high-performance line engineered for coastal and storm-prone regions, built to meet demanding impact and pressure requirements without compromising on design or sightlines. It's the right choice for luxury properties in exposed locations that need windows and doors capable of withstanding severe weather while still delivering Loewen's signature fit, finish, and craftsmanship.",
      },
      {
        name: "Curtain Wall",
        description:
          "Loewen's curtain wall systems bring the same wood-and-cladding craftsmanship to large-scale glazed facades, allowing architects to design expansive walls of glass with continuous, unbroken sightlines. It's suited to statement architectural moments — great rooms, stairwells, and whole-wall openings — where the structure itself becomes part of the design.",
      },
      {
        name: "Tranquility Glass",
        description:
          "Tranquility is Loewen's upgraded glazing option, combining laminated glass with specialized acoustic construction to deliver significantly better sound-dampening performance than standard insulated glass. The laminated layer also adds a meaningful security benefit — making the glass far more resistant to forced entry and impact. It's an excellent option for properties on busy streets, near airports, or anywhere both quiet and security are a priority.",
      },
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
              {/* Pros & Cons — hidden when product lines are present */}
              {!m.productLines && (
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
              )}

              {/* Best For — hidden when product lines are present */}
              {!m.productLines && (
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
              )}

              {/* Featured Collections */}
              {m.collections && (
                <AnimatedReveal>
                  <Heading level="h3">Featured Collections</Heading>
                  <div className="mt-4 space-y-6">
                    {m.collections.map((collection) => (
                      <div key={collection.name}>
                        <p className="text-sm font-medium uppercase tracking-wide text-brand-terracotta">
                          {collection.name}
                        </p>
                        <p className="mt-2 text-sm leading-relaxed text-neutral-warm-600">
                          {collection.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </AnimatedReveal>
              )}

              {/* Product Lines */}
              {m.productLines && (
                <>
                  {/* At-a-Glance — shown first */}
                  <AnimatedReveal>
                    <Heading level="h3">At-a-Glance Comparison</Heading>

                    {/* Mobile: stacked cards */}
                    <div className="mt-6 space-y-3 md:hidden">
                      {m.productLines.map((line, i) => (
                        <div
                          key={line.name}
                          className={`border border-neutral-warm-200 p-4 ${i % 2 === 0 ? "bg-neutral-warm-50" : "bg-white"}`}
                        >
                          <div className="flex items-start justify-between gap-2">
                            <p className="font-semibold text-neutral-warm-900">{line.name}</p>
                            <span className="shrink-0 font-medium text-brand-terracotta">{line.priceIndicator}</span>
                          </div>
                          <p className="mt-1 text-xs text-neutral-warm-500">{line.material}</p>
                          <p className="mt-1 text-xs text-neutral-warm-400">{line.priceTier}</p>
                          <p className="mt-2 text-xs text-neutral-warm-600">{line.bestFor[0]}</p>
                        </div>
                      ))}
                    </div>

                    {/* Desktop: table */}
                    <div className="mt-6 hidden md:block">
                      <table className="w-full border-collapse text-sm">
                        <thead>
                          <tr className="border-b border-neutral-warm-200">
                            <th className="pb-3 pr-4 text-left text-xs font-semibold uppercase tracking-wider text-neutral-warm-500">Series</th>
                            <th className="pb-3 pr-4 text-left text-xs font-semibold uppercase tracking-wider text-neutral-warm-500">Material</th>
                            <th className="pb-3 pr-4 text-left text-xs font-semibold uppercase tracking-wider text-neutral-warm-500">Price</th>
                            <th className="pb-3 text-left text-xs font-semibold uppercase tracking-wider text-neutral-warm-500">Typical Use</th>
                          </tr>
                        </thead>
                        <tbody>
                          {m.productLines.map((line, i) => (
                            <tr
                              key={line.name}
                              className={`border-b border-neutral-warm-100 ${i % 2 === 0 ? "bg-neutral-warm-50" : "bg-white"}`}
                            >
                              <td className="py-3 pr-4 font-medium text-neutral-warm-900">{line.name}</td>
                              <td className="py-3 pr-4 text-neutral-warm-600">{line.material}</td>
                              <td className="py-3 pr-4">
                                <span className="font-medium text-brand-terracotta">{line.priceIndicator}</span>
                                <span className="ml-2 text-xs text-neutral-warm-400">{line.priceTier}</span>
                              </td>
                              <td className="py-3 text-neutral-warm-600">{line.bestFor[0]}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </AnimatedReveal>

                  <div>
                    <Heading level="h3">Product Lines</Heading>
                    <p className="mt-2 text-sm text-neutral-warm-500">
                      Not all series are equal — understanding which line fits your project is the first step to a correct specification.
                    </p>
                    <div className="mt-6 space-y-4">
                      {m.productLines.map((line) => (
                        <div key={line.name} className="border border-neutral-warm-200 bg-white p-6">
                          <div className="flex flex-wrap items-start justify-between gap-3">
                            <div>
                              <h4 className="font-serif text-2xl font-semibold tracking-tight text-brand-terracotta">
                                {line.name}
                              </h4>
                              <p className="mt-1 text-xs uppercase tracking-wider text-neutral-warm-400">{line.material}</p>
                            </div>
                            <div className="flex items-center gap-3">
                              <span className="text-sm font-medium text-brand-terracotta tracking-wide">
                                {line.priceIndicator}
                              </span>
                              <Badge variant="outline">{line.priceTier}</Badge>
                            </div>
                          </div>
                          <p className="mt-3 text-sm leading-relaxed text-neutral-warm-600">
                            {line.overview}
                          </p>
                          <div className="mt-4 grid gap-4 sm:grid-cols-2">
                            <div>
                              <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-accent-sage">
                                Best For
                              </p>
                              <ul className="space-y-1">
                                {line.bestFor.map((item) => (
                                  <li key={item} className="flex items-start gap-2 text-xs text-neutral-warm-600">
                                    <div className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent-sage" />
                                    {item}
                                  </li>
                                ))}
                              </ul>
                            </div>
                            {line.notFor && (
                              <div>
                                <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-neutral-warm-400">
                                  Not Recommended For
                                </p>
                                <p className="text-xs text-neutral-warm-500">{line.notFor}</p>
                              </div>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                </>
              )}

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
