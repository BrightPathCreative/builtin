import type { Metadata, Viewport } from "next";
import { SiteFooter, SiteHeader } from "./components/SiteChrome";
import ScrollAnimations from "./components/ScrollAnimations";
import { BASE_URL, CONTACT_EMAIL, SERVICE_AREAS } from "./lib/site";
import "./globals.css";

const description =
  "High-spec architectural renovations and bespoke new builds across Bayside Melbourne. Registered Builder (Unlimited) · 16 years experience. Discuss your project.";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#696C4C",
};

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: "Built In. Melbourne | High-End Architectural Builder",
  description,
  applicationName: "Built In. Melbourne",
  openGraph: {
    siteName: "Built In. Melbourne",
    locale: "en_AU",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "GeneralContractor",
  name: "Built In. Melbourne Pty Ltd",
  legalName: "Built In. Melbourne Pty Ltd",
  url: BASE_URL,
  email: CONTACT_EMAIL,
  areaServed: SERVICE_AREAS.map((suburb) => ({
    "@type": "City",
    name: suburb,
    containedInPlace: { "@type": "State", name: "Victoria" },
  })),
  founder: {
    "@type": "Person",
    name: "Josh Coles",
    jobTitle: "Registered Domestic Builder",
  },
  description,
  sameAs: ["https://www.instagram.com/builtin.melbourne"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-AU">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <SiteHeader />
        <ScrollAnimations />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
