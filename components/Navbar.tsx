"use client";

import React, { useEffect, useState } from "react";
import { Layers, User, Briefcase, Send } from "lucide-react";

const NAV_LINKS = [
  { id: "work",       label: "WORK",       href: "#work",       icon: Layers    },
  { id: "about",      label: "ABOUT",      href: "#about",      icon: User      },
  { id: "experience", label: "EXPERIENCE", href: "#experience", icon: Briefcase },
  { id: "contact",    label: "CONTACT",    href: "#contact",    icon: Send      },
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
        {/* ── GV Monogram + name ── */}
        <a href="#top" className="no-underline flex items-center gap-3 py-4.5 group">
          {/* Monogram badge */}
          <div className="relative w-8.5 h-8.5 bg-navy shrink-0 flex items-center justify-center">
            <span className="text-cream text-[12px] font-bold tracking-[-0.04em] leading-none select-none">
              GV
            </span>
            <span className="absolute top-0 right-0 w-1.5 h-1.5 bg-orange" />
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
