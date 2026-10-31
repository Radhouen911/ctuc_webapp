"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { NAV_LINKS } from "@/lib/constants";
import { useActiveSection } from "@/lib/use-active-section";
import { EVENT } from "@/data/event";
import { CtaLink } from "@/components/ui/cta-link";
import { Wordmark } from "@/components/ui/wordmark";
import { cn } from "@/lib/utils";

/** Homepage sections the scroll spy tracks. "top" is the hero. */
const HOME_SECTIONS = ["top", "about", "challenges", "schedule", "prizes", "venue", "clubs", "sponsors"];

function isActive(pathname: string, href: string, section: string | null) {
  if (pathname === "/") {
    // On the homepage, highlight by the section in view, not by the route.
    if (href === "/") return section === "top";
    if (href.startsWith("/#")) return section === href.slice(2);
    return false;
  }
  if (href === "/" || href.includes("#")) return false;
  return pathname.startsWith(href);
}

export function SiteNav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const section = useActiveSection(HOME_SECTIONS, pathname === "/");

  const close = useCallback(() => {
    setOpen(false);
    toggleRef.current?.focus();
  }, []);

  // Drawer: scroll lock, Escape to close, focus trap.
  useEffect(() => {
    if (!open) return;
    const panel = panelRef.current;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    panel?.querySelector<HTMLElement>("a, button")?.focus();

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        close();
        return;
      }
      if (e.key !== "Tab" || !panel) return;
      const items = Array.from(panel.querySelectorAll<HTMLElement>("a[href], button:not([disabled])"));
      if (items.length === 0) return;
      const first = items[0];
      const last = items[items.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKey);
    };
  }, [open, close]);

  return (
    <header className="fixed inset-x-0 top-0 z-40">
      <a
        href="#main"
        className="annotation sr-only bg-ink px-3 py-2 text-void focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:z-50"
      >
        Skip to content
      </a>
      <div className="border-b border-line/70 bg-void/70 shadow-[inset_0_-1px_0_rgba(232,236,255,0.03)] backdrop-blur-xl backdrop-saturate-150">
        <nav
          aria-label="Primary"
          className="mx-auto flex h-[var(--nav-h)] max-w-[1440px] items-center justify-between gap-6 px-5 md:px-8 lg:px-10"
        >
          <Link href="/" className="text-ink" aria-label={`${EVENT.shortName} — home`}>
            <Wordmark className="text-lg" />
          </Link>

          <ul className="hidden items-center gap-1 lg:flex">
            {NAV_LINKS.map((link) => {
              const active = isActive(pathname, link.href, section);
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    aria-current={active ? (link.href.includes("#") ? "location" : "page") : undefined}
                    className={cn(
                      "relative px-3 py-2 text-[13px] transition-colors duration-300",
                      active ? "text-ink" : "text-mute hover:text-ink",
                    )}
                  >
                    {link.label}
                    {active && <span aria-hidden className="split-line absolute inset-x-3 -bottom-px h-0.5" />}
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className="flex items-center gap-3">
            <CtaLink href="/register" className="hidden h-10 px-4 text-[13px] sm:inline-flex">
              Register
            </CtaLink>
            <button
              ref={toggleRef}
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="mobile-menu"
              className="-mr-2 inline-flex size-11 items-center justify-center text-ink lg:hidden"
            >
              <Menu aria-hidden strokeWidth={1.5} className="size-6" />
              <span className="sr-only">Open menu</span>
            </button>
          </div>
        </nav>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            key="drawer"
            className="fixed inset-0 z-50 lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: reduce ? 0 : 0.25 }}
          >
            <button
              type="button"
              tabIndex={-1}
              aria-hidden
              className="absolute inset-0 bg-void/80 backdrop-blur-sm"
              onClick={close}
            />
            <motion.div
              ref={panelRef}
              id="mobile-menu"
              role="dialog"
              aria-modal="true"
              aria-label="Site menu"
              initial={reduce ? false : { x: "100%" }}
              animate={{ x: 0 }}
              exit={
                reduce
                  ? { opacity: 0, transition: { duration: 0 } }
                  : { x: "100%", transition: { duration: 0.3, ease: [0.7, 0, 0.84, 0] } }
              }
              transition={{ type: "spring", stiffness: 140, damping: 24 }}
              className="facade absolute inset-y-0 right-0 flex w-full max-w-sm flex-col border-l border-line bg-surface"
            >
              <div className="flex h-[var(--nav-h)] items-center justify-between border-b border-line px-5">
                <span className="annotation text-mute">{EVENT.edition} / Index</span>
                <button
                  type="button"
                  onClick={close}
                  className="-mr-2 inline-flex size-11 items-center justify-center text-ink"
                >
                  <X aria-hidden strokeWidth={1.5} className="size-6" />
                  <span className="sr-only">Close menu</span>
                </button>
              </div>

              <ul className="flex-1 overflow-y-auto px-5 py-6">
                {NAV_LINKS.map((link, i) => {
                  const active = isActive(pathname, link.href, section);
                  return (
                    <motion.li
                      key={link.href}
                      initial={reduce ? false : { opacity: 0, x: 24 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ type: "spring", stiffness: 160, damping: 22, delay: 0.06 + i * 0.04 }}
                    >
                      <Link
                        href={link.href}
                        onClick={() => setOpen(false)}
                        aria-current={active ? (link.href.includes("#") ? "location" : "page") : undefined}
                        className="group flex items-baseline gap-4 border-b border-line/60 py-4"
                      >
                        <span className="annotation w-6 text-mute">{String(i + 1).padStart(2, "0")}</span>
                        <span
                          className={cn(
                            "font-editorial text-3xl font-semibold tracking-tight transition-colors",
                            active ? "text-signal" : "text-ink group-hover:text-signal",
                          )}
                        >
                          {link.label}
                        </span>
                      </Link>
                    </motion.li>
                  );
                })}
              </ul>

              <div className="border-t border-line p-5">
                <CtaLink href="/register" size="lg" className="w-full">
                  Register your team
                </CtaLink>
                <p className="annotation mt-4 text-mute">
                  {EVENT.dateCompact} · {EVENT.venue.name}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
