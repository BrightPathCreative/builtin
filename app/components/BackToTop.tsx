"use client";

import { useCallback, useEffect, useState } from "react";

const SHOW_THRESHOLD = 300;
const BUTTON_SIZE = 56;
const RING_RADIUS = 26.5;
const CIRCUMFERENCE = 2 * Math.PI * RING_RADIUS;

function ArrowUpIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className="back-to-top__icon"
    >
      <path d="m5 12 7-7 7 7" />
      <path d="M12 19V5" />
    </svg>
  );
}

export default function BackToTop() {
  const [visible, setVisible] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY;
      const maxScroll =
        document.documentElement.scrollHeight - window.innerHeight;

      setVisible(scrollTop > SHOW_THRESHOLD);
      setProgress(maxScroll > 0 ? Math.min(scrollTop / maxScroll, 1) : 0);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = useCallback(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    window.scrollTo({
      top: 0,
      behavior: prefersReducedMotion ? "auto" : "smooth",
    });
  }, []);

  if (!visible) {
    return null;
  }

  const dashOffset = CIRCUMFERENCE * (1 - progress);

  return (
    <button
      type="button"
      className="back-to-top"
      aria-label="Back to top"
      onClick={scrollToTop}
    >
      <svg
        width={BUTTON_SIZE}
        height={BUTTON_SIZE}
        className="back-to-top__ring"
        aria-hidden="true"
      >
        <circle
          cx={BUTTON_SIZE / 2}
          cy={BUTTON_SIZE / 2}
          r={RING_RADIUS}
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          className="back-to-top__ring-track"
        />
        <circle
          cx={BUTTON_SIZE / 2}
          cy={BUTTON_SIZE / 2}
          r={RING_RADIUS}
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          strokeDasharray={CIRCUMFERENCE}
          strokeDashoffset={dashOffset}
          strokeLinecap="round"
          className="back-to-top__ring-progress"
        />
      </svg>
      <ArrowUpIcon />
    </button>
  );
}
