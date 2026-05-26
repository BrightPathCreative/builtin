import Link from "next/link";
import Image from "next/image";
import type { Project } from "../lib/projects";

export function ProjectCard({
  project,
  featured = false,
}: {
  project: Project;
  featured?: boolean;
}) {
  const type = featured && project.featuredType ? project.featuredType : project.type;
  const excerpt =
    featured && project.featuredExcerpt ? project.featuredExcerpt : project.excerpt;

  return (
    <article className="project-card reveal">
      <Link href={`/projects/${project.slug}`} className="project-card__link">
        <div className="project-card__media">
          {project.images.length > 0 || project.heroImage ? (
            <Image
              src={project.heroImage}
              alt={`${project.title} — ${type.toLowerCase()} — built in melbourne`}
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
          <h3>{project.title}</h3>
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

export function ProjectGallery({
  images,
}: {
  images: { src: string; alt: string }[];
}) {
  if (images.length === 0) {
    return (
      <div className="gallery-placeholder reveal">
        <p>Project photography coming soon.</p>
      </div>
    );
  }

  return (
    <div className="project-gallery">
      {images.map((image) => (
        <figure key={image.src} className="project-gallery__item reveal">
          <Image
            src={image.src}
            alt={image.alt}
            width={1200}
            height={900}
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        </figure>
      ))}
    </div>
  );
}
