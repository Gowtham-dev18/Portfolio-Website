import React from "react";

export default function Hero() {
  return (
    <section id="top" className="p-0">
      {/* Main hero content */}
      <div
        className="grid items-center"
        style={{
          padding: "clamp(44px,6vw,72px) clamp(24px,5vw,64px) clamp(40px,5vw,60px)",
          gridTemplateColumns: "1fr clamp(170px,20vw,272px)",
          gap: "clamp(20px,4vw,56px)",
        }}
      >
        <div>
          <div className="text-[12px] tracking-[0.22em] uppercase text-orange mb-6.5">
            Full Stack Software Engineer
          </div>

          {/* Big heading with offset shadow */}
          <div className="relative mb-2" style={{ lineHeight: 0.84 }}>
            <h1
              className="m-0 font-bold tracking-[-0.035em] absolute top-1.5 left-1.5 text-orange opacity-85 pointer-events-none"
              style={{ fontSize: "clamp(52px,9.6vw,132px)" }}
            >
              SHIP WITH<br />PURPOSE.
            </h1>
            <h1
              className="m-0 font-bold tracking-[-0.035em] relative text-navy"
              style={{ fontSize: "clamp(52px,9.6vw,132px)" }}
            >
              SHIP WITH<br />PURPOSE.
            </h1>
          </div>

          {/* Description + CTAs */}
          <div
            className="grid items-end"
            style={{
              gridTemplateColumns: "1.4fr 1fr",
              gap: "clamp(28px,5vw,56px)",
              marginTop: "clamp(40px,5vw,68px)",
            }}
          >
            <p
              className="m-0 leading-[1.8] text-body max-w-145"
              style={{ fontSize: "clamp(14px,1.1vw,16px)" }}
            >
              I design solutions, build scalable systems, and ship production-grade software — from backend microservices and cloud infrastructure to polished frontend interfaces serving real users.
            </p>
            <div className="flex gap-3.5 flex-wrap">
              <a
                href="mailto:gowthamaviknesh18@gmail.com"
                className="pf-cta-dark no-underline bg-navy text-cream py-4 px-6.5 text-[12px] tracking-[0.08em] uppercase"
              >
                Get in touch →
              </a>
              <a
                href="https://github.com/Gowtham-dev18"
                target="_blank"
                rel="noopener noreferrer"
                className="pf-cta-orange no-underline bg-orange text-cream py-4 px-6.5 text-[12px] tracking-[0.08em] uppercase"
              >
                GitHub ↗
              </a>
            </div>
          </div>
        </div>

        {/* Spinning seal */}
        <div
          className="justify-self-center relative aspect-square"
          style={{ width: "clamp(150px,18vw,250px)" }}
        >
          <svg
            viewBox="0 0 200 200"
            className="w-full h-full"
            style={{ animation: "pf-spin 20s linear infinite" }}
          >
            <defs>
              <path
                id="hero-seal"
                d="M100,100 m-76,0 a76,76 0 1,1 152,0 a76,76 0 1,1 -152,0"
              />
            </defs>
            <text style={{ fontSize: "13.5px", letterSpacing: "0.22em", fill: "#15233f", fontWeight: 600 }}>
              <textPath href="#hero-seal" startOffset="0">
                AVAILABLE FOR WORK ✦ 2025 ✦ COIMBATORE, IN ✦{" "}
              </textPath>
            </text>
          </svg>
          <span
            className="absolute inset-0 flex items-center justify-center text-orange leading-none"
            style={{ fontSize: "clamp(38px,4.6vw,60px)" }}
          >
            ↗
          </span>
        </div>
      </div>

      {/* Stats row */}
      <div className="grid grid-cols-4 border-t border-navy/13">
        <div className="border-r border-navy/13" style={{ padding: "26px clamp(24px,5vw,64px)" }}>
          <span className="font-bold" style={{ fontSize: "clamp(28px,3vw,38px)" }}>2+</span>
          <div className="text-[10px] tracking-[0.12em] text-subtle uppercase mt-1.5">Years exp</div>
        </div>
        <div className="p-6.5 border-r border-navy/13">
          <span className="font-bold" style={{ fontSize: "clamp(28px,3vw,38px)" }}>3</span>
          <div className="text-[10px] tracking-[0.12em] text-subtle uppercase mt-1.5">Platforms</div>
        </div>
        <div className="p-6.5 border-r border-navy/13">
          <span className="font-bold text-orange" style={{ fontSize: "clamp(28px,3vw,38px)" }}>600+</span>
          <div className="text-[10px] tracking-[0.12em] text-subtle uppercase mt-1.5">Users served</div>
        </div>
        <div className="p-6.5">
          <span className="font-bold" style={{ fontSize: "clamp(28px,3vw,38px)" }}>10+</span>
          <div className="text-[10px] tracking-[0.12em] text-subtle uppercase mt-1.5">Integrations</div>
        </div>
      </div>
    </section>
  );
}
