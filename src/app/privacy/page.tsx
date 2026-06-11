import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/metadata";
import { PageHero } from "@/components/layout/PageHero";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { COMPANY } from "@/lib/constants";

export const metadata: Metadata = generatePageMetadata({
  title: "Privacy Policy",
  description: "Privacy Policy for HDR Windows, a Horizon Design & Renovation company.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        title="Privacy Policy"
        subtitle="Legal"
        description={`Last updated: ${new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}`}
        compact
      />

      <Section>
        <Container>
          <div className="mx-auto max-w-3xl space-y-10 text-neutral-warm-600 leading-relaxed">
            <div>
              <h2 className="mb-4 font-serif text-xl font-semibold text-neutral-warm-900">
                Information We Collect
              </h2>
              <p>
                When you contact us, submit plans, or request a consultation through
                this website, we collect the information you voluntarily provide,
                such as your name, email address, phone number, and project details.
                We do not sell or rent your personal information to third parties.
              </p>
            </div>

            <div>
              <h2 className="mb-4 font-serif text-xl font-semibold text-neutral-warm-900">
                How We Use Your Information
              </h2>
              <p>
                We use the information you provide solely to respond to your
                inquiries, prepare specifications or quotes, and communicate about
                your project. We may contact you by phone or email regarding your
                request.
              </p>
            </div>

            <div>
              <h2 className="mb-4 font-serif text-xl font-semibold text-neutral-warm-900">
                Cookies & Analytics
              </h2>
              <p>
                This website may use cookies and analytics tools to understand how
                visitors interact with our content. This data is aggregated and
                anonymous. You may disable cookies in your browser settings at any
                time.
              </p>
            </div>

            <div>
              <h2 className="mb-4 font-serif text-xl font-semibold text-neutral-warm-900">
                Contact
              </h2>
              <p>
                For questions about this policy, please contact us at{" "}
                <a
                  href={`mailto:${COMPANY.email}`}
                  className="text-brand-terracotta underline hover:no-underline"
                >
                  {COMPANY.email}
                </a>
                .
              </p>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
