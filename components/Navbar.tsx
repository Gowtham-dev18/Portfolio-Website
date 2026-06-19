import React from "react";

export default function Navbar() {
  return (
    <>
      {/* Top ticker */}
      <div className="bg-navy overflow-hidden whitespace-nowrap border-b border-navy">
        <div
          className="inline-flex gap-9.5 py-2.25 text-[11px] tracking-[0.16em] uppercase text-cream"
          style={{ animation: "pf-ticker 28s linear infinite", willChange: "transform" }}
        >
          <span>Full-Stack Engineer</span>
          <span className="text-orange">✦</span>
          <span>Available for work — 2025</span>
          <span className="text-orange">✦</span>
          <span>Node · NestJS · React · AWS</span>
          <span className="text-orange">✦</span>
          <span>600+ users served</span>
          <span className="text-orange">✦</span>
          <span>Full-Stack Engineer</span>
          <span className="text-orange">✦</span>
          <span>Available for work — 2025</span>
          <span className="text-orange">✦</span>
          <span>Node · NestJS · React · AWS</span>
          <span className="text-orange">✦</span>
          <span>600+ users served</span>
          <span className="text-orange">✦</span>
        </div>
      </div>

      {/* Sticky nav */}
      <nav
        className="flex justify-between items-center sticky top-0 z-50 bg-cream border-b border-navy/13"
        style={{ padding: "20px clamp(24px,5vw,64px)" }}
      >
        <a
          href="#top"
          className="no-underline text-navy text-[14px] font-bold tracking-[0.06em]"
        >
          GOWTHAMA VIKNESH K.
        </a>
        <div
          className="flex text-[12px] tracking-[0.06em]"
          style={{ gap: "clamp(16px,2.2vw,34px)" }}
        >
          <a href="#work" className="pf-navlink no-underline text-muted">WORK</a>
          <a href="#about" className="pf-navlink no-underline text-muted">ABOUT</a>
          <a href="#experience" className="pf-navlink no-underline text-muted">EXPERIENCE</a>
          <a href="#contact" className="pf-navlink no-underline text-orange">CONTACT↗</a>
        </div>
      </nav>
    </>
  );
}
