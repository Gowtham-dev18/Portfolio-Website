import React from "react";

export default function Footer() {
  return (
    <footer
      className="flex justify-between items-center flex-wrap gap-3.5"
      style={{ padding: "28px clamp(24px,5vw,64px)" }}
    >
      <span className="text-[12px] tracking-[0.06em] text-subtle">
        © 2025 Gowthama Viknesh K.
      </span>
      <span className="text-[11px] tracking-[0.12em] uppercase text-dim">
        Designed &amp; built with purpose · Coimbatore, IN
      </span>
      <a href="#top" className="pf-navlink no-underline text-[12px] tracking-[0.06em] text-navy">
        Back to top ↑
      </a>
    </footer>
  );
}
