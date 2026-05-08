"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { heroReveal, staggerContainer, staggerItem } from "@/lib/animations";

export function HeroSection() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-neutral-warm-950">
      {/* Background Image Placeholder */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "linear-gradient(135deg, #1A1816 0%, #2D2A26 40%, #4A4640 100%)",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-neutral-warm-950/90 via-neutral-warm-950/40 to-transparent" />

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-[1400px] px-6 md:px-8 xl:px-12">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="max-w-4xl"
        >
          <motion.p
            variants={staggerItem}
            className="mb-6 text-xs font-medium uppercase tracking-[0.3em] text-brand-terracotta"
          >
            Los Angeles&apos;s Premier Architectural Window & Door Specialists
          </motion.p>

          <motion.h1
            variants={heroReveal}
            className="font-serif text-[length:var(--font-size-display-xl)] font-semibold leading-[var(--line-height-display-xl)] tracking-[var(--letter-spacing-display)] text-white"
          >
            Architectural Windows
            <br />
            & Doors for LA&apos;s
            <br />
            <span className="text-brand-terracotta">Finest Residences</span>
          </motion.h1>

          <motion.p
            variants={staggerItem}
            className="mt-8 max-w-xl text-lg leading-relaxed text-neutral-warm-400"
          >
            We help architects, builders, and homeowners navigate custom window
            and door systems — from specification through installation.
          </motion.p>

          <motion.div
            variants={staggerItem}
            className="mt-10 flex flex-col gap-4 sm:flex-row"
          >
            <Button href="/contact" variant="primary" size="lg">
              Schedule Consultation
            </Button>
            <Button href="/showroom" variant="outline" size="lg" className="border-white/20 text-white hover:bg-white/5 hover:text-white">
              Visit Showroom
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-[10px] uppercase tracking-[0.2em] text-neutral-warm-500">
            Scroll
          </span>
          <svg
            className="h-5 w-5 text-neutral-warm-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M19 14l-7 7m0 0l-7-7"
            />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
}
