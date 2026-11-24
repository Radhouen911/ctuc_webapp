import { MapPin } from "lucide-react";
import { EVENT } from "@/data/event";
import { SCHEDULE } from "@/data/schedule";
import { Container } from "@/components/layout/container";
import { SectionLabel } from "@/components/ui/section-label";
import { Tba } from "@/components/ui/tba";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/reveal";
import { cn } from "@/lib/utils";

export function Schedule() {
  return (
    <section id="schedule" aria-labelledby="schedule-title" className="relative py-28 md:py-36">
      <Container>
        <div className="grid grid-cols-12 gap-x-6 gap-y-14">
          <div className="col-span-12 md:col-span-5">
            <SectionLabel index="03" label="Sequence" />
            <h2 id="schedule-title" className="sr-only">
              Schedule
            </h2>
            <Reveal className="mt-10">
              <p aria-hidden>
                <span className="block whitespace-nowrap font-condensed text-[min(44vw,15rem)] font-black leading-[0.78] tracking-[-0.03em] md:text-[min(18vw,15rem)]">
                  5–6
                </span>
                <span className="mt-6 flex flex-wrap items-baseline gap-x-3 gap-y-1">
                  <span className="font-editorial text-2xl font-semibold tracking-tight md:text-3xl">December</span>
                  <span className="font-editorial text-2xl tracking-tight text-mute md:text-3xl">2026</span>
                  <span className="annotation text-signal">{EVENT.weekday}</span>
                </span>
              </p>
              <p className="sr-only">
                <time dateTime={EVENT.startDate}>{EVENT.weekday}, {EVENT.dateLabel}</time>
              </p>
            </Reveal>
            <p className="mt-10 max-w-[38ch] leading-relaxed text-mute">
              From Saturday {EVENT.startTime} into Sunday {EVENT.endTime} at{" "}
              <a
                href={EVENT.venue.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-baseline gap-1 text-ink underline decoration-crimson/70 underline-offset-4 transition-colors hover:text-crimson"
              >
                <MapPin aria-hidden strokeWidth={1.75} className="size-3.5 translate-y-0.5 self-center text-crimson" />
                {EVENT.venue.name}, {EVENT.venue.city}
                <span className="sr-only">(open in Google Maps, new tab)</span>
              </a>
              , with the Beginner and Advanced CTFs running in parallel. The detailed programme is published here as
              each slot is confirmed.
            </p>
          </div>

          <RevealGroup as="ol" className="relative col-span-12 md:col-span-6 md:col-start-7 md:mt-24">
            <span aria-hidden className="absolute bottom-6 left-[5.25rem] top-6 w-px bg-line md:left-[6.25rem]" />
            {SCHEDULE.map((s, i) => {
              const confirmed = Boolean(s.time && s.title);
              return (
                <RevealItem
                  as="li"
                  key={s.slot}
                  className="relative grid grid-cols-[5.25rem_1fr] items-baseline gap-x-6 py-6 md:grid-cols-[6.25rem_1fr] md:gap-x-10"
                >
                  <span className={cn("font-mono text-lg tabular-nums md:text-xl", !s.time && "text-mute/60")}>
                    {s.time ?? (
                      <>
                        <span aria-hidden>--:--</span>
                        <span className="sr-only">Time to be announced</span>
                      </>
                    )}
                  </span>
                  <span
                    aria-hidden
                    className={cn(
                      "absolute left-[5.25rem] top-[2.15rem] size-2.5 -translate-x-1/2 rotate-45 md:left-[6.25rem]",
                      confirmed ? "bg-signal shadow-[0_0_14px_var(--glow-signal)]" : "border border-mute bg-void",
                    )}
                  />
                  <div className={cn("pl-2", i > 0 && "-mt-6 border-t border-dashed border-line pt-6")}>
                    <p className="annotation text-mute">Slot {s.slot}</p>
                    <p
                      className={cn(
                        "mt-2 font-editorial text-2xl font-semibold tracking-tight",
                        !confirmed && "text-lg font-normal",
                      )}
                    >
                      {s.title ?? <Tba />}
                    </p>
                    {s.note && <p className="annotation mt-2 text-mute">{s.note}</p>}
                  </div>
                </RevealItem>
              );
            })}
          </RevealGroup>
        </div>
      </Container>
    </section>
  );
}
