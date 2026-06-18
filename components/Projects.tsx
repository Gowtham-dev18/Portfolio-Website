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
      style={{ padding: "clamp(56px,7vw,96px) clamp(24px,5vw,64px)", borderBottom: "1px solid #15233f22" }}
    >
      {/* Section label */}
      <div className="pf-reveal" style={{ marginBottom: "24px" }}>
        <span
          style={{
            display: "inline-block",
            background: "#ff5a2b",
            color: "#f1ede2",
            padding: "6px 13px",
            fontSize: "11px",
            letterSpacing: "0.16em",
            textTransform: "uppercase",
          }}
        >
          Selected work
        </span>
      </div>

      <h2
        className="pf-reveal"
        style={{
          margin: "0 0 clamp(36px,4vw,56px)",
          fontSize: "clamp(30px,4vw,52px)",
          fontWeight: 700,
          lineHeight: 1.06,
          letterSpacing: "-0.025em",
        }}
      >
        Things I&apos;ve built.
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "clamp(20px,2.5vw,32px)",
        }}
      >
        {projects.map((proj) => (
          <div
            key={proj.id}
            className="pf-card pf-reveal"
            style={{
              border: "1px solid #15233f22",
              background: "#faf8f2",
              display: "grid",
              gridTemplateColumns: "clamp(120px,18%,180px) 1fr",
            }}
          >
            {/* Image placeholder */}
            <div style={{ background: "#15233f", overflow: "hidden", minHeight: "240px" }} />

            {/* Content */}
            <div
              style={{
                padding: "clamp(28px,3vw,40px)",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div
                style={{
                  fontSize: "11px",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "#7a8298",
                  marginBottom: "28px",
                }}
              >
                {proj.number} / {proj.type}
              </div>
              <div
                style={{
                  fontSize: "clamp(20px,2vw,26px)",
                  fontWeight: 700,
                  letterSpacing: "-0.02em",
                  marginBottom: "14px",
                }}
              >
                {proj.name}
              </div>
              <p
                style={{
                  margin: "0 0 22px",
                  fontSize: "13px",
                  lineHeight: 1.8,
                  color: "#3a445e",
                }}
              >
                {proj.description}
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginBottom: "26px" }}>
                {proj.tags.map((tag) => (
                  <span
                    key={tag}
                    style={{
                      fontSize: "11px",
                      padding: "5px 11px",
                      border: "1px solid #ff5a2b33",
                      color: "#ff5a2b",
                      background: "#ff5a2b0d",
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
              {proj.isPrivate ? (
                <span
                  style={{
                    marginTop: "auto",
                    alignSelf: "flex-start",
                    fontSize: "12px",
                    letterSpacing: "0.06em",
                    color: "#9aa0b0",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "7px",
                  }}
                >
                  🔒 Private — production app
                </span>
              ) : (
                <a
                  href={proj.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="pf-ghost"
                  style={{
                    marginTop: "auto",
                    textDecoration: "none",
                    alignSelf: "flex-start",
                    fontSize: "12px",
                    letterSpacing: "0.06em",
                    color: "#15233f",
                    borderBottom: "1px solid #15233f",
                    paddingBottom: "3px",
                  }}
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
