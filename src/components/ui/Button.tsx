import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "outline" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

type ButtonAsButton = {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  children: React.ReactNode;
  href?: never;
} & Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "children" | "className">;

type ButtonAsLink = {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  children: React.ReactNode;
  href: string;
};

type ButtonProps = ButtonAsButton | ButtonAsLink;

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-brand-terracotta text-white hover:bg-brand-terracotta-dark",
  secondary:
    "bg-brand-brown text-white hover:bg-brand-brown-dark",
  outline:
    "border border-neutral-warm-300 text-neutral-warm-800 hover:bg-neutral-warm-100",
  ghost:
    "text-neutral-warm-600 hover:text-neutral-warm-900 hover:bg-neutral-warm-100",
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-sm",
  lg: "px-8 py-4 text-base",
};

export function Button({
  variant = "primary",
  size = "md",
  className,
  children,
  ...props
}: ButtonProps) {
  const styles = cn(
    "inline-flex items-center justify-center font-medium tracking-wide transition-colors duration-300 rounded-none",
    variantStyles[variant],
    sizeStyles[size],
    className
  );

  if ("href" in props && props.href) {
    return (
      <Link href={props.href} className={styles}>
        {children}
      </Link>
    );
  }

  const { href: _, ...buttonProps } = props as ButtonAsButton;

  return (
    <button
      className={styles}
      {...buttonProps}
    >
      {children}
    </button>
  );
}
