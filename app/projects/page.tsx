import PageHero, { CtaBand } from "../components/PageSections";
import { ProjectCard } from "../components/ProjectCard";
import { JsonLd } from "../components/FaqList";
import { createMetadata } from "../lib/metadata";
import { projects } from "../lib/projects";
import {
  breadcrumbSchema,
  projectsItemListSchema,
  webPageSchema,
} from "../lib/schema";

export const metadata = createMetadata({
  title: "Projects | Architectural Builds | Built In. Melbourne",
  description:
    "Completed architectural renovations and new builds across Bayside Melbourne. Every project personally managed by Josh Coles, registered builder DB-U 45446.",
  path: "/projects",
});

export default function ProjectsPage() {
  return (
    <>
      <JsonLd
        data={webPageSchema({
          path: "/projects",
          title: "Projects | Architectural Builds | Built In. Melbourne",
          description:
            "Completed architectural renovations and new builds across Bayside Melbourne. Every project personally managed by Josh Coles, registered builder DB-U 45446.",
        })}
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Projects", path: "/projects" },
        ])}
      />
      <JsonLd data={projectsItemListSchema} />

      <PageHero
        title="Selected Work: Built In. Melbourne"
        description="A record of recent Built In. Melbourne projects. Every build listed here was personally managed by Josh Coles, from initial brief through to handover. For project documentation and ongoing updates, follow @builtin.melbourne on Instagram."
        compact
      />

      <section className="section-shell">
        <div className="project-grid project-grid--overview">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} overview />
          ))}
        </div>
      </section>

      <CtaBand
        title="Building something significant?"
        description="If you're planning an architectural renovation or new build across Bayside Melbourne, Josh would welcome the opportunity to discuss it."
      />
    </>
  );
}
