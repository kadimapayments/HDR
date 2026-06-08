import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/metadata";
import { PageHero } from "@/components/layout/PageHero";
import { WhoWeServe } from "@/components/home/WhoWeServe";
import { FinalCTA } from "@/components/home/FinalCTA";

export const metadata: Metadata = generatePageMetadata({
  title: "Who We Serve",
  description:
    "HDR Windows works with architects, builders, developers, and homeowners on luxury window and door projects across Los Angeles.",
  path: "/who-we-serve",
});

export default function WhoWeServePage() {
  return (
    <>
      <PageHero
        title="Who We Serve"
        subtitle="Clients"
        description="From concept to completion, we partner with the full team behind exceptional homes: architects, builders, developers, and homeowners."
      />
      <WhoWeServe />
      <FinalCTA />
    </>
  );
}
