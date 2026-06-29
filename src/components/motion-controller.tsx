"use client";

import { useEffect } from "react";

export function MotionController() {
  useEffect(() => {
    const root = document.documentElement;
    root.classList.add("js-motion-ready");
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const clickTimers = new Set<number>();

    const revealItems = Array.from(
      document.querySelectorAll<HTMLElement>("[data-reveal]"),
    );
    const sectionItems = Array.from(
      document.querySelectorAll<HTMLElement>("[data-section]"),
    );
    const navLinks = Array.from(
      document.querySelectorAll<HTMLAnchorElement>("[data-nav-link]"),
    );

    const revealObserver = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            revealObserver.unobserve(entry.target);
          }
        }
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0.12 },
    );

    revealItems.forEach((item) => revealObserver.observe(item));

    const sectionObserver = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (!visible) return;

        const activeId = visible.target.id;
        navLinks.forEach((link) => {
          const isActive = link.getAttribute("href") === `#${activeId}`;
          link.classList.toggle("is-active-nav", isActive);
          if (isActive) {
            link.setAttribute("aria-current", "true");
          } else {
            link.removeAttribute("aria-current");
          }
        });
      },
      { rootMargin: "-20% 0px -58% 0px", threshold: [0.1, 0.35, 0.6] },
    );

    sectionItems.forEach((section) => sectionObserver.observe(section));
    const handlePointerDown = (event: PointerEvent) => {
      if (reduceMotion.matches || event.button !== 0) return;

      const ripple = document.createElement("span");
      ripple.className = "click-ripple";
      ripple.style.left = `${event.clientX}px`;
      ripple.style.top = `${event.clientY}px`;
      document.body.appendChild(ripple);

      const timer = window.setTimeout(() => {
        ripple.remove();
        clickTimers.delete(timer);
      }, 620);
      clickTimers.add(timer);
    };

    window.addEventListener("pointerdown", handlePointerDown, {
      passive: true,
    });
    return () => {
      root.classList.remove("js-motion-ready");
      revealObserver.disconnect();
      sectionObserver.disconnect();
      window.removeEventListener("pointerdown", handlePointerDown);
      clickTimers.forEach((timer) => window.clearTimeout(timer));
      clickTimers.clear();
      document.querySelectorAll(".click-ripple").forEach((item) => item.remove());
    };
  }, []);

  return null;
}
