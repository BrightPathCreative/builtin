import type { Metadata } from "next";
import { BASE_URL } from "./site";

type PageMeta = {
  title: string;
  description: string;
  path: string;
  noindex?: boolean;
};

export function createMetadata({
  title,
  description,
  path,
  noindex = false,
}: PageMeta): Metadata {
  const url = `${BASE_URL}${path === "/" ? "" : path}`;

  return {
    title,
    description,
    alternates: {
      canonical: path,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: "Built In. Melbourne",
      locale: "en_AU",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
    robots: noindex
      ? { index: false, follow: true }
      : { index: true, follow: true },
  };
}
