/**
 * Abstract elevation study: a long podium with a fin rhythm, a mid block and a
 * latticed tower. An interpretation of the venue's architecture, not a survey drawing.
 */
const GROUND = 400;
const podiumFins = Array.from({ length: 100 }, (_, i) => 120 + i * 12);
const midBands = Array.from({ length: 6 }, (_, i) => 232 + i * 12);
const towerCols = Array.from({ length: 6 }, (_, i) => 1046 + i * 16);
const towerRows = Array.from({ length: 22 }, (_, i) => 44 + i * 15);

export function VenueElevation({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 1440 440" preserveAspectRatio="xMaxYMax slice" className={className} aria-hidden>
      <defs>
        <linearGradient id="elev-fade" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#E8ECFF" stopOpacity="0.32" />
          <stop offset="100%" stopColor="#E8ECFF" stopOpacity="0.06" />
        </linearGradient>
      </defs>

      {/* Ground perspective */}
      {Array.from({ length: 13 }, (_, i) => (
        <line key={i} x1={720} y1={GROUND} x2={-480 + i * 200} y2={440} stroke="#1E2440" />
      ))}
      <line x1="0" y1={GROUND} x2="1440" y2={GROUND} stroke="#7F89B0" strokeOpacity="0.6" />

      {/* Podium */}
      <rect x="110" y="300" width="1220" height="100" fill="#05060D" stroke="url(#elev-fade)" />
      {podiumFins.map((x) => (
        <line key={x} x1={x} y1="306" x2={x} y2={GROUND} stroke="#E8ECFF" strokeOpacity={x % 60 === 0 ? 0.3 : 0.12} />
      ))}

      {/* Mid block */}
      <rect x="340" y="220" width="620" height="80" fill="#05060D" stroke="url(#elev-fade)" />
      {midBands.map((y) => (
        <line key={y} x1="340" y1={y} x2="960" y2={y} stroke="#E8ECFF" strokeOpacity="0.12" />
      ))}

      {/* Tower */}
      <rect x="1036" y="30" width="108" height="370" fill="#05060D" stroke="url(#elev-fade)" />
      {towerRows.map((y) =>
        towerCols.map((x) => {
          const lit = x === 1094 && y === 89;
          return (
            <rect
              key={`${x}-${y}`}
              x={x}
              y={y}
              width="10"
              height="9"
              fill={lit ? "#FF1744" : "none"}
              stroke={lit ? "none" : "#E8ECFF"}
              strokeOpacity="0.16"
            />
          );
        }),
      )}
      <line x1="1090" y1="30" x2="1090" y2="6" stroke="#E8ECFF" strokeOpacity="0.4" />

      {/* Dimension annotations */}
      <g stroke="#00B8FF" strokeOpacity="0.5">
        <line x1="1170" y1="30" x2="1170" y2={GROUND} strokeDasharray="2 4" />
        <line x1="1164" y1="30" x2="1176" y2="30" />
        <line x1="1164" y1={GROUND} x2="1176" y2={GROUND} />
        <line x1="110" y1="282" x2="1330" y2="282" strokeDasharray="2 4" />
      </g>
      <g className="fill-mute font-mono" fontSize="10" letterSpacing="2">
        <text x="1184" y="216">AXIS T</text>
        <text x="120" y="274">ELEVATION A — PODIUM</text>
        <text x="350" y="212">BLOCK B</text>
      </g>
    </svg>
  );
}
