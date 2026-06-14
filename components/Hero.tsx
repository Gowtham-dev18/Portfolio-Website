import React from "react";
import Navbar from "@/components/Navbar";
import HeroNinjaCircle from "@/components/HeroNinjaCircle";
import HeroFlickerTitle from "@/components/HeroFlickerTitle";
import HeroGlitchName from "@/components/HeroGlitchName";

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-center px-4 sm:px-[5vw] lg:pl-[4vw] lg:pr-[3vw] py-16 relative w-full overflow-hidden"
    >
      <Navbar />
      <div className="w-full max-w-384 mx-auto relative z-2 grid lg:grid-cols-2 gap-8 lg:gap-10 xl:gap-14 items-center">
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left w-full min-w-0 hero-copy">
          <HeroFlickerTitle />
          <HeroGlitchName />

          <p className="text-[clamp(0.95rem,1.35vw,1.05rem)] text-muted w-full max-w-none leading-[1.85] mb-10 text-pretty lg:text-left">
            Full Stack Software Engineer building production-grade applications —
            from backend microservices and cloud infra to polished frontend
            interfaces.
          </p>

          <div className="flex gap-4 flex-wrap justify-center lg:justify-start w-full">
            <a
              href="mailto:gowthamaviknesh18@gmail.com"
              className="inline-flex items-center gap-2 bg-accent text-bg px-8 py-[0.85rem] rounded-full font-semibold text-[0.875rem] no-underline transition-all duration-200 hover:-translate-y-0.5"
            >
              Get in touch
            </a>
            <a
              href="https://github.com/Gowtham-dev18"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-border2 text-text px-8 py-[0.85rem] rounded-full text-[0.875rem] no-underline transition-all duration-200 hover:bg-black/3"
            >
              View GitHub
            </a>
          </div>

          <div className="flex gap-8 sm:gap-10 mt-16 pt-10 border-t border-border justify-center lg:justify-start w-full flex-wrap">
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

        <div className="hero-ninja-column hidden lg:flex items-center justify-center self-stretch">
          <HeroNinjaCircle />
        </div>
      </div>
    </section>
  );
}
