"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { heroReveal } from "@/lib/animations";
import { cn } from "@/lib/utils";

interface PageHeroProps {
  title: string;
  subtitle?: string;
  description?: string;
  backgroundImage?: string;
  compact?: boolean;
  className?: string;
}

export function PageHero({
  title,
  subtitle,
  description,
  backgroundImage,
  compact,
  className,
}: PageHeroProps) {
  return (
    <section
      className={cn(
        "relative flex items-start md:items-end bg-neutral-warm-900",
        compact ? "min-h-[40vh] pt-28 md:pt-20" : "min-h-[60vh] pt-28 md:pt-20",
        className
      )}
      style={
        backgroundImage
          ? {
              backgroundImage: `url(${backgroundImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }
          : undefined
      }
    >
      {backgroundImage && (
        <div className="absolute inset-0 bg-neutral-warm-950/60" />
      )}

      <Container className="relative z-10 pb-16 md:pb-20">
        {subtitle && (
          <motion.p
            variants={heroReveal}
            initial="hidden"
            animate="visible"
            className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-brand-terracotta"
          >
            {subtitle}
          </motion.p>
        )}
        <motion.h1
          variants={heroReveal}
          initial="hidden"
          animate="visible"
          className="max-w-4xl font-serif text-[length:var(--font-size-display)] font-semibold leading-[var(--line-height-display)] tracking-[var(--letter-spacing-display)] text-white"
        >
          {title}
        </motion.h1>
        {description && (
          <motion.p
            variants={heroReveal}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.2 }}
            className="mt-6 max-w-2xl text-lg leading-relaxed text-neutral-warm-300"
          >
            {description}
          </motion.p>
        )}
      </Container>
    </section>
  );
}
