import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { EVENT } from "@/data/event";
import { RULES_PUBLISHED } from "@/lib/constants";
import { Tba } from "@/components/ui/tba";

const FOOTER_LINKS = [
  { label: "Register", href: "/register" },
  ...(RULES_PUBLISHED ? [{ label: "Rules", href: "/rules" }] : []),
  { label: "Sponsors", href: "/sponsors" },
  { label: "Contact", href: "/contact" },
];

// The event year, not the build year: avoids non-deterministic dates in prerendered output.
const YEAR = EVENT.startsAt.slice(0, 4);

export function SiteFooter() {
  return (
    <footer className="relative mt-24 border-t border-line bg-void/80">
      <div className="mx-auto max-w-[1440px] px-5 pb-8 pt-14 md:px-8 lg:px-10">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <p
              aria-hidden
              className="font-condensed text-[34vw] font-black leading-[0.75] tracking-[-0.02em] text-outline md:text-[11rem]"
            >
              CTUC
            </p>
            <p className="mt-6 max-w-[36ch] text-sm leading-relaxed text-mute">{EVENT.name}</p>
            <p className="annotation mt-2 text-mute">
              {EVENT.dateCompact} · {EVENT.venue.name}, {EVENT.venue.city}
            </p>
          </div>

          <div className="md:col-span-3 md:col-start-7">
            <p className="annotation mb-4 text-mute">Powered by</p>
            {/* Official emblem on a white plate: the JPG has a white ground that must not be cut out. */}
            <div className="mb-5 inline-block bg-white p-2.5">
              <Image
                src="/FTSSU.webp"
                alt={`${EVENT.poweredBy.name} (${EVENT.poweredBy.shortName}) logo`}
                width={364}
                height={549}
                sizes="64px"
                className="h-20 w-auto"
              />
            </div>
            <a
              href={EVENT.poweredBy.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-start gap-1.5 text-sm text-ink hover:text-crimson"
            >
              <span className="max-w-[30ch] leading-snug">
                {EVENT.poweredBy.name} ({EVENT.poweredBy.shortName})
              </span>
              <ArrowUpRight aria-hidden strokeWidth={1.5} className="mt-0.5 size-4 shrink-0" />
              <span className="sr-only">(opens in a new tab)</span>
            </a>
          </div>

          <nav aria-label="Footer" className="grid grid-cols-2 gap-8 md:col-span-3 md:col-start-10">
            <div>
              <p className="annotation mb-4 text-mute">Site</p>
              <ul className="space-y-2.5">
                {FOOTER_LINKS.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className="text-sm text-ink transition-colors hover:text-crimson">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="annotation mb-4 text-mute">Social</p>
              {EVENT.socials.length > 0 ? (
                <ul className="space-y-2.5">
                  {EVENT.socials.map((s) => (
                    <li key={s.url}>
                      <a href={s.url} target="_blank" rel="noopener noreferrer" className="text-sm text-ink hover:text-crimson">
                        {s.label}
                      </a>
                    </li>
                  ))}
                </ul>
              ) : (
                <Tba className="text-sm" />
              )}
            </div>
          </nav>
        </div>

        <div className="mt-16 flex flex-col gap-3 border-t border-line pt-6 text-xs text-mute md:flex-row md:items-center md:justify-between">
          <p>
            © {YEAR} {EVENT.shortName}. All rights reserved.
          </p>
          <p className="text-ink/80 md:whitespace-nowrap">{EVENT.organizerCredit}</p>
        </div>
      </div>
    </footer>
  );
}
