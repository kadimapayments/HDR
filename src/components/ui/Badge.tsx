import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "terracotta" | "brown" | "outline";
  className?: string;
}

const variantStyles = {
  default: "bg-neutral-warm-100 text-neutral-warm-700",
  terracotta: "bg-brand-terracotta/10 text-brand-terracotta",
  brown: "bg-brand-brown/10 text-brand-brown",
  outline: "border border-neutral-warm-300 text-neutral-warm-600",
};

export function Badge({ children, variant = "default", className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center px-3 py-1 text-xs font-medium tracking-wide uppercase",
        variantStyles[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
