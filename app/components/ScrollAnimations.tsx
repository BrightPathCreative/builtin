'use client';

import { useEffect } from 'react';

export default function ScrollAnimations() {
  useEffect(() => {
    document.documentElement.classList.add('js-ready');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const el = entry.target as HTMLElement;

          // Stagger siblings that enter viewport together
          const parent = el.parentElement;
          if (parent) {
            const siblings = Array.from(
              parent.querySelectorAll(':scope > .reveal')
            ) as HTMLElement[];
            const idx = siblings.indexOf(el);
            if (idx > 0) {
              el.style.transitionDelay = `${idx * 95}ms`;
            }
          }

          el.classList.add('reveal--visible');
          observer.unobserve(el);
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -48px 0px' }
    );

    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return null;
}
