"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Heading } from "@/components/ui/Heading";
import { staggerContainer, staggerItem } from "@/lib/animations";
import { AnimatedReveal } from "@/components/shared/AnimatedReveal";

const systems = [
  {
    name: "Multi-Slide Doors",
    slug: "multi-slide-doors",
    description:
      "Expansive glass panels that stack or pocket away, creating seamless indoor-outdoor living spaces.",
  },
  {
    name: "Pivot Doors",
    slug: "pivot-doors",
    description:
      "Oversized architectural entries that make a dramatic statement at any scale.",
  },
  {
    name: "Steel Windows & Doors",
    slug: "steel-windows",
    description:
      "Slender sightlines and industrial elegance for contemporary and transitional designs.",
  },
  {
    name: "Contemporary Aluminum",
    slug: "contemporary-aluminum",
    description:
      "High-performance thermally broken aluminum systems for modern architecture.",
  },
  {
    name: "Energy Efficient Systems",
    slug: "energy-efficient",
    description:
      "Title 24 compliant glazing solutions that exceed California energy requirements.",
  },
  {
    name: "Oversized Openings",
    slug: "oversized-openings",
    description:
      "Engineered solutions for floor-to-ceiling and wall-to-wall glass installations.",
  },
];

export function FeaturedSystems() {
  return (
    <Section className="bg-neutral-warm-100">
      <Container>
        <AnimatedReveal className="mb-16 text-center">
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-brand-terracotta">
            Systems & Solutions
          </p>
          <Heading level="h2">
            Architectural Window & Door Systems
          </Heading>
          <p className="mx-auto mt-4 max-w-2xl text-neutral-warm-500">
            We help select the right system for your project — not just the
            right brand. Every build demands a different approach.
          </p>
        </AnimatedReveal>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {systems.map((system) => (
            <motion.div key={system.slug} variants={staggerItem}>
              <Link
                href={`/systems/${system.slug}`}
                className="group block h-full overflow-hidden bg-white transition-all duration-300 hover:shadow-lg"
              >
                <div className="relative aspect-[16/10] bg-neutral-warm-200">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-xs uppercase tracking-widest text-neutral-warm-400">
                      {system.name}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="mb-2 font-serif text-lg font-semibold text-neutral-warm-900 transition-colors group-hover:text-brand-terracotta">
                    {system.name}
                  </h3>
                  <p className="text-sm leading-relaxed text-neutral-warm-500">
                    {system.description}
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
