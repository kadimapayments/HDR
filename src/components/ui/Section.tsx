import { cn } from "@/lib/utils";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  dark?: boolean;
}

export function Section({ children, className, id, dark }: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "pt-14 pb-20 md:pt-20 md:pb-28 lg:pt-24 lg:pb-32",
        dark && "bg-neutral-warm-900 text-white",
        className
      )}
    >
      {children}
    </section>
  );
}
