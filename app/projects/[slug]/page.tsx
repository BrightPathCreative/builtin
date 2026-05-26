import Link from "next/link";
import { notFound } from "next/navigation";
import { JsonLd } from "../../components/FaqList";
import ProjectGallery from "../../components/ProjectGallery";
import {
  ProjectDetailsBar,
  ProjectHero,
} from "../../components/ProjectCard";
import { createMetadata } from "../../lib/metadata";
import { getProject, projects } from "../../lib/projects";
import { breadcrumbSchema, webPageSchema } from "../../lib/schema";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    return {};
  }

  return createMetadata({
    title: project.metaTitle,
    description: project.metaDescription,
    path: `/projects/${project.slug}`,
  });
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    notFound();
  }

  const path = `/projects/${project.slug}`;

  return (
    <>
      <JsonLd
        data={webPageSchema({
          path,
          title: project.metaTitle,
          description: project.metaDescription,
        })}
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Projects", path: "/projects" },
          { name: project.title, path },
        ])}
      />

      <ProjectHero project={project} />
      <ProjectDetailsBar project={project} />

      <section className="section-shell">
        <div className="project-copy-grid">
          <div className="copy-stack">
            {project.sections.map((section) => (
              <div key={section.heading} className="reveal">
                <h2>{section.heading}</h2>
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph.slice(0, 40)}>{paragraph}</p>
                ))}
              </div>
            ))}
          </div>

          {project.standoutDetails.length > 0 ? (
            <div className="reveal">
              <h2>Standout Details</h2>
              <ul className="standout-list">
                {project.standoutDetails.map((detail) => (
                  <li key={detail}>{detail}</li>
                ))}
              </ul>
            </div>
          ) : null}
        </div>
      </section>

      <ProjectGallery images={project.images} skipFirst />

      <section className="section-shell">
        <nav className="project-nav reveal" aria-label="Project navigation">
          <Link className="text-link" href="/projects">
            ← Back to Projects
          </Link>
          <Link className="button" href="/contact">
            Discuss Your Project
          </Link>
        </nav>
      </section>
    </>
  );
}
