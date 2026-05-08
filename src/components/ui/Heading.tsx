import { cn } from "@/lib/utils";

type HeadingLevel = "h1" | "h2" | "h3" | "h4";

interface HeadingProps {
  level?: HeadingLevel;
  children: React.ReactNode;
  className?: string;
  serif?: boolean;
}

const levelStyles: Record<HeadingLevel, string> = {
  h1: "text-[length:var(--font-size-h1)] leading-[var(--line-height-h1)] tracking-[var(--letter-spacing-heading)]",
  h2: "text-[length:var(--font-size-h2)] leading-[var(--line-height-h2)] tracking-[var(--letter-spacing-heading)]",
  h3: "text-[length:var(--font-size-h3)] leading-[var(--line-height-h3)]",
  h4: "text-[length:var(--font-size-h4)]",
};

export function Heading({
  level = "h2",
  children,
  className,
  serif = true,
}: HeadingProps) {
  const Component = level;

  return (
    <Component
      className={cn(
        levelStyles[level],
        serif ? "font-serif font-semibold" : "font-sans font-semibold",
        className
      )}
    >
      {children}
    </Component>
  );
}
