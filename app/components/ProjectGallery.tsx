"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";

type GalleryImage = { src: string; alt: string };

export default function ProjectGallery({
  images,
  skipFirst = false,
}: {
  images: GalleryImage[];
  skipFirst?: boolean;
}) {
  const galleryImages = skipFirst ? images.slice(1) : images;
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  const close = useCallback(() => setOpenIndex(null), []);

  const showPrev = useCallback(() => {
    setOpenIndex((index) =>
      index === null ? null : (index - 1 + galleryImages.length) % galleryImages.length
    );
  }, [galleryImages.length]);

  const showNext = useCallback(() => {
    setOpenIndex((index) =>
      index === null ? null : (index + 1) % galleryImages.length
    );
  }, [galleryImages.length]);

  useEffect(() => {
    if (openIndex === null) return;

    closeButtonRef.current?.focus();
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") close();
      if (event.key === "ArrowLeft") showPrev();
      if (event.key === "ArrowRight") showNext();
    }

    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [openIndex, close, showNext, showPrev]);

  if (galleryImages.length === 0) {
    if (images.length === 0) {
      return (
        <div className="gallery-placeholder reveal">
          <p>Project photography coming soon.</p>
        </div>
      );
    }
    return null;
  }

  const activeImage = openIndex === null ? null : galleryImages[openIndex];

  return (
    <>
      <div className="project-gallery-shell">
        <div className="project-gallery" aria-label="Project photography">
          {galleryImages.map((image, index) => (
            <figure key={image.src} className="project-gallery__item reveal">
              <button
                type="button"
                className="project-gallery__trigger"
                aria-label={`View image: ${image.alt}`}
                onClick={() => setOpenIndex(index)}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={1400}
                  height={1050}
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="project-gallery__image"
                />
              </button>
            </figure>
          ))}
        </div>
      </div>

      {activeImage ? (
        <div
          className="lightbox"
          role="dialog"
          aria-modal="true"
          aria-label="Image lightbox"
          onClick={close}
        >
          <div
            className="lightbox__panel"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              ref={closeButtonRef}
              type="button"
              className="lightbox__close"
              aria-label="Close lightbox"
              onClick={close}
            >
              ×
            </button>
            <button
              type="button"
              className="lightbox__nav lightbox__nav--prev"
              aria-label="Previous image"
              onClick={showPrev}
            >
              ←
            </button>
            <Image
              src={activeImage.src}
              alt={activeImage.alt}
              width={1800}
              height={1200}
              sizes="100vw"
              className="lightbox__image"
              priority
            />
            <button
              type="button"
              className="lightbox__nav lightbox__nav--next"
              aria-label="Next image"
              onClick={showNext}
            >
              →
            </button>
            <p className="lightbox__caption">{activeImage.alt}</p>
          </div>
        </div>
      ) : null}
    </>
  );
}
