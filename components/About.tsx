import React from "react";

export default function About() {
  return (
    <section
      id="about"
      className="border-b border-navy/13"
      style={{ padding: "clamp(56px,7vw,96px) clamp(24px,5vw,64px)" }}
    >
      {/* Section label */}
      <div className="pf-reveal mb-7">
        <span className="inline-block bg-orange text-cream py-1.5 px-3.25 text-[11px] tracking-[0.16em] uppercase">
          About
        </span>
      </div>

      {/* Two-column: left text + right identity card */}
      <div
        className="grid items-start"
        style={{ gridTemplateColumns: "1.15fr 0.85fr", gap: "clamp(32px,5vw,72px)" }}
      >
        <div className="pf-reveal">
          <h2
            className="m-0 mb-7 font-bold leading-[1.06] tracking-tight"
            style={{ fontSize: "clamp(30px,4vw,52px)" }}
          >
            I turn ideas into{" "}
            <span className="text-orange">reliable digital products.</span>
          </h2>
          <p
            className="m-0 mb-4.5 leading-[1.85] text-body max-w-155"
            style={{ fontSize: "clamp(14px,1vw,16px)" }}
          >
            From backend architecture to polished frontend interfaces, I build production-grade
            applications end to end — with a focus on performance, security, and a seamless user
            experience.
          </p>
          <p
            className="m-0 leading-[1.85] text-body max-w-155"
            style={{ fontSize: "clamp(14px,1vw,16px)" }}
          >
            Currently shipping at scale as a Software Engineer at Noukha Technologies, where I led
            the full-stack build of a delivery platform serving 600+ users.
          </p>
        </div>

        {/* Identity card */}
        <div className="pf-reveal border border-navy/13 bg-cream-light">
          <div className="p-6 px-6.5 border-b border-navy/[0.094]">
            <div className="text-[10px] tracking-[0.14em] uppercase text-dim mb-3.5">
              Identity
            </div>
            <div className="text-[18px] font-bold tracking-[-0.01em]">
              Gowthama Viknesh K.
            </div>
            <div className="text-[12px] tracking-[0.08em] uppercase text-orange mt-1.5">
              Full Stack Software Engineer
            </div>
            <div className="text-[12px] text-muted mt-2.5">
              ⌖ Coimbatore, Tamil Nadu, India
            </div>
          </div>
          <div className="grid grid-cols-2">
            <div className="p-4.5 px-6.5 border-r border-b border-navy/[0.094]">
              <div className="text-[24px] font-bold">10+</div>
              <div className="text-[9px] tracking-[0.12em] uppercase text-dim mt-1">Projects built</div>
            </div>
            <div className="p-4.5 px-6.5 border-b border-navy/[0.094]">
              <div className="text-[24px] font-bold">5+</div>
              <div className="text-[9px] tracking-[0.12em] uppercase text-dim mt-1">Domains worked</div>
            </div>
            <div className="p-4.5 px-6.5 border-r border-navy/[0.094]">
              <div className="text-[24px] font-bold text-orange">100%</div>
              <div className="text-[9px] tracking-[0.12em] uppercase text-dim mt-1">Commitment</div>
            </div>
            <div className="p-4.5 px-6.5">
              <div className="text-[24px] font-bold">Client</div>
              <div className="text-[9px] tracking-[0.12em] uppercase text-dim mt-1">Focused approach</div>
            </div>
          </div>
        </div>
      </div>

      {/* What drives me */}
      <div className="pf-reveal" style={{ marginTop: "clamp(48px,5vw,72px)" }}>
        <div className="text-[11px] tracking-[0.14em] uppercase text-dim mb-5.5">
          What drives me
        </div>
        <div
          className="grid grid-cols-3"
          style={{ gap: "clamp(14px,1.6vw,20px)" }}
        >
          {/* Card 1 — navy */}
          <div
            className="bg-navy text-cream flex flex-col"
            style={{ padding: "clamp(26px,2.5vw,34px)" }}
          >
            <div className="flex justify-between items-start mb-6.5">
              <span className="text-[44px] font-bold text-orange" style={{ lineHeight: 0.9 }}>01</span>
              <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#f1ede2" strokeWidth="1.6">
                <circle cx="12" cy="12" r="9" /><circle cx="12" cy="12" r="4" />
                <line x1="12" y1="1" x2="12" y2="5" /><line x1="12" y1="19" x2="12" y2="23" />
                <line x1="1" y1="12" x2="5" y2="12" /><line x1="19" y1="12" x2="23" y2="12" />
              </svg>
            </div>
            <div className="text-[15px] font-bold tracking-[0.03em] uppercase mb-2.75">
              Solve Real Problems
            </div>
            <p className="m-0 text-[13px] leading-[1.75]" style={{ color: "#aeb7c8" }}>
              I enjoy building products that solve real-world challenges, not just demos.
            </p>
          </div>

          {/* Card 2 — orange */}
          <div
            className="bg-orange text-white flex flex-col"
            style={{ padding: "clamp(26px,2.5vw,34px)" }}
          >
            <div className="flex justify-between items-start mb-6.5">
              <span className="text-[44px] font-bold text-navy" style={{ lineHeight: 0.9 }}>02</span>
              <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="1.6">
                <path d="M12 2l2.2 7.8L22 12l-7.8 2.2L12 22l-2.2-7.8L2 12l7.8-2.2z" />
              </svg>
            </div>
            <div className="text-[15px] font-bold tracking-[0.03em] uppercase mb-2.75">
              Keep It Clean
            </div>
            <p className="m-0 text-[13px] leading-[1.75]" style={{ color: "#ffe1d6" }}>
              Clean code, clear design, and maintainable architecture over shortcuts.
            </p>
          </div>

          {/* Card 3 — cream */}
          <div
            className="bg-cream-light border border-navy/13 text-navy flex flex-col"
            style={{ padding: "clamp(26px,2.5vw,34px)" }}
          >
            <div className="flex justify-between items-start mb-6.5">
              <span className="text-[44px] font-bold text-orange" style={{ lineHeight: 0.9 }}>03</span>
              <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#15233f" strokeWidth="1.6">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
              </svg>
            </div>
            <div className="text-[15px] font-bold tracking-[0.03em] uppercase mb-2.75">
              Collaborate &amp; Grow
            </div>
            <p className="m-0 text-[13px] leading-[1.75] text-muted">
              I value teamwork, feedback, and continuous improvement on every team.
            </p>
          </div>
        </div>
      </div>

      {/* How I work */}
      <div className="pf-reveal" style={{ marginTop: "clamp(40px,4vw,56px)" }}>
        <div className="text-[11px] tracking-[0.14em] uppercase text-dim mb-5.5">
          How I work
        </div>
        <div className="grid grid-cols-5 border border-navy/13">
          {[
            { n: "01", title: "Understand", desc: "Dive deep into the problem." },
            { n: "02", title: "Plan", desc: "Break it down, choose the right approach." },
            { n: "03", title: "Build", desc: "Clean, efficient, scalable code." },
            { n: "04", title: "Test", desc: "Thoroughly, for quality and reliability." },
            { n: "05", title: "Deliver", desc: "Ship with confidence, iterate better." },
          ].map((step, i, arr) => (
            <div
              key={step.n}
              className="p-5.5 px-5"
              style={{ borderRight: i < arr.length - 1 ? "1px solid #15233f22" : undefined }}
            >
              <div className="text-[11px] text-orange mb-2">{step.n}</div>
              <div className="text-[14px] font-bold mb-1.5">{step.title}</div>
              <p className="m-0 text-[11px] leading-[1.6] text-subtle">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
