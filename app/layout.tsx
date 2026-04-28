import type { Metadata, Viewport } from "next";
import { SiteFooter, SiteHeader } from "./components/SiteChrome";
import BackToTop from "./components/BackToTop";
import ScrollAnimations from "./components/ScrollAnimations";
import "./globals.css";

const baseUrl = "https://builtinmelbourne.com.au";
const title = "Built In. Melbourne | High-End Architectural Builder, Bayside Melbourne";
const description =
  "High-spec architectural renovations and bespoke new builds across Bayside Melbourne. Registered Building Practitioner Josh Coles delivers every project personally: one builder, one point of contact, start to finish.";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#5f6544",
};

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title,
  description,
  applicationName: "Built In. Melbourne",
  authors: [{ name: "Built In. Melbourne" }],
  creator: "Built In. Melbourne",
  publisher: "Built In. Melbourne",
  keywords: [
    "high-end builder Melbourne",
    "architectural builder Bayside Melbourne",
    "architectural renovations Melbourne",
    "bespoke new builds Melbourne",
    "registered domestic builder Melbourne",
    "builder Brighton",
    "builder Beaumaris",
    "builder Elsternwick"
  ],
  alternates: {
    canonical: "/"
  },
  openGraph: {
    title: "Built In. Melbourne | High-End Architectural Builder",
    description,
    url: baseUrl,
    siteName: "Built In. Melbourne",
    locale: "en_AU",
    type: "website",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Built In. Melbourne — High-End Architectural Builder, Bayside Melbourne",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Built In. Melbourne | High-End Architectural Builder",
    description,
    images: ["/opengraph-image"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1
    }
  }
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "GeneralContractor"],
  name: "Built In. Melbourne",
  description,
  url: baseUrl,
  email: "josh@builtinmelbourne.com.au",
  areaServed: {
    "@type": "AdministrativeArea",
    name: "Bayside Melbourne",
  },
  serviceArea: {
    "@type": "GeoCircle",
    geoMidpoint: {
      "@type": "GeoCoordinates",
      latitude: -37.9219,
      longitude: 145.0012,
    },
    geoRadius: "15000",
  },
  knowsAbout: [
    "architectural renovations",
    "bespoke new builds",
    "high-end residential construction",
    "builder oversight",
    "registered building practitioner",
  ],
  sameAs: ["https://www.instagram.com/builtin.melbourne"],
  priceRange: "$$$$",
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-AU">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <SiteHeader />
        <ScrollAnimations />
        {children}
        <SiteFooter />
        <BackToTop />
      </body>
    </html>
  );
}
