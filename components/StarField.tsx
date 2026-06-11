"use client";

import React, { useEffect, useRef } from "react";

interface Star {
  x: number;
  y: number;
  r: number;
  t: number;
  s: number;
}

export default function StarField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let W = (canvas.width = window.innerWidth);
    let H = (canvas.height = window.innerHeight);
    let stars: Star[] = [];

    const initStars = () => {
      W = canvas.width = window.innerWidth;
      H = canvas.height = window.innerHeight;
      stars = Array.from({ length: 150 }, () => ({
        x: Math.random() * W,
        y: Math.random() * H,
        r: Math.random() * 1.4 + 0.3,
        t: Math.random() * Math.PI * 2,
        s: Math.random() * 0.003 + 0.001,
      }));
    };

    let animationFrameId: number;

    const drawStars = () => {
      ctx.clearRect(0, 0, W, H);
      stars.forEach((s) => {
        s.t += s.s;
        const o = 0.5 + 0.5 * Math.sin(s.t);
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(200, 240, 96, ${o * 0.65})`;
        ctx.fill();
      });
      animationFrameId = requestAnimationFrame(drawStars);
    };

    initStars();
    drawStars();

    window.addEventListener("resize", initStars);

    return () => {
      window.removeEventListener("resize", initStars);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas id="stars" ref={canvasRef} className="stars" />;
}
