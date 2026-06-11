"use client";

import React, { useEffect, useRef } from "react";

export default function Cursor() {
  const curRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cur = curRef.current;
    if (!cur) return;

    let mx = 0;
    let my = 0;
    let isHovering = false;
    let isMoving = false;
    let moveTimeout: NodeJS.Timeout;

    // Track mouse movement
    const onMouseMove = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
      cur.style.left = `${mx}px`;
      cur.style.top = `${my}px`;

      // Scale up when moving (only if not already hovering)
      if (!isMoving && !isHovering) {
        isMoving = true;
        cur.style.transform = "translate(-2px, -2px) scale(1.35)";
      }

      // Reset idle timeout to scale back down when movement stops
      clearTimeout(moveTimeout);
      moveTimeout = setTimeout(() => {
        isMoving = false;
        if (!isHovering) {
          cur.style.transform = "translate(-2px, -2px) scale(1)";
        }
      }, 150);
    };

    const createSplash = (x: number, y: number) => {
      const splash = document.createElement("div");
      splash.className = "cur-splash";
      splash.style.left = `${x}px`;
      splash.style.top = `${y}px`;
      splash.innerHTML = `
        <svg class="splash-svg" width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <line x1="20" y1="20" x2="20" y2="4" stroke="var(--color-accent)" stroke-width="2.5" stroke-linecap="round" />
          <line x1="20" y1="20" x2="9" y2="9" stroke="var(--color-accent)" stroke-width="2.5" stroke-linecap="round" />
          <line x1="20" y1="20" x2="4" y2="20" stroke="var(--color-accent)" stroke-width="2.5" stroke-linecap="round" />
          <line x1="20" y1="20" x2="13" y2="5" stroke="var(--color-accent)" stroke-width="2.5" stroke-linecap="round" />
          <line x1="20" y1="20" x2="5" y2="13" stroke="var(--color-accent)" stroke-width="2.5" stroke-linecap="round" />
        </svg>
      `;
      document.body.appendChild(splash);
      setTimeout(() => {
        splash.remove();
      }, 400);
    };

    // Trigger splash on click
    const onMouseDown = (e: MouseEvent) => {
      createSplash(e.clientX, e.clientY);
    };

    // Mouse hover transitions using event delegation
    const onMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target) return;

      const interactive =
        target.closest("a") ||
        target.closest("button") ||
        target.closest(".sk-tag") ||
        target.closest(".circ-center");

      if (interactive && !isHovering) {
        isHovering = true;
        cur.style.transform = "translate(-2px, -2px) scale(1.55)";
        createSplash(e.clientX, e.clientY);
      }
    };

    const onMouseOut = (e: MouseEvent) => {
      const related = e.relatedTarget as HTMLElement;
      if (
        !related ||
        (!related.closest("a") &&
          !related.closest("button") &&
          !related.closest(".sk-tag") &&
          !related.closest(".circ-center"))
      ) {
        isHovering = false;
        cur.style.transform = isMoving
          ? "translate(-2px, -2px) scale(1.35)"
          : "translate(-2px, -2px) scale(1)";
      }
    };

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mousedown", onMouseDown);
    document.addEventListener("mouseover", onMouseOver);
    document.addEventListener("mouseout", onMouseOut);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mousedown", onMouseDown);
      document.removeEventListener("mouseover", onMouseOver);
      document.removeEventListener("mouseout", onMouseOut);
      clearTimeout(moveTimeout);
    };
  }, []);

  return (
    <div ref={curRef} className="cur hidden md:block">
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M2 2 L22 10 L13 13 L10 22 Z"
          fill="var(--color-accent)"
          fillOpacity="0.15"
          stroke="var(--color-accent)"
          strokeWidth="2.5"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}
