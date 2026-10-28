"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

export function CursorAura() {
  const pathname = usePathname();
  const dot = useRef<HTMLDivElement>(null);
  const glow = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || reduce || !dot.current || !glow.current) return;

    const dotEl = dot.current;
    const glowEl = glow.current;
    let x = window.innerWidth / 2;
    let y = window.innerHeight / 2;
    let gx = x;
    let gy = y;
    let frame = 0;

    const onMove = (event: PointerEvent) => {
      x = event.clientX;
      y = event.clientY;
      dotEl.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%)`;
    };

    const tick = () => {
      gx += (x - gx) * 0.12;
      gy += (y - gy) * 0.12;
      glowEl.style.transform = `translate3d(${gx}px, ${gy}px, 0) translate(-50%, -50%)`;
      frame = requestAnimationFrame(tick);
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    frame = requestAnimationFrame(tick);
    dotEl.dataset.active = "true";
    glowEl.dataset.active = "true";

    return () => {
      window.removeEventListener("pointermove", onMove);
      cancelAnimationFrame(frame);
    };
  }, [pathname]);

  if (pathname.startsWith("/admin")) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[70] hidden md:block" aria-hidden>
      <div
        ref={glow}
        className="cursor-glow absolute left-0 top-0 h-72 w-72 rounded-full opacity-0 transition-opacity duration-500 data-[active=true]:opacity-100"
      />
      <div
        ref={dot}
        className="cursor-dot absolute left-0 top-0 h-3 w-3 rounded-full opacity-0 data-[active=true]:opacity-100"
      />
    </div>
  );
}
