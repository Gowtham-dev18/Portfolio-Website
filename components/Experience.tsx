import React from "react";

interface ExpEntry {
  badge: string;
  badgeBg: string;
  badgeColor: string;
  badgeBorder?: string;
  date: string;
  dateColor: string;
  company: string;
  location: string;
  role: string;
  bullets: React.ReactNode[];
  tags: string[];
}

const experiences: ExpEntry[] = [
  {
    badge: "N",
    badgeBg: "#15233f",
    badgeColor: "#f1ede2",
    date: "Apr 2025 — Present",
    dateColor: "#ff5a2b",
    company: "Noukha Technologies",
    location: "Coimbatore, TN",
    role: "Software Engineer",
    bullets: [
      <>Led <strong style={{ color: "#15233f" }}>full-stack development</strong> of <strong style={{ color: "#15233f" }}>Cuptime</strong>, a beverage delivery platform serving <strong style={{ color: "#15233f" }}>600+ users</strong>, owning frontend &amp; backend from architecture to production.</>,
      <>Integrated <strong style={{ color: "#15233f" }}>Razorpay, Zoho Payments &amp; Zoho CRM</strong> for seamless payment processing and real-time data sync.</>,
      <>Built automated <strong style={{ color: "#15233f" }}>rider assignment &amp; route optimization</strong> using VROOM with fallback flows.</>,
      <>Deployed on <strong style={{ color: "#15233f" }}>AWS ECS with Docker</strong>, Cognito auth, and built a Firebase notification microservice.</>,
    ],
    tags: ["Node.js", "React.js", "AWS ECS", "Docker", "Razorpay", "Firebase", "VROOM"],
  },
  {
    badge: "D",
    badgeBg: "#ff5a2b",
    badgeColor: "#f1ede2",
    date: "Feb 2024 — Mar 2025",
    dateColor: "#7a8298",
    company: "Datalligence.AI",
    location: "Chennai, TN",
    role: "Junior Backend Developer",
    bullets: [
      <>Owned a production <strong style={{ color: "#15233f" }}>microservices architecture</strong> with Node.js &amp; Express.js, shipping attendance, reporting, and assessment modules.</>,
      <>Designed scalable <strong style={{ color: "#15233f" }}>RESTful APIs</strong> and integrated Jira for workflow automation and cross-system sync.</>,
      <>Led migration from <strong style={{ color: "#15233f" }}>JavaScript to TypeScript</strong>, enforcing type safety and reducing runtime errors.</>,
      <>Managed <strong style={{ color: "#15233f" }}>AWS (EC2, SES, SQS)</strong> with PostgreSQL schema design and collaborated on VAPT security assessments.</>,
    ],
    tags: ["Node.js", "Express.js", "TypeScript", "PostgreSQL", "AWS", "VAPT"],
  },
  {
    badge: "H",
    badgeBg: "transparent",
    badgeColor: "#15233f",
    badgeBorder: "1.5px solid #15233f",
    date: "Dec 2023 — Feb 2024",
    dateColor: "#7a8298",
    company: "Hashh Automations",
    location: "Udumalaippettai, TN",
    role: "Frontend Developer Intern",
    bullets: [
      <>Built responsive UI with <strong style={{ color: "#15233f" }}>React.js &amp; Ant Design</strong>, translating Figma wireframes into production-ready interfaces.</>,
      <>Developed pages for an automation web app with seamless API integration and smooth backend collaboration.</>,
    ],
    tags: ["React.js", "Ant Design", "Figma"],
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
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
          Work history
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
        Where I&apos;ve worked.
      </h2>

      {experiences.map((exp, index) => (
        <div
          key={index}
          className="pf-reveal"
          style={{
            display: "grid",
            gridTemplateColumns: "230px 1fr",
            gap: "clamp(20px,3vw,48px)",
            padding: "clamp(28px,3vw,40px) 0",
            borderTop: "1px solid #15233f22",
            borderBottom: index === experiences.length - 1 ? "1px solid #15233f22" : undefined,
          }}
        >
          {/* Left: badge + meta */}
          <div>
            <div
              style={{
                width: "48px",
                height: "48px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: exp.badgeBg,
                color: exp.badgeColor,
                border: exp.badgeBorder,
                fontSize: "20px",
                fontWeight: 700,
                marginBottom: "18px",
              }}
            >
              {exp.badge}
            </div>
            <div style={{ fontSize: "12px", letterSpacing: "0.06em", color: exp.dateColor, marginBottom: "12px" }}>
              {exp.date}
            </div>
            <div style={{ fontSize: "17px", fontWeight: 700, letterSpacing: "-0.01em" }}>{exp.company}</div>
            <div style={{ fontSize: "12px", color: "#7a8298", marginTop: "5px" }}>{exp.location}</div>
          </div>

          {/* Right: role + bullets + tags */}
          <div>
            <div
              style={{
                fontSize: "clamp(18px,1.6vw,22px)",
                fontWeight: 700,
                letterSpacing: "-0.02em",
                marginBottom: "16px",
              }}
            >
              {exp.role}
            </div>
            <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
              {exp.bullets.map((bullet, i) => (
                <li
                  key={i}
                  style={{
                    fontSize: "13px",
                    lineHeight: 1.75,
                    color: "#3a445e",
                    padding: "7px 0 7px 22px",
                    position: "relative",
                  }}
                >
                  <span style={{ position: "absolute", left: 0, color: "#ff5a2b" }}>→</span>
                  {bullet}
                </li>
              ))}
            </ul>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginTop: "18px" }}>
              {exp.tags.map((tag) => (
                <span
                  key={tag}
                  style={{
                    fontSize: "11px",
                    padding: "5px 11px",
                    border: "1px solid #15233f22",
                    color: "#5a6480",
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
