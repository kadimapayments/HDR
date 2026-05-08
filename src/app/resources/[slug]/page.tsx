import type { Metadata } from "next";
import { notFound } from "next/navigation";
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
      "When architects and homeowners consider modern window systems, the choice often comes down to two premium materials: steel and aluminum. Both deliver the clean, contemporary aesthetics demanded by modern architecture — but they differ significantly in performance, cost, and application.",
      "Steel windows offer the thinnest possible sightlines in the industry, with frame profiles as narrow as 1.5 inches. This creates a distinctly elegant, almost jewelry-like quality that aluminum systems cannot replicate. Steel's inherent strength allows for larger spans with less material, maximizing glass area and light transmission.",
      "Aluminum windows, particularly thermally broken systems from manufacturers like Fleetwood and Western, offer superior thermal performance out of the box. Modern aluminum extrusions can be engineered with complex thermal break profiles that significantly reduce heat transfer — a critical consideration for California's Title 24 energy requirements.",
      "From a cost perspective, steel windows typically command a 30-50% premium over equivalent aluminum systems. This reflects both the material cost and the labor-intensive manufacturing process. Steel windows are often hand-welded and ground smooth, while aluminum systems benefit from more automated production.",
      "For Los Angeles projects, the choice often depends on architectural style. Contemporary modern homes gravitate toward aluminum's clean, consistent profiles. Transitional and industrial-inspired designs lean toward steel's authentic character. Many of our projects specify both — steel for the primary facade and aluminum for secondary elevations.",
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
      "California's Title 24 energy code sets some of the most stringent window performance requirements in the nation. For luxury residential projects with expansive glazing, meeting these requirements while maintaining architectural design intent requires careful product selection and specification strategy.",
      "The current code evaluates windows based on U-factor (heat transfer), Solar Heat Gain Coefficient (SHGC), and Visible Transmittance (VT). In Climate Zones 6 through 9 — which cover most of coastal and inland Los Angeles — the requirements are particularly demanding for west and south-facing elevations.",
      "High-performance glazing packages from premium manufacturers like Fleetwood, Loewen, and Andersen can meet or exceed these requirements. Triple-pane configurations, low-E coatings, and argon or krypton gas fills deliver U-factors well below code minimums. The key is specifying the right glass package for each elevation and exposure.",
      "For projects with oversized openings or extensive west-facing glass, a performance trade-off analysis may be necessary. The energy consultant can use the performance approach (rather than prescriptive) to evaluate the building as a whole, allowing more flexibility in individual window specifications.",
      "We work closely with energy consultants and architects to navigate these requirements from the earliest design stages — ensuring that product selection supports both the architecture and the energy budget.",
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
          <AnimatedReveal>
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
          </AnimatedReveal>
        </Container>
      </Section>
    </>
  );
}
