"use client";

import { useEffect, useRef, useState } from "react";
import { Layers, User, Briefcase, Send, GraduationCap } from "lucide-react";
import Lottie, { type LottieRefCurrentProps } from "lottie-react";
import DragonAnimation from "@/public/Dragon.json";
import FireAnimation from "@/public/fire.json";
import { Graduate } from "next/font/google";

const NAV_LINKS = [
  { id: "work", label: "WORK", href: "#work", icon: Layers, color: "#0ea5a4" },
  { id: "about", label: "ABOUT", href: "#about", icon: User, color: "#2f7de1" },
  { id: "experience", label: "EXPERIENCE", href: "#experience", icon: Briefcase, color: "#8b5cf6" },
  { id: "education", label: "EDUCATION", href: "#education", icon: GraduationCap, color: "#facc15" },
  { id: "contact", label: "CONTACT", href: "#contact", icon: Send, color: "#ff5a2b" },
];

const renderLetters = (text: string, prefix: string) =>
  text.split("").map((ch, i) => (
    <span key={`${prefix}${i}`} className="pf-letter">
      {ch}
    </span>
  ));

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("");

  const brandRef = useRef<HTMLSpanElement>(null);
  const fireRef = useRef<HTMLSpanElement>(null);
  const fireLottie = useRef<LottieRefCurrentProps>(null);
  const isBreathing = useRef(false);

  /* Dragon breathes fire across the name on hover */
  const spitFire = async () => {
    if (isBreathing.current) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (!brandRef.current || !fireRef.current) return;

    isBreathing.current = true;
    const { gsap } = await import("gsap");

    const dist = brandRef.current.offsetWidth;
    const letters = brandRef.current.querySelectorAll<HTMLElement>(".pf-letter");
    const sweep = 0.85;

    fireLottie.current?.goToAndPlay(0, true);

    gsap
      .timeline({
        onComplete: () => {
          gsap.set(fireRef.current, { x: -8, y: -20, opacity: 0 });
          isBreathing.current = false;
        },
      })
      .set(fireRef.current, { x: -8, y: -20, opacity: 0 })
      .to(fireRef.current, { opacity: 1, duration: 0.12 }, 0)
      .to(fireRef.current, { x: dist, duration: sweep, ease: "power1.inOut" }, 0)
      .to(
        letters,
        {
          "--lit": 1,
          duration: 0.15,
          ease: "power1.out",
          yoyo: true,
          repeat: 1,
          stagger: { each: sweep / Math.max(letters.length, 1) },
        },
        0.05
      )
      .to(fireRef.current, { opacity: 0, duration: 0.2 }, sweep - 0.05);
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
    <nav className="fixed top-0 left-0 right-0 z-100 bg-cream border-b border-navy/13">
      <div
        className="flex justify-between items-center"
        style={{ padding: "0 clamp(24px,5vw,64px)" }}
      >
        {/* ── Dragon logo + name ── */}
        <a
          href="#top"
          onMouseEnter={spitFire}
          className="no-underline flex items-center gap-2 py-4.5 group"
        >
          {/* Dragon Lottie avatar */}
          <div id="nav-dragon" className="w-12 h-12 shrink-0">
            <Lottie animationData={DragonAnimation} loop autoplay style={{ width: "100%", height: "100%" }} />
          </div>
          {/* Name — hides on small screens */}
          <span
            ref={brandRef}
            className="relative hidden sm:block text-[22px] leading-none font-bold tracking-[0.04em]"
          >
            <span className="text-navy">{renderLetters("GOWTHAMA ", "g")}</span>
            <span className="text-orange font-brand">{renderLetters("VIKNESH K.", "v")}</span>
            {/* Fire layer — sweeps across on hover */}
            <span
              ref={fireRef}
              className="pointer-events-none absolute top-1/2 left-0 opacity-0"
              style={{ width: 40, height: 40 }}
            >
              <Lottie
                lottieRef={fireLottie}
                animationData={FireAnimation}
                loop
                autoplay={false}
                style={{ width: "100%", height: "100%" }}
              />
            </span>
          </span>
        </a>

        {/* ── Nav links ── */}
        <div
          className="flex items-center"
          style={{ gap: "clamp(20px,2.5vw,38px)" }}
        >
          {NAV_LINKS.map(({ id, label, href, icon: Icon, color }) => (
            <a
              key={id}
              href={href}
              className={[
                "relative no-underline flex items-center gap-2 py-4.5",
                "text-[12px] font-semibold tracking-[0.08em] uppercase transition-colors duration-200",
                "pf-navlink",
                isActive(id) ? "text-orange" : "text-muted",
              ].join(" ")}
            >
              <Icon size={17} strokeWidth={2.6} color={color} />
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
