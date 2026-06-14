"use client";

import Image from "next/image";

/* ── small inline SVGs ── */
function IconPin() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" />
    </svg>
  );
}
function IconArrow() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
    </svg>
  );
}
function IconStar() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}
function IconCheck() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}
function IconBook() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" /><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
    </svg>
  );
}
function IconGlobe() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  );
}
function IconUsers() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}
function IconCode() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" />
    </svg>
  );
}

const HOW_I_WORK = [
  { step: "01", title: "Understand", desc: "I dive deep into the problem space before writing a line of code." },
  { step: "02", title: "Plan", desc: "I choose the right architectural approach and scalable code." },
  { step: "03", title: "Build", desc: "Clean, efficient code built for performance and reliability." },
  { step: "04", title: "Refine", desc: "Testing thoroughly and refining edge cases and reliability." },
  { step: "05", title: "Deliver", desc: "Ship with confidence, monitor closely, iterate quickly." },
];

const BEYOND_CODE = [
  { icon: <IconBook />, text: "Exploring new technologies and best practices" },
  { icon: <IconGlobe />, text: "Contributing to open source whenever I can" },
  { icon: <IconUsers />, text: "Sharing knowledge and helping developers grow" },
  { icon: <IconCode />, text: "Building side projects that inspire me" },
];

const DRIVES = [
  { title: "Solve Hard Problems", desc: "I enjoy untangling complex systems and finding elegant, scalable solutions." },
  { title: "Ship with Quality", desc: "Every line I write is designed for longevity, readability, and performance." },
  { title: "Collaborate & Grow", desc: "Great products are built by great teams — I thrive in both ambitions environments." },
  { title: "Make Real Impact", desc: "I care that what I build actually serves real people and solves real problems." },
];

export default function About() {
  return (
    <section id="about" className="px-[5vw] py-20 relative w-full z-10">

      {/* ── SECTION LABEL ── */}
      <div className="font-mono text-[0.7rem] text-accent tracking-[0.18em] uppercase mb-10 flex items-center gap-2.5">
        <span>About me</span>
        <span className="h-px w-8 bg-accent opacity-40" />
      </div>

      {/* ══════════════════════════════════════════════════════
          TWO-COLUMN GRID
      ══════════════════════════════════════════════════════ */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 xl:gap-20 items-start">

        {/* ────────────────── LEFT COLUMN ────────────────── */}
        <div className="relative">
          {/* BIG HEADING */}
          <div className="relative inline-block w-full">
            <h2
              className="font-sans leading-[1.08] tracking-tight mb-5 pr-12 md:pr-16 relative z-2"
              style={{ fontSize: "clamp(2rem, 3.6vw, 3rem)" }}
            >
              I design solutions,<br />
              build scalable systems,<br />
              and{" "}
              <em
                className="not-italic"
                style={{
                  fontStyle: "italic",
                  borderBottom: "3px solid var(--color-red)",
                  paddingBottom: "2px",
                }}
              >
                ship with purpose.
              </em>
            </h2>
            
            {/* Paper Plane Illustration */}
            <div className="absolute -top-4 -right-2 md:right-4 w-28 h-28 pointer-events-none z-1 select-none">
              <img
                src="/paper-arrow.svg"
                alt="Paper Plane"
                className="w-full h-full object-contain"
              />
            </div>
          </div>

          {/* SUB TEXT */}
          <p className="text-[0.88rem] leading-[1.7] mb-8" style={{ color: "color-mix(in srgb, var(--color-black) 55%, var(--color-bg))" }}>
            I turn ideas into reliable digital products.<br />
            From backend architecture to polished frontend interfaces — I focus on <strong className="text-text font-semibold">performance</strong>, <strong className="text-text font-semibold">security</strong>, and a <strong className="text-text font-semibold">seamless user experience</strong>.
          </p>

          {/* GV CARD */}
          <div
            className="flex items-center gap-6 p-6 rounded-[20px] mb-10 w-full"
            style={{
              background: "color-mix(in srgb, var(--color-bg) 60%, var(--color-white))",
              border: "1px solid color-mix(in srgb, var(--color-black) 6%, transparent)",
              boxShadow: "0 4px 20px rgba(0, 0, 0, 0.015)",
            }}
          >
            {/* Avatar Wrapper */}
            <div className="relative shrink-0 w-[82px] h-[82px] flex items-center justify-center">
              {/* Dashed outer ring */}
              <svg className="absolute inset-0 w-full h-full -rotate-90" viewBox="0 0 82 82">
                {/* Faint base dashed ring */}
                <circle
                  cx="41"
                  cy="41"
                  r="38"
                  fill="none"
                  stroke="color-mix(in srgb, var(--color-black) 10%, transparent)"
                  strokeWidth="1.2"
                  strokeDasharray="4 4"
                />
                {/* Colored accent dashed segment (bottom-left area in normal view) */}
                <circle
                  cx="41"
                  cy="41"
                  r="38"
                  fill="none"
                  stroke="var(--color-red)"
                  strokeWidth="1.2"
                  strokeDasharray="30 150"
                  strokeDashoffset="120"
                />
              </svg>

              {/* Inner Dark Circle */}
              <div
                className="w-[66px] h-[66px] rounded-full flex items-center justify-center relative z-2"
                style={{
                  background: "var(--color-black)",
                }}
              >
                <span className="font-edo text-[1.4rem] font-bold text-white tracking-wide transform -rotate-3 select-none">
                  GV
                </span>

                {/* Status dot (orange-red) with border matching card background */}
                <span
                  className="absolute top-0 right-0 w-4 h-4 rounded-full border-2"
                  style={{
                    backgroundColor: "var(--color-red)",
                    borderColor: "color-mix(in srgb, var(--color-bg) 60%, var(--color-white))",
                  }}
                />
              </div>
            </div>

            {/* User Details */}
            <div className="flex flex-col">
              <h4 className="font-edo text-[1.5rem] tracking-[0.02em] text-text leading-none mb-2 select-none">
                GOWTHAMA VIKNESH K.
              </h4>
              <p className="font-mono text-[0.72rem] font-bold tracking-widest text-accent uppercase mb-2 select-none">
                FULL STACK SOFTWARE ENGINEER
              </p>
              <div className="flex items-center gap-1.5 text-muted2 text-[0.88rem] font-medium select-none">
                <span className="text-text/70">
                  <IconPin />
                </span>
                <span>Coimbatore, Tamil Nadu, India</span>
              </div>
            </div>
          </div>

          {/* WHAT DRIVES ME */}
          <div>
            <p className="font-mono text-[0.68rem] tracking-[0.18em] uppercase mb-4" style={{ color: "color-mix(in srgb, var(--color-black) 40%, var(--color-bg))" }}>
              What Drives Me
            </p>
            <div className="flex flex-col gap-3 mb-10">
              {DRIVES.map((d) => (
                <div key={d.title} className="flex gap-3 items-start">
                  <span className="mt-[3px] shrink-0" style={{ color: "var(--color-red)" }}>
                    <IconArrow />
                  </span>
                  <div>
                    <p className="font-mono text-[0.78rem] font-bold text-text leading-tight">{d.title}</p>
                    <p className="text-[0.75rem] leading-[1.6] mt-0.5" style={{ color: "color-mix(in srgb, var(--color-black) 50%, var(--color-bg))" }}>{d.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ────────────────── RIGHT COLUMN ────────────────── */}
        <div className="flex flex-col gap-10">

          {/* HOW I WORK */}
          <div>
            <p className="font-mono text-[0.68rem] tracking-[0.18em] uppercase mb-6" style={{ color: "color-mix(in srgb, var(--color-black) 40%, var(--color-bg))" }}>
              How I Work
            </p>

            {/* Step flow — horizontal on md+, vertical on mobile */}
            <div className="flex flex-col sm:flex-row gap-0">
              {HOW_I_WORK.map((item, i) => (
                <div key={item.step} className="flex sm:flex-col items-start sm:items-center gap-3 sm:gap-2 flex-1 relative group">
                  {/* connector line between steps */}
                  {i < HOW_I_WORK.length - 1 && (
                    <div
                      className="hidden sm:block absolute top-[18px] left-1/2 w-full h-px"
                      style={{ background: "color-mix(in srgb, var(--color-black) 10%, transparent)" }}
                    />
                  )}
                  {/* step circle */}
                  <div
                    className="relative z-10 w-9 h-9 rounded-full flex items-center justify-center shrink-0 font-mono text-[0.6rem] font-bold transition-colors duration-200"
                    style={{
                      background: "color-mix(in srgb, var(--color-bg) 60%, var(--color-white))",
                      border: "1.5px solid color-mix(in srgb, var(--color-black) 12%, transparent)",
                      color: "var(--color-red)",
                    }}
                  >
                    {item.step}
                  </div>
                  <div className="sm:text-center">
                    <p className="font-mono text-[0.72rem] font-bold text-text leading-tight">{item.title}</p>
                    <p className="text-[0.68rem] leading-normal mt-0.5 hidden sm:block" style={{ color: "color-mix(in srgb, var(--color-black) 45%, var(--color-bg))" }}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* BEYOND CODE */}
          <div
            className="rounded-2xl p-6 flex gap-6 items-start"
            style={{
              background: "color-mix(in srgb, var(--color-bg) 60%, var(--color-white))",
              border: "1px solid color-mix(in srgb, var(--color-black) 8%, transparent)",
            }}
          >
            {/* desk illustration using public/window.svg as placeholder */}
            <div className="shrink-0 flex flex-col items-center justify-center w-20 h-20 rounded-xl" style={{ background: "color-mix(in srgb, var(--color-black) 5%, transparent)" }}>
              <Image src="/window.svg" alt="desk" width={48} height={48} />
            </div>

            <div className="flex-1">
              <p className="font-mono text-[0.68rem] tracking-[0.18em] uppercase mb-3" style={{ color: "color-mix(in srgb, var(--color-black) 40%, var(--color-bg))" }}>
                Beyond Code
              </p>
              <ul className="flex flex-col gap-2">
                {BEYOND_CODE.map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-[0.76rem] leading-snug" style={{ color: "color-mix(in srgb, var(--color-black) 58%, var(--color-bg))" }}>
                    <span style={{ color: "var(--color-red)" }}>{item.icon}</span>
                    {item.text}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* QUOTE BLOCK */}
          <div
            className="rounded-2xl p-6 relative"
            style={{
              background: "color-mix(in srgb, var(--color-bg) 60%, var(--color-white))",
              border: "1px solid color-mix(in srgb, var(--color-black) 8%, transparent)",
            }}
          >
            {/* big quote mark */}
            <span
              className="absolute -top-3 left-5 font-sans font-bold leading-none select-none"
              style={{ fontSize: "5rem", lineHeight: 1, color: "color-mix(in srgb, var(--color-red) 18%, transparent)" }}
              aria-hidden="true"
            >
              "
            </span>
            <p className="font-sans text-[0.95rem] leading-[1.7] text-text pt-4">
              Code is important, but impact is everything.<br />
              <span style={{ color: "color-mix(in srgb, var(--color-black) 55%, var(--color-bg))" }}>
                I build digital experiences that users love and businesses trust.
              </span>
            </p>
            <div className="flex items-center gap-2 mt-4">
              {[1, 2, 3, 4, 5].map((n) => (
                <span key={n} style={{ color: "var(--color-red)" }}><IconStar /></span>
              ))}
            </div>
          </div>

        </div>
        {/* ── end right column ── */}
      </div>
    </section>
  );
}
