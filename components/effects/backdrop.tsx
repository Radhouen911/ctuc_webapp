"use client";

import { useEffect, useRef } from "react";

type Packet = { lane: number; p: number; speed: number; crimson: boolean };

const FRAME_MS = 1000 / 30;
const LANES = 14;

/**
 * Site-wide atmosphere: a perspective floor grid with a few data packets
 * travelling toward the viewer. One canvas, 30fps, paused when hidden,
 * drawn once (no motion) for reduced-motion users.
 */
export function Backdrop() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    let reduced = motionQuery.matches;
    let width = 0;
    let height = 0;
    let raf = 0;
    let last = 0;
    let offset = 0;
    let packets: Packet[] = [];

    const seedPackets = () => {
      const count = width < 768 ? 6 : 14;
      packets = Array.from({ length: count }, (_, i) => ({
        lane: Math.floor(Math.random() * (LANES * 2 + 1)) - LANES,
        p: Math.random(),
        speed: 0.0016 + Math.random() * 0.0024,
        crimson: i % 7 === 3,
      }));
    };

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      seedPackets();
      draw();
    };

    const geometry = () => {
      const horizon = height * 0.58;
      const vx = width * 0.5;
      const spread = Math.max(width, 900) / 7;
      return { horizon, vx, spread };
    };

    // Map lane + depth (0 = horizon, 1 = viewer) to screen space.
    const project = (lane: number, depth: number) => {
      const { horizon, vx, spread } = geometry();
      const d = depth * depth;
      return {
        x: vx + lane * spread * (0.06 + d * 0.94),
        y: horizon + (height - horizon) * d,
      };
    };

    const draw = () => {
      const { horizon } = geometry();
      ctx.clearRect(0, 0, width, height);

      // Converging lanes.
      for (let lane = -LANES; lane <= LANES; lane++) {
        const a = project(lane, 0);
        const b = project(lane, 1);
        const grad = ctx.createLinearGradient(0, horizon, 0, height);
        grad.addColorStop(0, "rgba(127,137,176,0)");
        grad.addColorStop(1, "rgba(127,137,176,0.16)");
        ctx.strokeStyle = grad;
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(a.x, a.y);
        ctx.lineTo(b.x, b.y);
        ctx.stroke();
      }

      // Receding cross lines.
      const rows = 16;
      for (let i = 0; i < rows; i++) {
        const t = (i + offset) / rows;
        const y = horizon + (height - horizon) * t * t;
        ctx.strokeStyle = `rgba(127,137,176,${0.015 + t * 0.14})`;
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      // Data packets.
      for (const pk of packets) {
        const head = project(pk.lane, pk.p);
        const tail = project(pk.lane, Math.max(0, pk.p - 0.06));
        const alpha = Math.min(1, pk.p * 1.6) * 0.85;
        const rgb = pk.crimson ? "255,23,68" : "0,184,255";
        const grad = ctx.createLinearGradient(tail.x, tail.y, head.x, head.y);
        grad.addColorStop(0, `rgba(${rgb},0)`);
        grad.addColorStop(1, `rgba(${rgb},${alpha})`);
        ctx.strokeStyle = grad;
        ctx.lineWidth = 1 + pk.p;
        ctx.beginPath();
        ctx.moveTo(tail.x, tail.y);
        ctx.lineTo(head.x, head.y);
        ctx.stroke();
      }
    };

    const step = (time: number) => {
      raf = requestAnimationFrame(step);
      if (time - last < FRAME_MS) return;
      last = time;
      offset = (offset + 0.004) % 1;
      for (const pk of packets) {
        pk.p += pk.speed;
        if (pk.p > 1.05) {
          pk.p = 0;
          pk.lane = Math.floor(Math.random() * (LANES * 2 + 1)) - LANES;
        }
      }
      draw();
    };

    const start = () => {
      cancelAnimationFrame(raf);
      if (!reduced && !document.hidden) raf = requestAnimationFrame(step);
    };
    const stop = () => cancelAnimationFrame(raf);

    const onVisibility = () => (document.hidden ? stop() : start());
    const onMotionChange = (e: MediaQueryListEvent) => {
      reduced = e.matches;
      if (reduced) {
        stop();
        draw();
      } else start();
    };

    resize();
    start();
    window.addEventListener("resize", resize, { passive: true });
    document.addEventListener("visibilitychange", onVisibility);
    motionQuery.addEventListener("change", onMotionChange);

    return () => {
      stop();
      window.removeEventListener("resize", resize);
      document.removeEventListener("visibilitychange", onVisibility);
      motionQuery.removeEventListener("change", onMotionChange);
    };
  }, []);

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-void">
      {/* Environment light: cool wash high-left, one crimson source low-right. */}
      <div className="absolute -left-[20vw] -top-[30vh] h-[80vh] w-[70vw] rounded-full bg-[radial-gradient(closest-side,rgba(0,184,255,0.09),transparent)]" />
      <div className="absolute -right-[12vw] top-[30vh] h-[70vh] w-[45vw] rounded-full bg-[radial-gradient(closest-side,rgba(255,23,68,0.07),transparent)]" />
      <canvas ref={canvasRef} className="absolute inset-0 opacity-70" />
      {/* Vignette keeps edges and text zones calm. */}
      <div className="absolute inset-0 bg-[radial-gradient(120%_90%_at_50%_30%,transparent_35%,rgba(5,6,13,0.9)_100%)]" />
    </div>
  );
}
