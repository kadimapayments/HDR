export const SITE_NAME = "HDR Windows";
export const SITE_FULL_NAME = "Horizon Design & Renovation";
export const SITE_TAGLINE =
  "Architectural Windows & Doors for Los Angeles's Finest Residences";
export const SITE_DESCRIPTION =
  "HDR Windows is Los Angeles's premier specification partner for luxury architectural windows and doors. We serve architects, builders, and homeowners with Fleetwood, NanaWall, Loewen, Andersen, and more.";
export const SITE_URL = "https://hdrwindows.com";

export const COMPANY = {
  name: "Horizon Design & Renovation",
  shortName: "HDR Windows",
  phone: "(310) 481-0859",
  phoneRaw: "+13104810859",
  email: "info@hdrwindows.com",
  serviceEmail: "service@hdrwindows.com",
  website: "HDRWindows.com",
  address: {
    street: "1852 S. Sepulveda Blvd",
    city: "Los Angeles",
    state: "CA",
    zip: "90025",
  },
  social: {
    instagram: "https://www.instagram.com/hdrwindows",
    facebook: "https://www.facebook.com/profile.php?id=100092972740061",
    linkedin: "https://www.linkedin.com/company/horizon-design-renovation/",
  },
} as const;

export const MANUFACTURERS = [
  { name: "Fleetwood", slug: "fleetwood", logo: "/images/manufacturers/fleetwood.jpg" },
  { name: "Andersen", slug: "andersen", logo: "/images/manufacturers/andersen.png" },
  { name: "Marvin", slug: "marvin", logo: "/images/manufacturers/marvin.jpg" },
  { name: "Loewen", slug: "loewen", logo: "/images/manufacturers/loewen.jpg" },
  { name: "NanaWall", slug: "nanawall", logo: "/images/manufacturers/nanawall.webp" },
  { name: "Euroline", slug: "euroline", logo: "/images/manufacturers/euroline.png", logoScale: 1.4, logoDarkBg: true },
  { name: "LaCantina", slug: "lacantina", logo: "/images/manufacturers/lacantina.webp" },
  { name: "All Weather", slug: "all-weather", logo: "/images/manufacturers/all-weather.svg" },
  { name: "IWC", slug: "iwc", logo: "/images/manufacturers/iwc.jpeg" },
  { name: "Plygem", slug: "plygem", logo: "/images/manufacturers/plygem.jpg" },
  { name: "Windsor", slug: "windsor", logo: "/images/manufacturers/windsor.png" },
] as const;

export const MARQUEE_BRANDS = [
  { name: "Fleetwood", slug: "fleetwood", logo: "/images/manufacturers/fleetwood.jpg", scale: 1.4 },
  { name: "Andersen", slug: "andersen", logo: "/images/manufacturers/andersen.png", scale: 1 },
  { name: "Marvin", slug: "marvin", logo: "/images/manufacturers/marvin.jpg", scale: 1 },
  { name: "Loewen", slug: "loewen", logo: "/images/manufacturers/loewen.jpg", scale: 1.3 },
  { name: "NanaWall", slug: "nanawall", logo: "/images/manufacturers/nanawall.webp", scale: 0.55 },
  { name: "Euroline", slug: "euroline", logo: "/images/manufacturers/euroline.png", scale: 1.3 },
  { name: "LaCantina", slug: "lacantina", logo: "/images/manufacturers/lacantina.webp", scale: 0.75 },
  { name: "Windsor", slug: "windsor", logo: "/images/manufacturers/windsor.png", scale: 0.55 },
] as const;

export const FIRE_REBUILD_PROGRAMS = [
  {
    manufacturer: "Fleetwood",
    slug: "fleetwood",
    headline: "Palisades Rebuild Program",
    detail:
      "Fleetwood has announced a dedicated rebuild program for the Pacific Palisades and Eaton fire-affected homeowners — including expedited lead times and verified discounted pricing.",
    externalUrl: "https://www.fleetwoodusa.com/en-us/palisades",
  },
] as const;

export const INTERIOR_PARTNERS = [
  {
    name: "TruStile Doors",
    slug: "trustile",
    logo: "/images/interiors/trustile.webp",
    category: "Interior Doors",
    tagline: "Architectural Interior Doors",
    description:
      "TruStile builds the most refined interior doors in the industry — flush, MDF, glass, and stile-and-rail with custom architectural details. A Marvin company, TruStile is the natural complement to Marvin window and door specifications.",
  },
  {
    name: "Emtek",
    slug: "emtek",
    logo: "/images/interiors/emtek.jpg",
    category: "Hardware",
    tagline: "Architectural Door Hardware",
    description:
      "Emtek manufactures the most comprehensive line of architectural door hardware in North America — knobs, levers, pulls, multi-points, and electronic locks across a wide range of finishes and design vocabularies.",
  },
] as const;

export const SYSTEMS = [
  { name: "Multi-Slide Doors", slug: "multi-slide-doors", category: "Doors" },
  { name: "Pivot Doors", slug: "pivot-doors", category: "Doors" },
  { name: "Steel Windows & Doors", slug: "steel-windows", category: "Windows" },
  {
    name: "Contemporary Aluminum",
    slug: "contemporary-aluminum",
    category: "Windows",
  },
  {
    name: "Energy Efficient Systems",
    slug: "energy-efficient",
    category: "Specialty",
  },
  {
    name: "Oversized Openings",
    slug: "oversized-openings",
    category: "Specialty",
  },
  { name: "Folding Doors", slug: "bifold-doors", category: "Doors" },
  { name: "Hinge Doors", slug: "sliding-doors", category: "Doors" },
  { name: "Automated Systems", slug: "automated-systems", category: "Smart Home" },
] as const;

export const NEIGHBORHOODS = [
  "Beverly Hills",
  "Pacific Palisades",
  "Malibu",
  "Bel Air",
  "Brentwood",
  "Santa Monica",
  "Hollywood Hills",
  "Encino",
  "Tarzana",
  "Calabasas",
  "Hidden Hills",
  "Westwood",
  "Century City",
  "Manhattan Beach",
  "Hermosa Beach",
  "Palos Verdes",
] as const;

export const NAV_ITEMS = [
  { label: "About", href: "/about" },
  {
    label: "Manufacturers",
    href: "/manufacturers",
    children: MANUFACTURERS.map((m) => ({
      label: m.name,
      href: `/manufacturers/${m.slug}`,
    })),
  },
  {
    label: "Systems",
    href: "/systems",
    children: SYSTEMS.slice(0, 6).map((s) => ({
      label: s.name,
      href: `/systems/${s.slug}`,
    })),
  },
  { label: "Interiors", href: "/interiors" },
  { label: "Showroom", href: "/showroom" },
  {
    label: "Who We Serve",
    href: "/for-architects",
    children: [
      { label: "Architects", href: "/for-architects" },
      { label: "Builders", href: "/for-builders" },
      { label: "Developers", href: "/for-developers" },
      { label: "Homeowners", href: "/for-homeowners" },
    ],
  },
  { label: "Resources", href: "/resources" },
] as const;
