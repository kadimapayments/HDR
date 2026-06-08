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

export const metadata: Metadata = generatePageMetadata({
  title: "Resources & Guides",
  description:
    "Expert guides on luxury windows and doors — comparisons, technical guides, energy compliance, pricing insights, and specification advice.",
  path: "/resources",
});

// Hidden articles (not ready for launch — revisit when adding resources):
// - "The Complete Guide to Multi-Slide Door Systems" (slug: multi-slide-door-guide)
// - "The True Cost of Luxury Windows in Los Angeles" (slug: luxury-window-pricing-los-angeles)

const articles = [
  {
    title: "Steel vs Aluminum Windows: A Complete Comparison",
    slug: "steel-vs-aluminum-windows",
    category: "Technical",
    excerpt:
      "Understanding the performance, aesthetic, and cost differences between steel and aluminum window systems.",
    date: "2026-04-15",
    image: "/images/systems/steel-windows.jpg",
  },
  {
    title: "Title 24 Window Requirements for California Luxury Homes",
    slug: "title-24-window-requirements",
    category: "Energy & Code",
    excerpt:
      "How to meet and exceed California's energy compliance requirements without compromising design intent.",
    date: "2026-03-20",
    image: "/images/systems/energy-efficient.jpg",
  },
  {
    title: "Laminated Glass for Residential Security: What LA Homeowners Should Know",
    slug: "laminated-glass-residential-security",
    category: "Technical",
    excerpt:
      "Why laminated glass has become a top specification request for Los Angeles homeowners seeking better protection against forced entry — without sacrificing design.",
    date: "2026-05-10",
    image: "/images/systems/window-wall.jpg",
  },
  {
    title: "Oversized Window Openings: Structural Considerations",
    slug: "oversized-window-openings",
    category: "Technical",
    excerpt:
      "Engineering and structural coordination for floor-to-ceiling and wall-to-wall glass installations.",
    date: "2026-02-28",
    image: "/images/systems/oversized-openings.jpg",
  },
];

export default function ResourcesPage() {
  return (
    <>
      <PageHero
        title="Insights & Guides"
        subtitle="Resources"
        description="Expert knowledge on architectural windows and doors — from technical comparisons to specification advice."
      />

      <Section>
        <Container>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {articles.map((article, i) => (
              <AnimatedReveal key={article.slug} delay={i * 0.05}>
                <Link
                  href={`/resources/${article.slug}`}
                  className="group flex h-full flex-col overflow-hidden bg-white transition-shadow duration-300 hover:shadow-lg"
                >
                  <div className="relative aspect-[16/10] overflow-hidden bg-neutral-warm-200">
                    <Image
                      src={article.image}
                      alt={article.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <div className="mb-3 flex items-center gap-3">
                      <Badge variant="outline">{article.category}</Badge>
                      <span className="text-xs text-neutral-warm-400">
                        {new Date(article.date).toLocaleDateString("en-US", {
                          month: "short",
                          day: "numeric",
                          year: "numeric",
                        })}
                      </span>
                    </div>
                    <h3 className="flex-1 font-serif text-lg font-semibold leading-snug text-neutral-warm-900 transition-colors group-hover:text-brand-terracotta">
                      {article.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-neutral-warm-500">
                      {article.excerpt}
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
