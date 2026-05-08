import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface CardProps {
  href?: string;
  image?: {
    src: string;
    alt: string;
  };
  children: React.ReactNode;
  className?: string;
  aspectRatio?: "square" | "landscape" | "portrait";
}

const aspectStyles = {
  square: "aspect-square",
  landscape: "aspect-[4/3]",
  portrait: "aspect-[3/4]",
};

export function Card({
  href,
  image,
  children,
  className,
  aspectRatio = "landscape",
}: CardProps) {
  const content = (
    <div
      className={cn(
        "group relative overflow-hidden bg-white",
        className
      )}
    >
      {image && (
        <div className={cn("relative overflow-hidden", aspectStyles[aspectRatio])}>
          <Image
            src={image.src}
            alt={image.alt}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      )}
      <div className="p-6">{children}</div>
    </div>
  );

  if (href) {
    return (
      <Link href={href} className="block">
        {content}
      </Link>
    );
  }

  return content;
}
