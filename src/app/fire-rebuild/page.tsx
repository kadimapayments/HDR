import type { Metadata } from "next";
import Link from "next/link";
import { generatePageMetadata } from "@/lib/metadata";
import { PageHero } from "@/components/layout/PageHero";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Heading } from "@/components/ui/Heading";
import { Button } from "@/components/ui/Button";
import { AnimatedReveal } from "@/components/shared/AnimatedReveal";
import { COMPANY, FIRE_REBUILD_PROGRAMS } from "@/lib/constants";

export const metadata: Metadata = generatePageMetadata({
  title: "CA Wildfire Rebuild Program",
  description:
    "HDR Windows is supporting Palisades, Eaton, and Malibu fire rebuild with discounted manufacturer pricing, expedited product selection, and dedicated project management for affected homeowners.",
  path: "/fire-rebuild",
});

const offerings = [
  {
    title: "Verified Manufacturer Discounts",
    body: "We've coordinated directly with our manufacturer partners to secure discounted pricing programs specifically for homeowners and rebuilders affected by the Palisades, Eaton, and Malibu fires.",
  },
  {
    title: "Expedited Product Selection & Lead Times",
    body: "Rebuild projects are routed through a dedicated fast-track process. We work alongside your architect and builder to compress lead times where manufacturers can accommodate it, without sacrificing quality.",
  },
  {
    title: "Code & Compliance Guidance",
    body: "Title 24 energy compliance and updated WUI (Wildland-Urban Interface) requirements affect every rebuild. We help match the right systems to current code requirements (and document them), without surprises during permit review.",
  },
  {
    title: "No-Cost Project Consultation",
    body: "If you're rebuilding, we'll review your plans and existing window schedule at no cost. You leave with a written product estimate and a clear next step, whether or not you ultimately work with us.",
  },
];

const steps = [
  {
    n: "01",
    title: "Tell us about the project",
    body: "Send your plans, scope, or even a copy of the original window schedule from the lost home. Use the Submit Plans page or call our office directly.",
  },
  {
    n: "02",
    title: "We coordinate with manufacturers",
    body: "We confirm which manufacturer programs apply, secure discounted pricing in writing, and align lead times to your construction schedule.",
  },
  {
    n: "03",
    title: "Product plan & quote",
    body: "You receive a complete product plan, pricing breakdown, and timeline. We coordinate directly with your architect and builder, so there's no telephone game.",
  },
  {
    n: "04",
    title: "Procurement & delivery",
    body: "Once approved, we manage the order and delivery, connect you with trusted, licensed installers, and stay involved through punch list and warranty registration.",
  },
];

export default function FireRebuildPage() {
  return (
    <>
      <PageHero
        title="Helping You Rebuild"
        subtitle="Palisades, Eaton & Malibu Fires"
        backgroundImage="/images/fire-rebuild/hero.jpg"
        description="To the families and communities rebuilding from the Palisades, Eaton, and Malibu fires, we're here to help. HDR has coordinated discounted manufacturer pricing and a dedicated fast-track process for rebuild projects."
      />

      {/* Statement of support */}
      <Section>
        <Container>
          <AnimatedReveal>
            <div className="mx-auto max-w-3xl text-center">
              <p className="font-serif text-2xl leading-relaxed text-neutral-warm-800 md:text-3xl">
                Rebuilding a home isn&apos;t just construction. It&apos;s
                reclaiming a place. We&apos;re committed to making the windows
                and doors part of that story straightforward, not another
                source of stress.
              </p>
            </div>
          </AnimatedReveal>
        </Container>
      </Section>

      {/* What's included */}
      <Section className="bg-neutral-warm-100">
        <Container>
          <AnimatedReveal className="mb-12 text-center">
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-brand-terracotta">
              The Program
            </p>
            <Heading level="h2">What&apos;s Included</Heading>
          </AnimatedReveal>

          <div className="grid gap-8 md:grid-cols-2">
            {offerings.map((o, i) => (
              <AnimatedReveal key={o.title} delay={i * 0.05}>
                <div className="border-l-2 border-brand-terracotta bg-white p-6 pl-7">
                  <h3 className="font-serif text-xl font-semibold text-neutral-warm-900">
                    {o.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-neutral-warm-600">
                    {o.body}
                  </p>
                </div>
              </AnimatedReveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* Manufacturer programs */}
      <Section>
        <Container>
          <AnimatedReveal className="mb-12">
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-brand-terracotta">
              Participating Manufacturers
            </p>
            <Heading level="h2">Verified Rebuild Programs</Heading>
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-neutral-warm-600">
              Several manufacturers have announced dedicated rebuild programs
              for affected homeowners. We&apos;re actively coordinating
              additional programs and will publish them here as they&apos;re
              confirmed.
            </p>
          </AnimatedReveal>

          <div className="grid gap-6 md:grid-cols-2">
            {FIRE_REBUILD_PROGRAMS.map((p, i) => (
              <AnimatedReveal key={p.manufacturer} delay={i * 0.1}>
                <div className="flex h-full flex-col border border-neutral-warm-200 bg-white p-8">
                  <p className="text-xs font-medium uppercase tracking-[0.15em] text-brand-terracotta">
                    {p.manufacturer}
                  </p>
                  <h3 className="mt-2 font-serif text-2xl font-semibold text-neutral-warm-900">
                    {p.headline}
                  </h3>
                  <p className="mt-4 flex-1 text-sm leading-relaxed text-neutral-warm-600">
                    {p.detail}
                  </p>
                  <div className="mt-6 flex flex-wrap items-center gap-4">
                    <Link
                      href={`/manufacturers/${p.slug}`}
                      className="text-sm font-medium text-neutral-warm-900 underline-offset-4 hover:underline"
                    >
                      About {p.manufacturer}
                    </Link>
                    <a
                      href={p.externalUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-medium text-brand-terracotta underline-offset-4 hover:underline"
                    >
                      Manufacturer page →
                    </a>
                  </div>
                </div>
              </AnimatedReveal>
            ))}

            <AnimatedReveal delay={(FIRE_REBUILD_PROGRAMS.length) * 0.1}>
              <div className="flex h-full flex-col border border-dashed border-neutral-warm-300 bg-neutral-warm-50 p-8">
                <p className="text-xs font-medium uppercase tracking-[0.15em] text-neutral-warm-500">
                  Coming Soon
                </p>
                <h3 className="mt-2 font-serif text-2xl font-semibold text-neutral-warm-700">
                  Additional Manufacturer Programs
                </h3>
                <p className="mt-4 flex-1 text-sm leading-relaxed text-neutral-warm-500">
                  We&apos;re actively coordinating discounted pricing programs
                  with our other manufacturer partners. Reach out and
                  we&apos;ll confirm what applies to your project today.
                </p>
              </div>
            </AnimatedReveal>
          </div>
        </Container>
      </Section>

      {/* Process */}
      <Section className="bg-neutral-warm-950 text-white">
        <Container>
          <AnimatedReveal className="mb-16">
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-brand-terracotta">
              How It Works
            </p>
            <Heading level="h2" className="text-white">
              A Straightforward Process
            </Heading>
          </AnimatedReveal>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((s, i) => (
              <AnimatedReveal key={s.n} delay={i * 0.1}>
                <div className="border-t border-neutral-warm-800 pt-6">
                  <p className="font-serif text-3xl text-brand-terracotta">
                    {s.n}
                  </p>
                  <h3 className="mt-3 font-serif text-lg font-semibold text-white">
                    {s.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-neutral-warm-400">
                    {s.body}
                  </p>
                </div>
              </AnimatedReveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* CTA */}
      <Section>
        <Container>
          <AnimatedReveal className="mx-auto max-w-3xl text-center">
            <Heading level="h2">Start Your Rebuild Conversation</Heading>
            <p className="mt-6 text-base leading-relaxed text-neutral-warm-600">
              Whether you&apos;re mid-design with an architect or just
              starting to think about product selection, reach out. We&apos;ll
              respond as soon as possible.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <Button href="/submit-plans" variant="primary" size="lg">
                Submit Plans
              </Button>
              <Button href="/contact" variant="outline" size="lg">
                Schedule a Call
              </Button>
              <a
                href={`tel:${COMPANY.phoneRaw}`}
                className="text-sm font-medium tracking-wide text-neutral-warm-700 underline-offset-4 hover:text-brand-terracotta hover:underline"
              >
                Or call {COMPANY.phone}
              </a>
            </div>
          </AnimatedReveal>
        </Container>
      </Section>
    </>
  );
}
