"use client";

import React, { useState } from "react";

export default function About() {
  const [imageError, setImageError] = useState(false);

  const skills = [
    { name: "Node.js", highlight: true },
    { name: "TypeScript", highlight: true },
    { name: "NestJS", highlight: true },
    { name: "React.js", highlight: true },
    { name: "Express.js", highlight: false },
    { name: "Next.js", highlight: false },
    { name: "PostgreSQL", highlight: false },
    { name: "MongoDB", highlight: false },
    { name: "AWS", highlight: true },
    { name: "Docker", highlight: true },
    { name: "Firebase", highlight: false },
    { name: "REST APIs", highlight: false },
    { name: "Microservices", highlight: false },
    { name: "Git / GitHub", highlight: false },
  ];

  return (
    <section id="about" className="px-[5vw] py-24 relative w-full z-10">
      <div className="font-mono text-[0.72rem] text-accent tracking-[0.12em] uppercase mb-5 flex items-center gap-2.5 after:content-[''] after:h-px after:w-9 after:bg-accent after:opacity-40">
        About me
      </div>
      <h2 className="font-sans text-[clamp(2rem,4vw,2.8rem)] font-bold tracking-tight leading-[1.1] mb-6">
        Engineer by craft,
        <br />
        builder by choice.
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-start mt-12">
        <div>
          <div className="flex items-center gap-4 mb-8 p-5 bg-bg2 border border-border rounded-[16px]">
            <div className="relative inline-block">
              <div className="w-[90px] h-[90px] rounded-full bg-bg2 flex items-center justify-center font-sans text-[1.5rem] font-bold text-accent border-2 border-accent/30 overflow-hidden">
                {imageError ? (
                  "GV"
                ) : (
                  <img
                    src="https://api.dicebear.com/8.x/adventurer/svg?seed=GowthamaViknesh&backgroundColor=111113&skinColor=brown&hair=short01"
                    alt="GV"
                    className="w-full h-full object-cover rounded-full"
                    onError={() => setImageError(true)}
                  />
                )}
              </div>
              <div className="absolute bottom-1 right-1 w-4 h-4 bg-[#22c55e] rounded-full border-2 border-bg" />
              <div className="absolute -top-1.5 -right-2.5 bg-accent text-bg font-mono text-[0.6rem] font-semibold px-[7px] py-[2px] rounded-full light:text-[#f4f3ee]">
                Open
              </div>
            </div>
            <div className="flex flex-col">
              <h4 className="font-sans text-[1rem] font-bold">Gowthama Viknesh K</h4>
              <p className="text-[0.8rem] text-muted mt-[3px]">Software Engineer · Noukha Technologies</p>
              <span className="text-[0.72rem] font-mono text-accent">Coimbatore, Tamil Nadu 🇮🇳</span>
            </div>
          </div>
          <p className="text-muted2 text-[1rem] leading-[1.85] mb-6">
            I'm a <strong className="text-text font-medium">Full Stack Software Engineer</strong> with 2+ years
            building production-grade applications. Currently at <strong className="text-text font-medium">Noukha Technologies</strong>, leading development across
            multiple live platforms.
          </p>
          <p className="text-muted2 text-[1rem] leading-[1.85] mb-6">
            My work spans <strong className="text-text font-medium">microservices architecture</strong>, REST API
            design, payment gateway integrations, AWS infrastructure
            management, and shipping polished React frontends.
          </p>
          <p className="text-muted2 text-[1rem] leading-[1.85] mb-6">
            I care about <strong className="text-text font-medium">clean, maintainable code</strong> — I've
            migrated codebases to TypeScript, containerized services with
            Docker, and resolved security issues through VAPT processes.
          </p>
        </div>
        <div>
          <div className="grid grid-cols-2 gap-[0.6rem]">
            {skills.map((skill, index) => (
              <div
                key={index}
                className={`bg-bg2 border border-border rounded-[8px] px-[0.9rem] py-[0.6rem] text-[0.78rem] font-mono text-muted transition-all duration-200 cursor-default hover:border-border2 hover:text-text ${
                  skill.highlight ? "border-accent/20! text-accent!" : ""
                }`}
              >
                {skill.name}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
