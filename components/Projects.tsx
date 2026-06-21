import React from "react";

interface Project {
  id: string;
  number: string;
  type: string;
  name: string;
  description: string;
  tags: string[];
  link?: string;
  isPrivate?: boolean;
}

const projects: Project[] = [
  {
    id: "proj-chat",
    number: "01",
    type: "Personal project",
    name: "Chat Application",
    description:
      "Multi-tenant SaaS real-time chat platform with complete tenant isolation, Socket.io messaging, JWT auth, tenant-aware middleware, and a modular RESTful API.",
    tags: ["React.js", "Node.js", "Socket.io", "JWT", "MongoDB", "SaaS"],
    link: "https://github.com/GowthamaViknesh/Chating-App",
  },
  {
    id: "proj-cuptime",
    number: "02",
    type: "Production",
    name: "Cuptime — Delivery Platform",
    description:
      "Led full-stack development of a high-volume beverage delivery platform. Integrated payment gateways, VROOM routing, and deployed on AWS ECS serving 600+ users.",
    tags: ["React.js", "NestJS", "AWS ECS", "Docker", "Razorpay"],
    isPrivate: true,
  },
];

export default function Projects() {
  return (
    <section
      id="work"
      className="border-b border-navy/13"
      style={{ padding: "clamp(56px,7vw,96px) clamp(24px,5vw,64px)" }}
    >
      {/* Section label */}
      <div className="pf-reveal mb-6">
        <span className="inline-block bg-orange text-cream py-1.5 px-3.25 text-[11px] tracking-[0.16em] uppercase">
          Selected work
        </span>
      </div>

      <h2
        className="pf-reveal font-heading font-bold leading-[1.06] tracking-[-0.02em]"
        style={{ margin: "0 0 clamp(36px,4vw,56px)", fontSize: "clamp(30px,4vw,52px)" }}
      >
        Things I&apos;ve built.
      </h2>

      <div
        className="grid grid-cols-2"
        style={{ gap: "clamp(20px,2.5vw,32px)" }}
      >
        {projects.map((proj) => (
          <div
            key={proj.id}
            className="pf-card pf-reveal border border-navy/13 bg-cream-light grid"
            style={{ gridTemplateColumns: "clamp(120px,18%,180px) 1fr" }}
          >
            {/* Image placeholder */}
            <div className="bg-navy overflow-hidden min-h-60" />

            {/* Content */}
            <div
              className="flex flex-col"
              style={{ padding: "clamp(28px,3vw,40px)" }}
            >
              <div className="text-[11px] tracking-widest uppercase text-subtle mb-7">
                {proj.number} / {proj.type}
              </div>
              <div
                className="font-heading font-bold tracking-[-0.02em] mb-3.5"
                style={{ fontSize: "clamp(20px,2vw,26px)" }}
              >
                {proj.name}
              </div>
              <p className="m-0 mb-5.5 text-[13px] leading-[1.8] text-body">
                {proj.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-6.5">
                {proj.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[11px] py-1.25 px-2.75 border border-orange/20 text-orange bg-orange/5"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              {proj.isPrivate ? (
                <span className="mt-auto self-start text-[12px] tracking-[0.06em] text-dim inline-flex items-center gap-1.75">
                  🔒 Private — production app
                </span>
              ) : (
                <a
                  href={proj.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="pf-ghost mt-auto self-start no-underline text-[12px] tracking-[0.06em] text-navy border-b border-navy pb-0.75"
                >
                  View on GitHub ↗
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
