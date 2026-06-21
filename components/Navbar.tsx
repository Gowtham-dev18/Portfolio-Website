"use client";

import { useEffect, useState } from "react";
import { Sun, Moon, ArrowUpRight } from "lucide-react";
import Lottie from "lottie-react";
import DragonAnimation from "@/public/Dragon.json";

const NAV_LINKS = [
  { id: "work", label: "Work", href: "#work" },
  { id: "about", label: "About", href: "#about" },
  { id: "experience", label: "Experience", href: "#experience" },
  { id: "contact", label: "Contact", href: "#contact" },
];

const EMAIL = "gowthamaviknesh18@gmail.com";

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("");
  const [dark, setDark] = useState(false);

  /* Sync toggle icon with the theme applied by the no-FOUC script */
  useEffect(() => {
    setDark(document.documentElement.dataset.theme === "dark");
  }, []);

  const toggleTheme = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.dataset.theme = next ? "dark" : "light";
    try {
      localStorage.setItem("theme", next ? "dark" : "light");
    } catch {}
  };

  /* Detect which section is in view by checking bounding rects on scroll */
  useEffect(() => {
    const ordered = ["contact", "experience", "work", "about", "top"];

    const update = () => {
      for (const id of ordered) {
        const el = document.getElementById(id);
        if (!el) continue;
        const top = el.getBoundingClientRect().top;
        if (top <= window.innerHeight * 0.45) {
          setActiveSection(id);
          return;
        }
      }
      setActiveSection("top");
    };

    window.addEventListener("scroll", update, { passive: true });
    update();
    return () => window.removeEventListener("scroll", update);
  }, []);

  const isActive = (id: string) => activeSection === id;

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-100 flex justify-center pointer-events-none px-4 pb-[clamp(16px,3vw,28px)]">
      <div className="pointer-events-auto flex items-center gap-1.5 rounded-full border border-white/10 bg-[#141416] py-2 pl-2 pr-2.5 shadow-[0_10px_45px_-8px_rgba(0,0,0,0.55)]">
        {/* ── Dragon logo (preloader flies the dragon into this slot) ── */}
        <a
          href="#top"
          aria-label="Back to top"
          className="shrink-0 grid place-items-center w-11 h-11 rounded-full bg-white transition-transform duration-200 hover:scale-105 focus-visible:outline-2 focus-visible:outline-orange"
        >
          <div id="nav-dragon" className="w-8 h-8">
            <Lottie
              animationData={DragonAnimation}
              loop
              autoplay
              style={{ width: "100%", height: "100%" }}
            />
          </div>
        </a>

        {/* ── Nav links ── */}
        <div className="hidden md:flex items-center gap-1 px-2 font-heading">
          {NAV_LINKS.map(({ id, label, href }) => (
            <a
              key={id}
              href={href}
              className={[
                "relative no-underline rounded-full px-3.5 py-2 text-[13px] tracking-[0.01em]",
                "transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-orange",
                isActive(id) ? "text-orange" : "text-white/65 hover:text-white",
              ].join(" ")}
            >
              {label}
            </a>
          ))}
        </div>

        {/* ── Email pill (primary CTA) ── */}
        <a
          href={`mailto:${EMAIL}`}
          className="group shrink-0 inline-flex items-center gap-1.5 rounded-full bg-white px-4 py-2.5 text-[13px] font-medium tracking-[0.01em] text-[#141416] no-underline font-heading transition-colors duration-200 hover:bg-orange hover:text-white focus-visible:outline-2 focus-visible:outline-orange"
        >
          <span className="hidden sm:inline">{EMAIL}</span>
          <span className="sm:hidden">Get in touch</span>
          <ArrowUpRight
            size={15}
            strokeWidth={2.4}
            className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          />
        </a>

        {/* ── Theme toggle ── */}
        <button
          type="button"
          onClick={toggleTheme}
          aria-label="Toggle theme"
          className="shrink-0 grid place-items-center w-10 h-10 rounded-full text-white/70 transition-colors duration-200 hover:text-orange focus-visible:outline-2 focus-visible:outline-orange cursor-pointer"
        >
          {dark ? <Sun size={17} strokeWidth={2.2} /> : <Moon size={17} strokeWidth={2.2} />}
        </button>
      </div>
    </nav>
  );
}
