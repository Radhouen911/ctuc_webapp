import { EVENT } from "@/data/event";
import { ChampionshipMark } from "@/components/effects/championship-mark";
import { GlitchLogo } from "@/components/effects/glitch-word";
import { CountdownInstrument } from "@/components/ui/countdown";
import { CtaLink } from "@/components/ui/cta-link";
import { RULES_PUBLISHED } from "@/lib/constants";

export function Hero() {
  return (
    <section id="top" aria-labelledby="hero-title" className="relative isolate overflow-hidden pt-[var(--nav-h)]">
      {/* Facade lattice, fading in from the right edge. */}
      <div
        aria-hidden
        className="facade absolute inset-y-0 right-0 -z-10 w-full [mask-image:linear-gradient(to_left,black_10%,transparent_75%)] md:w-[62%]"
      />
      {/* Paired light sources: crimson behind the flag, electric blue behind the logo. */}
      <div
        aria-hidden
        className="absolute right-[-10%] top-[8%] -z-10 size-[60vw] rounded-full bg-[radial-gradient(closest-side,rgba(255,23,68,0.1),transparent)] lg:right-[6%] lg:top-[12%] lg:size-[38vw]"
      />
      <div
        aria-hidden
        className="absolute -left-[20%] top-[20%] -z-10 size-[70vw] rounded-full bg-[radial-gradient(closest-side,rgba(0,184,255,0.1),transparent)] lg:-left-[6%] lg:top-[10%] lg:size-[42vw]"
      />

      <div className="mx-auto flex min-h-[calc(100dvh-var(--nav-h))] max-w-[1440px] flex-col px-5 md:px-8 lg:px-10">
        <div className="annotation flex items-center justify-between gap-4 border-b border-line/70 py-3.5 text-mute">
          <span>{EVENT.edition} / National university CTF</span>
          <span className="hidden md:inline">
            {EVENT.venue.coordinates.lat.toFixed(2)}° N · {EVENT.venue.coordinates.lng.toFixed(2)}° E
          </span>
          <span className="hidden sm:inline">File 001 · Public</span>
        </div>

        <div className="relative grid flex-1 grid-cols-12 items-center gap-x-6 py-10 lg:py-6">
          <div className="relative z-10 col-span-12 lg:col-span-8">
            <p className="rise annotation flex items-center gap-3 text-ink" style={{ ["--d" as string]: "0ms" }}>
              <span aria-hidden className="split-line h-0.5 w-10" />
              Tunisia&rsquo;s national university Capture The Flag
            </p>

            <h1 id="hero-title" className="mt-5">
              <span className="rise block" style={{ ["--d" as string]: "80ms" }}>
                {/* Height-capped on desktop so the hero still fits one viewport; width follows the logo's 700:556 ratio. */}
                <GlitchLogo
                  src="/logo_ctuc.png"
                  alt={EVENT.shortName}
                  width={700}
                  height={556}
                  className="aspect-[700/556] w-[min(80vw,24rem)] lg:w-[calc(min(36dvh,21rem)*1.259)]"
                />
              </span>
              <span
                className="rise mt-5 block max-w-[22ch] font-editorial text-[clamp(1.6rem,3.6vw,2.6rem)] font-medium leading-[1.04] tracking-[-0.02em] text-ink"
                style={{ ["--d" as string]: "180ms" }}
              >
                Cybersecurity Tunisian University Championship
              </span>
            </h1>

            <p
              className="rise mt-4 font-editorial text-lg tracking-tight text-mute md:text-xl"
              style={{ ["--d" as string]: "260ms" }}
            >
              Find the flaw. <span className="text-ink">Take the flag.</span>
            </p>
          </div>

          {/* The Mark: background figure on mobile, overlapping centerpiece on desktop. */}
          <div className="pointer-events-none absolute -right-[22%] -top-[2%] w-[86%] opacity-20 sm:-right-[8%] sm:w-[62%] sm:opacity-45 lg:pointer-events-auto lg:relative lg:right-auto lg:top-auto lg:col-span-4 lg:-ml-24 lg:flex lg:w-auto lg:justify-end lg:opacity-100 xl:-ml-44">
            <ChampionshipMark className="lg:w-[min(100%,54dvh,34rem)]" />
          </div>
        </div>

        <div className="grid grid-cols-12 gap-x-6 gap-y-8 border-t border-line pb-8 pt-5">
          <dl className="col-span-12 grid grid-cols-2 gap-6 md:col-span-12 lg:col-span-3 lg:grid-cols-1 lg:gap-5">
            <div>
              <dt className="annotation text-mute">Date</dt>
              <dd className="mt-1.5 font-condensed text-2xl font-extrabold uppercase leading-none tracking-wide md:text-3xl">
                <time dateTime={EVENT.startsAt}>{EVENT.dateLabel}</time>
              </dd>
            </div>
            <div>
              <dt className="annotation text-mute">Venue</dt>
              <dd className="mt-1.5 font-condensed text-2xl font-extrabold uppercase leading-none tracking-wide md:text-3xl">
                {EVENT.venue.name}, {EVENT.venue.city}
              </dd>
            </div>
          </dl>

          <div className="col-span-12 lg:col-span-5">
            <CountdownInstrument />
          </div>

          <div className="col-span-12 flex flex-col gap-3 self-end sm:flex-row lg:col-span-4 lg:flex-col lg:items-stretch xl:flex-row xl:justify-end">
            <CtaLink href="/register" size="lg">
              Register your team
            </CtaLink>
            {RULES_PUBLISHED ? (
              <CtaLink href="/rules" size="lg" variant="secondary">
                Read the rules
              </CtaLink>
            ) : (
              <CtaLink href="/#challenges" size="lg" variant="secondary">
                See the challenges
              </CtaLink>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
