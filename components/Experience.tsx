import React from "react";

interface ExpItem {
  date: string;
  company: string;
  location: string;
  role: string;
  responsibilities: React.ReactNode[];
  tags: string[];
}

export default function Experience() {
  const experiences: ExpItem[] = [
    {
      date: "Apr 2025 — Present",
      company: "Noukha Technologies",
      location: "Coimbatore, TN",
      role: "Software Engineer",
      responsibilities: [
        <>
          Led <strong>full-stack development</strong> of <strong>Cuptime</strong>, a beverage delivery
          platform serving <strong>600+ users</strong>, owning frontend and backend from architecture
          to production.
        </>,
        <>
          Integrated <strong>Razorpay, Zoho Payments & Zoho CRM</strong> for seamless payment
          processing and real-time data sync.
        </>,
        <>
          Built automated <strong>rider assignment & route optimization</strong> using VROOM with
          fallback flows.
        </>,
        <>
          Contributed at architecture and dev level to <strong>Ohana</strong> (restaurant) and{" "}
          <strong>Naga</strong> (delivery) platforms.
        </>,
        <>
          Deployed on <strong>AWS ECS with Docker</strong>, Cognito auth, and built Firebase
          notification microservice.
        </>,
      ],
      tags: ["Node.js", "React.js", "AWS ECS", "Docker", "Razorpay", "Firebase", "VROOM"],
    },
    {
      date: "Feb 2024 — Mar 2025",
      company: "Datalligence.AI",
      location: "Chennai, TN",
      role: "Junior Backend Developer",
      responsibilities: [
        <>
          Owned a production <strong>microservices architecture</strong> using Node.js & Express.js,
          shipping attendance, reporting, and assessment modules.
        </>,
        <>
          Designed scalable <strong>RESTful APIs</strong> and integrated <strong>Jira</strong> for
          workflow automation and cross-system sync.
        </>,
        <>
          Led migration from <strong>JavaScript to TypeScript</strong>, enforcing type safety and
          reducing runtime errors.
        </>,
        <>
          Managed <strong>AWS (EC2, SES, SQS)</strong> alongside PostgreSQL schema design and query
          optimization.
        </>,
        <>
          Collaborated on <strong>VAPT</strong> security assessments and resolved all identified
          vulnerabilities.
        </>,
      ],
      tags: ["Node.js", "Express.js", "TypeScript", "PostgreSQL", "AWS", "VAPT"],
    },
    {
      date: "Dec 2023 — Feb 2024",
      company: "Hashh Automations",
      location: "Udumalaippettai, TN",
      role: "Frontend Developer Intern",
      responsibilities: [
        <>
          Built responsive UI with <strong>React.js & Ant Design</strong>, translating Figma
          wireframes into production-ready interfaces.
        </>,
        <>
          Developed pages for an <strong>automation web app</strong> with seamless API integration and
          smooth backend collaboration.
        </>,
      ],
      tags: ["React.js", "Ant Design", "Figma"],
    },
  ];

  return (
    <section id="experience" className="px-[5vw] py-24 relative w-full z-10">
      <div className="font-mono text-[0.72rem] text-accent tracking-[0.12em] uppercase mb-5 flex items-center gap-2.5 after:content-[''] after:h-[1px] after:w-9 after:bg-accent after:opacity-40">
        Work history
      </div>
      <h2 className="font-sans text-[clamp(2rem,4vw,2.8rem)] font-bold tracking-tight leading-[1.1] mb-6">
        Where I've worked.
      </h2>
      <div className="flex flex-col">
        {experiences.map((exp, index) => (
          <div key={index} className="grid grid-cols-1 md:grid-cols-[190px_1fr] gap-6 md:gap-[3rem] py-10 border-b border-border exp-item">
            <div className="flex flex-col">
              <div className="font-mono text-[0.72rem] text-muted mb-[0.4rem]">{exp.date}</div>
              <div className="font-sans text-[0.92rem] font-bold text-text mb-[0.2rem]">{exp.company}</div>
              <div className="text-[0.76rem] text-muted">{exp.location}</div>
            </div>
            <div>
              <div className="font-sans text-[1.3rem] font-bold tracking-tight mb-[0.9rem]">{exp.role}</div>
              <ul className="list-none">
                {exp.responsibilities.map((resp, i) => (
                  <li key={i} className="text-[0.9rem] text-muted2 py-[0.35rem] pl-[1.2rem] relative leading-[1.7] before:content-['→'] before:absolute before:left-0 before:text-accent before:text-[0.72rem] before:top-[0.55rem]">
                    {resp}
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-[0.4rem] mt-4">
                {exp.tags.map((tag, i) => (
                  <span key={i} className="bg-black/2 border border-border rounded-full px-[0.7rem] py-[0.2rem] text-[0.7rem] font-mono text-muted">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
