/**
 * Single source of truth for the championship start.
 * Africa/Tunis is UTC+01:00 year-round (no DST).
 */
export const EVENT_START_ISO = "2026-12-05T16:00:00+01:00";
export const EVENT_END_ISO = "2026-12-06T08:00:00+01:00";
export const EVENT_START_MS = Date.parse(EVENT_START_ISO);
export const EVENT_TIMEZONE = "Africa/Tunis";

export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

/**
 * The rules page stays hidden (404, no links anywhere) until the rulebook is final.
 * Set to true to publish /rules and restore every link to it.
 */
export const RULES_PUBLISHED = false;

export type NavLink = { label: string; href: string };

export const NAV_LINKS: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/#about" },
  { label: "Challenges", href: "/#challenges" },
  { label: "Schedule", href: "/#schedule" },
  { label: "Organizers", href: "/#clubs" },
  { label: "Sponsors", href: "/sponsors" },
  ...(RULES_PUBLISHED ? [{ label: "Rules", href: "/rules" }] : []),
];
