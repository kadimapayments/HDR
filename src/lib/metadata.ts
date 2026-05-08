import type { Metadata } from "next";
import { SITE_NAME, SITE_DESCRIPTION, SITE_URL } from "./constants";

interface MetadataInput {
  title?: string;
  description?: string;
  ogImage?: string;
  path?: string;
  type?: "website" | "article";
}

export function generatePageMetadata({
  title,
  description,
  ogImage,
  path = "",
  type = "website",
}: MetadataInput = {}): Metadata {
  const fullTitle = title
    ? `${title} | ${SITE_NAME}`
    : `${SITE_NAME} | Luxury Architectural Windows & Doors in Los Angeles`;

  const desc = description || SITE_DESCRIPTION;

  return {
    title: fullTitle,
    description: desc,
    openGraph: {
      title: fullTitle,
      description: desc,
      url: `${SITE_URL}${path}`,
      siteName: SITE_NAME,
      images: [ogImage || "/images/og-default.jpg"],
      type,
      locale: "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description: desc,
    },
    alternates: {
      canonical: `${SITE_URL}${path}`,
    },
  };
}
