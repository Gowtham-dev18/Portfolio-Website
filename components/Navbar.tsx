"use client";

import React from "react";

export default function Navbar() {
  return (
    <>
      {/* Top ticker */}
      <div style={{ background: "#15233f", overflow: "hidden", whiteSpace: "nowrap", borderBottom: "1px solid #15233f" }}>
        <div
          style={{
            display: "inline-flex",
            gap: "38px",
            padding: "9px 0",
            animation: "pf-ticker 28s linear infinite",
            willChange: "transform",
            fontSize: "11px",
            letterSpacing: "0.16em",
            textTransform: "uppercase",
            color: "#f1ede2",
          }}
        >
          <span>Full-Stack Engineer</span>
          <span style={{ color: "#ff5a2b" }}>✦</span>
          <span>Available for work — 2025</span>
          <span style={{ color: "#ff5a2b" }}>✦</span>
          <span>Node · NestJS · React · AWS</span>
          <span style={{ color: "#ff5a2b" }}>✦</span>
          <span>600+ users served</span>
          <span style={{ color: "#ff5a2b" }}>✦</span>
          <span>Full-Stack Engineer</span>
          <span style={{ color: "#ff5a2b" }}>✦</span>
          <span>Available for work — 2025</span>
          <span style={{ color: "#ff5a2b" }}>✦</span>
          <span>Node · NestJS · React · AWS</span>
          <span style={{ color: "#ff5a2b" }}>✦</span>
          <span>600+ users served</span>
          <span style={{ color: "#ff5a2b" }}>✦</span>
        </div>
      </div>

      {/* Sticky nav */}
      <nav
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "20px clamp(24px,5vw,64px)",
          borderBottom: "1px solid #15233f22",
          position: "sticky",
          top: 0,
          zIndex: 50,
          background: "#f1ede2",
        }}
      >
        <a
          href="#top"
          style={{ textDecoration: "none", color: "#15233f", fontSize: "14px", fontWeight: 700, letterSpacing: "0.06em" }}
        >
          GOWTHAMA VIKNESH K.
        </a>
        <div style={{ display: "flex", gap: "clamp(16px,2.2vw,34px)", fontSize: "12px", letterSpacing: "0.06em" }}>
          <a href="#work" className="pf-navlink" style={{ textDecoration: "none", color: "#5a6480" }}>WORK</a>
          <a href="#about" className="pf-navlink" style={{ textDecoration: "none", color: "#5a6480" }}>ABOUT</a>
          <a href="#experience" className="pf-navlink" style={{ textDecoration: "none", color: "#5a6480" }}>EXPERIENCE</a>
          <a href="#contact" className="pf-navlink" style={{ textDecoration: "none", color: "#ff5a2b" }}>CONTACT↗</a>
        </div>
      </nav>
    </>
  );
}
