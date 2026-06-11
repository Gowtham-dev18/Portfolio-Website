import React from "react";

interface Project {
  number: string;
  type: string;
  name: string;
  description: string;
  tags: string[];
  link?: string;
  linkLabel: string;
  isPrivate?: boolean;
}

export default function Projects() {
  const projects: Project[] = [
    {
      number: "01",
      type: "Personal project",
      name: "Chat Application",
      description:
        "Multi-tenant SaaS real-time chat platform with complete tenant isolation, Socket.io messaging, JWT auth, tenant-aware middleware, and modular RESTful API.",
      tags: ["React.js", "Node.js", "Socket.io", "JWT", "MongoDB", "SaaS"],
      link: "https://github.com/GowthamaViknesh/Chating-App",
      linkLabel: "View on GitHub",
    },
    {
      number: "02",
      type: "Production",
      name: "Cuptime — Delivery Platform",
      description:
        "Led full-stack development of a high-volume beverage delivery platform. Integrated payment gateways, VROOM routing, and deployed on AWS ECS serving 600+ users.",
      tags: ["React.js", "NestJS", "AWS ECS", "Docker", "Razorpay"],
      linkLabel: "Private — production app",
      isPrivate: true,
    },
  ];

  return (
    <section id="projects" className="px-[5vw] py-24 relative w-full z-10">
      <div className="font-mono text-[0.72rem] text-accent tracking-[0.12em] uppercase mb-5 flex items-center gap-2.5 after:content-[''] after:h-[1px] after:w-9 after:bg-accent after:opacity-40">
        Side work
      </div>
      <h2 className="font-sans text-[clamp(2rem,4vw,2.8rem)] font-bold tracking-tight leading-[1.1] mb-6">
        Things I've built.
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-[1.25rem] mt-12">
        {projects.map((proj, index) => (
          <div
            key={index}
            className="bg-bg2 border border-border rounded-[16px] p-[1.75rem] relative overflow-hidden transition-all duration-300 hover:border-border2 hover:-translate-y-1 group proj-c before:content-[''] before:absolute before:top-0 before:left-0 before:right-0 before:h-[2px] before:bg-gradient-to-r before:from-accent before:to-accent2 before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-300"
          >
            <div className="font-mono text-[0.68rem] text-muted mb-[0.75rem]">
              {proj.number} / {proj.type}
            </div>
            <div className="font-sans text-[1.2rem] font-bold tracking-tight mt-4 mb-[0.6rem]">
              {proj.name}
            </div>
            <p className="text-[0.87rem] text-muted2 leading-[1.75] mb-[1.25rem]">
              {proj.description}
            </p>
            <div className="flex flex-wrap gap-[0.35rem] mb-[1.25rem]">
              {proj.tags.map((tag, i) => (
                <span
                  key={i}
                  className="bg-accent/6 border border-accent/14 rounded px-[0.55rem] py-[0.18rem] text-[0.68rem] font-mono text-accent"
                >
                  {tag}
                </span>
              ))}
            </div>
            {proj.isPrivate ? (
              <span className="inline-flex items-center gap-1.5 text-[0.8rem] text-muted opacity-40 cursor-default">
                <svg
                  width="13"
                  height="13"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="inline-block align-middle"
                >
                  <rect x="3" y="11" width="18" height="11" rx="2" />
                  <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                </svg>
                <span className="align-middle">{proj.linkLabel}</span>
              </span>
            ) : (
              <a
                href={proj.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-[0.8rem] text-muted no-underline transition-colors duration-200 hover:text-text"
              >
                <svg
                  width="13"
                  height="13"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="inline-block align-middle"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
                <span className="align-middle">{proj.linkLabel}</span>
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
