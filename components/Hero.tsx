import React from "react";
import Image from "next/image";
import { Mail, ArrowRight, ArrowUpRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import ninja from "@/app/images/ninja.png";

interface FloatIcon {
  icon: string;
  x: number;
  y: number;
  size: number;
  dur: number;
  delay: number;
  dark?: boolean;
}

// Scattered out in the open space AROUND the ring (radius ~56-78% — overflows the square)
const OUTER_ICONS: FloatIcon[] = [
  { icon: "/react.svg",        x: 50,  y: -6,  size: 30, dur: 4.6, delay: -0.2 },
  { icon: "/nodejs.svg",       x: 76,  y: 0,   size: 26, dur: 5.3, delay: -1.1 },
  { icon: "/git.svg",          x: 92,  y: 18,  size: 24, dur: 5.0, delay: -0.3 },
  { icon: "/typescript.svg",   x: 102, y: 44,  size: 28, dur: 4.9, delay: -2.0 },
  { icon: "/aws.svg",          x: 96,  y: 72,  size: 27, dur: 5.6, delay: -0.6, dark: true },
  { icon: "/postgressql.svg",  x: 74,  y: 96,  size: 26, dur: 5.1, delay: -1.7 },
  { icon: "/redis.svg",        x: 46,  y: 104, size: 24, dur: 4.4, delay: -2.4 },
  { icon: "/nestjs.svg",       x: 20,  y: 96,  size: 27, dur: 5.8, delay: -0.9 },
  { icon: "/tailwind.svg",     x: 2,   y: 70,  size: 26, dur: 4.7, delay: -1.4 },
  { icon: "/redux.svg",        x: -6,  y: 42,  size: 24, dur: 5.4, delay: -3.0 },
  { icon: "/stripe.svg",       x: 10,  y: 16,  size: 22, dur: 4.2, delay: -1.9, dark: true },
];

// Far scatter — fills the wider open space around the ring (radius ~80-100%)
const FAR_ICONS: FloatIcon[] = [
  { icon: "/javascript.svg",    x: 28,  y: -14, size: 22, dur: 6.0, delay: -0.7 },
  { icon: "/firebase.svg",      x: 86,  y: -8,  size: 22, dur: 6.4, delay: -2.6 },
  { icon: "/postman.svg",       x: 110, y: 34,  size: 24, dur: 5.5, delay: -1.2 },
  { icon: "/tanstack.svg",      x: 104, y: 84,  size: 22, dur: 6.8, delay: -0.4 },
  { icon: "/razorpay-icon.svg", x: 58,  y: 110, size: 22, dur: 5.9, delay: -3.1 },
  { icon: "/npm.svg",           x: -14, y: 84,  size: 22, dur: 6.2, delay: -1.6 },
  { icon: "/gitlab.svg",        x: -16, y: 22,  size: 22, dur: 6.6, delay: -2.2 },
];

// Inside the ring, in the gaps above/below the ninja (radius ~24-30%)
const INNER_ICONS: FloatIcon[] = [
  { icon: "/rabbitmq.svg",       x: 50, y: 24, size: 20, dur: 3.6, delay: -0.5 },
  { icon: "/vite.svg",           x: 34, y: 30, size: 18, dur: 4.3, delay: -2.1 },
  { icon: "/jest.svg",           x: 66, y: 30, size: 19, dur: 3.7, delay: -1.0 },
  { icon: "/zoho-payments.svg",  x: 38, y: 72, size: 19, dur: 4.1, delay: -1.4 },
  { icon: "/swagger.svg",        x: 64, y: 72, size: 19, dur: 3.9, delay: -0.8 },
];

const renderFloat = (items: FloatIcon[], prefix: string) =>
  items.map((it, i) => (
    <span
      key={`${prefix}${i}`}
      className="absolute pointer-events-none"
      style={{ left: `${it.x}%`, top: `${it.y}%`, transform: "translate(-50%,-50%)" }}
    >
      <span
        className="pf-float block"
        style={
          {
            "--dur": `${it.dur}s`,
            "--delay": `${it.delay}s`,
          } as React.CSSProperties
        }
      >
        <img
          src={it.icon}
          alt=""
          aria-hidden
          className={`object-contain${it.dark ? " pf-icon-dark" : ""}`}
          style={{ width: it.size, height: it.size }}
        />
      </span>
    </span>
  ));

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
          <div className="relative" style={{ lineHeight: 1.1 }}>
            <h1
              className="m-0 font-bold font-brand tracking-[0.02em] absolute top-1.5 left-1.5 text-orange opacity-85 pointer-events-none"
              style={{ fontSize: "clamp(52px,9.6vw,132px)", wordSpacing: "0.12em" }}
            >
              SHIP WITH<br />
              PURPOSE
            </h1>
            <h1
              className="m-0 font-bold font-brand tracking-[0.02em] relative text-navy"
              style={{ fontSize: "clamp(52px,9.6vw,132px)", wordSpacing: "0.12em" }}
            >
              SHIP WITH<br />
              PURPOSE
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
              stroke="var(--color-navy)"
              strokeOpacity="0.22"
              strokeWidth="1"
            />
            <text
              style={{
                fontSize: "13px",
                letterSpacing: "0.16em",
                fill: "var(--color-navy)",
                fontWeight: 500,
              }}
            >
              <textPath href="#hero-ring" startOffset="0">
                THERE&apos;S NO KNOWING WHERE WE&apos;RE ROWING OR WHICH WAY THE
                RIVER&apos;S FLOWING ···{" "}
              </textPath>
            </text>
          </svg>

          {/* Floating tech icons — far scatter + outer ring + inner gaps */}
          {renderFloat(FAR_ICONS, "f")}
          {renderFloat(OUTER_ICONS, "o")}
          {renderFloat(INNER_ICONS, "i")}

          {/* Ninja centered, gently bobbing */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div
              className="relative w-[58%] aspect-3/2 pf-bob"
              style={{ "--dur": "5.5s" } as React.CSSProperties}
            >
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
