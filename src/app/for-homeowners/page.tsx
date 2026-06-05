import type { Metadata } from "next";
import Image from "next/image";
import { generatePageMetadata } from "@/lib/metadata";
import { PageHero } from "@/components/layout/PageHero";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Heading } from "@/components/ui/Heading";
import { Button } from "@/components/ui/Button";
import { AnimatedReveal } from "@/components/shared/AnimatedReveal";
import { FinalCTA } from "@/components/home/FinalCTA";

export const metadata: Metadata = generatePageMetadata({
  title: "For Homeowners",
  description:
    "HDR Windows helps Los Angeles homeowners choose the right windows and doors for new builds and renovations — personal guidance, showroom visits, and expert recommendations.",
  path: "/for-homeowners",
});

const steps = [
  {
    step: "01",
    title: "Visit Our Showroom",
    description:
      "See and operate full-scale window and door displays from the industry's best manufacturers. There's no substitute for experiencing the hardware, the action, and the scale in person.",
  },
  {
    step: "02",
    title: "Tell Us About Your Home",
    description:
      "Share your plans, inspiration, and goals. Whether you're building new or renovating, we'll ask the right questions to understand what you need — style, performance, budget, and timeline.",
  },
  {
    step: "03",
    title: "Receive a Clear Recommendation",
    description:
      "We'll recommend specific systems and manufacturers that match your project — with straight answers on pricing, lead times, and what to expect during installation.",
  },
  {
    step: "04",
    title: "We Handle the Rest",
    description:
      "From order through delivery and installation, we manage the details. You'll have one point of contact and a team that stays accountable from start to finish.",
  },
];

const benefits = [
  {
    title: "No Overwhelm",
    description:
      "We carry 9+ manufacturers with hundreds of configurations. Instead of handing you a catalog, we narrow it down to the right options for your specific project.",
  },
  {
    title: "Showroom Experience",
    description:
      "Our West Los Angeles showroom features full-scale operating displays — so you can see exactly how a system looks and feels before committing.",
  },
  {
    title: "Honest Guidance",
    description:
      "We'll tell you when a less expensive system is the right call and when it isn't. Our goal is the right fit for your home, not the highest-margin sale.",
  },
  {
    title: "Design Coordination",
    description:
      "Working with an architect or interior designer? We coordinate directly with your design team to make sure every selection aligns with the overall vision.",
  },
  {
    title: "Managed Installation",
    description:
      "We work with trusted installation crews and stay involved through completion — so your windows and doors are installed to manufacturer standards.",
  },
  {
    title: "Warranty Support",
    description:
      "After installation, we remain your point of contact for any service or warranty issues. One call gets it handled.",
  },
];

export default function ForHomeownersPage() {
  return (
    <>
      <PageHero
        title="The Right Windows for Your Home"
        subtitle="For Homeowners"
        description="Whether you're building new or renovating, we make the window and door selection process clear, personal, and stress-free."
      />

      {/* Value Prop */}
      <Section>
        <Container>
          <div className="grid gap-16 lg:grid-cols-2">
            <AnimatedReveal>
              <Heading level="h2">
                Expert Guidance, Start to Finish
              </Heading>
              <div className="mt-8 space-y-6 text-neutral-warm-600 leading-relaxed">
                <p>
                  Windows and doors are among the most impactful — and most
                  permanent — decisions you'll make in a home project. The wrong
                  choice affects how your home looks, how it feels, and how it
                  performs for decades.
                </p>
                <p>
                  We've helped hundreds of Los Angeles homeowners navigate these
                  decisions. We know the products deeply, we're honest about
                  trade-offs, and we stay involved through installation to make
                  sure everything is right.
                </p>
              </div>
              <div className="mt-10">
                <Button
                  href="/showroom/schedule"
                  variant="primary"
                  size="lg"
                >
                  Visit Our Showroom
                </Button>
              </div>
            </AnimatedReveal>

            <AnimatedReveal delay={0.2}>
              <div className="relative aspect-[4/3] overflow-hidden bg-neutral-warm-200">
                <Image
                  src="/images/showroom/showroom-loewen-wood.jpg"
                  alt="HDR Windows showroom — experiencing window and door systems in person"
                  fill
                  className="object-cover"
                />
              </div>
            </AnimatedReveal>
          </div>
        </Container>
      </Section>

      {/* Process */}
      <Section className="bg-neutral-warm-100">
        <Container>
          <AnimatedReveal className="mb-16 text-center">
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-brand-terracotta">
              How It Works
            </p>
            <Heading level="h2">Simple from the Start</Heading>
          </AnimatedReveal>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((item, i) => (
              <AnimatedReveal key={item.step} delay={i * 0.1}>
                <div className="border-t-2 border-brand-terracotta pt-6">
                  <span className="text-xs font-medium text-brand-terracotta">
                    {item.step}
                  </span>
                  <h3 className="mt-3 font-serif text-lg font-semibold text-neutral-warm-900">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-neutral-warm-500">
                    {item.description}
                  </p>
                </div>
              </AnimatedReveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* Benefits */}
      <Section>
        <Container>
          <AnimatedReveal className="mb-12 text-center">
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-brand-terracotta">
              What to Expect
            </p>
            <Heading level="h2">A Different Kind of Experience</Heading>
          </AnimatedReveal>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {benefits.map((benefit, i) => (
              <AnimatedReveal key={benefit.title} delay={i * 0.08}>
                <div className="h-full border border-neutral-warm-200 bg-white p-8">
                  <h3 className="font-serif text-lg font-semibold text-neutral-warm-900">
                    {benefit.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-neutral-warm-500">
                    {benefit.description}
                  </p>
                </div>
              </AnimatedReveal>
            ))}
          </div>

          <AnimatedReveal className="mt-16 text-center">
            <Button href="/contact" variant="primary" size="lg">
              Start a Conversation
            </Button>
          </AnimatedReveal>
        </Container>
      </Section>

      <FinalCTA />
    </>
  );
}
