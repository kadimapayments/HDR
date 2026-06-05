"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Heading } from "@/components/ui/Heading";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { staggerContainer, staggerItem } from "@/lib/animations";
import { AnimatedReveal } from "@/components/shared/AnimatedReveal";

const articles = [
  {
    title: "Steel vs Aluminum Windows: A Complete Comparison",
    category: "Technical",
    excerpt:
      "Understanding the performance, aesthetic, and cost differences between steel and aluminum window systems for modern architecture.",
    slug: "steel-vs-aluminum-windows",
    image: "/images/systems/steel-windows.jpg",
  },
  {
    title: "Title 24 Window Requirements for California Luxury Homes",
    category: "Energy & Code",
    excerpt:
      "How to meet and exceed California's energy compliance requirements without compromising design intent.",
    slug: "title-24-window-requirements",
    image: "/images/systems/energy-efficient.jpg",
  },
  {
    title: "Oversized Window Openings: Structural Considerations",
    category: "Technical",
    excerpt:
      "Engineering and structural coordination for floor-to-ceiling and wall-to-wall glass installations.",
    slug: "oversized-window-openings",
    image: "/images/systems/oversized-openings.jpg",
  },
];

export function ResourcesPreview() {
  return (
    <Section className="bg-neutral-warm-100">
      <Container>
        <AnimatedReveal className="mb-16 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-brand-terracotta">
              Resources
            </p>
            <Heading level="h2">Insights & Guides</Heading>
          </div>
          <Button href="/resources" variant="outline" size="md">
            View All Resources
          </Button>
        </AnimatedReveal>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid gap-8 md:grid-cols-3"
        >
          {articles.map((article) => (
            <motion.div key={article.slug} variants={staggerItem}>
              <Link
                href={`/resources/${article.slug}`}
                className="group block h-full bg-white transition-all duration-300 hover:shadow-lg"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-neutral-warm-200">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <Badge variant="outline" className="mb-4">
                    {article.category}
                  </Badge>
                  <h3 className="mb-3 font-serif text-lg font-semibold leading-snug text-neutral-warm-900 transition-colors group-hover:text-brand-terracotta">
                    {article.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-neutral-warm-500">
                    {article.excerpt}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </Section>
  );
}
