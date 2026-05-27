import type { Metadata } from "next";
import BackToTop from "./components/BackToTop";
import { SiteFooter, SiteHeader } from "./components/SiteChrome";
import ScrollAnimations from "./components/ScrollAnimations";
import { localBusinessSchema } from "./lib/schema";
import "./globals.css";

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#111210",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://builtinmelbourne.com.au"),
  title: {
    default: "Built In. Melbourne | High-End Architectural Builder",
    template: "%s",
  },
  description:
    "High-spec architectural renovations and bespoke new builds across Bayside Melbourne. Registered Builder (Unlimited) · 16 years experience. Discuss your project.",
  applicationName: "Built In. Melbourne",
  openGraph: {
    siteName: "Built In. Melbourne",
    locale: "en_AU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
  robots: {
    index: true,
    follow: true,
  },
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
        <main>{children}</main>
        <SiteFooter />
        <BackToTop />
      </body>
    </html>
  );
}
