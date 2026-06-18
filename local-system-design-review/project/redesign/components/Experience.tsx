import React from "react";

interface ExpItem {
  date: string;
  current?: boolean;
  company: string;
  location: string;
  role: string;
  points: React.ReactNode[];
  tags: string[];
}

const EXPERIENCES: ExpItem[] = [
  {
    date: "Apr 2025 — Present",
    current: true,
    company: "Noukha Technologies",
    location: "Coimbatore, TN",
    role: "Software Engineer",
    points: [
      <>Led <strong>full-stack development</strong> of <strong>Cuptime</strong>, a beverage delivery platform serving <strong>600+ users</strong>, owning frontend &amp; backend from architecture to production.</>,
      <>Integrated <strong>Razorpay, Zoho Payments &amp; Zoho CRM</strong> for seamless payment processing and real-time data sync.</>,
      <>Built automated <strong>rider assignment &amp; route optimization</strong> using VROOM with fallback flows.</>,
      <>Deployed on <strong>AWS ECS with Docker</strong>, Cognito auth, and built a Firebase notification microservice.</>,
    ],
    tags: ["Node.js", "React.js", "AWS ECS", "Docker", "Razorpay", "Firebase", "VROOM"],
  },
  {
    date: "Feb 2024 — Mar 2025",
    company: "Datalligence.AI",
    location: "Chennai, TN",
    role: "Junior Backend Developer",
    points: [
      <>Owned a production <strong>microservices architecture</strong> with Node.js &amp; Express.js, shipping attendance, reporting, and assessment modules.</>,
      <>Designed scalable <strong>RESTful APIs</strong> and integrated Jira for workflow automation and cross-system sync.</>,
      <>Led migration from <strong>JavaScript to TypeScript</strong>, enforcing type safety and reducing runtime errors.</>,
      <>Managed <strong>AWS (EC2, SES, SQS)</strong> with PostgreSQL schema design and collaborated on VAPT security assessments.</>,
    ],
    tags: ["Node.js", "Express.js", "TypeScript", "PostgreSQL", "AWS", "VAPT"],
  },
  {
    date: "Dec 2023 — Feb 2024",
    company: "Hashh Automations",
    location: "Udumalaippettai, TN",
    role: "Frontend Developer Intern",
    points: [
      <>Built responsive UI with <strong>React.js &amp; Ant Design</strong>, translating Figma wireframes into production-ready interfaces.</>,
      <>Developed pages for an automation web app with seamless API integration and smooth backend collaboration.</>,
    ],
    tags: ["React.js", "Ant Design", "Figma"],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="border-b border-line px-[clamp(24px,5vw,64px)] py-[clamp(56px,7vw,96px)]">
      <div className="reveal text-[11px] tracking-[0.16em] uppercase text-signal mb-[24px]">/// Work history</div>
      <h2 className="reveal m-0 mb-[clamp(36px,4vw,56px)] text-[clamp(30px,4vw,52px)] font-bold leading-[1.06] -tracking-[0.025em]">
        Where I&apos;ve worked.
      </h2>

      {EXPERIENCES.map((exp, idx) => (
        <div
          key={idx}
          className={`reveal grid grid-cols-[230px_1fr] gap-[clamp(20px,3vw,48px)] py-[clamp(28px,3vw,40px)] border-t border-line ${idx === EXPERIENCES.length - 1 ? "border-b" : ""}`}
        >
          <div>
            <div className={`text-xs tracking-[0.06em] mb-[12px] ${exp.current ? "text-signal" : "text-muted-2"}`}>
              {exp.date}
            </div>
            <div className="text-[17px] font-bold -tracking-[0.01em]">{exp.company}</div>
            <div className="text-xs text-muted-2 mt-[5px]">{exp.location}</div>
          </div>
          <div>
            <div className="text-[clamp(18px,1.6vw,22px)] font-bold -tracking-[0.02em] mb-[16px]">{exp.role}</div>
            <ul className="list-none m-0 p-0">
              {exp.points.map((p, i) => (
                <li key={i} className="relative pl-[22px] py-[7px] text-[13px] leading-[1.75] text-body [&_strong]:text-ink">
                  <span className="absolute left-0 text-signal">→</span> {p}
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-[8px] mt-[18px]">
              {exp.tags.map((t) => (
                <span key={t} className="text-[11px] px-[11px] py-[5px] border border-line text-muted">{t}</span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
