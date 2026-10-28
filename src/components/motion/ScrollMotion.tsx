"use client";

import { useLayoutEffect } from "react";
import { usePathname } from "next/navigation";

const CARD_SELECTOR = [
  "section article",
  "section li",
  "section figure",
  "section .rounded-2xl",
  "section .rounded-3xl",
].join(", ");

export function ScrollMotion() {
  const pathname = usePathname();

  useLayoutEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const main = document.getElementById("main-content");
    if (!main || reduce || pathname.startsWith("/admin")) return;

    const cards = [...main.querySelectorAll(CARD_SELECTOR)];
    const outermost = cards.filter(
      (node) => !cards.some((other) => other !== node && node.contains(other)),
    );

    const supportsView = CSS.supports("animation-timeline", "view()");

    const titles = [...main.querySelectorAll("section h2")].map((heading) => {
      const parent = heading.parentElement;
      const wrapsCard = parent && outermost.some((card) => parent.contains(card));
      if (parent && !wrapsCard) return parent;
      return heading;
    });

    if (supportsView) {
      titles.forEach((node) => node.classList.add("scroll-title"));
      outermost.forEach((node, index) => {
        const card = node as HTMLElement;
        card.classList.add("scroll-item");
        card.style.setProperty("--i", String(index % 4));
      });
      return;
    }

    const pending = [...titles, ...outermost];
    pending.forEach((node) => node.classList.add("reveal-pending"));

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          entry.target.classList.add("is-shown");
          entry.target.classList.remove("reveal-pending");
          observer.unobserve(entry.target);
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.12 },
    );

    pending.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, [pathname]);

  return null;
}
