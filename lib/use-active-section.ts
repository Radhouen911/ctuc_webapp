"use client";

import { useEffect, useState } from "react";

/**
 * Reports which of the given section ids currently crosses the middle band of
 * the viewport. Returns null while none of them do (e.g. between tracked sections).
 */
export function useActiveSection(ids: string[], enabled: boolean): string | null {
  const [active, setActive] = useState<string | null>(null);
  const key = ids.join(",");

  useEffect(() => {
    if (!enabled) return;
    const elements = key
      .split(",")
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);
    if (elements.length === 0) return;

    const visible = new Set<string>();
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) visible.add(entry.target.id);
          else visible.delete(entry.target.id);
        }
        // First tracked section (in document order) inside the band wins.
        setActive(elements.find((el) => visible.has(el.id))?.id ?? null);
      },
      // A thin band around 40% of the viewport height.
      { rootMargin: "-40% 0px -59% 0px" },
    );
    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [key, enabled]);

  return enabled ? active : null;
}
