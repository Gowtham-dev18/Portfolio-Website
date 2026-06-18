import React from "react";

export default function Hero() {
  return (
    <section id="top" style={{ padding: 0 }}>
      {/* Main hero content */}
      <div
        style={{
          padding: "clamp(44px,6vw,72px) clamp(24px,5vw,64px) clamp(40px,5vw,60px)",
          display: "grid",
          gridTemplateColumns: "1fr clamp(170px,20vw,272px)",
          gap: "clamp(20px,4vw,56px)",
          alignItems: "center",
        }}
      >
        <div>
          <div
            style={{
              fontSize: "12px",
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: "#ff5a2b",
              marginBottom: "26px",
            }}
          >
            Full Stack Software Engineer
          </div>

          {/* Big heading with offset shadow */}
          <div style={{ position: "relative", lineHeight: 0.84, marginBottom: "8px" }}>
            <h1
              style={{
                margin: 0,
                fontSize: "clamp(52px,9.6vw,132px)",
                fontWeight: 700,
                letterSpacing: "-0.035em",
                position: "absolute",
                top: "6px",
                left: "6px",
                color: "#ff5a2b",
                opacity: 0.85,
                pointerEvents: "none",
              }}
            >
              SHIP WITH<br />PURPOSE.
            </h1>
            <h1
              style={{
                margin: 0,
                fontSize: "clamp(52px,9.6vw,132px)",
                fontWeight: 700,
                letterSpacing: "-0.035em",
                position: "relative",
                color: "#15233f",
              }}
            >
              SHIP WITH<br />PURPOSE.
            </h1>
          </div>

          {/* Description + CTAs */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1.4fr 1fr",
              gap: "clamp(28px,5vw,56px)",
              marginTop: "clamp(40px,5vw,68px)",
              alignItems: "end",
            }}
          >
            <p
              style={{
                margin: 0,
                fontSize: "clamp(14px,1.1vw,16px)",
                lineHeight: 1.8,
                color: "#3a445e",
                maxWidth: "580px",
              }}
            >
              I design solutions, build scalable systems, and ship production-grade software — from backend microservices and cloud infrastructure to polished frontend interfaces serving real users.
            </p>
            <div style={{ display: "flex", gap: "14px", flexWrap: "wrap" }}>
              <a
                href="mailto:gowthamaviknesh18@gmail.com"
                className="pf-cta-dark"
                style={{
                  textDecoration: "none",
                  background: "#15233f",
                  color: "#f1ede2",
                  padding: "16px 26px",
                  fontSize: "12px",
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                }}
              >
                Get in touch →
              </a>
              <a
                href="https://github.com/Gowtham-dev18"
                target="_blank"
                rel="noopener noreferrer"
                className="pf-cta-orange"
                style={{
                  textDecoration: "none",
                  background: "#ff5a2b",
                  color: "#f1ede2",
                  padding: "16px 26px",
                  fontSize: "12px",
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                }}
              >
                GitHub ↗
              </a>
            </div>
          </div>
        </div>

        {/* Spinning seal */}
        <div
          style={{
            justifySelf: "center",
            position: "relative",
            width: "clamp(150px,18vw,250px)",
            aspectRatio: "1",
          }}
        >
          <svg
            viewBox="0 0 200 200"
            style={{ width: "100%", height: "100%", animation: "pf-spin 20s linear infinite" }}
          >
            <defs>
              <path
                id="hero-seal"
                d="M100,100 m-76,0 a76,76 0 1,1 152,0 a76,76 0 1,1 -152,0"
              />
            </defs>
            <text
              style={{
                fontSize: "13.5px",
                letterSpacing: "0.22em",
                fill: "#15233f",
                fontWeight: 600,
              }}
            >
              <textPath href="#hero-seal" startOffset="0">
                AVAILABLE FOR WORK ✦ 2025 ✦ COIMBATORE, IN ✦{" "}
              </textPath>
            </text>
          </svg>
          <span
            style={{
              position: "absolute",
              inset: 0,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "clamp(38px,4.6vw,60px)",
              color: "#ff5a2b",
              lineHeight: 1,
            }}
          >
            ↗
          </span>
        </div>
      </div>

      {/* Stats row */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4,1fr)",
          borderTop: "1px solid #15233f22",
        }}
      >
        <div style={{ padding: "26px clamp(24px,5vw,64px)", borderRight: "1px solid #15233f22" }}>
          <span style={{ fontSize: "clamp(28px,3vw,38px)", fontWeight: 700 }}>2+</span>
          <div style={{ fontSize: "10px", letterSpacing: "0.12em", color: "#7a8298", textTransform: "uppercase", marginTop: "6px" }}>Years exp</div>
        </div>
        <div style={{ padding: "26px 28px", borderRight: "1px solid #15233f22" }}>
          <span style={{ fontSize: "clamp(28px,3vw,38px)", fontWeight: 700 }}>3</span>
          <div style={{ fontSize: "10px", letterSpacing: "0.12em", color: "#7a8298", textTransform: "uppercase", marginTop: "6px" }}>Platforms</div>
        </div>
        <div style={{ padding: "26px 28px", borderRight: "1px solid #15233f22" }}>
          <span style={{ fontSize: "clamp(28px,3vw,38px)", fontWeight: 700, color: "#ff5a2b" }}>600+</span>
          <div style={{ fontSize: "10px", letterSpacing: "0.12em", color: "#7a8298", textTransform: "uppercase", marginTop: "6px" }}>Users served</div>
        </div>
        <div style={{ padding: "26px 28px" }}>
          <span style={{ fontSize: "clamp(28px,3vw,38px)", fontWeight: 700 }}>10+</span>
          <div style={{ fontSize: "10px", letterSpacing: "0.12em", color: "#7a8298", textTransform: "uppercase", marginTop: "6px" }}>Integrations</div>
        </div>
      </div>
    </section>
  );
}
