import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/metadata";
import { PageHero } from "@/components/layout/PageHero";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { COMPANY } from "@/lib/constants";

export const metadata: Metadata = generatePageMetadata({
  title: "Terms of Service",
  description: "Terms of Service for HDR Windows, a Horizon Design & Renovation company.",
  path: "/terms",
});

export default function TermsPage() {
  return (
    <>
      <PageHero
        title="Terms of Service"
        subtitle="Legal"
        description={`Last updated: ${new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}`}
        compact
      />

      <Section>
        <Container>
          <div className="mx-auto max-w-3xl space-y-10 text-neutral-warm-600 leading-relaxed">
            <div>
              <h2 className="mb-4 font-serif text-xl font-semibold text-neutral-warm-900">
                Use of This Website
              </h2>
              <p>
                This website is provided by {COMPANY.name} for informational
                purposes. By accessing or using this site, you agree to these
                terms. We reserve the right to modify or discontinue any part of
                the site at any time without notice.
              </p>
            </div>

            <div>
              <h2 className="mb-4 font-serif text-xl font-semibold text-neutral-warm-900">
                No Warranty
              </h2>
              <p>
                The information on this website is provided &ldquo;as is&rdquo;
                without warranty of any kind. Product specifications, lead times,
                and pricing information are subject to change. Final specifications
                are governed by written proposals and purchase agreements.
              </p>
            </div>

            <div>
              <h2 className="mb-4 font-serif text-xl font-semibold text-neutral-warm-900">
                Intellectual Property
              </h2>
              <p>
                All content on this site, including text, images, logos, and
                design, is the property of {COMPANY.name} or its licensors and
                may not be reproduced without written permission.
              </p>
            </div>

            <div>
              <h2 className="mb-4 font-serif text-xl font-semibold text-neutral-warm-900">
                Contact
              </h2>
              <p>
                For questions about these terms, please contact us at{" "}
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
