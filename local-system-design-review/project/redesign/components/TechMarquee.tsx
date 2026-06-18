const BACKEND = ["Node.js", "NestJS", "PostgreSQL", "Redis", "AWS", "Docker", "RabbitMQ", "Razorpay"];
const FRONTEND = ["React", "Next.js", "TypeScript", "Tailwind", "Redux", "Zustand", "Vite", "Jest"];

function Row({ items, color }: { items: string[]; color: string }) {
  const line = (
    <span className={`text-[clamp(20px,2.4vw,32px)] font-semibold -tracking-[0.01em] ${color}`}>
      {items.map((t, i) => (
        <span key={i}>
          &nbsp;&nbsp;{t}&nbsp;&nbsp;<span className="text-signal">·</span>
        </span>
      ))}
    </span>
  );
  return (
    <>
      {line}
      {line}
    </>
  );
}

export default function TechMarquee() {
  return (
    <section className="border-b border-line py-[clamp(36px,4vw,52px)]">
      <div className="px-[clamp(24px,5vw,64px)] mb-[26px]">
        <div className="text-[11px] tracking-[0.16em] uppercase text-signal">
          /// Tech stacks worked on
        </div>
      </div>

      <div className="overflow-hidden whitespace-nowrap border-t border-b border-line-soft py-[18px]">
        <div className="marquee-track">
          <Row items={BACKEND} color="text-ink" />
        </div>
      </div>

      <div className="overflow-hidden whitespace-nowrap pt-[18px]">
        <div className="marquee-track-r">
          <Row items={FRONTEND} color="text-muted" />
        </div>
      </div>
    </section>
  );
}
