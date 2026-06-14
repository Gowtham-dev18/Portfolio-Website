import React from "react";
import Ninja from "@/components/Ninja";

const CIRCLE_TEXT = "FULL STACK DEVELOPER • ";

export default function HeroNinjaCircle() {
  return (
    <div className="hero-circular-wrap group">
      <svg
        className="hero-circular-svg"
        viewBox="0 0 200 200"
        aria-hidden="true"
      >
        <defs>
          <path
            id="hero-circle-path"
            d="M 100,100 m -92,0 a 92,92 0 1,1 184,0 a 92,92 0 1,1 -184,0"
          />
        </defs>
        <g className="hero-circular-spin">
          <text className="hero-circular-svg-text">
            <textPath href="#hero-circle-path" startOffset="0%">
              {CIRCLE_TEXT}
            </textPath>
          </text>
        </g>
      </svg>

      <div className="hero-circular-center">
        <Ninja
          className="hero-circular-ninja"
          imageClassName="hero-circular-ninja-img"
        />
      </div>

      <span className="sr-only">{CIRCLE_TEXT.trim()}</span>
    </div>
  );
}
