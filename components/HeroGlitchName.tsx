"use client";

import React, { useEffect, useState } from "react";

const JP = "できる限りのことをして、残りは運命に任せよ。";

export default function HeroGlitchName() {
  const [glitching, setGlitching] = useState(false);

  useEffect(() => {
    let glitchTimer: ReturnType<typeof setTimeout>;

    const interval = setInterval(() => {
      setGlitching(true);
      glitchTimer = setTimeout(() => setGlitching(false), 1400);
    }, 5000);

    return () => {
      clearInterval(interval);
      clearTimeout(glitchTimer);
    };
  }, []);

  return (
    <div className={`hero-name-block${glitching ? " is-glitching" : ""}`}>
      <h1 className="hero-name" aria-hidden={glitching}>
        Gowthama{" "}
        <span className="text-accent">Vik</span>
        <span className="text-text">nesh </span>
        <span className="text-accent">K.</span>
      </h1>

      <div className="hero-glitch-wrap" aria-hidden={!glitching}>
        <h1 className="hero-glitch" data-text={JP}>
          {JP}
        </h1>
      </div>
    </div>
  );
}
