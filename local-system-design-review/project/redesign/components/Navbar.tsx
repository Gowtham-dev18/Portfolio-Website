const TICKER = [
  "Full-Stack Engineer",
  "Available for work — 2025",
  "Node · NestJS · React · AWS",
  "600+ users served",
];

export default function Navbar() {
  return (
    <header id="top">
      {/* ticker */}
      <div className="bg-ink overflow-hidden whitespace-nowrap">
        <div className="marquee-track gap-[38px] py-[9px] text-[11px] tracking-[0.16em] uppercase text-paper">
          {[...TICKER, ...TICKER].map((t, i) => (
            <span key={i} className="flex items-center gap-[38px]">
              {t}
              <span className="text-signal">✦</span>
            </span>
          ))}
        </div>
      </div>

      {/* nav */}
      <nav className="sticky top-0 z-50 bg-paper flex justify-between items-center border-b border-line px-[clamp(24px,5vw,64px)] py-5">
        <a href="#top" className="no-underline text-ink text-sm font-bold tracking-[0.06em]">
          GOWTHAMA VIKNESH K.
        </a>
        <div className="flex gap-[clamp(16px,2.2vw,34px)] text-xs tracking-[0.06em]">
          <a href="#work" className="navlink no-underline text-muted">WORK</a>
          <a href="#about" className="navlink no-underline text-muted">ABOUT</a>
          <a href="#experience" className="navlink no-underline text-muted">EXPERIENCE</a>
          <a href="#contact" className="navlink no-underline text-signal">CONTACT↗</a>
        </div>
      </nav>
    </header>
  );
}
