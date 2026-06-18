import React from "react";

export default function About() {
  return (
    <section
      id="about"
      style={{ padding: "clamp(56px,7vw,96px) clamp(24px,5vw,64px)", borderBottom: "1px solid #15233f22" }}
    >
      {/* Section label */}
      <div className="pf-reveal" style={{ marginBottom: "28px" }}>
        <span
          style={{
            display: "inline-block",
            background: "#ff5a2b",
            color: "#f1ede2",
            padding: "6px 13px",
            fontSize: "11px",
            letterSpacing: "0.16em",
            textTransform: "uppercase",
          }}
        >
          About
        </span>
      </div>

      {/* Two-column: left text + right identity card */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1.15fr 0.85fr",
          gap: "clamp(32px,5vw,72px)",
          alignItems: "start",
        }}
      >
        <div className="pf-reveal">
          <h2
            style={{
              margin: "0 0 28px",
              fontSize: "clamp(30px,4vw,52px)",
              fontWeight: 700,
              lineHeight: 1.06,
              letterSpacing: "-0.025em",
            }}
          >
            I turn ideas into{" "}
            <span style={{ color: "#ff5a2b" }}>reliable digital products.</span>
          </h2>
          <p
            style={{
              margin: "0 0 18px",
              fontSize: "clamp(14px,1vw,16px)",
              lineHeight: 1.85,
              color: "#3a445e",
              maxWidth: "620px",
            }}
          >
            From backend architecture to polished frontend interfaces, I build production-grade
            applications end to end — with a focus on performance, security, and a seamless user
            experience.
          </p>
          <p
            style={{
              margin: 0,
              fontSize: "clamp(14px,1vw,16px)",
              lineHeight: 1.85,
              color: "#3a445e",
              maxWidth: "620px",
            }}
          >
            Currently shipping at scale as a Software Engineer at Noukha Technologies, where I led
            the full-stack build of a delivery platform serving 600+ users.
          </p>
        </div>

        {/* Identity card */}
        <div className="pf-reveal" style={{ border: "1px solid #15233f22", background: "#faf8f2" }}>
          <div style={{ padding: "24px 26px", borderBottom: "1px solid #15233f18" }}>
            <div
              style={{
                fontSize: "10px",
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: "#9aa0b0",
                marginBottom: "14px",
              }}
            >
              Identity
            </div>
            <div style={{ fontSize: "18px", fontWeight: 700, letterSpacing: "-0.01em" }}>
              Gowthama Viknesh K.
            </div>
            <div
              style={{
                fontSize: "12px",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                color: "#ff5a2b",
                marginTop: "6px",
              }}
            >
              Full Stack Software Engineer
            </div>
            <div style={{ fontSize: "12px", color: "#5a6480", marginTop: "10px" }}>
              ⌖ Coimbatore, Tamil Nadu, India
            </div>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}>
            <div
              style={{ padding: "18px 26px", borderRight: "1px solid #15233f18", borderBottom: "1px solid #15233f18" }}
            >
              <div style={{ fontSize: "24px", fontWeight: 700 }}>10+</div>
              <div style={{ fontSize: "9px", letterSpacing: "0.12em", textTransform: "uppercase", color: "#9aa0b0", marginTop: "4px" }}>
                Projects built
              </div>
            </div>
            <div style={{ padding: "18px 26px", borderBottom: "1px solid #15233f18" }}>
              <div style={{ fontSize: "24px", fontWeight: 700 }}>5+</div>
              <div style={{ fontSize: "9px", letterSpacing: "0.12em", textTransform: "uppercase", color: "#9aa0b0", marginTop: "4px" }}>
                Domains worked
              </div>
            </div>
            <div style={{ padding: "18px 26px", borderRight: "1px solid #15233f18" }}>
              <div style={{ fontSize: "24px", fontWeight: 700, color: "#ff5a2b" }}>100%</div>
              <div style={{ fontSize: "9px", letterSpacing: "0.12em", textTransform: "uppercase", color: "#9aa0b0", marginTop: "4px" }}>
                Commitment
              </div>
            </div>
            <div style={{ padding: "18px 26px" }}>
              <div style={{ fontSize: "24px", fontWeight: 700 }}>Client</div>
              <div style={{ fontSize: "9px", letterSpacing: "0.12em", textTransform: "uppercase", color: "#9aa0b0", marginTop: "4px" }}>
                Focused approach
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* What drives me */}
      <div className="pf-reveal" style={{ marginTop: "clamp(48px,5vw,72px)" }}>
        <div
          style={{
            fontSize: "11px",
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            color: "#9aa0b0",
            marginBottom: "22px",
          }}
        >
          What drives me
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3,1fr)",
            gap: "clamp(14px,1.6vw,20px)",
          }}
        >
          {/* Card 1 — navy */}
          <div
            style={{
              background: "#15233f",
              color: "#f1ede2",
              padding: "clamp(26px,2.5vw,34px)",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "26px" }}>
              <span style={{ fontSize: "44px", fontWeight: 700, lineHeight: 0.9, color: "#ff5a2b" }}>01</span>
              <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#f1ede2" strokeWidth="1.6">
                <circle cx="12" cy="12" r="9" /><circle cx="12" cy="12" r="4" />
                <line x1="12" y1="1" x2="12" y2="5" /><line x1="12" y1="19" x2="12" y2="23" />
                <line x1="1" y1="12" x2="5" y2="12" /><line x1="19" y1="12" x2="23" y2="12" />
              </svg>
            </div>
            <div style={{ fontSize: "15px", fontWeight: 700, letterSpacing: "0.03em", textTransform: "uppercase", marginBottom: "11px" }}>
              Solve Real Problems
            </div>
            <p style={{ margin: 0, fontSize: "13px", lineHeight: 1.75, color: "#aeb7c8" }}>
              I enjoy building products that solve real-world challenges, not just demos.
            </p>
          </div>

          {/* Card 2 — orange */}
          <div
            style={{
              background: "#ff5a2b",
              color: "#ffffff",
              padding: "clamp(26px,2.5vw,34px)",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "26px" }}>
              <span style={{ fontSize: "44px", fontWeight: 700, lineHeight: 0.9, color: "#15233f" }}>02</span>
              <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="1.6">
                <path d="M12 2l2.2 7.8L22 12l-7.8 2.2L12 22l-2.2-7.8L2 12l7.8-2.2z" />
              </svg>
            </div>
            <div style={{ fontSize: "15px", fontWeight: 700, letterSpacing: "0.03em", textTransform: "uppercase", marginBottom: "11px" }}>
              Keep It Clean
            </div>
            <p style={{ margin: 0, fontSize: "13px", lineHeight: 1.75, color: "#ffe1d6" }}>
              Clean code, clear design, and maintainable architecture over shortcuts.
            </p>
          </div>

          {/* Card 3 — cream */}
          <div
            style={{
              background: "#faf8f2",
              border: "1px solid #15233f22",
              color: "#15233f",
              padding: "clamp(26px,2.5vw,34px)",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "26px" }}>
              <span style={{ fontSize: "44px", fontWeight: 700, lineHeight: 0.9, color: "#ff5a2b" }}>03</span>
              <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#15233f" strokeWidth="1.6">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
              </svg>
            </div>
            <div style={{ fontSize: "15px", fontWeight: 700, letterSpacing: "0.03em", textTransform: "uppercase", marginBottom: "11px" }}>
              Collaborate &amp; Grow
            </div>
            <p style={{ margin: 0, fontSize: "13px", lineHeight: 1.75, color: "#5a6480" }}>
              I value teamwork, feedback, and continuous improvement on every team.
            </p>
          </div>
        </div>
      </div>

      {/* How I work */}
      <div className="pf-reveal" style={{ marginTop: "clamp(40px,4vw,56px)" }}>
        <div
          style={{
            fontSize: "11px",
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            color: "#9aa0b0",
            marginBottom: "22px",
          }}
        >
          How I work
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(5,1fr)",
            border: "1px solid #15233f22",
          }}
        >
          {[
            { n: "01", title: "Understand", desc: "Dive deep into the problem." },
            { n: "02", title: "Plan", desc: "Break it down, choose the right approach." },
            { n: "03", title: "Build", desc: "Clean, efficient, scalable code." },
            { n: "04", title: "Test", desc: "Thoroughly, for quality and reliability." },
            { n: "05", title: "Deliver", desc: "Ship with confidence, iterate better." },
          ].map((step, i, arr) => (
            <div
              key={step.n}
              style={{
                padding: "22px 20px",
                borderRight: i < arr.length - 1 ? "1px solid #15233f22" : undefined,
              }}
            >
              <div style={{ fontSize: "11px", color: "#ff5a2b", marginBottom: "8px" }}>{step.n}</div>
              <div style={{ fontSize: "14px", fontWeight: 700, marginBottom: "6px" }}>{step.title}</div>
              <p style={{ margin: 0, fontSize: "11px", lineHeight: 1.6, color: "#7a8298" }}>{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
