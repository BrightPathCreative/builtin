'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useCallback, useRef, useState } from 'react';

export interface ShowcaseImage {
  src: string;
  alt: string;
}

export interface ShowcaseProject {
  title: string;
  label: string;
  text: string;
  images?: ShowcaseImage[];
}

interface ProjectShowcaseProps {
  projects: ShowcaseProject[];
}

export default function ProjectShowcase({ projects }: ProjectShowcaseProps) {
  const [active, setActive] = useState(0);
  const touchStartX = useRef<number | null>(null);

  const total = projects.length;
  const activeProject = projects[active];
  const activeImage = activeProject?.images?.[0];

  const next = useCallback(() => {
    setActive((current) => (current + 1) % total);
  }, [total]);

  const prev = useCallback(() => {
    setActive((current) => (current - 1 + total) % total);
  }, [total]);

  if (total === 0) return null;

  const onTouchStart = (event: React.TouchEvent) => {
    touchStartX.current = event.touches[0].clientX;
  };

  const onTouchEnd = (event: React.TouchEvent) => {
    if (touchStartX.current === null) return;

    const diff = touchStartX.current - event.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) diff > 0 ? next() : prev();
    touchStartX.current = null;
  };

  return (
    <div
      className="project-showcase reveal"
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
      aria-roledescription="carousel"
      aria-label="Selected Built In. Melbourne projects"
    >
      <div className="project-showcase__inner">
        <div className="project-showcase__media" aria-live="polite">
          {projects.map((project, index) => {
          const image = project.images?.[0];
          const isActive = index === active;

            return image ? (
              <Image
                key={image.src}
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width: 760px) calc(100vw - 3rem), 48vw"
                priority={index === 0}
                className={`project-showcase__image${isActive ? ' project-showcase__image--active' : ''}`}
                style={{ objectFit: 'cover' }}
                aria-hidden={!isActive}
              />
            ) : null;
          })}
          {!activeImage && <div className="project-showcase__placeholder">Image Pending</div>}
        </div>

        <div className="project-showcase__content" aria-live="polite">
          {projects.map((project, index) => (
            <article
              key={project.title}
              className={`project-showcase__copy${index === active ? ' project-showcase__copy--active' : ''}`}
              aria-hidden={index !== active}
            >
              <p className="project-label">{project.label}</p>
              <h3>{project.title}</h3>
              <p>{project.text}</p>
            </article>
          ))}
          <Link className="project-showcase__link" href="/contact">
            Discuss a similar project
          </Link>
        </div>
      </div>

      <div className="project-showcase__nav" aria-label="Project carousel controls">
        <button type="button" onClick={prev} aria-label="Show previous project">
          <svg aria-hidden="true" viewBox="0 0 24 24">
            <path d="M15 18 9 12l6-6" />
          </svg>
        </button>
        <button type="button" onClick={next} aria-label="Show next project">
          <svg aria-hidden="true" viewBox="0 0 24 24">
            <path d="m9 18 6-6-6-6" />
          </svg>
        </button>
      </div>
    </div>
  );
}
