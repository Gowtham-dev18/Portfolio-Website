const STATS = [
  { value: "2+", label: "Years exp" },
  { value: "3", label: "Platforms" },
  { value: "600+", label: "Users served", accent: true },
  { value: "10+", label: "Integrations" },
];

export default function Hero() {
  return (
    <section>
      {/* availability bar */}
      <div className="flex justify-between items-center border-b border-line px-[clamp(24px,5vw,64px)] py-[18px] text-[11px] tracking-[0.12em] uppercase">
        <span className="text-signal">● Available 2025</span>
        <span className="text-muted">Coimbatore · Tamil Nadu · India</span>
      </div>

      {/* headline */}
      <div className="px-[clamp(24px,5vw,64px)] pt-[clamp(44px,6vw,72px)] pb-[clamp(40px,5vw,60px)]">
        <div className="text-xs tracking-[0.22em] uppercase text-signal mb-[26px]">
          Full Stack Software Engineer
        </div>

        <div className="duotone mb-2">
          <h1 className="layer layer-shadow text-[clamp(56px,11vw,150px)]">
            SHIP WITH<br />PURPOSE.
          </h1>
          <h1 className="layer layer-top text-[clamp(56px,11vw,150px)]">
            SHIP WITH<br />PURPOSE.
          </h1>
        </div>

        <div className="grid grid-cols-[1.4fr_1fr] gap-[clamp(28px,5vw,56px)] mt-[clamp(40px,5vw,68px)] items-end">
          <p className="m-0 text-[clamp(14px,1.1vw,16px)] leading-[1.8] text-body max-w-[580px]">
            I design solutions, build scalable systems, and ship production-grade software —
            from backend microservices and cloud infrastructure to polished frontend interfaces
            serving real users.
          </p>
          <div className="flex gap-[14px] flex-wrap">
            <a
              href="mailto:gowthamaviknesh18@gmail.com"
              className="cta-dark no-underline bg-ink text-paper px-[26px] py-[16px] text-xs tracking-[0.08em] uppercase"
            >
              Get in touch →
            </a>
            <a
              href="https://github.com/Gowtham-dev18"
              target="_blank"
              rel="noopener noreferrer"
              className="cta-orange no-underline bg-signal text-paper px-[26px] py-[16px] text-xs tracking-[0.08em] uppercase"
            >
              GitHub ↗
            </a>
          </div>
        </div>
      </div>

      {/* stat grid */}
      <div className="grid grid-cols-4 border-t border-line">
        {STATS.map((s, i) => (
          <div
            key={s.label}
            className={`px-[clamp(24px,5vw,64px)] py-[26px] ${i < 3 ? "border-r border-line" : ""}`}
          >
            <span className={`text-[clamp(28px,3vw,38px)] font-bold ${s.accent ? "text-signal" : "text-ink"}`}>
              {s.value}
            </span>
            <div className="text-[10px] tracking-[0.12em] text-muted-2 uppercase mt-[6px]">
              {s.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
