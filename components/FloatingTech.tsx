"use client";

import React, { useMemo } from "react";

/** Deterministic 0–1 value so SSR and client hydration match */
function pseudoRandom(seed: number) {
  const x = Math.sin(seed * 127.1 + 311.7) * 43758.5453;
  return x - Math.floor(x);
}

export default function FloatingTech() {
  const techItems = useMemo(() => {
    const list = [
      "JS",
      "TS",
      "⚛",
      "Node",
      "CSS",
      "HTML",
      "SQL",
      "Git",
      "🐳",
      "AWS",
      "🔥",
      "API",
      "{}",
      "</>",
    ];
    return list.map((text, i) => ({
      id: i,
      text,
      left: `${pseudoRandom(i * 3) * 90 + 5}%`,
      duration: `${pseudoRandom(i * 3 + 1) * 18 + 14}s`,
      delay: `-${pseudoRandom(i * 3 + 2) * 18}s`,
    }));
  }, []);

  return (
    <div className="tech-bg" id="techBg">
      {techItems.map((item) => (
        <div
          key={item.id}
          className="tech-icon"
          style={{
            left: item.left,
            animationDuration: item.duration,
            animationDelay: item.delay,
          }}
        >
          {item.text}
        </div>
      ))}
    </div>
  );
}
