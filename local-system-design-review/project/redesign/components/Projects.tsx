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

const PROJECTS: Project[] = [
  {
    number: "01",
    type: "Personal project",
    name: "Chat Application",
    description:
      "Multi-tenant SaaS real-time chat platform with complete tenant isolation, Socket.io messaging, JWT auth, tenant-aware middleware, and a modular RESTful API.",
    tags: ["React.js", "Node.js", "Socket.io", "JWT", "MongoDB", "SaaS"],
    link: "https://github.com/GowthamaViknesh/Chating-App",
    linkLabel: "View on GitHub ↗",
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

export default function Projects() {
  return (
    <section id="work" className="border-b border-line px-[clamp(24px,5vw,64px)] py-[clamp(56px,7vw,96px)]">
      <div className="reveal text-[11px] tracking-[0.16em] uppercase text-signal mb-[24px]">/// Selected work</div>
      <h2 className="reveal m-0 mb-[clamp(36px,4vw,56px)] text-[clamp(30px,4vw,52px)] font-bold leading-[1.06] -tracking-[0.025em]">
        Things I&apos;ve built.
      </h2>

      <div className="grid grid-cols-2 gap-[clamp(20px,2.5vw,32px)]">
        {PROJECTS.map((p) => (
          <div
            key={p.number}
            className="work-card reveal border border-line bg-surface p-[clamp(28px,3vw,40px)] flex flex-col"
          >
            <div className="text-[11px] tracking-[0.1em] uppercase text-muted-2 mb-[28px]">
              {p.number} / {p.type}
            </div>
            <div className="text-[clamp(20px,2vw,26px)] font-bold -tracking-[0.02em] mb-[14px]">{p.name}</div>
            <p className="m-0 mb-[22px] text-[13px] leading-[1.8] text-body">{p.description}</p>
            <div className="flex flex-wrap gap-[8px] mb-[26px]">
              {p.tags.map((t) => (
                <span key={t} className="text-[11px] px-[11px] py-[5px] border border-[#ff5a2b33] text-signal bg-[#ff5a2b0d]">
                  {t}
                </span>
              ))}
            </div>
            {p.isPrivate ? (
              <span className="mt-auto self-start text-xs tracking-[0.06em] text-faint inline-flex items-center gap-[7px]">
                🔒 {p.linkLabel}
              </span>
            ) : (
              <a
                href={p.link}
                target="_blank"
                rel="noopener noreferrer"
                className="ghost-link mt-auto self-start no-underline text-xs tracking-[0.06em] text-ink border-b border-ink pb-[3px]"
              >
                {p.linkLabel}
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
