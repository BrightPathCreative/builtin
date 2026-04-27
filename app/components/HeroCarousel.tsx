'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect, useCallback } from 'react';

const slides = [
  {
    src: '/images/murrumbeena-residence/built-in-melbourne-murrumbeena-residence-kitchen-window-seat.png',
    alt: 'Murrumbeena Residence kitchen renovation by Built In. Melbourne – navy cabinetry, window seat and marble benchtops',
  },
  {
    src: '/images/murrumbeena-residence/built-in-melbourne-murrumbeena-residence-kitchen-brass-sink-marble-splashback.png',
    alt: 'Murrumbeena Residence kitchen detail by Built In. Melbourne – brass undermount sink and Calacatta marble splashback',
  },
  {
    src: '/images/murrumbeena-residence/built-in-melbourne-murrumbeena-residence-ensuite-marble-shower-brass.png',
    alt: 'Murrumbeena Residence ensuite by Built In. Melbourne – marble subway tiles and brass rail shower',
  },
  {
    src: '/images/murrumbeena-residence/built-in-melbourne-murrumbeena-residence-bathroom-vanity-marble-brass.png',
    alt: 'Murrumbeena Residence bathroom vanity by Built In. Melbourne – bespoke grey cabinetry and Carrara marble benchtop',
  },
  {
    src: '/images/murrumbeena-residence/built-in-melbourne-murrumbeena-residence-laundry-custom-joinery-brass.png',
    alt: 'Murrumbeena Residence laundry by Built In. Melbourne – custom navy joinery and brass butler sink',
  },
  {
    src: '/images/murrumbeena-residence/built-in-melbourne-murrumbeena-residence-ensuite-shower-enclosure-marble.png',
    alt: 'Murrumbeena Residence ensuite shower enclosure by Built In. Melbourne – full Carrara marble and brass fittings',
  },
];

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => setCurrent(c => (c + 1) % slides.length), []);

  useEffect(() => {
    const id = setInterval(next, 5500);
    return () => clearInterval(id);
  }, [next]);

  return (
    <section className="hero-full" aria-label="Built In. Melbourne – selected project photography">
      {slides.map((slide, i) => (
        <div
          key={slide.src}
          className={`hero-slide${i === current ? ' hero-slide--active' : ''}`}
          aria-hidden={i !== current}
        >
          <Image
            src={slide.src}
            alt={slide.alt}
            fill
            style={{ objectFit: 'cover', objectPosition: 'center' }}
            priority={i === 0}
            sizes="100vw"
          />
        </div>
      ))}

      <div className="hero-overlay" aria-hidden="true" />

      <div className="hero-full__content section-shell">
        <div className="hero-copy">
          <p className="eyebrow">Registered Domestic Builder / CDB-U 58374</p>
          <h1>Quality Comes From Being Present.</h1>
          <p className="hero-lede">
            High-spec architectural renovations and bespoke new builds across Bayside
            Melbourne. One builder. One point of contact. Every detail, personally
            delivered.
          </p>
          <div className="hero-actions">
            <Link className="button" href="/contact">
              Discuss Your Project
            </Link>
            <a className="text-link" href="#projects">
              View selected work
            </a>
          </div>
        </div>
      </div>

      <div className="hero-dots" aria-hidden="true">
        {slides.map((_, i) => (
          <button
            key={i}
            className={`hero-dot${i === current ? ' hero-dot--active' : ''}`}
            onClick={() => setCurrent(i)}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
