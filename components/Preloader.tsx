"use client";

import React, { useEffect, useRef, useState } from "react";
import Lottie from "lottie-react";
import DragonAnimation from "@/public/Dragon.json";

export default function Preloader() {
  const overlayRef = useRef<HTMLDivElement>(null);
  const dragonRef = useRef<HTMLDivElement>(null);
  const counterRef = useRef<HTMLDivElement>(null);
  const [count, setCount] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    let killed = false;
    document.body.style.overflow = "hidden";

    const finish = () => {
      if (killed) return;
      document.body.style.overflow = "";
      setDone(true);
    };

    async function run() {
      const { gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      if (killed) return;

      const reduceMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      const progress = { val: 0 };
      const onUpdate = () => setCount(Math.round(progress.val));

      // Stepped loading — count climbs to each milestone then pauses
      const steps = [
        { to: 35, dur: 1.0, hold: 0.45 },
        { to: 45, dur: 0.6, hold: 0.4 },
        { to: 67, dur: 0.9, hold: 0.5 },
        { to: 87, dur: 0.8, hold: 0.4 },
        { to: 100, dur: 0.7, hold: 0.3 },
      ];

      const countTl = gsap.timeline({
        onComplete: () => {
          if (killed) return;

          const navTarget = document.getElementById("nav-dragon");
          const dragonEl = dragonRef.current;

          // Reduced motion or missing target → plain fade out
          if (reduceMotion || !navTarget || !dragonEl) {
            gsap.to(overlayRef.current, {
              opacity: 0,
              duration: 0.5,
              ease: "power2.out",
              onComplete: () => {
                ScrollTrigger.refresh();
                finish();
              },
            });
            return;
          }

          const from = dragonEl.getBoundingClientRect();
          const to = navTarget.getBoundingClientRect();
          const scale = to.width / from.width;
          const dx = to.left + to.width / 2 - (from.left + from.width / 2);
          const dy = to.top + to.height / 2 - (from.top + from.height / 2);

          const tl = gsap.timeline({
            onComplete: () => {
              ScrollTrigger.refresh();
              finish();
            },
          });

          tl.to(
            counterRef.current,
            { opacity: 0, y: 20, duration: 0.4, ease: "power2.in" },
            0
          )
            .to(
              dragonEl,
              {
                x: dx,
                y: dy,
                scale,
                transformOrigin: "center center",
                duration: 1.7,
                ease: "power3.inOut",
              },
              0
            )
            .to(
              overlayRef.current,
              { opacity: 0, duration: 0.6, ease: "power2.out" },
              1.1
            );
        },
      });

      steps.forEach(({ to, dur, hold }) => {
        countTl
          .to(progress, { val: to, duration: dur, ease: "power1.inOut", onUpdate })
          .to({}, { duration: hold });
      });
    }

    run();

    return () => {
      killed = true;
      document.body.style.overflow = "";
    };
  }, []);

  if (done) return null;

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-200 bg-cream flex items-center justify-center overflow-hidden"
    >
      {/* Centered dragon */}
      <div
        ref={dragonRef}
        className="shrink-0"
        style={{ width: "clamp(160px,22vw,240px)", height: "clamp(160px,22vw,240px)" }}
      >
        <Lottie
          animationData={DragonAnimation}
          loop
          autoplay
          style={{ width: "100%", height: "100%" }}
        />
      </div>

      {/* Bottom-right counter */}
      <div
        ref={counterRef}
        className="absolute bottom-0 right-0 flex items-end gap-3"
        style={{ padding: "clamp(24px,5vw,64px)" }}
      >
        <span className="text-dim text-[11px] tracking-[0.16em] uppercase mb-3">
          Loading
        </span>
        <span
          className="text-orange font-bold leading-none tracking-tight tabular-nums"
          style={{ fontSize: "clamp(64px,12vw,160px)" }}
        >
          {count}
        </span>
      </div>
    </div>
  );
}
