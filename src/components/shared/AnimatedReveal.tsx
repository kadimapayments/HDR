"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { Variants } from "framer-motion";
import { useEffect, useState } from "react";
import { fadeUp } from "@/lib/animations";
import { cn } from "@/lib/utils";

interface AnimatedRevealProps {
  children: React.ReactNode;
  variants?: Variants;
  delay?: number;
  className?: string;
  once?: boolean;
}

export function AnimatedReveal({
  children,
  variants = fadeUp,
  delay = 0,
  className,
  once = true,
}: AnimatedRevealProps) {
  const prefersReducedMotion = useReducedMotion();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
  }, []);

  if (prefersReducedMotion || isMobile) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount: 0.1 }}
      variants={variants}
      transition={delay ? { delay } : undefined}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}
