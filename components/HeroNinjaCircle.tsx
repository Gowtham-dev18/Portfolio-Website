"use client";

import Image from "next/image";
import Ninja from "@/components/Ninja";

/*
  SVG viewBox 200×200, centre (100,100).
  Text + dots sit on the MIDLINE of the outer ring track:
    outer edge ≈ 97  |  inner edge (icon ring) ≈ 59  →  mid = 78
*/

const R = 85;
const CX = 100;
const CY = 100;

function pt(deg: number, r = R) {
  const rad = ((deg - 90) * Math.PI) / 180;
  return { x: +(CX + r * Math.cos(rad)).toFixed(3), y: +(CY + r * Math.sin(rad)).toFixed(3) };
}

function mkArc(fromDeg: number, toDeg: number, sweep: 0 | 1, r = R) {
  const s = pt(fromDeg, r);
  const e = pt(toDeg, r);
  let span = ((toDeg - fromDeg) % 360 + 360) % 360;
  if (sweep === 0) span = (360 - span) % 360;
  const large = span > 180 ? 1 : 0;
  return `M ${s.x},${s.y} A ${r},${r} 0 ${large},${sweep} ${e.x},${e.y}`;
}

const ARCS = [
  { id: "top", label: "FULL STACK DEVELOPER", d: mkArc(310, 50, 1), primary: false },
  { id: "right", label: "CLOUD NATIVE", d: mkArc(50, 130, 1), primary: false },
  { id: "bottom", label: "SCALABLE SYSTEMS", d: mkArc(230, 130, 0), primary: false },
  { id: "left", label: "CLEAN CODE", d: mkArc(310, 230, 0), primary: false },
] as const;

const DOTS = [45, 135, 225, 315].map((deg) => pt(deg));

/* ── 7 icons placed ON the inner ring border ── */
interface Icon { id: string; src: string; label: string; angle: number; size: number }

// evenly spaced: 360/7 ≈ 51.4°
const ICONS: Icon[] = [
  { id: "js", src: "/javascript.svg", label: "JavaScript", angle: 0, size: 34 },
  { id: "ts", src: "/typescript.svg", label: "TypeScript", angle: 51, size: 34 },
  { id: "react", src: "/react.svg", label: "React", angle: 103, size: 36 },
  { id: "node", src: "/nodejs.svg", label: "Node.js", angle: 154, size: 40 },
  { id: "aws", src: "/aws.svg", label: "AWS", angle: 206, size: 40 },
  { id: "next", src: "/next.svg", label: "Next.js", angle: 257, size: 32 },
  { id: "tw", src: "/tailwind.svg", label: "Tailwind", angle: 309, size: 32 },
];

export default function HeroNinjaCircle() {
  return (
    <div
      className="relative shrink-0"
      style={{ width: "clamp(380px, 42vw, 480px)", height: "clamp(380px, 42vw, 480px)" }}
      aria-label="Full stack developer"
    >

      {/* ══ OUTER CIRCLE — cream disc + arc text, CW spin ══ */}
      <div
        className="absolute inset-0 rounded-full animate-[hero-spin-cw_28s_linear_infinite] origin-center"
        style={{
          background: "color-mix(in srgb, var(--color-bg) 82%, white)",
          border: "2px solid color-mix(in srgb, var(--color-black) 9%, transparent)",
          boxShadow:
            "0 24px 56px color-mix(in srgb,var(--color-black) 12%,transparent)," +
            "0 4px 16px color-mix(in srgb,var(--color-black) 6%,transparent)",
        }}
      >
        <svg
          viewBox="0 0 200 200"
          className="absolute inset-0 w-full h-full overflow-visible pointer-events-none"
          aria-hidden="true"
        >
          <defs>
            {ARCS.map((a) => <path key={a.id} id={`a-${a.id}`} d={a.d} />)}
          </defs>

          {DOTS.map((d, i) => (
            <circle key={i} cx={d.x} cy={d.y} r="2.8" fill="var(--color-red)" />
          ))}

          {ARCS.map((a) => (
            <text
              key={a.id}
              fontFamily="var(--font-mono)"
              fontSize="7.8"
              fontWeight="700"
              letterSpacing="0.16em"
              fill={
                a.primary
                  ? "var(--color-black)"
                  : "color-mix(in srgb, var(--color-black) 50%, var(--color-bg))"
              }
              style={{ textTransform: "uppercase" }}
            >
              <textPath href={`#a-${a.id}`} startOffset="50%" textAnchor="middle">
                {a.label}
              </textPath>
            </text>
          ))}
        </svg>
      </div>

      {/* ══ INNER ICON RING — dashed border, CCW spin, icons counter-rotate ══
          inset: 20% → clear gap from outer text (outer text ends ~9% from edge)
          The ring border radius = 50% - 20% = 30% of wrapper.
          Icons sit exactly on that border: cx/cy calculated below.
      ══ */}
      <div
        className="absolute rounded-full animate-[hero-spin-ccw_28s_linear_infinite] origin-center"
        style={{
          inset: "20%",
          border: "1.5px dashed color-mix(in srgb, var(--color-black) 18%, transparent)",
          background: "transparent",
        }}
        aria-hidden="true"
      >
        {ICONS.map((icon) => {
          // Inner ring container is 60% of wrapper (100% - 2×20%).
          // Its own coordinate system: centre = (50%,50%), radius to border = 50%.
          const rad = ((icon.angle - 90) * Math.PI) / 180;
          const cx = 50 + 50 * Math.cos(rad);  // % within the ring div
          const cy = 50 + 50 * Math.sin(rad);
          return (
            <div
              key={icon.id}
              className="absolute"
              style={{ left: `${cx}%`, top: `${cy}%`, transform: "translate(-50%,-50%)" }}
            >
              {/* CW counter-spin so icon stays upright */}
              <div
                className="animate-[hero-spin-cw_28s_linear_infinite] origin-center flex items-center justify-center"
                style={{ width: icon.size, height: icon.size }}
              >
                <Image
                  src={icon.src}
                  alt={icon.label}
                  width={icon.size}
                  height={icon.size}
                  className="w-full h-full object-contain"
                  draggable={false}
                />
              </div>
            </div>
          );
        })}
      </div>

      {/* ══ NINJA CENTRE — static, centered, larger ══ */}
      <div
        className="absolute rounded-full flex items-center justify-center"
        style={{
          inset: "26%",
          background: "color-mix(in srgb, var(--color-bg) 75%, white)",
          border: "1.5px solid color-mix(in srgb, var(--color-black) 7%, transparent)",
          boxShadow: "inset 0 2px 12px color-mix(in srgb,var(--color-black) 5%,transparent)",
          zIndex: 10,
          overflow: "visible",
        }}
      >
        <Ninja
          className="relative w-[160%] h-[160%] flex items-center justify-center pointer-events-none"
          imageClassName="ninja-centre-img block w-full h-full object-contain object-center select-none"
        />
      </div>
    </div>
  );
}
