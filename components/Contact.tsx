import React from "react";

export default function Contact() {
  return (
    <>
      {/* Philosophy quote */}
      <section
        className="bg-navy text-cream border-b border-navy/13"
        style={{ padding: "clamp(56px,7vw,100px) clamp(24px,5vw,64px)" }}
      >
        <div className="pf-reveal max-w-[920px]">
          <div className="mb-7.5">
            <span className="inline-block bg-orange text-cream py-1.5 px-3.25 text-[11px] tracking-[0.16em] uppercase">
              Philosophy
            </span>
          </div>
          <p
            className="m-0 font-semibold leading-[1.25] tracking-[-0.02em]"
            style={{ fontSize: "clamp(24px,3.4vw,46px)" }}
          >
            Code is important, but{" "}
            <span className="text-orange">impact is everything.</span> I build digital
            experiences that users love and businesses trust.
          </p>
        </div>
      </section>

      {/* Contact */}
      <section
        id="contact"
        className="border-b border-navy/13"
        style={{ padding: "clamp(64px,8vw,120px) clamp(24px,5vw,64px)" }}
      >
        {/* Header */}
        <div className="pf-reveal flex items-center gap-3.5 mb-7 flex-wrap">
          <span className="inline-block bg-orange text-cream py-1.5 px-3.25 text-[11px] tracking-[0.16em] uppercase">
            Get in touch
          </span>
          <span className="text-[11px] tracking-[0.12em] uppercase text-muted inline-flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-orange inline-block" />
            Available for new projects
          </span>
        </div>

        {/* Big heading with shadow */}
        <div
          className="pf-reveal relative"
          style={{ lineHeight: 0.9, marginBottom: "clamp(34px,4.5vw,56px)" }}
        >
          <h2
            className="m-0 font-bold tracking-[-0.04em] absolute top-[5px] left-[5px] text-orange opacity-85 pointer-events-none"
            style={{ fontSize: "clamp(44px,9vw,124px)" }}
          >
            LET&apos;S WORK<br />TOGETHER.
          </h2>
          <h2
            className="m-0 font-bold tracking-[-0.04em] relative text-navy"
            style={{ fontSize: "clamp(44px,9vw,124px)" }}
          >
            LET&apos;S WORK<br />TOGETHER.
          </h2>
        </div>

        {/* Email row */}
        <a
          href="mailto:gowthamaviknesh18@gmail.com"
          className="pf-reveal pf-navlink flex justify-between items-center gap-5 flex-wrap no-underline text-navy border-y-[1.5px] border-navy"
          style={{ padding: "clamp(18px,2.4vw,30px) 0" }}
        >
          <span className="font-bold tracking-[-0.02em]" style={{ fontSize: "clamp(18px,3vw,40px)" }}>
            gowthamaviknesh18@gmail.com
          </span>
          <span className="text-orange leading-none" style={{ fontSize: "clamp(22px,3vw,40px)" }}>→</span>
        </a>

        {/* Contact tiles */}
        <div
          className="pf-reveal grid grid-cols-3"
          style={{ gap: "clamp(14px,1.6vw,20px)", marginTop: "clamp(24px,3vw,36px)" }}
        >
          <a
            href="https://www.linkedin.com/in/gowthamviknesh/"
            target="_blank"
            rel="noopener noreferrer"
            className="pf-tile no-underline text-navy border border-navy/13 flex flex-col gap-2.5"
            style={{ padding: "clamp(20px,2vw,28px)" }}
          >
            <span className="flex justify-between items-center">
              <span className="text-[16px] font-bold tracking-[0.02em]">LinkedIn</span>
              <span className="text-orange">↗</span>
            </span>
            <span className="text-[12px] opacity-60">/in/gowthamviknesh</span>
          </a>

          <a
            href="https://github.com/Gowtham-dev18"
            target="_blank"
            rel="noopener noreferrer"
            className="pf-tile no-underline text-navy border border-navy/13 flex flex-col gap-2.5"
            style={{ padding: "clamp(20px,2vw,28px)" }}
          >
            <span className="flex justify-between items-center">
              <span className="text-[16px] font-bold tracking-[0.02em]">GitHub</span>
              <span className="text-orange">↗</span>
            </span>
            <span className="text-[12px] opacity-60">/Gowtham-dev18</span>
          </a>

          <div
            className="pf-tile text-navy border border-navy/13 flex flex-col gap-2.5"
            style={{ padding: "clamp(20px,2vw,28px)" }}
          >
            <span className="flex justify-between items-center">
              <span className="text-[16px] font-bold tracking-[0.02em]">Based in</span>
              <span className="text-orange">⌖</span>
            </span>
            <span className="text-[12px] opacity-60">Coimbatore, Tamil Nadu, India</span>
          </div>
        </div>
      </section>
    </>
  );
}
