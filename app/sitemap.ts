import type { MetadataRoute } from "next";
import { BASE_URL } from "./lib/site";
import { projects } from "./lib/projects";

const staticRoutes = [
  "/",
  "/about",
  "/services",
  "/services/architectural-renovations",
  "/services/new-builds",
  "/services/client-side-project-management",
  "/projects",
  "/contact",
  "/faq",
  "/privacy-policy",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return [
    ...staticRoutes.map((path) => ({
      url: `${BASE_URL}${path === "/" ? "" : path}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: path === "/" ? 1 : 0.8,
    })),
    ...projects.map((project) => ({
      url: `${BASE_URL}/projects/${project.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}
