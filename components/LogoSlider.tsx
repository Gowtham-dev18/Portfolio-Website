"use client";

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
    <section style={{ borderBottom: "1px solid #15233f22", padding: "clamp(36px,4vw,52px) 0" }}>
      {/* Label */}
      <div style={{ padding: "0 clamp(24px,5vw,64px)", marginBottom: "26px" }}>
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
          Tech stacks worked on
        </span>
      </div>

      {/* Row 1 — forward */}
      <div
        style={{
          overflow: "hidden",
          whiteSpace: "nowrap",
          borderTop: "1px solid #15233f18",
          borderBottom: "1px solid #15233f18",
          padding: "18px 0",
        }}
      >
        <div className="pf-ticker-track">
          {[...r1, ...r1].map((item, i) => (
            <span
              key={i}
              style={{ display: "inline-flex", alignItems: "center", gap: "11px", padding: "0 26px" }}
            >
              <img src={item.path} alt={item.name} style={{ width: "32px", height: "32px", objectFit: "contain" }} />
              <span style={{ fontSize: "clamp(18px,2vw,26px)", fontWeight: 600, color: "#15233f" }}>
                {item.name}
              </span>
            </span>
          ))}
        </div>
      </div>

      {/* Row 2 — reverse */}
      <div style={{ overflow: "hidden", whiteSpace: "nowrap", padding: "18px 0 0" }}>
        <div className="pf-ticker-track-r">
          {[...r2, ...r2].map((item, i) => (
            <span
              key={i}
              style={{ display: "inline-flex", alignItems: "center", gap: "11px", padding: "0 26px" }}
            >
              <img src={item.path} alt={item.name} style={{ width: "30px", height: "30px", objectFit: "contain" }} />
              <span style={{ fontSize: "clamp(18px,2vw,26px)", fontWeight: 600, color: "#5a6480" }}>
                {item.name}
              </span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
