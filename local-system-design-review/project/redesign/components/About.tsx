const DRIVES = [
  { n: "01", title: "Solve Real Problems", body: "I enjoy building products that solve real-world challenges, not just demos." },
  { n: "02", title: "Keep It Clean", body: "Clean code, clear design, and maintainable architecture over shortcuts." },
  { n: "03", title: "Collaborate & Grow", body: "I value teamwork, feedback, and continuous improvement on every team." },
];

const PROCESS = [
  { n: "01", title: "Understand", body: "Dive deep into the problem." },
  { n: "02", title: "Plan", body: "Break it down, choose the right approach." },
  { n: "03", title: "Build", body: "Clean, efficient, scalable code." },
  { n: "04", title: "Test", body: "Thoroughly, for quality and reliability." },
  { n: "05", title: "Deliver", body: "Ship with confidence, iterate better." },
];

export default function About() {
  return (
    <section id="about" className="border-b border-line px-[clamp(24px,5vw,64px)] py-[clamp(56px,7vw,96px)]">
      <div className="reveal text-[11px] tracking-[0.16em] uppercase text-signal mb-[28px]">/// About</div>

      <div className="grid grid-cols-[1.15fr_0.85fr] gap-[clamp(32px,5vw,72px)] items-start">
        <div className="reveal">
          <h2 className="m-0 mb-[28px] text-[clamp(30px,4vw,52px)] font-bold leading-[1.06] -tracking-[0.025em]">
            I turn ideas into <span className="text-signal">reliable digital products.</span>
          </h2>
          <p className="m-0 mb-[18px] text-[clamp(14px,1vw,16px)] leading-[1.85] text-body max-w-[620px]">
            From backend architecture to polished frontend interfaces, I build production-grade
            applications end to end — with a focus on performance, security, and a seamless user experience.
          </p>
          <p className="m-0 text-[clamp(14px,1vw,16px)] leading-[1.85] text-body max-w-[620px]">
            Currently shipping at scale as a Software Engineer at Noukha Technologies, where I led
            the full-stack build of a delivery platform serving 600+ users.
          </p>
        </div>

        {/* identity card */}
        <div className="reveal border border-line bg-surface">
          <div className="px-[26px] py-[24px] border-b border-line-soft">
            <div className="text-[10px] tracking-[0.14em] uppercase text-faint mb-[14px]">Identity</div>
            <div className="text-[18px] font-bold -tracking-[0.01em]">Gowthama Viknesh K.</div>
            <div className="text-xs tracking-[0.08em] uppercase text-signal mt-[6px]">Full Stack Software Engineer</div>
            <div className="text-xs text-muted mt-[10px]">⌖ Coimbatore, Tamil Nadu, India</div>
          </div>
          <div className="grid grid-cols-2">
            {[
              { v: "10+", l: "Projects built", br: true, bb: true },
              { v: "5+", l: "Domains worked", bb: true },
              { v: "100%", l: "Commitment", accent: true, br: true },
              { v: "Client", l: "Focused approach" },
            ].map((c, i) => (
              <div
                key={i}
                className={`px-[26px] py-[18px] ${c.br ? "border-r border-line-soft" : ""} ${c.bb ? "border-b border-line-soft" : ""}`}
              >
                <div className={`text-[24px] font-bold ${c.accent ? "text-signal" : "text-ink"}`}>{c.v}</div>
                <div className="text-[9px] tracking-[0.12em] uppercase text-faint mt-[4px]">{c.l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* what drives me */}
      <div className="reveal mt-[clamp(48px,5vw,72px)]">
        <div className="text-[11px] tracking-[0.14em] uppercase text-faint mb-[22px]">What drives me</div>
        <div className="grid grid-cols-3 border-t border-l border-line">
          {DRIVES.map((d) => (
            <div key={d.n} className="p-[28px] border-r border-b border-line">
              <div className="text-[13px] font-bold tracking-[0.04em] uppercase mb-[10px]">
                <span className="text-signal">{d.n}</span> {d.title}
              </div>
              <p className="m-0 text-[13px] leading-[1.7] text-muted">{d.body}</p>
            </div>
          ))}
        </div>
      </div>

      {/* how I work */}
      <div className="reveal mt-[clamp(40px,4vw,56px)]">
        <div className="text-[11px] tracking-[0.14em] uppercase text-faint mb-[22px]">How I work</div>
        <div className="grid grid-cols-5 border border-line">
          {PROCESS.map((p, i) => (
            <div key={p.n} className={`px-[20px] py-[22px] ${i < 4 ? "border-r border-line" : ""}`}>
              <div className="text-[11px] text-signal mb-[8px]">{p.n}</div>
              <div className="text-sm font-bold mb-[6px]">{p.title}</div>
              <p className="m-0 text-[11px] leading-[1.6] text-muted-2">{p.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
