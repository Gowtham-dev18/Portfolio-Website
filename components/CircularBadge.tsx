"use client";

import React, { useEffect, useState } from "react";
import { useTheme } from "./ThemeProvider";

export default function CircularBadge() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const fill = theme === "dark" ? "#c8f060" : "#5a8a00";

  return (
    <div className="fixed -top-16 -right-16 w-56 h-56 z-40 pointer-events-none opacity-0 animate-fade-up-badge">
      <svg className="circ-svg w-full h-full" viewBox="0 0 180 180">
        <defs>
          <path
            id="circ-path"
            d="M90,90 m-70,0 a70,70 0 1,1 140,0 a70,70 0 1,1 -140,0"
          />
        </defs>
        <text
          fontSize="12"
          fontFamily="var(--font-mono), monospace"
          fill={mounted ? fill : "#c8f060"}
          fontWeight="500"
          letterSpacing="4.5"
        >
          <textPath href="#circ-path">
            FULL STACK ENGINEER • NODE.JS • REACT • AWS • DOCKER •{" "}
          </textPath>
        </text>
      </svg>
    </div>
  );
}
