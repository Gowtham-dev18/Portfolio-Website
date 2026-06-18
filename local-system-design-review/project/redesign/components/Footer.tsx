export default function Footer() {
  return (
    <footer className="flex justify-between items-center flex-wrap gap-[14px] px-[clamp(24px,5vw,64px)] py-[28px]">
      <span className="text-xs tracking-[0.06em] text-muted-2">© 2025 Gowthama Viknesh K.</span>
      <span className="text-[11px] tracking-[0.12em] uppercase text-faint">
        Designed &amp; built with purpose · Coimbatore, IN
      </span>
      <a href="#top" className="navlink no-underline text-xs tracking-[0.06em] text-ink">
        Back to top ↑
      </a>
    </footer>
  );
}
