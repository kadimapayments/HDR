"use client";

import { useEffect, useRef } from "react";

/**
 * reCAPTCHA v2 Checkbox widget.
 * Explicitly calls grecaptcha.render() after mount so the widget appears
 * correctly on both full page loads and Next.js client-side navigation.
 */
export function RecaptchaWidget() {
  const containerRef = useRef<HTMLDivElement>(null);
  const rendered = useRef(false);

  useEffect(() => {
    const sitekey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;
    if (!sitekey || rendered.current) return;

    const render = () => {
      if (!containerRef.current || rendered.current) return;
      // Clear any auto-rendered widget first
      containerRef.current.innerHTML = "";
      (window as any).grecaptcha.render(containerRef.current, { sitekey });
      rendered.current = true;
    };

    if ((window as any).grecaptcha?.render) {
      (window as any).grecaptcha.ready(render);
    } else {
      // Script not yet loaded — poll until ready
      const interval = setInterval(() => {
        if ((window as any).grecaptcha?.render) {
          (window as any).grecaptcha.ready(render);
          clearInterval(interval);
        }
      }, 100);
      return () => clearInterval(interval);
    }
  }, []);

  return <div ref={containerRef} />;
}
