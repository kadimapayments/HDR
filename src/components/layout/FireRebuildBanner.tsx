"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const STORAGE_KEY = "hdr-fire-rebuild-banner-dismissed-v1";

export function FireRebuildBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.localStorage.getItem(STORAGE_KEY) !== "1") {
      setVisible(true);
    }
  }, []);

  if (!visible) return null;

  function dismiss() {
    try {
      window.localStorage.setItem(STORAGE_KEY, "1");
    } catch {
      /* ignore */
    }
    setVisible(false);
  }

  return (
    <div className="relative z-[60] bg-black text-white">
      <div className="mx-auto flex max-w-[1400px] items-center gap-3 px-6 py-2.5 md:px-8 xl:px-12">
        <Link
          href="/fire-rebuild"
          className="flex flex-1 items-center justify-center gap-2.5 text-center text-[12px] tracking-wide md:text-[13px]"
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.5}
            className="h-4 w-4 shrink-0 text-white"
            aria-hidden
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z"
            />
          </svg>
          <span>
            <strong className="font-semibold">Fire Rebuild Program:</strong>{" "}
            Support for homes impacted by the Palisades and Eaton fires.{" "}
            <span className="font-medium underline underline-offset-4">
              Learn more.
            </span>
          </span>
        </Link>
        <button
          onClick={dismiss}
          aria-label="Dismiss banner"
          className="shrink-0 p-1 text-white/60 transition-colors hover:text-white"
        >
          <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" d="M6 6l12 12M6 18L18 6" />
          </svg>
        </button>
      </div>
    </div>
  );
}
