import type { MetadataRoute } from "next";
import { BASE_URL } from "./lib/site";
import { projects } from "./lib/projects";

const staticRoutes: {
  path: string;
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
  priority: number;
}[] = [
  { path: "/", changeFrequency: "monthly", priority: 1.0 },
  { path: "/about", changeFrequency: "monthly", priority: 0.8 },
  { path: "/services", changeFrequency: "monthly", priority: 0.9 },
  {
    path: "/services/architectural-renovations",
    changeFrequency: "monthly",
    priority: 0.8,
  },
  { path: "/services/new-builds", changeFrequency: "monthly", priority: 0.8 },
  {
    path: "/services/client-side-project-management",
    changeFrequency: "monthly",
    priority: 0.7,
  },
  { path: "/projects", changeFrequency: "weekly", priority: 0.9 },
  { path: "/contact", changeFrequency: "yearly", priority: 0.9 },
  { path: "/faq", changeFrequency: "monthly", priority: 0.6 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return [
    ...staticRoutes.map(({ path, changeFrequency, priority }) => ({
      url: `${BASE_URL}${path === "/" ? "" : path}`,
      lastModified: now,
      changeFrequency,
      priority,
    })),
    ...projects.map((project) => ({
      url: `${BASE_URL}/projects/${project.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}
