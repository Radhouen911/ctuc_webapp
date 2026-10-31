import { EVENT } from "@/data/event";
import { Container } from "@/components/layout/container";
import { CtaLink } from "@/components/ui/cta-link";
import { RULES_PUBLISHED } from "@/lib/constants";
import { CountdownCompact } from "@/components/ui/countdown";
import { Reveal } from "@/components/ui/reveal";

export function FinalCta() {
  return (
    <section aria-labelledby="final-title" className="relative isolate overflow-hidden border-t border-line pb-24 pt-28 md:pb-32 md:pt-40">
      <p
        aria-hidden
        className="pointer-events-none absolute -bottom-[0.18em] -right-[0.04em] -z-10 select-none font-condensed text-[46vw] font-black leading-none tracking-[-0.04em] text-outline"
      >
        CTUC
      </p>
      <div
        aria-hidden
        className="absolute -left-[15vw] bottom-0 -z-10 size-[60vw] rounded-full bg-[radial-gradient(closest-side,rgba(0,184,255,0.11),transparent)]"
      />
      <Container>
        <div className="grid grid-cols-12 gap-x-6 gap-y-14">
          <div className="col-span-12 lg:col-span-7">
            <p className="annotation flex items-center gap-3 text-mute">
              <span aria-hidden className="split-line h-0.5 w-10" />
              §08 — Final call
            </p>
            <Reveal>
              <h2
                id="final-title"
                className="mt-8 font-editorial text-[clamp(2.75rem,7vw,6.25rem)] font-semibold leading-[0.92] tracking-[-0.045em]"
              >
                Four players. One day. <span className="text-mute">Every flag counts.</span>
              </h2>
            </Reveal>
            <div className="mt-12 flex flex-col gap-5 sm:flex-row sm:items-center">
              <CtaLink href="/register" size="lg">
                Register your team
              </CtaLink>
              {RULES_PUBLISHED && (
                <CtaLink href="/rules" variant="text">
                  Read the rules
                </CtaLink>
              )}
            </div>
          </div>

          <div className="col-span-12 self-end border-t border-line pt-6 lg:col-span-4 lg:col-start-9">
            <p className="annotation mb-4 text-mute">Time to start</p>
            <CountdownCompact />
            <dl className="mt-8 grid grid-cols-2 gap-4">
              <div>
                <dt className="annotation text-mute">Date</dt>
                <dd className="mt-1 text-sm">
                  <time dateTime={EVENT.startsAt}>{EVENT.dateLabel}</time>
                </dd>
              </div>
              <div>
                <dt className="annotation text-mute">Location</dt>
                <dd className="mt-1 text-sm">
                  {EVENT.venue.name}, {EVENT.venue.city}
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </Container>
    </section>
  );
}
