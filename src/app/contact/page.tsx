import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/metadata";
import { PageHero } from "@/components/layout/PageHero";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Heading } from "@/components/ui/Heading";
import { AnimatedReveal } from "@/components/shared/AnimatedReveal";
import { ContactForm } from "@/components/forms/ContactForm";
import { COMPANY } from "@/lib/constants";

export const metadata: Metadata = generatePageMetadata({
  title: "Contact",
  description:
    "Get in touch with HDR Windows. Schedule a consultation, request a quote, or visit our Los Angeles showroom.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Let's Talk"
        subtitle="Contact"
        description="Whether you're starting a new project or exploring options, we're here to help."
        compact
      />

      <Section>
        <Container>
          <div className="grid gap-16 lg:grid-cols-5">
            {/* Form */}
            <div className="lg:col-span-3">
              <AnimatedReveal>
                <Heading level="h2" className="mb-8">
                  Start a Conversation
                </Heading>
                <ContactForm />
              </AnimatedReveal>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-2">
              <AnimatedReveal delay={0.2}>
                <div className="space-y-10">
                  <div>
                    <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.15em] text-brand-terracotta">
                      Office
                    </h3>
                    <p className="text-neutral-warm-600">
                      {COMPANY.address.street}
                    </p>
                  </div>

                  <div>
                    <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.15em] text-brand-terracotta">
                      Phone
                    </h3>
                    <a
                      href={`tel:${COMPANY.phone}`}
                      className="text-neutral-warm-600 transition-colors hover:text-brand-terracotta"
                    >
                      {COMPANY.phone}
                    </a>
                  </div>

                  <div>
                    <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.15em] text-brand-terracotta">
                      Email
                    </h3>
                    <a
                      href={`mailto:${COMPANY.email}`}
                      className="text-neutral-warm-600 transition-colors hover:text-brand-terracotta"
                    >
                      {COMPANY.email}
                    </a>
                  </div>

                  <div>
                    <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.15em] text-brand-terracotta">
                      Showroom Hours
                    </h3>
                    <div className="space-y-1 text-sm text-neutral-warm-600">
                      <p>Monday – Friday: 9:00 AM – 5:00 PM</p>
                      <p>Saturday: By Appointment</p>
                      <p>Sunday: Closed</p>
                    </div>
                  </div>
                </div>
              </AnimatedReveal>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
