import Link from "next/link";
import { notFound } from "next/navigation";
import PageHero from "../../components/PageSections";
import { ProjectGallery } from "../../components/ProjectCard";
import { createMetadata } from "../../lib/metadata";
import { getProject, projects } from "../../lib/projects";

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

  return (
    <>
      <PageHero title={project.title} compact />

      <section className="section-shell">
        <dl className="project-meta reveal">
          <div>
            <dt>Type</dt>
            <dd>{project.type}</dd>
          </div>
          <div>
            <dt>Suburb</dt>
            <dd>{project.suburb ?? "To be confirmed"}</dd>
          </div>
          <div>
            <dt>Year</dt>
            <dd>{project.year ?? "To be confirmed"}</dd>
          </div>
          <div>
            <dt>Design Collaborator</dt>
            <dd>{project.collaborator ?? "To be confirmed"}</dd>
          </div>
        </dl>

        <div className="copy-stack">
          {project.sections.map((section) => (
            <div key={section.heading} className="reveal">
              <h2>{section.heading}</h2>
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 40)}>{paragraph}</p>
              ))}
            </div>
          ))}

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

        <ProjectGallery images={project.images} />

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
