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
      <>Led <strong className="text-navy">full-stack development</strong> of <strong className="text-navy">Cuptime</strong>, a beverage delivery platform serving <strong className="text-navy">600+ users</strong>, owning frontend &amp; backend from architecture to production.</>,
      <>Integrated <strong className="text-navy">Razorpay, Zoho Payments &amp; Zoho CRM</strong> for seamless payment processing and real-time data sync.</>,
      <>Built automated <strong className="text-navy">rider assignment &amp; route optimization</strong> using VROOM with fallback flows.</>,
      <>Deployed on <strong className="text-navy">AWS ECS with Docker</strong>, Cognito auth, and built a Firebase notification microservice.</>,
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
      <>Owned a production <strong className="text-navy">microservices architecture</strong> with Node.js &amp; Express.js, shipping attendance, reporting, and assessment modules.</>,
      <>Designed scalable <strong className="text-navy">RESTful APIs</strong> and integrated Jira for workflow automation and cross-system sync.</>,
      <>Led migration from <strong className="text-navy">JavaScript to TypeScript</strong>, enforcing type safety and reducing runtime errors.</>,
      <>Managed <strong className="text-navy">AWS (EC2, SES, SQS)</strong> with PostgreSQL schema design and collaborated on VAPT security assessments.</>,
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
      <>Built responsive UI with <strong className="text-navy">React.js &amp; Ant Design</strong>, translating Figma wireframes into production-ready interfaces.</>,
      <>Developed pages for an automation web app with seamless API integration and smooth backend collaboration.</>,
    ],
    tags: ["React.js", "Ant Design", "Figma"],
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="border-b border-navy/13"
      style={{ padding: "clamp(56px,7vw,96px) clamp(24px,5vw,64px)" }}
    >
      {/* Section label */}
      <div className="pf-reveal mb-6">
        <span className="inline-block bg-orange text-cream py-1.5 px-3.25 text-[11px] tracking-[0.16em] uppercase">
          Work history
        </span>
      </div>

      <h2
        className="pf-reveal font-bold leading-[1.06] tracking-tight"
        style={{ margin: "0 0 clamp(36px,4vw,56px)", fontSize: "clamp(30px,4vw,52px)" }}
      >
        Where I&apos;ve worked.
      </h2>

      {experiences.map((exp, index) => (
        <div
          key={exp.company}
          className="pf-reveal grid border-t border-navy/13"
          style={{
            gridTemplateColumns: "230px 1fr",
            gap: "clamp(20px,3vw,48px)",
            padding: "clamp(28px,3vw,40px) 0",
            borderBottom: index === experiences.length - 1 ? "1px solid #15233f22" : undefined,
          }}
        >
          {/* Left: badge + meta */}
          <div>
            <div
              className="w-12 h-12 flex items-center justify-center text-[20px] font-bold mb-4.5"
              style={{ background: exp.badgeBg, color: exp.badgeColor, border: exp.badgeBorder }}
            >
              {exp.badge}
            </div>
            <div
              className="text-[12px] tracking-[0.06em] mb-3"
              style={{ color: exp.dateColor }}
            >
              {exp.date}
            </div>
            <div className="text-[17px] font-bold tracking-[-0.01em]">{exp.company}</div>
            <div className="text-[12px] text-subtle mt-1.25">{exp.location}</div>
          </div>

          {/* Right: role + bullets + tags */}
          <div>
            <div
              className="font-bold tracking-[-0.02em] mb-4"
              style={{ fontSize: "clamp(18px,1.6vw,22px)" }}
            >
              {exp.role}
            </div>
            <ul className="list-none m-0 p-0">
              {exp.bullets.map((bullet, i) => (
                <li
                  key={i}
                  className="text-[13px] leading-[1.75] text-body py-1.75 pl-5.5 pr-0 relative"
                >
                  <span className="absolute left-0 text-orange">→</span>
                  {bullet}
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-2 mt-4.5">
              {exp.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-[11px] py-1.25 px-2.75 border border-navy/13 text-muted"
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
