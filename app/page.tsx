import React from "react";
import Hero from "@/components/Hero";
import LogoSlider from "@/components/LogoSlider";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Hero />
      <LogoSlider />
      <About />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}
