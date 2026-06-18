const LINKS = [
  { label: "Email", value: "gowthamaviknesh18@gmail.com →", href: "mailto:gowthamaviknesh18@gmail.com" },
  { label: "LinkedIn", value: "/in/gowthamviknesh ↗", href: "https://www.linkedin.com/in/gowthamviknesh/" },
  { label: "GitHub", value: "/Gowtham-dev18 ↗", href: "https://github.com/Gowtham-dev18" },
];

export default function Contact() {
  return (
    <section id="contact" className="border-b border-line px-[clamp(24px,5vw,64px)] py-[clamp(64px,8vw,120px)]">
      <div className="reveal text-[11px] tracking-[0.16em] uppercase text-signal mb-[28px]">/// Get in touch</div>

      <div className="grid grid-cols-[1.2fr_1fr] gap-[clamp(32px,5vw,72px)] items-end">
        <div className="reveal">
          <h2 className="m-0 mb-[22px] text-[clamp(38px,6vw,84px)] font-bold leading-[0.96] -tracking-[0.035em]">
            Let&apos;s work<br />together.
          </h2>
          <p className="m-0 text-[clamp(14px,1vw,16px)] leading-[1.8] text-body max-w-[520px]">
            Open to new opportunities. Whether you have a role in mind or just want to connect —
            my inbox is always open.
          </p>
        </div>

        <div className="reveal flex flex-col border border-line">
          {LINKS.map((l, i) => (
            <a
              key={l.label}
              href={l.href}
              target={l.href.startsWith("http") ? "_blank" : undefined}
              rel={l.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className={`navlink no-underline text-ink flex justify-between items-center px-[24px] py-[20px] text-sm tracking-[0.04em] ${i < LINKS.length - 1 ? "border-b border-line" : ""}`}
            >
              <span>{l.label}</span>
              <span className="text-muted-2">{l.value}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
