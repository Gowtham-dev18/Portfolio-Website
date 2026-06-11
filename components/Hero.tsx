import React from "react";

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-center items-center text-center px-[5vw] py-16 relative w-full overflow-hidden"
    >
      <div className="max-w-6xl w-full relative z-2 flex flex-col items-center">
        <div className="inline-flex items-center gap-2 bg-accent/8 border border-accent/20 rounded-full px-4 py-[0.35rem] text-[0.78rem] font-mono text-accent mb-8 opacity-0 animate-fade-up-1 before:content-[''] before:w-1.5 before:h-1.5 before:bg-accent before:rounded-full before:animate-[pulse_2s_infinite]">
          Available for new opportunities
        </div>
        <h1 className="font-sans text-[clamp(2.5rem,6vw,5.5rem)] font-extrabold leading-[1.05] tracking-tighter mb-6 opacity-0 animate-fade-up-2">
          Gowthama <span className="text-muted">Viknesh <span className="text-accent">K.</span></span>
        </h1>
        <p className="text-[1.05rem] text-muted max-w-[850px] leading-[1.85] mb-10 mx-auto opacity-0 animate-fade-up-3">
          Full Stack Software Engineer building production-grade applications —
          from backend microservices and cloud infra to polished frontend
          interfaces.
        </p>
        <div className="flex gap-4 flex-wrap justify-center opacity-0 animate-fade-up-4">
          <a
            href="mailto:gowthamaviknesh18@gmail.com"
            className="inline-flex items-center gap-2 bg-accent text-bg px-8 py-[0.85rem] rounded-full font-semibold text-[0.875rem] no-underline transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(200,240,96,0.3)] light:hover:text-[#f4f3ee] light:hover:shadow-[0_8px_30px_rgba(90,138,0,0.25)]"
          >
            Get in touch
          </a>
          <a
            href="https://github.com/Gowtham-dev18"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-border2 text-text px-8 py-[0.85rem] rounded-full text-[0.875rem] no-underline transition-all duration-200 hover:bg-white/4 light:hover:bg-black/3"
          >
            View GitHub
          </a>
        </div>
        <div className="flex gap-10 mt-16 pt-10 border-t border-border opacity-0 animate-fade-up-5 justify-center w-full max-w-4xl">
          <div>
            <div className="font-sans text-[2rem] font-bold leading-none">
              2<span className="text-accent">+</span>
            </div>
            <div className="text-[0.75rem] text-muted mt-1">Years exp</div>
          </div>
          <div>
            <div className="font-sans text-[2rem] font-bold leading-none">3</div>
            <div className="text-[0.75rem] text-muted mt-1">Platforms</div>
          </div>
          <div>
            <div className="font-sans text-[2rem] font-bold leading-none">
              600<span className="text-accent">+</span>
            </div>
            <div className="text-[0.75rem] text-muted mt-1">Users served</div>
          </div>
          <div>
            <div className="font-sans text-[2rem] font-bold leading-none">
              10<span className="text-accent">+</span>
            </div>
            <div className="text-[0.75rem] text-muted mt-1">Integrations</div>
          </div>
        </div>
      </div>
    </section>
  );
}
