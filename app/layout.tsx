import type { Metadata } from "next";
import { DM_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap"
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-display",
  display: "swap"
});

const title = "Built In. Melbourne | High-End Architectural Builder, Bayside Melbourne";
const description =
  "High-spec architectural renovations and bespoke new builds across Bayside Melbourne. Registered Building Practitioner Josh Coles delivers every project personally: one builder, one point of contact, start to finish.";

export const metadata: Metadata = {
  metadataBase: new URL("https://builtinmelbourne.com.au"),
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
    url: "https://builtinmelbourne.com.au",
    siteName: "Built In. Melbourne",
    locale: "en_AU",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Built In. Melbourne | High-End Architectural Builder",
    description
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

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-AU" className={`${dmSans.variable} ${playfair.variable}`}>
      <body>{children}</body>
    </html>
  );
}
