import React from "react";

// Deterministic PRNG (mulberry32) — same output on server & client, no hydration drift.
function mulberry32(seed: number) {
  return function () {
    seed |= 0;
    seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

// Build a box-shadow string of `count` white dots across a `field`×`field` area.
function starShadows(rand: () => number, count: number, field: number, color: string) {
  const parts: string[] = [];
  for (let i = 0; i < count; i++) {
    const x = Math.floor(rand() * field);
    const y = Math.floor(rand() * field);
    parts.push(`${x}px ${y}px ${color}`);
  }
  return parts.join(", ");
}

const rand = mulberry32(20240620);
const FIELD = 2000;

const LAYERS = [
  { size: 1, dur: 3.5, shadow: starShadows(rand, 600, FIELD, "#ffffff") },
  { size: 2, dur: 5.0, shadow: starShadows(rand, 220, FIELD, "#ffffff") },
  { size: 2, dur: 7.0, shadow: starShadows(rand, 70, FIELD, "rgba(255,255,255,0.9)") },
];

const SHOOTING = [
  { top: "8%",  left: "62%", dur: 6.0, delay: -2 },
  { top: "22%", left: "30%", dur: 7.5, delay: -9 },
  { top: "44%", left: "75%", dur: 6.8, delay: -14 },
  { top: "14%", left: "48%", dur: 8.0, delay: -19 },
  { top: "60%", left: "20%", dur: 7.0, delay: -25 },
];

export default function StarField() {
  return (
    <div className="pf-stars" aria-hidden>
      {LAYERS.map((l, i) => (
        <div
          key={i}
          className="pf-star-layer"
          style={
            {
              width: l.size,
              height: l.size,
              boxShadow: l.shadow,
              "--dur": `${l.dur}s`,
            } as React.CSSProperties
          }
        />
      ))}
      {SHOOTING.map((s, i) => (
        <span
          key={`s${i}`}
          className="pf-shooting"
          style={
            {
              top: s.top,
              left: s.left,
              "--dur": `${s.dur}s`,
              "--delay": `${s.delay}s`,
            } as React.CSSProperties
          }
        />
      ))}
    </div>
  );
}
