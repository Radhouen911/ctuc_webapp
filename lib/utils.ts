import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/** Links that must bypass client-side routing: other sites and static documents (PDF). */
export function isExternal(href: string) {
  return /^https?:\/\//.test(href) || /\.pdf$/i.test(href);
}
