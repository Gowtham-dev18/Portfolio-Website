import React from "react";

const r1 = [
  { name: "Node.js", path: "/nodejs.svg" },
  { name: "NestJS", path: "/nestjs.svg" },
  { name: "PostgreSQL", path: "/postgressql.svg" },
  { name: "Redis", path: "/redis.svg" },
  { name: "AWS", path: "/aws.svg" },
  { name: "Git", path: "/git.svg" },
  { name: "Postman", path: "/postman.svg" },
  { name: "RabbitMQ", path: "/rabbitmq.svg" },
  { name: "Razorpay", path: "/razorpay-icon.svg" },
  { name: "Zoho Payments", path: "/zoho-payments.svg" },
];

const r2 = [
  { name: "React", path: "/react.svg" },
  { name: "Next.js", path: "/next.svg" },
  { name: "TypeScript", path: "/typescript.svg" },
  { name: "Tailwind", path: "/tailwind.svg" },
  { name: "Redux", path: "/redux.svg" },
  { name: "Zustand", path: "/zustand.svg" },
  { name: "Vite", path: "/vite.svg" },
  { name: "Jest", path: "/jest.svg" },
  { name: "Stripe", path: "/stripe.svg" },
];

export default function LogoSlider() {
  return (
    <section
      className="border-b border-navy/13"
      style={{ padding: "clamp(36px,4vw,52px) 0" }}
    >
      {/* Label */}
      <div className="mb-6.5" style={{ padding: "0 clamp(24px,5vw,64px)" }}>
        <span className="inline-block bg-orange text-cream py-1.5 px-3.25 text-[11px] tracking-[0.16em] uppercase">
          Tech stacks worked on
        </span>
      </div>

      {/* Row 1 — forward */}
      <div className="overflow-hidden whitespace-nowrap border-y border-navy/[0.094] py-4.5">
        <div className="pf-ticker-track">
          {[...r1, ...r1].map((item, i) => (
            <span key={i} className="inline-flex items-center gap-2.75 px-6.5">
              <img src={item.path} alt={item.name} className="w-8 h-8 object-contain" />
              <span className="font-semibold text-navy" style={{ fontSize: "clamp(18px,2vw,26px)" }}>
                {item.name}
              </span>
            </span>
          ))}
        </div>
      </div>

      {/* Row 2 — reverse */}
      <div className="overflow-hidden whitespace-nowrap pt-4.5">
        <div className="pf-ticker-track-r">
          {[...r2, ...r2].map((item, i) => (
            <span key={i} className="inline-flex items-center gap-2.75 px-6.5">
              <img src={item.path} alt={item.name} className="w-7.5 h-7.5 object-contain" />
              <span className="font-semibold text-muted" style={{ fontSize: "clamp(18px,2vw,26px)" }}>
                {item.name}
              </span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
