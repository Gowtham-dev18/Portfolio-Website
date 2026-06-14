"use client";

import React from "react";

interface LogoItem {
  name: string;
  path: string;
}

// Row 1 (Backend, Database & Payments)
const r1: LogoItem[] = [
  { name: "NestJS", path: "/nestjs.svg" },
  { name: "Node.js", path: "/nodejs.svg" },
  { name: "PostgreSQL", path: "/postgressql.svg" },
  { name: "Redis", path: "/redis.svg" },
  { name: "AWS", path: "/aws.svg" },
  { name: "Git", path: "/git.svg" },
  { name: "Postman", path: "/postman.svg" },
  { name: "RabbitMQ", path: "/rabbitmq.svg" },
  { name: "Razorpay", path: "/razorpay-icon.svg" },
  { name: "Zoho Payments", path: "/zoho-payments.svg" },
];

// Row 2 (Frontend, Languages & UI Tools)
const r2: LogoItem[] = [
  { name: "React", path: "/react.svg" },
  { name: "Next.js", path: "/next.svg" },
  { name: "TypeScript", path: "/typescript.svg" },
  { name: "Tailwind CSS", path: "/tailwind.svg" },
  { name: "Redux", path: "/redux.svg" },
  { name: "Zustand", path: "/zustand.svg" },
  { name: "Vite", path: "/vite.svg" },
  { name: "Jest", path: "/jest.svg" },
  { name: "Stripe", path: "/stripe.svg" },
];

export default function LogoSlider() {
  return (
    <section className="marquee-container w-full my-12">
      {/* Header for slider */}
      <div className="px-[5vw] mb-8">
        <div className="font-mono text-[0.72rem] text-accent tracking-[0.12em] uppercase mb-2 flex items-center gap-2.5 after:content-[''] after:h-px after:w-9 after:bg-accent after:opacity-40">
          Technologies
        </div>
        <h3 className="font-sans text-[clamp(1.8rem,3vw,2.5rem)] font-bold tracking-tight leading-tight">
          Tech stacks worked on
        </h3>
      </div>

      <div className="marquee-mask flex flex-col gap-6">
        {/* Row 1: Right-to-Left (loop to left) */}
        <div className="marquee-row">
          {/* We repeat the track 4 times to ensure it covers screens of any width (e.g. 4 * 840px = 3360px) */}
          <div className="marquee-track animate-marquee-left">
            {r1.map((logo, idx) => (
              <img key={`row1-track1-${idx}`} src={logo.path} alt={logo.name} className="logo-slider-item" title={logo.name} loading="lazy" />
            ))}
          </div>
          <div className="marquee-track animate-marquee-left" aria-hidden="true">
            {r1.map((logo, idx) => (
              <img key={`row1-track2-${idx}`} src={logo.path} alt={logo.name} className="logo-slider-item" title={logo.name} loading="lazy" />
            ))}
          </div>
          <div className="marquee-track animate-marquee-left" aria-hidden="true">
            {r1.map((logo, idx) => (
              <img key={`row1-track3-${idx}`} src={logo.path} alt={logo.name} className="logo-slider-item" title={logo.name} loading="lazy" />
            ))}
          </div>
          <div className="marquee-track animate-marquee-left" aria-hidden="true">
            {r1.map((logo, idx) => (
              <img key={`row1-track4-${idx}`} src={logo.path} alt={logo.name} className="logo-slider-item" title={logo.name} loading="lazy" />
            ))}
          </div>
        </div>

        {/* Row 2: Left-to-Right (loop to right) */}
        <div className="marquee-row">
          {/* We repeat the track 5 times to ensure it covers screens of any width (e.g. 5 * 756px = 3780px) */}
          <div className="marquee-track animate-marquee-right">
            {r2.map((logo, idx) => (
              <img key={`row2-track1-${idx}`} src={logo.path} alt={logo.name} className="logo-slider-item" title={logo.name} loading="lazy" />
            ))}
          </div>
          <div className="marquee-track animate-marquee-right" aria-hidden="true">
            {r2.map((logo, idx) => (
              <img key={`row2-track2-${idx}`} src={logo.path} alt={logo.name} className="logo-slider-item" title={logo.name} loading="lazy" />
            ))}
          </div>
          <div className="marquee-track animate-marquee-right" aria-hidden="true">
            {r2.map((logo, idx) => (
              <img key={`row2-track3-${idx}`} src={logo.path} alt={logo.name} className="logo-slider-item" title={logo.name} loading="lazy" />
            ))}
          </div>
          <div className="marquee-track animate-marquee-right" aria-hidden="true">
            {r2.map((logo, idx) => (
              <img key={`row2-track4-${idx}`} src={logo.path} alt={logo.name} className="logo-slider-item" title={logo.name} loading="lazy" />
            ))}
          </div>
          <div className="marquee-track animate-marquee-right" aria-hidden="true">
            {r2.map((logo, idx) => (
              <img key={`row2-track5-${idx}`} src={logo.path} alt={logo.name} className="logo-slider-item" title={logo.name} loading="lazy" />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
