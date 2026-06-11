"use client";

import React, { useCallback, useEffect, useState } from "react";

const EMAIL = "gowthamaviknesh18@gmail.com";
const LINKEDIN = "https://www.linkedin.com/in/gowthamviknesh/";
const GITHUB = "https://github.com/Gowtham-dev18";

const NAV_LINKS = [
  { label: "Work", href: "#projects" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

function NavLink({ label, href }: { label: string; href: string }) {
  return (
    <li>
      <a href={href} className="nav-link group">
        <span className="nav-link-track">
          <span className="nav-link-text">{label}</span>
          <span className="nav-link-text-clone" aria-hidden="true">
            {label}
          </span>
        </span>
      </a>
    </li>
  );
}

function EmailButton() {
  const [copied, setCopied] = useState(false);

  const handleCopy = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${EMAIL}`;
    }
  }, []);

  const emailIcon = (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  );

  return (
    <button
      type="button"
      className="nav-email-btn"
      onClick={handleCopy}
      aria-label={copied ? "Email copied" : "Copy email address"}
    >
      <span className="flex items-center gap-1.5 justify-center w-full h-full">
        {copied ? (
          <span className="flex items-center gap-1.5 text-emerald-500">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path
                d="M20 6L9 17l-5-5"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className="hidden sm:inline">Copied</span>
          </span>
        ) : (
          <>
            {emailIcon}
            <span className="hidden sm:inline">{EMAIL}</span>
          </>
        )}
      </span>
    </button>
  );
}

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [logoShaking, setLogoShaking] = useState(false);

  const triggerShake = () => { setLogoShaking(true) };

  useEffect(() => {
    if (!logoShaking) return;
    const timer = setTimeout(() => setLogoShaking(false), 500);
    return () => clearTimeout(timer);
  }, [logoShaking]);

  useEffect(() => {
    if (menuOpen) return;

    const interval = setInterval(() => {
      setLogoShaking(true);
    }, 2000);

    return () => clearInterval(interval);
  }, [menuOpen]);

  return (
    <nav className="fixed top-5 left-0 right-0 z-50 flex justify-start px-28 pointer-events-none mt-1.5">
      <div className="w-full max-w-5xl flex justify-start">
        <div className="nav-pill pointer-events-auto flex items-center">
          {/* GV Toggle Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            onMouseEnter={triggerShake}
            className={`nav-logo font-mono font-bold text-[0.9rem] tracking-tight cursor-pointer transition-all duration-300 ${logoShaking ? "nav-logo-shake" : ""
              } ${menuOpen ? "bg-accent! text-bg!" : ""}`}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            GV
          </button>

          {/* Animated Container for Menus and Actions */}
          <div
            className={`flex items-center gap-3 overflow-hidden transition-all duration-500 ease-in-out ${menuOpen
              ? "max-w-250 opacity-100 pl-2"
              : "max-w-0 opacity-0 pointer-events-none pl-0"
              }`}
          >
            {/* Links */}
            <ul className="hidden md:flex items-center gap-2 list-none m-0 p-1">
              {NAV_LINKS.map((link) => (
                <NavLink key={link.href} {...link} />
              ))}
            </ul>

            {/* Right side: GitHub, LinkedIn, Mail */}
            <div className="flex items-center gap-3">
              {/* GitHub */}
              <a
                href={GITHUB}
                target="_blank"
                rel="noopener noreferrer"
                className="nav-social-btn"
                aria-label="GitHub profile"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>

              {/* LinkedIn */}
              <a
                href={LINKEDIN}
                target="_blank"
                rel="noopener noreferrer"
                className="nav-social-btn"
                aria-label="LinkedIn profile"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>

              {/* Mail */}
              <EmailButton />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
