"use client";

import { useSyncExternalStore } from "react";

/** Ticks on every wall-clock second. */
function subscribe(onTick: () => void) {
  let timer: ReturnType<typeof setTimeout>;
  const schedule = () => {
    timer = setTimeout(() => {
      onTick();
      schedule();
    }, 1000 - (Date.now() % 1000) + 8);
  };
  schedule();
  return () => clearTimeout(timer);
}

const getSnapshot = () => Math.floor(Date.now() / 1000);
const getServerSnapshot = () => null;

/** Current Unix time in seconds, or null during server render / before hydration. */
export function useNowSeconds(): number | null {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}

export type Countdown =
  | { status: "pending" }
  | { status: "counting"; days: number; hours: number; minutes: number; seconds: number }
  | { status: "live" };

export function useCountdown(targetMs: number): Countdown {
  const now = useNowSeconds();
  if (now === null) return { status: "pending" };
  const remaining = Math.floor(targetMs / 1000) - now;
  if (remaining <= 0) return { status: "live" };
  return {
    status: "counting",
    days: Math.floor(remaining / 86400),
    hours: Math.floor((remaining % 86400) / 3600),
    minutes: Math.floor((remaining % 3600) / 60),
    seconds: remaining % 60,
  };
}
