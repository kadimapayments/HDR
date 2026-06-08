import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/metadata";
import { PageHero } from "@/components/layout/PageHero";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { ServiceForm } from "@/components/forms/ServiceForm";
import { COMPANY } from "@/lib/constants";

export const metadata: Metadata = generatePageMetadata({
  title: "Open a Service Ticket",
  description:
    "Report an issue with windows or doors HDR supplied or installed. Our service team will respond as soon as possible.",
  path: "/service",
});

export default function ServicePage() {
  return (
    <>
      <PageHero
        title="Service & Warranty"
        subtitle="For Existing Customers"
        description="Open a ticket with our service team. The more detail you can provide (manufacturer, order number, photos) the faster we can resolve the issue."
      />

      <Section>
        <Container>
          <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1fr_320px]">
            <div>
              <ServiceForm />
            </div>

            <aside className="space-y-8 border-l border-neutral-warm-200 pl-8">
              <div>
                <h3 className="mb-3 text-xs font-semibold uppercase tracking-[0.15em] text-brand-terracotta">
                  Response Time
                </h3>
                <p className="text-sm text-neutral-warm-600">
                  Tickets are routed directly to our service team. You&apos;ll hear back as soon as possible.
                </p>
              </div>

              <div>
                <h3 className="mb-3 text-xs font-semibold uppercase tracking-[0.15em] text-brand-terracotta">
                  Urgent Issues
                </h3>
                <p className="text-sm text-neutral-warm-600">
                  For active leaks, security issues, or anything that can&apos;t wait, please call us directly:
                </p>
                <a
                  href={`tel:${COMPANY.phoneRaw}`}
                  className="mt-2 block text-base font-semibold text-neutral-warm-900 hover:text-brand-terracotta"
                >
                  {COMPANY.phone}
                </a>
              </div>

              <div>
                <h3 className="mb-3 text-xs font-semibold uppercase tracking-[0.15em] text-brand-terracotta">
                  What Helps Us Help You
                </h3>
                <ul className="space-y-2 text-sm text-neutral-warm-600">
                  <li>• Manufacturer name and model if known</li>
                  <li>• Order or invoice number</li>
                  <li>• Approximate purchase / install date</li>
                  <li>• Clear photos of the issue and surrounding area</li>
                </ul>
              </div>
            </aside>
          </div>
        </Container>
      </Section>
    </>
  );
}
