"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Heading } from "@/components/ui/Heading";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { staggerContainer, staggerItem } from "@/lib/animations";
import { AnimatedReveal } from "@/components/shared/AnimatedReveal";

const projects = [
  {
    title: "Las Pulgas Residence",
    neighborhood: "Pacific Palisades",
    systems: ["Multi-Slide Doors", "Fixed Glass"],
    manufacturers: ["Fleetwood", "Western"],
    slug: "1204-las-pulgas",
  },
  {
    title: "Villa Georgina",
    neighborhood: "Santa Monica",
    systems: ["Steel Windows", "Pivot Door"],
    manufacturers: ["Euroline"],
    slug: "136-georgina",
  },
  {
    title: "Foothill Modern",
    neighborhood: "Beverly Hills",
    systems: ["Contemporary Aluminum"],
    manufacturers: ["Loewen", "Andersen"],
    slug: "723-foothill",
  },
  {
    title: "Oakdale Custom",
    neighborhood: "Encino",
    systems: ["Energy Efficient", "Sliding Doors"],
    manufacturers: ["All Weather"],
    slug: "5946-oakdale",
  },
];

export function FeaturedProjects() {
  return (
    <Section>
      <Container>
        <AnimatedReveal className="mb-16 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-brand-terracotta">
              Portfolio
            </p>
            <Heading level="h2">Featured Projects</Heading>
          </div>
          <Button href="/portfolio" variant="outline" size="md">
            View All Projects
          </Button>
        </AnimatedReveal>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid gap-6 md:grid-cols-2"
        >
          {projects.map((project) => (
            <motion.div key={project.slug} variants={staggerItem}>
              <Link
                href={`/portfolio/${project.slug}`}
                className="group relative block overflow-hidden"
              >
                <div className="relative aspect-[4/3] bg-neutral-warm-200">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-xs uppercase tracking-widest text-neutral-warm-400">
                      Project Photo
                    </span>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-warm-950/80 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                </div>

                <div className="p-6 bg-white">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {project.manufacturers.map((m) => (
                      <Badge key={m} variant="terracotta">{m}</Badge>
                    ))}
                  </div>
                  <h3 className="font-serif text-xl font-semibold text-neutral-warm-900 transition-colors group-hover:text-brand-terracotta">
                    {project.title}
                  </h3>
                  <p className="mt-1 text-sm text-neutral-warm-500">
                    {project.neighborhood}
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {project.systems.map((s) => (
                      <span
                        key={s}
                        className="text-xs text-neutral-warm-400"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </Section>
  );
}
