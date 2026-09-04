import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/metadata";
import { PageHero } from "@/components/layout/PageHero";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { FinalCTA } from "@/components/home/FinalCTA";
import { PortfolioGrid } from "@/components/portfolio/PortfolioGrid";

export const metadata: Metadata = generatePageMetadata({
  title: "Portfolio",
  description:
    "Explore HDR Windows' portfolio of luxury residential projects across Los Angeles, featuring Fleetwood, Loewen, Andersen, and more.",
  path: "/portfolio",
});

export default function PortfolioPage() {
  return (
    <>
      <PageHero
        title="Our Work"
        subtitle="Portfolio"
        description="A selection of residential and commercial projects across Southern CA, each with unique architectural requirements and custom solutions."
      />

      <Section>
        <Container>
          <PortfolioGrid />
        </Container>
      </Section>

      <FinalCTA />
    </>
  );
}
