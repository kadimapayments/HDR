import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section className="flex min-h-[70vh] items-center bg-neutral-warm-50 pt-20">
      <Container className="text-center">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-brand-terracotta">
          404
        </p>
        <h1 className="mt-4 font-serif text-4xl font-semibold text-neutral-warm-900 md:text-5xl">
          Page Not Found
        </h1>
        <p className="mx-auto mt-4 max-w-md text-neutral-warm-500">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <div className="mt-8">
          <Button href="/" variant="primary" size="lg">
            Return Home
          </Button>
        </div>
      </Container>
    </section>
  );
}
