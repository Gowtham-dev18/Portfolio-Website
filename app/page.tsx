"use client";

import React, { useEffect } from "react";
import Hero from "@/components/Hero";
import LogoSlider from "@/components/LogoSlider";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
// import StarField from "@/components/StarField";
import FloatingTech from "@/components/FloatingTech";
import Cursor from "@/components/Cursor";
// import CircularBadge from "@/components/CircularBadge";
export default function Home() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("vis");
          }
        });
      },
      { threshold: 0.1 }
    );

    const animatedElements = document.querySelectorAll(".exp-item, .proj-c");
    animatedElements.forEach((el, i) => {
      (el as HTMLElement).style.transitionDelay = `${i * 0.1}s`;
      observer.observe(el);
    });

    return () => {
      animatedElements.forEach((el) => {
        observer.unobserve(el);
      });
    };
  }, []);

  return (
    <>
      {/* Interactive Background Canvas & Symbols */}
      {/* Night mode star field — disabled
      <StarField />
      */}
      {/* Floating tech background */}
      <FloatingTech />

      {/* Smooth trailing custom cursor */}
      <Cursor />

      {/* Main Content Layout */}
      <main className="relative z-10">
        <Hero />
        <LogoSlider />
        <About />
        <Experience />
        <Projects />
        <Contact />
      </main>

      {/* Floating Badge (Rotating badges with email trigger) — disabled
      <CircularBadge />
      */}

      {/* Footer */}
      <Footer />
    </>
  );
}
