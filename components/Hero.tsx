import React from "react";
import Image from "next/image";
import { Mail, ArrowRight, ArrowUpRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import ninja from "@/app/images/ninja.png";

export default function Hero() {
  return (
    <section
      id="top"
      className="flex flex-col"
      style={{ minHeight: "calc(100vh - 84px)" }}
    >
      {/* Main hero content */}
      <div
        className="grid items-stretch flex-1"
        style={{
          padding: "clamp(48px,7vh,96px) clamp(24px,5vw,64px) clamp(40px,5vw,60px)",
          gridTemplateColumns: "minmax(0, 860px) clamp(300px,30vw,420px)",
          justifyContent: "start",
          gap: "clamp(36px,4vw,80px)",
        }}
      >
        {/* ── Left column ── */}
        <div className="flex flex-col">
          <div className="text-[12px] tracking-[0.22em] uppercase text-orange mb-7">
            Full Stack Software Engineer
          </div>

          {/* Big heading with offset shadow */}
          <div className="relative" style={{ lineHeight: 1 }}>
            <h1
              className="m-0 font-bold tracking-[-0.02em] absolute top-1.5 left-1.5 text-orange opacity-85 pointer-events-none"
              style={{ fontSize: "clamp(52px,9.6vw,132px)" }}
            >
              SHIP WITH<br />
              <span className="font-brand">PURPOSE</span>
            </h1>
            <h1
              className="m-0 font-bold tracking-[-0.02em] relative text-navy"
              style={{ fontSize: "clamp(52px,9.6vw,132px)" }}
            >
              SHIP WITH<br />
              <span className="font-brand">PURPOSE</span>
            </h1>
          </div>

          {/* Description */}
          <p
            className="m-0 leading-[1.8] text-body max-w-205"
            style={{
              fontSize: "clamp(14px,1.1vw,16px)",
              marginTop: "clamp(28px,4vw,48px)",
            }}
          >
            I design solutions, build scalable systems, and ship production-grade
            software — from backend microservices and cloud infrastructure to
            polished frontend interfaces serving real users.
          </p>

          {/* CTAs pinned to bottom-left */}
          <div
            className="flex gap-3.5 flex-wrap mt-auto"
            style={{ paddingTop: "clamp(40px,6vw,72px)" }}
          >
            <a
              href="mailto:gowthamaviknesh18@gmail.com"
              className="pf-cta-dark no-underline inline-flex items-center gap-2.5 bg-navy text-cream py-4 px-6.5 text-[12px] tracking-[0.08em] uppercase"
            >
              <Mail size={15} strokeWidth={2.2} />
              Get in touch
              <ArrowRight size={15} strokeWidth={2.2} />
            </a>
            <a
              href="https://github.com/Gowtham-dev18"
              target="_blank"
              rel="noopener noreferrer"
              className="pf-cta-orange no-underline inline-flex items-center gap-2.5 bg-orange text-cream py-4 px-6.5 text-[12px] tracking-[0.08em] uppercase"
            >
              <FaGithub size={15} />
              GitHub
              <ArrowUpRight size={15} strokeWidth={2.2} />
            </a>
          </div>
        </div>

        {/* ── Right column: rotating ring + ninja ── */}
        <div className="self-center justify-self-center relative aspect-square w-full max-w-115 translate-x-1/2">
          {/* Rotating ring with curved text */}
          <svg
            viewBox="0 0 300 300"
            className="w-full h-full"
            style={{ animation: "pf-spin 32s linear infinite" }}
          >
            <defs>
              <path
                id="hero-ring"
                d="M150,150 m-126,0 a126,126 0 1,1 252,0 a126,126 0 1,1 -252,0"
              />
            </defs>
            {/* Thin visible ring */}
            <circle
              cx="150"
              cy="150"
              r="98"
              fill="none"
              stroke="#15233f"
              strokeOpacity="0.22"
              strokeWidth="1"
            />
            <text
              style={{
                fontSize: "13px",
                letterSpacing: "0.16em",
                fill: "#15233f",
                fontWeight: 500,
              }}
            >
              <textPath href="#hero-ring" startOffset="0">
                THERE&apos;S NO KNOWING WHERE WE&apos;RE ROWING OR WHICH WAY THE
                RIVER&apos;S FLOWING ···{" "}
              </textPath>
            </text>
          </svg>

          {/* Ninja centered (static) */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="relative w-[58%] aspect-3/2">
              <Image
                src={ninja}
                alt="Ninja mascot"
                fill
                className="object-contain"
                sizes="(max-width: 768px) 44vw, 260px"
                priority
              />
            </div>
          </div>
        </div>
      </div>

      {/* Stats row */}
      <div className="grid grid-cols-3 border-t border-navy/13">
        <div
          className="border-r border-navy/13"
          style={{ padding: "clamp(20px,2.5vw,28px) clamp(24px,5vw,64px)" }}
        >
          <span className="font-bold" style={{ fontSize: "clamp(28px,3vw,38px)" }}>
            2+
          </span>
          <div className="text-[10px] tracking-[0.12em] text-subtle uppercase mt-1.5">
            Years exp
          </div>
        </div>
        <div
          className="border-r border-navy/13"
          style={{ padding: "clamp(20px,2.5vw,28px) clamp(24px,5vw,64px)" }}
        >
          <span
            className="font-bold text-orange"
            style={{ fontSize: "clamp(28px,3vw,38px)" }}
          >
            5+
          </span>
          <div className="text-[10px] tracking-[0.12em] text-subtle uppercase mt-1.5">
            Projects
          </div>
        </div>
        <div style={{ padding: "clamp(20px,2.5vw,28px) clamp(24px,5vw,64px)" }}>
          <span className="font-bold" style={{ fontSize: "clamp(28px,3vw,38px)" }}>
            10+
          </span>
          <div className="text-[10px] tracking-[0.12em] text-subtle uppercase mt-1.5">
            Integrations
          </div>
        </div>
      </div>
    </section>
  );
}
