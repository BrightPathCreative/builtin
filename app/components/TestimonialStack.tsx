"use client";

import Image from "next/image";
import { useState } from "react";
import type { Testimonial } from "../lib/testimonials";
import { testimonials } from "../lib/testimonials";

function getStackStyle(index: number, activeIndex: number, total: number) {
  if (index === activeIndex) {
    return {
      zIndex: total + 1,
      transform: "translate(0, 0) rotate(0deg) scale(1)",
      opacity: 1,
    };
  }

  const distance = Math.abs(index - activeIndex);
  const direction = index < activeIndex ? -1 : 1;

  return {
    zIndex: total - distance,
    transform: `translate(${direction * (18 + distance * 28)}px, ${8 + distance * 14}px) rotate(${direction * (2 + distance * 1.5)}deg) scale(${1 - distance * 0.025})`,
    opacity: Math.max(0.35, 0.85 - distance * 0.18),
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
      onClick={onSelect}
      onKeyDown={(event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          onSelect();
        }
      }}
      role="button"
      tabIndex={0}
      aria-pressed={isActive}
      aria-label={`${testimonial.name}, ${testimonial.role}`}
    >
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
  const [activeIndex, setActiveIndex] = useState(0);
  const [expandedIds, setExpandedIds] = useState<Record<string, boolean>>({});

  const active = testimonials[activeIndex];
  const hasImages = Boolean(active.images?.length);

  function handleSelect(index: number) {
    setActiveIndex(index);
  }

  function toggleExpand(id: string) {
    setExpandedIds((current) => ({
      ...current,
      [id]: !current[id],
    }));
  }

  return (
    <div className="testimonial-stack reveal">
      <div className="testimonial-stack__layout">
        <div className="testimonial-stack__deck" aria-live="polite">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={testimonial.id}
              testimonial={testimonial}
              index={index}
              activeIndex={activeIndex}
              total={testimonials.length}
              isExpanded={Boolean(expandedIds[testimonial.id])}
              onSelect={() => handleSelect(index)}
              onToggleExpand={() => toggleExpand(testimonial.id)}
            />
          ))}
        </div>

        <div
          className={`testimonial-stack__media${hasImages ? " is-visible" : ""}`}
          aria-hidden={!hasImages}
        >
          {testimonials.map((testimonial, index) =>
            testimonial.images ? (
              <div
                key={testimonial.id}
                className={`testimonial-stack__images${
                  index === activeIndex ? " is-active" : ""
                }`}
              >
                {testimonial.imagesRepresentative ? (
                  <p className="testimonial-stack__media-note">
                    Representative project imagery
                  </p>
                ) : null}
                <div className="testimonial-stack__image-pair">
                  {testimonial.images.map((image) => (
                    <figure key={image.src} className="testimonial-stack__figure">
                      <Image
                        src={image.src}
                        alt={image.alt}
                        width={640}
                        height={800}
                        sizes="(max-width: 899px) 100vw, 280px"
                        className="testimonial-stack__image"
                      />
                    </figure>
                  ))}
                </div>
              </div>
            ) : null
          )}
        </div>
      </div>

      <div className="testimonial-stack__nav" role="tablist" aria-label="Testimonials">
        {testimonials.map((testimonial, index) => (
          <button
            key={testimonial.id}
            type="button"
            role="tab"
            className={`testimonial-stack__nav-item${
              index === activeIndex ? " is-active" : ""
            }`}
            aria-selected={index === activeIndex}
            onClick={() => handleSelect(index)}
          >
            <span>{testimonial.name}</span>
            <span>{testimonial.type === "client" ? "Client" : "Collaborator"}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
