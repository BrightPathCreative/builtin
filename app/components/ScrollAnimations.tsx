"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

function observeReveals() {
  const elements = document.querySelectorAll(".reveal:not(.is-visible)");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
  );

  elements.forEach((element) => {
    const rect = element.getBoundingClientRect();
    const inView = rect.top < window.innerHeight && rect.bottom > 0;

    if (inView) {
      element.classList.add("is-visible");
      return;
    }

    observer.observe(element);
  });

  return observer;
}

export default function ScrollAnimations() {
  const pathname = usePathname();

  useEffect(() => {
    const observer = observeReveals();
    return () => observer.disconnect();
  }, [pathname]);

  return null;
}
