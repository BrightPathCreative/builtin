import { BASE_URL, CONTACT_EMAIL, SERVICE_AREAS } from "./site";

export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "GeneralContractor",
  "@id": `${BASE_URL}/#business`,
  name: "Built In. Melbourne Pty Ltd",
  alternateName: "Built In. Melbourne",
  description:
    "High-spec architectural renovations and bespoke new builds across Bayside Melbourne. Every project personally managed by Josh Coles, registered domestic builder DB-U 45446 / CDB-U 58374.",
  url: BASE_URL,
  email: CONTACT_EMAIL,
  logo: {
    "@type": "ImageObject",
    url: `${BASE_URL}/images/brand/logo.png`,
    width: 400,
    height: 120,
  },
  image: `${BASE_URL}/og/home.jpg`,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Bayside Melbourne",
    addressRegion: "VIC",
    addressCountry: "AU",
  },
  areaServed: SERVICE_AREAS.map((name) => ({ "@type": "City", name })),
  serviceType: [
    "Architectural Renovations",
    "Heritage-Sensitive Renovations",
    "Bespoke New Builds",
    "Client-Side Project Management",
  ],
  founder: {
    "@type": "Person",
    "@id": `${BASE_URL}/about#josh-coles`,
    name: "Josh Coles",
  },
  employee: {
    "@type": "Person",
    "@id": `${BASE_URL}/about#josh-coles`,
    name: "Josh Coles",
  },
  identifier: [
    { "@type": "PropertyValue", name: "ABN", value: "54 610 132 486" },
    { "@type": "PropertyValue", name: "ACN", value: "610 132 486" },
    { "@type": "PropertyValue", name: "Company Licence", value: "CDB-U 58374" },
  ],
  hasCredential: {
    "@type": "EducationalOccupationalCredential",
    credentialCategory: "licence",
    name: "Domestic Builder (Unlimited) — Company Registration",
    identifier: "CDB-U 58374",
    recognizedBy: {
      "@type": "Organization",
      name: "Victorian Building Authority",
    },
  },
  sameAs: ["https://www.instagram.com/builtin.melbourne"],
  priceRange: "$$$",
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${BASE_URL}/#website`,
  name: "Built In. Melbourne",
  url: BASE_URL,
  description:
    "High-spec architectural renovations and bespoke new builds across Bayside Melbourne.",
  publisher: { "@id": `${BASE_URL}/#business` },
  inLanguage: "en-AU",
};

export const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `${BASE_URL}/about#josh-coles`,
  name: "Josh Coles",
  jobTitle: "Registered Domestic Builder (Unlimited)",
  description:
    "Josh Coles is a registered domestic builder with 16 years experience delivering high-spec architectural renovations and bespoke new builds across Bayside Melbourne. He holds a Domestic Builder (Unlimited) licence (DB-U 45446) and manages every Built In. Melbourne project personally.",
  worksFor: { "@id": `${BASE_URL}/#business` },
  hasCredential: [
    {
      "@type": "EducationalOccupationalCredential",
      credentialCategory: "licence",
      name: "Domestic Builder (Unlimited) — Individual Practitioner",
      identifier: "DB-U 45446",
      recognizedBy: {
        "@type": "Organization",
        name: "Victorian Building Authority",
      },
    },
  ],
  email: CONTACT_EMAIL,
  sameAs: ["https://www.instagram.com/builtin.melbourne"],
  knowsAbout: [
    "Architectural Renovations",
    "Heritage-Sensitive Renovations",
    "Bespoke New Builds",
    "Client-Side Project Management",
    "Domestic Building",
    "Victorian Building Authority regulations",
  ],
};

export function webPageSchema({
  path,
  title,
  description,
}: {
  path: string;
  title: string;
  description: string;
}) {
  const url = path === "/" ? BASE_URL : `${BASE_URL}${path}`;

  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${url}#webpage`,
    url,
    name: title,
    description,
    isPartOf: { "@id": `${BASE_URL}/#website` },
    about: { "@id": `${BASE_URL}/#business` },
    inLanguage: "en-AU",
    dateModified: new Date().toISOString().split("T")[0],
  };
}

export function breadcrumbSchema(
  items: { name: string; path: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.path === "/" ? BASE_URL : `${BASE_URL}${item.path}`,
    })),
  };
}

export const projectsItemListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Selected Work — Built In. Melbourne",
  description:
    "A record of completed architectural renovations and bespoke new builds across Bayside Melbourne, personally managed by Josh Coles.",
  url: `${BASE_URL}/projects`,
  numberOfItems: 7,
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Sir Garnet Road, Surrey Hills",
      description:
        "Bespoke architectural new build — dark vertical cladding, walnut joinery, polished concrete floors, dark mosaic pool.",
      url: `${BASE_URL}/projects/surrey-hills`,
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Hawsleigh Avenue, Balaclava",
      description:
        "Heritage-sensitive architectural renovation — facade retained, vaulted VJ-panelled ceilings, oak joinery, bespoke garden studio.",
      url: `${BASE_URL}/projects/hawsleigh-balaclava`,
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Liddiard Street, Hawthorn",
      description:
        "Architectural renovation — bespoke kitchen, walnut butler's pantry, brass tapware, black freestanding bath, heritage cornices retained.",
      url: `${BASE_URL}/projects/liddiard-hawthorn`,
    },
    {
      "@type": "ListItem",
      position: 4,
      name: "Murrumbeena",
      description:
        "Architectural renovation — navy shaker cabinetry, marble slab surfaces, brass hardware, freestanding bath on marble checkerboard floors.",
      url: `${BASE_URL}/projects/murrumbeena`,
    },
    {
      "@type": "ListItem",
      position: 5,
      name: "The Fawkner Residence",
      description:
        "Heritage-sensitive architectural renovation — coastal modern direction, Velux skylights, Bowings stone and tile.",
      url: `${BASE_URL}/projects/fawkner-residence`,
    },
    {
      "@type": "ListItem",
      position: 6,
      name: "The Mary Residence",
      description:
        "Full-scale architectural renovation — modern aesthetic, considered material selections, direct builder oversight throughout.",
      url: `${BASE_URL}/projects/mary-residence`,
    },
    {
      "@type": "ListItem",
      position: 7,
      name: "The Henry Residence",
      description:
        "Contemporary architectural renovation — refined finishes, modern direction, personally managed by Josh Coles from brief to handover.",
      url: `${BASE_URL}/projects/henry-residence`,
    },
  ],
};
