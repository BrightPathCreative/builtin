'use client';

import Image from 'next/image';
import { useState, useEffect, useRef, useCallback } from 'react';

export interface CarouselImage {
  src: string;
  alt: string;
}

interface ProjectCarouselProps {
  images: CarouselImage[];
  ariaLabel?: string;
}

export default function ProjectCarousel({ images, ariaLabel }: ProjectCarouselProps) {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef<number | null>(null);

  const next = useCallback(() => setCurrent(c => (c + 1) % images.length), [images.length]);
  const prev = useCallback(() => setCurrent(c => (c - 1 + images.length) % images.length), [images.length]);

  useEffect(() => {
    if (isPaused || images.length < 2) return;
    const id = setInterval(next, 5000);
    return () => clearInterval(id);
  }, [isPaused, next, images.length]);

  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) diff > 0 ? next() : prev();
    touchStartX.current = null;
  };

  return (
    <div
      className="carousel"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      <div aria-live="polite" aria-label={ariaLabel ?? 'Project images'}>
        {images.map((img, i) => (
          <div
            key={img.src}
            className={`carousel-slide${i === current ? ' carousel-slide--active' : ''}`}
            aria-hidden={i !== current}
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              sizes="(max-width: 900px) 100vw, 45vw"
              style={{ objectFit: 'cover' }}
              priority={i === 0}
            />
          </div>
        ))}
      </div>

      {images.length > 1 && (
        <>
          <div className="carousel-dots" role="tablist" aria-label="Go to image">
            {images.map((_, i) => (
              <button
                key={i}
                role="tab"
                aria-selected={i === current}
                aria-label={`Image ${i + 1} of ${images.length}`}
                className={`carousel-dot${i === current ? ' carousel-dot--active' : ''}`}
                onClick={() => setCurrent(i)}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
