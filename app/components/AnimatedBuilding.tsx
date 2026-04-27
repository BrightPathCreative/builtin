'use client';

import { useEffect, useRef } from 'react';

const GROUP_RANGES: Record<1 | 2 | 3, [number, number]> = {
  1: [0.0, 0.45],
  2: [0.3, 0.7],
  3: [0.55, 1.0],
};
const STAGGER = 0.04;

export default function AnimatedBuilding() {
  const sectionRef = useRef<HTMLElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    const svg = svgRef.current;
    const section = sectionRef.current;
    if (!svg || !section) return;

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;

    const els = svg.querySelectorAll<SVGPathElement>('[data-animated]');

    els.forEach(el => {
      if (el.hasAttribute('data-path-length')) {
        el.style.strokeDasharray = '3 5';
        el.style.strokeDashoffset = '100';
      } else {
        const len = el.getTotalLength();
        el.style.strokeDasharray = String(len);
        el.style.strokeDashoffset = String(len);
      }
    });

    function update() {
      const rect = section!.getBoundingClientRect();
      const secH = section!.offsetHeight;
      const vh = window.innerHeight;
      const rawProgress = (vh - rect.top) / (secH + vh);
      const progress = Math.min(1, Math.max(0, rawProgress));

      els.forEach(el => {
        const g = parseInt(el.dataset.group!, 10) as 1 | 2 | 3;
        const idx = parseInt(el.dataset.index!, 10);
        const [gs, ge] = GROUP_RANGES[g];
        const pathStart = gs + idx * STAGGER;

        const pathP =
          pathStart >= ge
            ? 1
            : Math.min(1, Math.max(0, (progress - pathStart) / (ge - pathStart)));

        if (el.hasAttribute('data-path-length')) {
          el.style.strokeDashoffset = String(100 * (1 - pathP));
        } else {
          const totalLen = parseFloat(el.style.strokeDasharray);
          el.style.strokeDashoffset = String(totalLen * (1 - pathP));
        }
      });
    }

    function onScroll() {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(update);
    }

    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="animated-building-section"
      aria-label="Architectural line drawing — one floor of a modernist building"
    >
      <div className="animated-building-inner">
        <p className="animated-building-eyebrow" aria-hidden="true">
          Detail&nbsp;&nbsp;/&nbsp;&nbsp;Precision&nbsp;&nbsp;/&nbsp;&nbsp;Craft
        </p>
        <svg
          ref={svgRef}
          viewBox="0 0 1000 480"
          xmlns="http://www.w3.org/2000/svg"
          className="animated-building-svg"
          aria-hidden="true"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {/* ── Group 1: Primary Structure ── */}
          <path data-animated data-group="1" data-index="0"
            d="M 165 268 L 620 228"
            stroke="#5f6544" strokeWidth="1.5" />

          <path data-animated data-group="1" data-index="1"
            d="M 165 358 L 620 318"
            stroke="#5f6544" strokeWidth="1.5" />

          <path data-animated data-group="1" data-index="2"
            d="M 165 268 L 165 358"
            stroke="#5f6544" strokeWidth="1.5" />

          <path data-animated data-group="1" data-index="3"
            d="M 620 228 L 620 318"
            stroke="#5f6544" strokeWidth="1.5" />

          <path data-animated data-group="1" data-index="4"
            d="M 125 258 L 655 216"
            stroke="#5f6544" strokeWidth="1.5" />

          <path data-animated data-group="1" data-index="5"
            d="M 655 216 L 680 222 L 680 312 L 620 318"
            stroke="#5f6544" strokeWidth="1.5" />

          <path data-animated data-group="1" data-index="6"
            d="M 125 258 L 165 268 L 80 276 L 80 366 L 165 358"
            stroke="#5f6544" strokeWidth="1.5" />

          {/* ── Group 2: Window Grid ── */}
          <path data-animated data-group="2" data-index="0"
            d="M 233 262 L 233 352"
            stroke="#5f6544" strokeWidth="1" strokeOpacity="0.85" />

          <path data-animated data-group="2" data-index="1"
            d="M 302 256 L 302 346"
            stroke="#5f6544" strokeWidth="1" strokeOpacity="0.85" />

          <path data-animated data-group="2" data-index="2"
            d="M 374 250 L 374 340"
            stroke="#5f6544" strokeWidth="1" strokeOpacity="0.85" />

          <path data-animated data-group="2" data-index="3"
            d="M 447 243 L 447 333"
            stroke="#5f6544" strokeWidth="1" strokeOpacity="0.85" />

          <path data-animated data-group="2" data-index="4"
            d="M 520 237 L 520 327"
            stroke="#5f6544" strokeWidth="1" strokeOpacity="0.85" />

          <path data-animated data-group="2" data-index="5"
            d="M 165 318 L 620 278"
            stroke="#5f6544" strokeWidth="1" strokeOpacity="0.85" />

          <path data-animated data-group="2" data-index="6"
            d="M 620 278 L 680 272"
            stroke="#5f6544" strokeWidth="1" strokeOpacity="0.85" />

          <path data-animated data-group="2" data-index="7"
            d="M 165 290 L 620 250"
            stroke="#5f6544" strokeWidth="1" strokeOpacity="0.85" />

          {/* ── Group 3: Dashed Construction / Perspective Lines ── */}
          <path data-animated data-group="3" data-index="0" data-path-length=""
            d="M 655 216 L 1000 182"
            pathLength="100" strokeDasharray="3 5"
            stroke="#5f6544" strokeWidth="0.6" strokeOpacity="0.4" />

          <path data-animated data-group="3" data-index="1" data-path-length=""
            d="M 620 228 L 1000 190"
            pathLength="100" strokeDasharray="3 5"
            stroke="#5f6544" strokeWidth="0.6" strokeOpacity="0.4" />

          <path data-animated data-group="3" data-index="2" data-path-length=""
            d="M 680 312 L 1000 280"
            pathLength="100" strokeDasharray="3 5"
            stroke="#5f6544" strokeWidth="0.6" strokeOpacity="0.4" />

          <path data-animated data-group="3" data-index="3" data-path-length=""
            d="M 620 318 L 1000 282"
            pathLength="100" strokeDasharray="3 5"
            stroke="#5f6544" strokeWidth="0.6" strokeOpacity="0.4" />

          <path data-animated data-group="3" data-index="4" data-path-length=""
            d="M 125 258 L 0 270"
            pathLength="100" strokeDasharray="3 5"
            stroke="#5f6544" strokeWidth="0.6" strokeOpacity="0.4" />

          <path data-animated data-group="3" data-index="5" data-path-length=""
            d="M 80 276 L 0 284"
            pathLength="100" strokeDasharray="3 5"
            stroke="#5f6544" strokeWidth="0.6" strokeOpacity="0.4" />

          <path data-animated data-group="3" data-index="6" data-path-length=""
            d="M 165 358 L 0 374"
            pathLength="100" strokeDasharray="3 5"
            stroke="#5f6544" strokeWidth="0.6" strokeOpacity="0.4" />

          <path data-animated data-group="3" data-index="7" data-path-length=""
            d="M 80 366 L 0 374"
            pathLength="100" strokeDasharray="3 5"
            stroke="#5f6544" strokeWidth="0.6" strokeOpacity="0.4" />

          <path data-animated data-group="3" data-index="8" data-path-length=""
            d="M 0 245 L 1000 245"
            pathLength="100" strokeDasharray="2 12"
            stroke="#5f6544" strokeWidth="0.4" strokeOpacity="0.22" />
        </svg>
        <p className="animated-building-label" aria-hidden="true">
          One floor.&nbsp; One builder.&nbsp; Every detail.
        </p>
      </div>
    </section>
  );
}
