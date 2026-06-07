"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { NAV_ITEMS } from "@/lib/constants";
import { Button } from "@/components/ui/Button";

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
}

export function MobileMenu({ open, onClose }: MobileMenuProps) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-40 bg-neutral-warm-950 lg:hidden"
        >
          <nav className="flex h-full flex-col justify-start pt-40 pb-8 px-8 overflow-y-auto">
            <motion.div
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.05, delayChildren: 0.1 } },
              }}
              className="space-y-1"
            >
              {NAV_ITEMS.map((item) => (
                <motion.div
                  key={item.label}
                  variants={{
                    hidden: { opacity: 0, x: -20 },
                    visible: { opacity: 1, x: 0 },
                  }}
                >
                  <Link
                    href={item.href}
                    onClick={onClose}
                    className="block py-3 font-serif text-3xl font-semibold text-white transition-colors hover:text-brand-terracotta"
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}

              <motion.div
                variants={{
                  hidden: { opacity: 0, x: -20 },
                  visible: { opacity: 1, x: 0 },
                }}
                className="pt-8"
              >
                <span onClick={onClose}>
                  <Button
                    href="/contact"
                    variant="primary"
                    size="lg"
                    className="w-full"
                  >
                    Book Consultation
                  </Button>
                </span>
              </motion.div>
            </motion.div>
          </nav>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
