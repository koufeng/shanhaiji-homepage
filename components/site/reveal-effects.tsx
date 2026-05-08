"use client";

import { useEffect } from "react";

export function RevealEffects() {
  useEffect(() => {
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const reveals = Array.from(document.querySelectorAll<HTMLElement>(".reveal"));

    if (motionQuery.matches || !("IntersectionObserver" in window)) {
      reveals.forEach((element) => element.classList.add("visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (!entry.isIntersecting) return;
          window.setTimeout(() => entry.target.classList.add("visible"), index * 100);
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.15 }
    );

    reveals.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  return null;
}
