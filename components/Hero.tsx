import React from "react";
import Navbar from "@/components/Navbar";
import HeroNinjaCircle from "@/components/HeroNinjaCircle";
import HeroFlickerTitle from "@/components/HeroFlickerTitle";
import HeroGlitchName from "@/components/HeroGlitchName";

function StatIcon({ type }: { type: "years" | "platforms" | "users" | "integrations" }) {
  if (type === "years") {
    return (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
        <rect x="3" y="4" width="18" height="18" rx="2" />
        <line x1="16" y1="2" x2="16" y2="6" />
        <line x1="8" y1="2" x2="8" y2="6" />
        <line x1="3" y1="10" x2="21" y2="10" />
      </svg>
    );
  }
  if (type === "platforms") {
    return (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5" />
        <path d="M2 12l10 5 10-5" />
      </svg>
    );
  }
  if (type === "users") {
    return (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    );
  }
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  );
}

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-center px-4 sm:px-[5vw] lg:pl-[4vw] lg:pr-[3vw] py-16 relative w-full overflow-hidden"
    >
      <Navbar />
      <div className="max-w-384 w-full mx-auto relative z-2 grid lg:grid-cols-2 gap-8 lg:gap-10 xl:gap-14 items-center">
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left w-full min-w-0 hero-copy">
          <HeroFlickerTitle />
          <HeroGlitchName />

          <p className="hero-description">
            Full Stack Software Engineer building production-grade applications — from backend microservices and cloud infra to polished frontend interfaces.
          </p>

          <div className="flex gap-6 flex-wrap items-center justify-center lg:justify-start w-full">
            <a
              href="mailto:gowthamaviknesh18@gmail.com"
              className="hero-cta-primary"
            >
              GET IN TOUCH
              <span className="hero-cta-arrow" aria-hidden="true">→</span>
            </a>
            <a
              href="https://github.com/Gowtham-dev18"
              target="_blank"
              rel="noopener noreferrer"
              className="hero-cta-github"
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              VIEW GITHUB
            </a>
          </div>

          <div className="hero-stats">
            <div className="hero-stat">
              <div className="hero-stat-icon"><StatIcon type="years" /></div>
              <div className="hero-stat-value">2<span className="text-accent">+</span></div>
              <div className="hero-stat-label">Years exp</div>
            </div>
            <div className="hero-stat">
              <div className="hero-stat-icon"><StatIcon type="platforms" /></div>
              <div className="hero-stat-value">3</div>
              <div className="hero-stat-label">Platforms</div>
            </div>
            <div className="hero-stat">
              <div className="hero-stat-icon"><StatIcon type="users" /></div>
              <div className="hero-stat-value">600<span className="text-accent">+</span></div>
              <div className="hero-stat-label">Users served</div>
            </div>
            <div className="hero-stat">
              <div className="hero-stat-icon"><StatIcon type="integrations" /></div>
              <div className="hero-stat-value">10<span className="text-accent">+</span></div>
              <div className="hero-stat-label">Integrations</div>
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
