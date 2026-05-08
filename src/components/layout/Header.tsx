"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { NAV_ITEMS } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import { MobileMenu } from "./MobileMenu";
import { FireRebuildBanner } from "./FireRebuildBanner";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-50">
        <FireRebuildBanner />
      <header
        className={cn(
          "transition-all duration-500",
          scrolled
            ? "bg-neutral-warm-950/90 backdrop-blur-xl shadow-lg"
            : "bg-transparent"
        )}
      >
        <div className="mx-auto flex h-20 max-w-[1400px] items-center justify-between px-6 md:px-8 xl:px-12">
          {/* Logo */}
          <Link href="/" className="relative z-10">
            <Image
              src="/images/logos/hdr-logo-white.svg"
              alt="Horizon Design & Renovation"
              width={240}
              height={58}
              className="h-10 w-auto sm:h-12"
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden items-center gap-1 lg:flex">
            {NAV_ITEMS.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() =>
                  "children" in item ? setActiveDropdown(item.label) : undefined
                }
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href={item.href}
                  className={cn(
                    "px-3 py-2 text-[13px] font-medium tracking-wide transition-colors duration-300",
                    scrolled
                      ? "text-neutral-warm-300 hover:text-white"
                      : "text-white/80 hover:text-white"
                  )}
                >
                  {item.label}
                  {"children" in item && item.children && (
                    <svg
                      className="ml-1 inline-block h-3 w-3"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  )}
                </Link>

                {/* Dropdown */}
                <AnimatePresence>
                  {"children" in item &&
                    item.children &&
                    activeDropdown === item.label && (
                      <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 8 }}
                        transition={{ duration: 0.2 }}
                        className="absolute left-0 top-full mt-1 min-w-[220px] bg-neutral-warm-950/95 backdrop-blur-xl p-2"
                      >
                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className="block px-4 py-2.5 text-[13px] text-neutral-warm-300 transition-colors hover:bg-white/5 hover:text-white"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                </AnimatePresence>
              </div>
            ))}
          </nav>

          {/* Right Side */}
          <div className="flex items-center gap-4">
            <Link
              href="/service"
              className={cn(
                "hidden whitespace-nowrap text-[12px] font-medium tracking-wide transition-colors duration-300 lg:inline-flex",
                scrolled
                  ? "text-neutral-warm-400 hover:text-white"
                  : "text-white/70 hover:text-white",
              )}
            >
              Service
            </Link>
            <div className="hidden lg:block">
              <Button
                href="/contact"
                variant="primary"
                size="sm"
                className="whitespace-nowrap"
              >
                Book Consultation
              </Button>
            </div>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="relative z-10 flex h-10 w-10 items-center justify-center lg:hidden"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
            >
              <div className="flex flex-col gap-1.5">
                <span
                  className={cn(
                    "block h-[2px] w-6 transition-all duration-300",
                    mobileOpen
                      ? "translate-y-[4px] rotate-45 bg-white"
                      : scrolled
                        ? "bg-white"
                        : "bg-white"
                  )}
                />
                <span
                  className={cn(
                    "block h-[2px] w-6 transition-all duration-300",
                    mobileOpen
                      ? "-translate-y-[4px] -rotate-45 bg-white"
                      : scrolled
                        ? "bg-white"
                        : "bg-white"
                  )}
                />
              </div>
            </button>
          </div>
        </div>
      </header>
      </div>

      <MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}
