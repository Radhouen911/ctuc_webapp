import { ImageResponse } from "next/og";
import { EVENT } from "@/data/event";

export const alt = `${EVENT.fullName} — ${EVENT.dateLabel}, ${EVENT.venue.name}, ${EVENT.venue.city}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#05060D",
          color: "#E8ECFF",
          padding: 64,
          backgroundImage:
            "radial-gradient(circle at 85% 40%, rgba(255,23,68,0.22), transparent 40%), radial-gradient(circle at 0% 0%, rgba(0,184,255,0.12), transparent 45%)",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 18, letterSpacing: 3, color: "#7F89B0" }}>
          <span>{`${EVENT.edition} / NATIONAL UNIVERSITY CTF`}</span>
          <span>TUNIS · TUNISIA</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", alignItems: "flex-start", gap: 24 }}>
            <div style={{ fontSize: 220, fontWeight: 900, lineHeight: 0.85, letterSpacing: -8 }}>CTUC</div>
            <div style={{ width: 64, height: 40, background: "#FF1744", marginTop: 20, clipPath: "polygon(0 0, 100% 50%, 0 100%)" }} />
          </div>
          <div style={{ fontSize: 44, marginTop: 24, letterSpacing: -1 }}>{EVENT.name}</div>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", borderTop: "1px solid #1E2440", paddingTop: 24 }}>
          <span style={{ fontSize: 30, fontWeight: 700 }}>{EVENT.dateLabel.toUpperCase()}</span>
          <span style={{ fontSize: 30, fontWeight: 700 }}>{`${EVENT.venue.name}, ${EVENT.venue.city}`.toUpperCase()}</span>
        </div>
      </div>
    ),
    size,
  );
}
