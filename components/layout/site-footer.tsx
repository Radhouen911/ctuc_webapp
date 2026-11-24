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
            {/* White-on-transparent logo: sits directly on the dark footer. */}
            <a
              href={EVENT.poweredBy.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex flex-col items-start gap-4 text-sm text-ink hover:text-crimson"
            >
              <Image
                src={EVENT.poweredBy.logo.src}
                alt={`${EVENT.poweredBy.name} logo`}
                width={EVENT.poweredBy.logo.width}
                height={EVENT.poweredBy.logo.height}
                sizes="176px"
                className="h-auto w-44"
              />
              <span className="inline-flex items-start gap-1.5 leading-snug">
                {EVENT.poweredBy.name}
                <ArrowUpRight aria-hidden strokeWidth={1.5} className="mt-0.5 size-4 shrink-0" />
                <span className="sr-only">(opens in a new tab)</span>
              </span>
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
                        <span className="sr-only"> (opens in a new tab)</span>
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
          <p className="text-ink/80">
            Organized by{" "}
            {EVENT.organizers.map((o, i) => (
              <span key={o.name}>
                {i > 0 && (i === EVENT.organizers.length - 1 ? " & " : ", ")}
                {o.url ? (
                  <a href={o.url} target="_blank" rel="noopener noreferrer" className="underline decoration-line underline-offset-4 hover:text-crimson">
                    {o.name}
                    <span className="sr-only"> (opens in a new tab)</span>
                  </a>
                ) : (
                  o.name
                )}
              </span>
            ))}
          </p>
        </div>
      </div>
    </footer>
  );
}
