import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/metadata";
import { PageHero } from "@/components/layout/PageHero";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SubmitPlansForm } from "@/components/forms/SubmitPlansForm";

export const metadata: Metadata = generatePageMetadata({
  title: "Submit Plans for Quote",
  description:
    "Send HDR Windows your architectural plans, lead sheet, or window schedule for a detailed specification and quote. We respond within one business day.",
  path: "/submit-plans",
});

export default function SubmitPlansPage() {
  return (
    <>
      <PageHero
        title="Submit Plans for Quote"
        subtitle="For Architects, Builders & Developers"
        description="Send us your plans, window schedule, or lead sheet. We'll review the scope and respond with manufacturer recommendations and a detailed quote within one business day."
      />

      <Section>
        <Container>
          <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1fr_320px]">
            <div>
              <SubmitPlansForm />
            </div>

            <aside className="space-y-8 border-l border-neutral-warm-200 pl-8">
              <div>
                <h3 className="mb-3 text-xs font-semibold uppercase tracking-[0.15em] text-brand-terracotta">
                  What to Include
                </h3>
                <ul className="space-y-2 text-sm text-neutral-warm-600">
                  <li>• Full architectural plans (PDF)</li>
                  <li>• Window & door schedule / lead sheet</li>
                  <li>• Elevations and key sections</li>
                  <li>• Structural notes for oversized openings</li>
                  <li>• Manufacturer preferences (if any)</li>
                </ul>
              </div>

              <div>
                <h3 className="mb-3 text-xs font-semibold uppercase tracking-[0.15em] text-brand-terracotta">
                  Response Time
                </h3>
                <p className="text-sm text-neutral-warm-600">
                  Confirmation within 2 hours during business hours. Full review and preliminary specification within one business day.
                </p>
              </div>

              <div>
                <h3 className="mb-3 text-xs font-semibold uppercase tracking-[0.15em] text-brand-terracotta">
                  Confidentiality
                </h3>
                <p className="text-sm text-neutral-warm-600">
                  Plans are shared only with the HDR specification team. We&apos;re happy to sign an NDA on request.
                </p>
              </div>
            </aside>
          </div>
        </Container>
      </Section>
    </>
  );
}
