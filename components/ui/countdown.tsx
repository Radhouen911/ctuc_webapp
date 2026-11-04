"use client";

import { memo } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { EVENT_START_MS } from "@/lib/constants";
import { useCountdown } from "@/lib/use-now";
import { EVENT } from "@/data/event";
import { cn } from "@/lib/utils";

type Unit = { label: string; short: string; value: number | null };

const pad = (n: number | null) => (n === null ? "--" : String(n).padStart(2, "0"));

const Digits = memo(function Digits({ value, className }: { value: string; className?: string }) {
  const reduce = useReducedMotion();
  return (
    <span className={cn("relative inline-flex overflow-hidden tabular-nums", className)}>
      <AnimatePresence mode="popLayout" initial={false}>
        <motion.span
          key={value}
          initial={reduce ? false : { y: "-70%", opacity: 0 }}
          animate={{ y: "0%", opacity: 1 }}
          exit={reduce ? { opacity: 0 } : { y: "70%", opacity: 0 }}
          transition={{ type: "spring", stiffness: 260, damping: 26 }}
          className="block"
        >
          {value}
        </motion.span>
      </AnimatePresence>
    </span>
  );
});

function LiveBadge({ size }: { size: "lg" | "sm" }) {
  return (
    <div className="flex items-center gap-4" role="status">
      <span className="pulse-dot block size-3 rounded-full bg-crimson" aria-hidden />
      <span className={cn("font-condensed font-black leading-none text-ink", size === "lg" ? "text-7xl" : "text-4xl")}>
        LIVE
      </span>
      <span className="annotation max-w-[16ch] text-mute">The championship is underway</span>
    </div>
  );
}

const srLabel = `Countdown to ${EVENT.shortName}, starting ${EVENT.startLabel}`;

/** Full precision instrument used in the hero. */
export function CountdownInstrument({ className }: { className?: string }) {
  const state = useCountdown(EVENT_START_MS);

  if (state.status === "live") {
    return (
      <div className={className}>
        <LiveBadge size="lg" />
      </div>
    );
  }

  const c = state.status === "counting" ? state : null;
  const units: Unit[] = [
    { label: "Days", short: "D", value: c ? c.days : null },
    { label: "Hours", short: "H", value: c ? c.hours : null },
    { label: "Minutes", short: "M", value: c ? c.minutes : null },
    { label: "Seconds", short: "S", value: c ? c.seconds : null },
  ];
  const seconds = c ? c.seconds : 0;

  return (
    <div role="timer" aria-label={srLabel} className={cn("w-full", className)}>
      <div className="annotation mb-3 flex items-center justify-between text-mute">
        <span className="flex items-center gap-2">
          <span className="pulse-dot block size-1.5 rounded-full bg-crimson" aria-hidden />
          T-minus
        </span>
        <span>Africa/Tunis · UTC+01</span>
      </div>

      <div className="grid grid-cols-4 border-y border-line" aria-hidden>
        {units.map((u, i) => (
          <div key={u.label} className={cn("px-2 py-3 sm:px-4 sm:py-4", i > 0 && "border-l border-line")}>
            <Digits
              value={u.label === "Days" && u.value !== null && u.value > 99 ? String(u.value) : pad(u.value)}
              className={cn(
                "font-mono text-[clamp(1.75rem,7.5vw,3rem)] font-medium leading-none tracking-tight",
                u.label === "Seconds" ? "text-signal" : "text-ink",
              )}
            />
            <span className="annotation mt-2 block text-mute">{u.label}</span>
          </div>
        ))}
      </div>

      {/* Second ruler: 60 ticks, elapsed ticks dim, the current one blue. */}
      <div className="mt-3 flex h-3 items-end justify-between" aria-hidden>
        {Array.from({ length: 60 }, (_, i) => {
          const remainingTick = i < seconds;
          const current = i === seconds - 1;
          return (
            <span
              key={i}
              className={cn(
                "block w-px shrink-0 transition-colors duration-500",
                i % 5 === 0 ? "h-3" : "h-1.5",
                current ? "bg-signal" : remainingTick ? "bg-mute/70" : "bg-line",
              )}
            />
          );
        })}
      </div>
      <p className="sr-only">
        {c ? `${c.days} days, ${c.hours} hours, ${c.minutes} minutes remaining.` : "Loading countdown."}
      </p>
    </div>
  );
}

/** Compact inline variant for CTA bands and secondary pages. */
export function CountdownCompact({ className }: { className?: string }) {
  const state = useCountdown(EVENT_START_MS);

  if (state.status === "live") return <LiveBadge size="sm" />;

  const c = state.status === "counting" ? state : null;
  const units: Unit[] = [
    { label: "Days", short: "d", value: c ? c.days : null },
    { label: "Hours", short: "h", value: c ? c.hours : null },
    { label: "Minutes", short: "m", value: c ? c.minutes : null },
    { label: "Seconds", short: "s", value: c ? c.seconds : null },
  ];

  return (
    <div role="timer" aria-label={srLabel} className={cn("flex items-baseline gap-4 sm:gap-6", className)}>
      {units.map((u) => (
        <div key={u.label} className="flex items-baseline gap-1" aria-hidden>
          <Digits
            value={pad(u.value)}
            className={cn(
              "font-mono text-3xl font-medium leading-none sm:text-4xl",
              u.label === "Seconds" ? "text-signal" : "text-ink",
            )}
          />
          <span className="annotation text-mute">{u.short}</span>
        </div>
      ))}
      <p className="sr-only">
        {c ? `${c.days} days, ${c.hours} hours, ${c.minutes} minutes remaining.` : "Loading countdown."}
      </p>
    </div>
  );
}
