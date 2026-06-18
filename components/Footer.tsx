import React from "react";

export default function Footer() {
  return (
    <footer
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "wrap",
        gap: "14px",
        padding: "28px clamp(24px,5vw,64px)",
      }}
    >
      <span style={{ fontSize: "12px", letterSpacing: "0.06em", color: "#7a8298" }}>
        © 2025 Gowthama Viknesh K.
      </span>
      <span style={{ fontSize: "11px", letterSpacing: "0.12em", textTransform: "uppercase", color: "#9aa0b0" }}>
        Designed &amp; built with purpose · Coimbatore, IN
      </span>
      <a
        href="#top"
        className="pf-navlink"
        style={{ textDecoration: "none", fontSize: "12px", letterSpacing: "0.06em", color: "#15233f" }}
      >
        Back to top ↑
      </a>
    </footer>
  );
}
