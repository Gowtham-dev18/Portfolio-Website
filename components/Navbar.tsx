"use client";

import { useEffect, useState } from "react";
import { Layers, User, Briefcase, Send } from "lucide-react";
import Lottie from "lottie-react";
import DragonAnimation from "@/public/Dragon.json";

const NAV_LINKS = [
  { id: "work", label: "WORK", href: "#work", icon: Layers },
  { id: "about", label: "ABOUT", href: "#about", icon: User },
  { id: "experience", label: "EXPERIENCE", href: "#experience", icon: Briefcase },
  { id: "contact", label: "CONTACT", href: "#contact", icon: Send },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("");

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
    <nav className="fixed top-0 left-0 right-0 z-100 bg-cream border-b border-navy/13">
      <div
        className="flex justify-between items-center"
        style={{ padding: "0 clamp(24px,5vw,64px)" }}
      >
        {/* ── Dragon logo + name ── */}
        <a href="#top" className="no-underline flex items-center gap-2 py-4.5 group">
          {/* Dragon Lottie avatar */}
          <div id="nav-dragon" className="w-10 h-10 shrink-0">
            <Lottie animationData={DragonAnimation} loop autoplay style={{ width: "100%", height: "100%" }} />
          </div>
          {/* Name — hides on small screens */}
          <span className="hidden sm:block text-navy text-[13px] font-bold tracking-[0.04em] transition-colors duration-200 group-hover:text-orange">
            GOWTHAMA VIKNESH K.
          </span>
        </a>

        {/* ── Nav links ── */}
        <div
          className="flex items-center"
          style={{ gap: "clamp(20px,2.5vw,38px)" }}
        >
          {NAV_LINKS.map(({ id, label, href, icon: Icon }) => (
            <a
              key={id}
              href={href}
              className={[
                "relative no-underline flex items-center gap-1.5 py-4.5",
                "text-[11px] tracking-[0.08em] uppercase transition-colors duration-200",
                "pf-navlink",
                isActive(id) ? "text-orange" : "text-muted",
              ].join(" ")}
            >
              <Icon size={11} strokeWidth={2} />
              {label}
              {/* Active underline */}
              <span
                className={[
                  "absolute bottom-0 left-0 right-0 h-0.5 bg-orange transition-opacity duration-200",
                  isActive(id) ? "opacity-100" : "opacity-0",
                ].join(" ")}
              />
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
