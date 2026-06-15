import type { MetadataRoute } from "next";

const BASE_URL = "https://hdrwindows.com";

const manufacturerSlugs = [
  "andersen",
  "euroline",
  "fleetwood",
  "lacantina",
  "loewen",
  "marvin",
  "nanawall",
  "windsor",
  "all-weather",
  "iwc",
  "plygem",
];

const systemSlugs = [
  "multi-slide-doors",
  "pivot-doors",
  "steel-windows",
  "contemporary-aluminum",
  "energy-efficient",
  "oversized-openings",
  "security-glass",
  "bifold-doors",
  "automated-systems",
  "window-wall",
  "pocket-doors",
];

const resourceSlugs = [
  "steel-vs-aluminum-windows",
  "title-24-window-requirements",
  "laminated-glass-residential-security",
  "oversized-window-openings",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    { url: BASE_URL, priority: 1.0, changeFrequency: "weekly" as const },
    { url: `${BASE_URL}/about`, priority: 0.8, changeFrequency: "monthly" as const },
    { url: `${BASE_URL}/manufacturers`, priority: 0.9, changeFrequency: "weekly" as const },
    { url: `${BASE_URL}/systems`, priority: 0.9, changeFrequency: "weekly" as const },
    { url: `${BASE_URL}/resources`, priority: 0.7, changeFrequency: "weekly" as const },
    { url: `${BASE_URL}/portfolio`, priority: 0.7, changeFrequency: "monthly" as const },
    { url: `${BASE_URL}/showroom`, priority: 0.8, changeFrequency: "monthly" as const },
    { url: `${BASE_URL}/showroom/schedule`, priority: 0.7, changeFrequency: "monthly" as const },
    { url: `${BASE_URL}/contact`, priority: 0.8, changeFrequency: "monthly" as const },
    { url: `${BASE_URL}/submit-plans`, priority: 0.7, changeFrequency: "monthly" as const },
    { url: `${BASE_URL}/service`, priority: 0.6, changeFrequency: "monthly" as const },
    { url: `${BASE_URL}/interiors`, priority: 0.6, changeFrequency: "monthly" as const },
    { url: `${BASE_URL}/for-architects`, priority: 0.7, changeFrequency: "monthly" as const },
    { url: `${BASE_URL}/for-builders`, priority: 0.7, changeFrequency: "monthly" as const },
    { url: `${BASE_URL}/for-developers`, priority: 0.7, changeFrequency: "monthly" as const },
    { url: `${BASE_URL}/for-homeowners`, priority: 0.7, changeFrequency: "monthly" as const },
    { url: `${BASE_URL}/who-we-serve`, priority: 0.6, changeFrequency: "monthly" as const },
    { url: `${BASE_URL}/fire-rebuild`, priority: 0.6, changeFrequency: "monthly" as const },
    { url: `${BASE_URL}/privacy`, priority: 0.2, changeFrequency: "yearly" as const },
    { url: `${BASE_URL}/terms`, priority: 0.2, changeFrequency: "yearly" as const },
  ];

  const manufacturerPages = manufacturerSlugs.map((slug) => ({
    url: `${BASE_URL}/manufacturers/${slug}`,
    priority: 0.8,
    changeFrequency: "monthly" as const,
  }));

  const systemPages = systemSlugs.map((slug) => ({
    url: `${BASE_URL}/systems/${slug}`,
    priority: 0.7,
    changeFrequency: "monthly" as const,
  }));

  const resourcePages = resourceSlugs.map((slug) => ({
    url: `${BASE_URL}/resources/${slug}`,
    priority: 0.6,
    changeFrequency: "monthly" as const,
  }));

  return [...staticPages, ...manufacturerPages, ...systemPages, ...resourcePages];
}
