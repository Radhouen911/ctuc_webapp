import { cn } from "@/lib/utils";

const CX = 240;
const BASE = 318;
const FIN_COUNT = 17;
const FIN_GAP = 11.5;

// Skyline of vertical fins rising to a single flag pole.
const fins = Array.from({ length: FIN_COUNT }, (_, i) => {
  const mid = (FIN_COUNT - 1) / 2;
  const falloff = 1 - Math.abs(i - mid) / (mid + 1);
  const height = 28 + 168 * Math.pow(falloff, 1.6);
  return {
    i,
    x: CX + (i - mid) * FIN_GAP - 1.5,
    height,
    center: i === mid,
    weight: 0.25 + falloff * 0.75,
  };
});

const ticks = Array.from({ length: 120 }, (_, i) => {
  const angle = (i * 3 * Math.PI) / 180;
  const major = i % 10 === 0;
  const r1 = 212;
  const r2 = major ? 198 : 205;
  return {
    i,
    major,
    x1: CX + r1 * Math.sin(angle),
    y1: CX - r1 * Math.cos(angle),
    x2: CX + r2 * Math.sin(angle),
    y2: CX - r2 * Math.cos(angle),
  };
});

const round = (n: number) => Math.round(n * 100) / 100;

/**
 * The CTUC Mark: an instrument dial around a skyline of fins
 * (an abstract architectural rhythm) carrying a single crimson flag.
 * Original artwork, not an existing logo.
 */
export function ChampionshipMark({ className }: { className?: string }) {
  const pole = fins.find((f) => f.center)!;
  const poleTop = BASE - pole.height - 46;

  return (
    <svg viewBox="0 0 480 480" className={cn("h-auto w-full", className)} role="img" aria-labelledby="mark-title">
      <title id="mark-title">CTUC championship mark: a dial surrounding a skyline that carries a crimson flag</title>
      <defs>
        <radialGradient id="mark-core" cx="50%" cy="52%" r="50%">
          <stop offset="0%" stopColor="rgba(0,184,255,0.16)" />
          <stop offset="60%" stopColor="rgba(0,184,255,0.03)" />
          <stop offset="100%" stopColor="rgba(0,184,255,0)" />
        </radialGradient>
        <linearGradient id="fin-fill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#E8ECFF" stopOpacity="0.95" />
          <stop offset="100%" stopColor="#E8ECFF" stopOpacity="0.08" />
        </linearGradient>
        <linearGradient id="reflect" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#E8ECFF" stopOpacity="0.14" />
          <stop offset="100%" stopColor="#E8ECFF" stopOpacity="0" />
        </linearGradient>
        <filter id="flag-glow" x="-100%" y="-100%" width="300%" height="300%">
          <feGaussianBlur stdDeviation="6" result="b" />
          <feMerge>
            <feMergeNode in="b" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <path id="mark-text-path" d="M 240 240 m -228 0 a 228 228 0 1 1 456 0 a 228 228 0 1 1 -456 0" />
      </defs>

      <circle cx={CX} cy={CX} r="236" fill="url(#mark-core)" />

      {/* Dial */}
      <circle cx={CX} cy={CX} r="212" fill="none" stroke="#1E2440" />
      <g>
        {ticks.map((t) => (
          <line
            key={t.i}
            x1={round(t.x1)}
            y1={round(t.y1)}
            x2={round(t.x2)}
            y2={round(t.y2)}
            stroke={t.i === 0 ? "#FF1744" : t.major ? "#7F89B0" : "#1E2440"}
            strokeWidth={t.i === 0 ? 2 : 1}
          />
        ))}
      </g>

      {/* Slow outer ring with legend */}
      <g className="mark-ring">
        <text className="fill-mute font-mono" fontSize="9.5" letterSpacing="3.2">
          <textPath href="#mark-text-path">
            CYBERSECURITY TUNISIAN UNIVERSITY CHAMPIONSHIP · 05–06.12.2026 · TUNIS SCIENCE CITY · BEGINNER + ADVANCED ·
          </textPath>
        </text>
      </g>
      <circle cx={CX} cy={CX} r="186" fill="none" stroke="#00B8FF" strokeOpacity="0.22" strokeDasharray="2 7" />

      {/* Crosshair */}
      <line x1={CX} y1="58" x2={CX} y2="86" stroke="#7F89B0" strokeOpacity="0.5" />
      <line x1="58" y1={CX} x2="86" y2={CX} stroke="#7F89B0" strokeOpacity="0.5" />
      <line x1="394" y1={CX} x2="422" y2={CX} stroke="#7F89B0" strokeOpacity="0.5" />

      {/* Fins */}
      <g>
        {fins.map((f) => (
          <rect
            key={f.i}
            className="mark-fin"
            style={{ ["--i" as string]: Math.abs(f.i - (FIN_COUNT - 1) / 2) }}
            x={round(f.x)}
            y={round(BASE - f.height)}
            width="3"
            height={round(f.height)}
            fill="url(#fin-fill)"
            opacity={round(f.weight)}
          />
        ))}
      </g>

      {/* Reflection */}
      <g opacity="0.6">
        {fins.map((f) => (
          <rect
            key={f.i}
            x={round(f.x)}
            y={BASE + 6}
            width="3"
            height={round(f.height * 0.28)}
            fill="url(#reflect)"
          />
        ))}
      </g>
      <line x1="118" y1={BASE + 3} x2="362" y2={BASE + 3} stroke="#7F89B0" strokeOpacity="0.55" />

      {/* Pole + flag */}
      <line x1={CX} y1={poleTop} x2={CX} y2={BASE - pole.height} stroke="#E8ECFF" strokeWidth="1.5" />
      <path
        className="mark-flag"
        d={`M ${CX + 0.75} ${poleTop} L ${CX + 46} ${poleTop + 13} L ${CX + 0.75} ${poleTop + 26} Z`}
        fill="#FF1744"
        filter="url(#flag-glow)"
      />

      {/* Numbering */}
      <text x={CX} y="404" textAnchor="middle" className="fill-mute font-mono" fontSize="10" letterSpacing="3">
        FIG. 01 — THE MARK
      </text>
    </svg>
  );
}
