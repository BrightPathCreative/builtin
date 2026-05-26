import type { Metadata } from "next";
import { BASE_URL } from "./site";

type PageMeta = {
  title: string;
  description: string;
  path: string;
};

export function createMetadata({
  title,
  description,
  path,
}: PageMeta): Metadata {
  return {
    title,
    description,
    alternates: {
      canonical: path,
    },
    openGraph: {
      title,
      description,
      url: `${BASE_URL}${path === "/" ? "" : path}`,
      siteName: "Built In. Melbourne",
      locale: "en_AU",
      type: "website",
    },
  };
}
