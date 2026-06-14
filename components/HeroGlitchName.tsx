"use client";

import React, { useEffect, useState } from "react";

const NAME = "Gowthama Viknesh K.";
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

  if (glitching) {
    return (
      <div className="hero-glitch-wrap mb-6">
        <h1 className="hero-glitch" data-text={JP}>
          {JP}
        </h1>
        <div className="hero-glitch-glow" aria-hidden="true">
          {JP}
        </div>
        <div className="hero-glitch-scanlines" aria-hidden="true" />
      </div>
    );
  }

  return (
    <h1 className="hero-name mb-6 w-full lg:whitespace-nowrap">
      Gowthama{" "}
      <span className="text-text">
        Viknesh <span className="text-accent">K.</span>
      </span>
    </h1>
  );
}
