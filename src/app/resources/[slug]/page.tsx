import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { generatePageMetadata } from "@/lib/metadata";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { AnimatedReveal } from "@/components/shared/AnimatedReveal";

const articles: Record<
  string,
  {
    title: string;
    category: string;
    date: string;
    readTime: string;
    excerpt: string;
    body: string[];
    furtherReading?: { label: string; href: string }[];
  }
> = {
  "steel-vs-aluminum-windows": {
    title: "Steel vs Aluminum Windows: A Complete Comparison",
    category: "Technical",
    date: "2026-04-15",
    readTime: "8 min read",
    excerpt:
      "Understanding the performance, aesthetic, and cost differences between steel and aluminum window systems.",
    body: [
      "When architects and homeowners consider modern window systems, the choice often comes down to two premium materials: steel and aluminum. Both deliver the clean, contemporary aesthetics demanded by modern architecture, but they differ significantly in performance, cost, and application.",
      "Steel windows offer the thinnest possible sightlines in the industry, with frame profiles as narrow as 1.5 inches. This creates a distinctly elegant, almost jewelry-like quality that aluminum systems cannot replicate. Steel's inherent strength allows for larger spans with less material, maximizing glass area and light transmission.",
      "Aluminum windows, particularly thermally broken systems from manufacturers like Fleetwood and Western, offer superior thermal performance out of the box. Modern aluminum extrusions can be engineered with complex thermal break profiles that significantly reduce heat transfer: a critical consideration for California's Title 24 energy requirements.",
      "From a cost perspective, steel windows typically command a 30-50% premium over equivalent aluminum systems. This reflects both the material cost and the labor-intensive manufacturing process. Steel windows are often hand-welded and ground smooth, while aluminum systems benefit from more automated production.",
      "For Los Angeles projects, the choice often depends on architectural style. Contemporary modern homes gravitate toward aluminum's clean, consistent profiles. Transitional and industrial-inspired designs lean toward steel's authentic character. Many of our projects specify both: steel for the primary facade and aluminum for secondary elevations.",
    ],
  },
  "laminated-glass-residential-security": {
    title: "Laminated Glass for Residential Security: What LA Homeowners Should Know",
    category: "Technical",
    date: "2026-05-10",
    readTime: "5 min read",
    excerpt:
      "Why laminated glass has become a top request among Los Angeles homeowners seeking better protection against forced entry, without sacrificing design.",
    body: [
      "Over the past couple of years, we've seen a clear shift in what Los Angeles homeowners are asking for: alongside the usual conversations about light, sightlines, and energy performance, security has moved firmly to the top of the list. High-profile break-ins across LA's luxury neighborhoods have made many homeowners rethink how their windows and doors perform, not just aesthetically, but structurally.",
      "Laminated glass is one of the most effective answers to that concern. Unlike standard insulated glass, laminated glass is constructed with two or more layers of glass bonded together with an interlayer, typically a tough polymer such as PVB (polyvinyl butyral). When the glass is struck, whether by a tool, a rock, or a body, it cracks but stays bonded to the interlayer rather than shattering into the room. That dramatically slows down, and often stops, a forced-entry attempt.",
      "The security benefit comes from time. Most break-in attempts rely on speed and minimal noise. A standard annealed or even tempered pane can be defeated quickly and quietly. Laminated glass requires sustained, repeated effort to penetrate: effort that is loud, slow, and far more likely to be noticed by neighbors, passersby, or a security system. For many of our clients, that alone is the deciding factor.",
      "Beyond security, laminated glass brings real quality-of-life advantages that make it an easy upgrade to justify. The same interlayer that resists impact also significantly reduces sound transmission, which is a major draw for homes near busy streets, flight paths, or in dense neighborhoods. It also blocks the vast majority of UV transmission, helping protect interior finishes, art, and furnishings from fading.",
      "From a performance standpoint, laminated glass is now offered as an upgrade option across nearly every premium manufacturer we work with, including Loewen's Tranquility glazing, which combines laminated construction with acoustic performance specifically for projects where both quiet and security matter. It can typically be specified on entry doors, ground-floor windows, and other vulnerable openings without changing the overall look of a home's glazing package.",
      "If security has become a priority for your project, whether you're building new or upgrading existing openings, it's worth having a conversation early. Laminated glass can usually be incorporated into a design without compromise, and for many LA homeowners right now, it's quickly becoming less of an upgrade and more of a standard.",
    ],
  },
  "oversized-window-openings": {
    title: "Oversized Window Openings: Structural Considerations",
    category: "Technical",
    date: "2026-02-28",
    readTime: "7 min read",
    excerpt:
      "Engineering and structural coordination for floor-to-ceiling and wall-to-wall glass installations.",
    body: [
      "Oversized window and door openings are one of the defining features of contemporary Los Angeles residential architecture, and one of the most technically demanding challenges a project team will navigate. When openings exceed standard catalog dimensions, the conversation shifts from product selection to structural engineering.",
      "The first question is always the header. A single operable panel spanning 12 feet wide and 10 feet tall can weigh over 800 pounds. That load transfers to a structural header above the opening, which in most cases requires a steel beam engineered specifically for the span. Coordinating this early, ideally during design development, prevents costly changes during construction documents.",
      "Glass is the second consideration. Standard tempered glass has size limits that vary by manufacturer, typically in the range of 96 to 130 inches on the long dimension. Beyond those thresholds, laminated glass is required. Laminated glass adds weight, cost, and lead time, but it also provides meaningful safety benefits, particularly for openings near grade or adjacent to living spaces.",
      "Track and hardware engineering is equally critical. Oversized panels require concealed roller systems rated for the actual panel weight, not nominal weight. We specify hardware from manufacturers whose engineers will review the actual panel dimensions and provide stamped load calculations when required by the building department.",
      "Installation logistics are often underestimated. Panels exceeding 500 pounds cannot be set by hand. Projects need to plan for crane or forklift access, temporary structural support during installation, and crews with documented experience handling large-scale glazing. We coordinate directly with installers before pricing to ensure the logistics are realistic.",
      "The reward for getting it right is significant. A 40-foot opening glass wall or a single floor-to-ceiling panel that spans an entire living room facade is one of the most dramatic architectural moments available in residential design. We've specified and delivered some of the largest residential glazing assemblies in Southern California, and the process, when managed correctly, is entirely achievable.",
    ],
  },
  "title-24-window-requirements": {
    title: "Title 24 Window Requirements for California Luxury Homes",
    category: "Energy & Code",
    date: "2026-03-20",
    readTime: "6 min read",
    excerpt:
      "How to meet and exceed California's energy compliance requirements without compromising design intent.",
    body: [
      "California's Title 24 energy code sets some of the most stringent window performance requirements in the nation. For luxury residential projects with expansive glazing, meeting these requirements while maintaining architectural design intent requires a careful, strategic approach to product selection.",
      "The current code evaluates windows based on U-factor (heat transfer), Solar Heat Gain Coefficient (SHGC), and Visible Transmittance (VT). In Climate Zones 6 through 9, which cover most of coastal and inland Los Angeles, the requirements are particularly demanding for west and south-facing elevations.",
      "High-performance glazing packages from premium manufacturers like Fleetwood, Loewen, and Andersen can meet or exceed these requirements. Triple-pane configurations, low-E coatings, and argon or krypton gas fills deliver U-factors well below code minimums. The key is specifying the right glass package for each elevation and exposure.",
      "For projects with oversized openings or extensive west-facing glass, a performance trade-off analysis may be necessary. The energy consultant can use the performance approach (rather than prescriptive) to evaluate the building as a whole, allowing more flexibility in individual window choices.",
      "We work closely with energy consultants and architects to navigate these requirements from the earliest design stages, ensuring that product selection supports both the architecture and the energy budget.",
    ],
    furtherReading: [
      {
        label: "California Title 24: Official Code (Building Energy Efficiency Standards)",
        href: "https://www.energy.ca.gov/programs-and-topics/programs/building-energy-efficiency-standards",
      },
    ],
  },
};

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = articles[slug];
  if (!article) return {};

  return generatePageMetadata({
    title: article.title,
    description: article.excerpt,
    path: `/resources/${slug}`,
    type: "article",
  });
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = articles[slug];

  if (!article) notFound();

  return (
    <>
      {/* Article Header */}
      <section className="bg-neutral-warm-900 pb-16 pt-32 md:pb-20 md:pt-40">
        <Container>
          <AnimatedReveal>
            <div className="mx-auto max-w-3xl">
              <div className="mb-6 flex items-center gap-4">
                <Badge variant="terracotta">{article.category}</Badge>
                <span className="text-xs text-neutral-warm-400">
                  {article.readTime}
                </span>
                <span className="text-xs text-neutral-warm-500">
                  {new Date(article.date).toLocaleDateString("en-US", {
                    month: "long",
                    day: "numeric",
                    year: "numeric",
                  })}
                </span>
              </div>
              <h1 className="font-serif text-[length:var(--font-size-h1)] font-semibold leading-[var(--line-height-h1)] text-white">
                {article.title}
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-neutral-warm-400">
                {article.excerpt}
              </p>
            </div>
          </AnimatedReveal>
        </Container>
      </section>

      {/* Article Body */}
      <Section>
        <Container>
          <article className="mx-auto max-w-3xl">
              <div className="space-y-6">
                {article.body.map((paragraph, i) => (
                  <p
                    key={i}
                    className="text-base leading-[1.8] text-neutral-warm-600"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>

              {article.furtherReading && (
                <div className="mt-10 border border-neutral-warm-200 bg-neutral-warm-50 p-6">
                  <p className="mb-3 text-xs font-semibold uppercase tracking-[0.15em] text-brand-terracotta">
                    Official Resources
                  </p>
                  <ul className="space-y-2">
                    {article.furtherReading.map((item) => (
                      <li key={item.href}>
                        <Link
                          href={item.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-sm font-medium text-neutral-warm-700 underline-offset-2 hover:text-brand-terracotta hover:underline"
                        >
                          {item.label}
                          <svg className="h-3 w-3 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <hr className="my-12 border-neutral-warm-200" />

              <div className="text-center">
                <p className="mb-4 font-serif text-xl font-semibold text-neutral-warm-900">
                  Have questions about your project?
                </p>
                <Button href="/contact" variant="primary" size="lg">
                  Schedule a Consultation
                </Button>
              </div>
            </article>
        </Container>
      </Section>
    </>
  );
}
