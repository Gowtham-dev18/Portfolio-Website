"use client";

import React, { useEffect, useRef } from "react";

export default function Cursor() {
  const curRef = useRef<HTMLDivElement>(null);
  const curRRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cur = curRef.current;
    const curR = curRRef.current;
    if (!cur || !curR) return;

    let mx = 0;
    let my = 0;
    let rx = 0;
    let ry = 0;
    let isHovering = false;

    // Track mouse movement
    const onMouseMove = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
      cur.style.left = `${mx}px`;
      cur.style.top = `${my}px`;
    };

    // Smooth trail loop
    let animationFrameId: number;
    const loop = () => {
      rx += (mx - rx) * 0.15;
      ry += (my - ry) * 0.15;
      curR.style.left = `${rx}px`;
      curR.style.top = `${ry}px`;
      animationFrameId = requestAnimationFrame(loop);
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
        cur.style.transform = "translate(-50%, -50%) scale(2.5)";
        curR.style.width = "50px";
        curR.style.height = "50px";
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
        cur.style.transform = "translate(-50%, -50%) scale(1)";
        curR.style.width = "34px";
        curR.style.height = "34px";
      }
    };

    window.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseover", onMouseOver);
    document.addEventListener("mouseout", onMouseOut);
    animationFrameId = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseover", onMouseOver);
      document.removeEventListener("mouseout", onMouseOut);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  // Hide on devices that don't support hover (touch devices)
  return (
    <>
      <div ref={curRef} className="cur hidden md:block" />
      <div ref={curRRef} className="cur-r hidden md:block" />
    </>
  );
}
