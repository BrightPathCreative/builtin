"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import type { Testimonial, TestimonialFilterId } from "../lib/testimonials";
import {
  filterTestimonials,
  getVisibleFilters,
} from "../lib/testimonials";

function SwipeHintIcon() {
  return (
    <svg
      className="testimonial-stack__swipe-icon"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M6 10H14M6 10L8.5 7.5M6 10L8.5 12.5M14 10L11.5 7.5M14 10L11.5 12.5"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function getStackStyle(index: number, activeIndex: number, total: number) {
  if (index === activeIndex) {
    return undefined;
  }

  const distance = Math.abs(index - activeIndex);
  const direction = index < activeIndex ? -1 : 1;

  return {
    zIndex: total - distance,
    transform: `translate(${direction * (16 + distance * 24)}px, ${6 + distance * 12}px) rotate(${direction * (1.5 + distance * 1.25)}deg) scale(${1 - distance * 0.02})`,
    opacity: Math.max(0.3, 0.8 - distance * 0.16),
  };
}

type TestimonialCardProps = {
  testimonial: Testimonial;
  index: number;
  activeIndex: number;
  total: number;
  isExpanded: boolean;
  onSelect: () => void;
  onToggleExpand: () => void;
};

function TestimonialCard({
  testimonial,
  index,
  activeIndex,
  total,
  isExpanded,
  onSelect,
  onToggleExpand,
}: TestimonialCardProps) {
  const isActive = index === activeIndex;
  const stackStyle = getStackStyle(index, activeIndex, total);
  const hasExcerpt = Boolean(testimonial.excerpt);
  const showFullQuote = isExpanded || !hasExcerpt;

  return (
    <article
      className={`testimonial-stack__card${isActive ? " is-active" : ""}`}
      style={stackStyle}
      onClick={!isActive ? onSelect : undefined}
      onKeyDown={(event) => {
        if (isActive) {
          return;
        }

        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          onSelect();
        }
      }}
      role={isActive ? undefined : "button"}
      tabIndex={isActive ? -1 : 0}
      aria-label={!isActive ? `${testimonial.name}, ${testimonial.role}` : undefined}
    >
      {isActive ? (
        <span className="testimonial-stack__swipe-hint" aria-hidden="true">
          <SwipeHintIcon />
          <span>Swipe</span>
        </span>
      ) : null}

      <span className="testimonial-stack__mark" aria-hidden="true">
        &ldquo;
      </span>

      <blockquote className="testimonial-stack__quote">
        <p>
          {showFullQuote ? testimonial.quote : testimonial.excerpt}
          {!showFullQuote ? "…" : null}
        </p>
      </blockquote>

      {isActive && hasExcerpt ? (
        <button
          type="button"
          className="testimonial-stack__expand"
          onClick={(event) => {
            event.stopPropagation();
            onToggleExpand();
          }}
        >
          {isExpanded ? "Show less" : "Read full letter"}
        </button>
      ) : null}

      <footer className="testimonial-stack__attribution">
        <strong>{testimonial.name}</strong>
        <span>{testimonial.role}</span>
      </footer>
    </article>
  );
}

export default function TestimonialStack() {
  const [filter, setFilter] = useState<TestimonialFilterId>("all");
  const [activeIndex, setActiveIndex] = useState(0);
  const [expandedIds, setExpandedIds] = useState<Record<string, boolean>>({});
  const touchStartX = useRef<number | null>(null);

  const visibleFilters = getVisibleFilters();
  const filtered = filterTestimonials(filter);
  const active = filtered[activeIndex] ?? filtered[0];
  const hasImage = Boolean(active?.image);

  useEffect(() => {
    setActiveIndex(0);
    setExpandedIds({});
  }, [filter]);

  useEffect(() => {
    if (activeIndex >= filtered.length) {
      setActiveIndex(0);
    }
  }, [activeIndex, filtered.length]);

  function handleSelect(index: number) {
    setActiveIndex(index);
  }

  function toggleExpand(id: string) {
    setExpandedIds((current) => ({
      ...current,
      [id]: !current[id],
    }));
  }

  function goToOffset(offset: number) {
    if (filtered.length <= 1) {
      return;
    }

    setActiveIndex((current) => (current + offset + filtered.length) % filtered.length);
    setExpandedIds({});
  }

  function handleTouchStart(event: React.TouchEvent<HTMLDivElement>) {
    touchStartX.current = event.touches[0]?.clientX ?? null;
  }

  function handleTouchEnd(event: React.TouchEvent<HTMLDivElement>) {
    if (touchStartX.current === null) {
      return;
    }

    const delta = touchStartX.current - (event.changedTouches[0]?.clientX ?? 0);

    if (Math.abs(delta) > 48) {
      goToOffset(delta > 0 ? 1 : -1);
    }

    touchStartX.current = null;
  }

  if (!active) {
    return null;
  }

  return (
    <div className="testimonial-stack reveal">
      <div className="testimonial-stack__filters" role="tablist" aria-label="Filter testimonials">
        {visibleFilters.map((item) => (
          <button
            key={item.id}
            type="button"
            role="tab"
            className={`testimonial-stack__filter${
              filter === item.id ? " is-active" : ""
            }`}
            aria-selected={filter === item.id}
            onClick={() => setFilter(item.id)}
          >
            {item.label}
          </button>
        ))}
      </div>

      <div
        className={`testimonial-stack__layout${
          hasImage ? "" : " testimonial-stack__layout--solo"
        }`}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <div className="testimonial-stack__deck" aria-live="polite">
          {filtered.map((testimonial, index) => (
            <TestimonialCard
              key={testimonial.id}
              testimonial={testimonial}
              index={index}
              activeIndex={activeIndex}
              total={filtered.length}
              isExpanded={Boolean(expandedIds[testimonial.id])}
              onSelect={() => handleSelect(index)}
              onToggleExpand={() => toggleExpand(testimonial.id)}
            />
          ))}
        </div>

        {hasImage && active.image ? (
          <div className="testimonial-stack__media">
            {filtered.map((testimonial, index) =>
              testimonial.image ? (
                <figure
                  key={testimonial.id}
                  className={`testimonial-stack__figure${
                    index === activeIndex ? " is-active" : ""
                  }`}
                >
                  <Image
                    src={testimonial.image.src}
                    alt={testimonial.image.alt}
                    fill
                    sizes="(max-width: 899px) 100vw, 50vw"
                    className="testimonial-stack__image"
                  />
                  {testimonial.projectSlug ? (
                    <div className="testimonial-stack__media-overlay">
                      <Link
                        href={`/projects/${testimonial.projectSlug}`}
                        className="testimonial-stack__project-link"
                      >
                        {testimonial.projectLinkLabel ?? "View project"}
                      </Link>
                    </div>
                  ) : null}
                </figure>
              ) : null
            )}
          </div>
        ) : null}
      </div>

      {filtered.length > 1 ? (
        <div className="testimonial-stack__controls">
          <button
            type="button"
            className="testimonial-stack__control"
            onClick={() => goToOffset(-1)}
            aria-label="Previous testimonial"
          >
            ←
          </button>
          <div className="testimonial-stack__dots" aria-hidden="true">
            {filtered.map((testimonial, index) => (
              <span
                key={testimonial.id}
                className={`testimonial-stack__dot${
                  index === activeIndex ? " is-active" : ""
                }`}
              />
            ))}
          </div>
          <button
            type="button"
            className="testimonial-stack__control"
            onClick={() => goToOffset(1)}
            aria-label="Next testimonial"
          >
            →
          </button>
        </div>
      ) : null}
    </div>
  );
}
