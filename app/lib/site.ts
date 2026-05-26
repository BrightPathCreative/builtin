export const BASE_URL = "https://builtinmelbourne.com.au";

export const CONTACT_EMAIL = "josh@builtinmelbourne.com.au";
export const INSTAGRAM_URL = "https://www.instagram.com/builtin.melbourne";
export const INSTAGRAM_HANDLE = "@builtin.melbourne";

export const SERVICE_AREAS = [
  "Brighton",
  "Elsternwick",
  "Beaumaris",
  "Caulfield",
  "Hampton",
  "Sandringham",
  "Black Rock",
  "Mentone",
  "Cheltenham",
  "Highett",
  "Bentleigh",
  "McKinnon",
  "Ormond",
  "Murrumbeena",
  "Carnegie",
  "Balaclava",
  "Hawthorn",
  "Surrey Hills",
  "Malvern",
  "Toorak",
  "South Yarra",
  "Armadale",
] as const;

export const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
] as const;

export const SERVICE_LINKS = [
  {
    href: "/services/architectural-renovations",
    label: "Architectural Renovations",
  },
  { href: "/services/new-builds", label: "New Builds" },
  {
    href: "/services/client-side-project-management",
    label: "Client-Side Project Management",
  },
] as const;

export const FOOTER_LINKS = [
  { href: "/faq", label: "FAQ" },
  { href: "/privacy-policy", label: "Privacy Policy" },
] as const;
