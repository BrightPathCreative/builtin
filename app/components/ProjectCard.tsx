import Link from "next/link";
import Image from "next/image";
import type { Project } from "../lib/projects";

export function ProjectCard({
  project,
  featured = false,
  overview = false,
}: {
  project: Project;
  featured?: boolean;
  overview?: boolean;
}) {
  const type = featured && project.featuredType ? project.featuredType : project.type;
  const excerpt =
    featured && project.featuredExcerpt ? project.featuredExcerpt : project.excerpt;
  const hasImage = project.images.length > 0 || project.heroImage;

  if (overview) {
    return (
      <article className="gallery-card reveal">
        <Link href={`/projects/${project.slug}`} className="gallery-card__link">
          {hasImage ? (
            <Image
              src={project.heroImage}
              alt={`${project.title}, ${type.toLowerCase()}: built in melbourne`}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="gallery-card__image"
            />
          ) : (
            <div className="image-placeholder">Image Pending</div>
          )}
          <div className="gallery-card__overlay">
            <p className="gallery-card__label">{type}</p>
            <p className="gallery-card__name">{project.title}</p>
            <span className="text-link">View Project</span>
          </div>
        </Link>
      </article>
    );
  }

  return (
    <article className="project-card reveal">
      <Link href={`/projects/${project.slug}`} className="project-card__link">
        <div className="project-card__media">
          {hasImage ? (
            <Image
              src={project.heroImage}
              alt={`${project.title}, ${type.toLowerCase()}: built in melbourne`}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="project-card__image"
            />
          ) : (
            <div className="image-placeholder">Image Pending</div>
          )}
        </div>
        <div className="project-card__body">
          <p className="project-card__type">{type}</p>
          <p className="project-card__title">{project.title}</p>
          {project.suburb ? (
            <p className="project-card__suburb">{project.suburb}</p>
          ) : null}
          <p>{excerpt}</p>
          <span className="text-link">View Project</span>
        </div>
      </Link>
    </article>
  );
}

export function ProjectHero({ project }: { project: Project }) {
  const heroSrc = project.heroImage || project.images[0]?.src;
  const heroAlt =
    project.images[0]?.alt ??
    `${project.title}, ${project.type.toLowerCase()}: built in melbourne`;

  return (
    <section className="project-hero">
      <div className="project-hero__media">
        {heroSrc ? (
          <Image
            src={heroSrc}
            alt={heroAlt}
            fill
            priority
            sizes="100vw"
            className="project-hero__image"
          />
        ) : (
          <div className="project-hero__placeholder">Image Pending</div>
        )}
      </div>
      <div className="project-hero__overlay">
        <div className="project-hero__content reveal">
          <p className="project-hero__type">{project.type}</p>
          <h1>{project.title}</h1>
          {project.suburb ? (
            <p className="project-hero__suburb">{project.suburb}</p>
          ) : null}
        </div>
      </div>
    </section>
  );
}

export function ProjectDetailsBar({ project }: { project: Project }) {
  return (
    <div className="project-details-bar reveal">
      <div>
        <p className="project-detail-label">Type</p>
        <p className="project-detail-value">{project.type}</p>
      </div>
      <div>
        <p className="project-detail-label">Suburb</p>
        <p className="project-detail-value">{project.suburb ?? "To be confirmed"}</p>
      </div>
      <div>
        <p className="project-detail-label">Year</p>
        <p className="project-detail-value">{project.year ?? "To be confirmed"}</p>
      </div>
      <div>
        <p className="project-detail-label">Design Collaborator</p>
        <p className="project-detail-value">
          {project.collaborator ?? "To be confirmed"}
        </p>
      </div>
    </div>
  );
}
