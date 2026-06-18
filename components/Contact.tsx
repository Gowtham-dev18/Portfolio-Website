import React from "react";

export default function Contact() {
  return (
    <>
      {/* Philosophy quote */}
      <section
        style={{
          padding: "clamp(56px,7vw,100px) clamp(24px,5vw,64px)",
          borderBottom: "1px solid #15233f22",
          background: "#15233f",
          color: "#f1ede2",
        }}
      >
        <div className="pf-reveal" style={{ maxWidth: "920px" }}>
          <div style={{ marginBottom: "30px" }}>
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
              Philosophy
            </span>
          </div>
          <p
            style={{
              margin: 0,
              fontSize: "clamp(24px,3.4vw,46px)",
              fontWeight: 600,
              lineHeight: 1.25,
              letterSpacing: "-0.02em",
            }}
          >
            Code is important, but{" "}
            <span style={{ color: "#ff5a2b" }}>impact is everything.</span> I build digital
            experiences that users love and businesses trust.
          </p>
        </div>
      </section>

      {/* Contact */}
      <section
        id="contact"
        style={{
          padding: "clamp(64px,8vw,120px) clamp(24px,5vw,64px)",
          borderBottom: "1px solid #15233f22",
        }}
      >
        {/* Header */}
        <div
          className="pf-reveal"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "14px",
            marginBottom: "28px",
            flexWrap: "wrap",
          }}
        >
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
            Get in touch
          </span>
          <span
            style={{
              fontSize: "11px",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "#5a6480",
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
            }}
          >
            <span
              style={{
                width: "8px",
                height: "8px",
                borderRadius: "50%",
                background: "#ff5a2b",
                display: "inline-block",
              }}
            />
            Available for new projects
          </span>
        </div>

        {/* Big heading with shadow */}
        <div
          className="pf-reveal"
          style={{ position: "relative", lineHeight: 0.9, marginBottom: "clamp(34px,4.5vw,56px)" }}
        >
          <h2
            style={{
              margin: 0,
              fontSize: "clamp(44px,9vw,124px)",
              fontWeight: 700,
              letterSpacing: "-0.04em",
              position: "absolute",
              top: "5px",
              left: "5px",
              color: "#ff5a2b",
              opacity: 0.85,
              pointerEvents: "none",
            }}
          >
            LET&apos;S WORK<br />TOGETHER.
          </h2>
          <h2
            style={{
              margin: 0,
              fontSize: "clamp(44px,9vw,124px)",
              fontWeight: 700,
              letterSpacing: "-0.04em",
              position: "relative",
              color: "#15233f",
            }}
          >
            LET&apos;S WORK<br />TOGETHER.
          </h2>
        </div>

        {/* Email row */}
        <a
          href="mailto:gowthamaviknesh18@gmail.com"
          className="pf-reveal pf-navlink"
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "20px",
            flexWrap: "wrap",
            textDecoration: "none",
            color: "#15233f",
            borderTop: "1.5px solid #15233f",
            borderBottom: "1.5px solid #15233f",
            padding: "clamp(18px,2.4vw,30px) 0",
          }}
        >
          <span style={{ fontSize: "clamp(18px,3vw,40px)", fontWeight: 700, letterSpacing: "-0.02em" }}>
            gowthamaviknesh18@gmail.com
          </span>
          <span style={{ fontSize: "clamp(22px,3vw,40px)", color: "#ff5a2b", lineHeight: 1 }}>→</span>
        </a>

        {/* Contact tiles */}
        <div
          className="pf-reveal"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3,1fr)",
            gap: "clamp(14px,1.6vw,20px)",
            marginTop: "clamp(24px,3vw,36px)",
          }}
        >
          <a
            href="https://www.linkedin.com/in/gowthamviknesh/"
            target="_blank"
            rel="noopener noreferrer"
            className="pf-tile"
            style={{
              textDecoration: "none",
              color: "#15233f",
              border: "1px solid #15233f22",
              padding: "clamp(20px,2vw,28px)",
              display: "flex",
              flexDirection: "column",
              gap: "10px",
            }}
          >
            <span style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <span style={{ fontSize: "16px", fontWeight: 700, letterSpacing: "0.02em" }}>LinkedIn</span>
              <span style={{ color: "#ff5a2b" }}>↗</span>
            </span>
            <span style={{ fontSize: "12px", opacity: 0.6 }}>/in/gowthamviknesh</span>
          </a>

          <a
            href="https://github.com/Gowtham-dev18"
            target="_blank"
            rel="noopener noreferrer"
            className="pf-tile"
            style={{
              textDecoration: "none",
              color: "#15233f",
              border: "1px solid #15233f22",
              padding: "clamp(20px,2vw,28px)",
              display: "flex",
              flexDirection: "column",
              gap: "10px",
            }}
          >
            <span style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <span style={{ fontSize: "16px", fontWeight: 700, letterSpacing: "0.02em" }}>GitHub</span>
              <span style={{ color: "#ff5a2b" }}>↗</span>
            </span>
            <span style={{ fontSize: "12px", opacity: 0.6 }}>/Gowtham-dev18</span>
          </a>

          <div
            className="pf-tile"
            style={{
              color: "#15233f",
              border: "1px solid #15233f22",
              padding: "clamp(20px,2vw,28px)",
              display: "flex",
              flexDirection: "column",
              gap: "10px",
            }}
          >
            <span style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <span style={{ fontSize: "16px", fontWeight: 700, letterSpacing: "0.02em" }}>Based in</span>
              <span style={{ color: "#ff5a2b" }}>⌖</span>
            </span>
            <span style={{ fontSize: "12px", opacity: 0.6 }}>Coimbatore, Tamil Nadu, India</span>
          </div>
        </div>
      </section>
    </>
  );
}
