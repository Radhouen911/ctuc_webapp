import { EVENT, EVENT_METRICS } from "@/data/event";
import { Container } from "@/components/layout/container";
import { SectionLabel } from "@/components/ui/section-label";
import { Confirmed } from "@/components/ui/tba";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/reveal";
import { cn } from "@/lib/utils";

const FACTS = [
  { label: "Format", value: EVENT.format },
  { label: "Eligibility", value: EVENT.eligibility },
  { label: "Team size", value: EVENT.teamSize },
  { label: "Duration", value: EVENT.duration },
];

export function About() {
  return (
    <section id="about" aria-labelledby="about-title" className="relative py-28 md:py-40">
      <Container>
        <div className="grid grid-cols-12 gap-x-6 gap-y-12">
          <aside className="col-span-12 lg:col-span-3">
            <SectionLabel index="01" label="The brief" />
            <dl className="mt-10 hidden border-t border-line lg:block">
              {FACTS.map((f) => (
                <div key={f.label} className="flex items-baseline justify-between gap-4 border-b border-line py-3">
                  <dt className="annotation text-mute">{f.label}</dt>
                  <dd className="text-right text-sm">
                    <Confirmed value={f.value} />
                  </dd>
                </div>
              ))}
            </dl>
          </aside>

          <div className="col-span-12 lg:col-span-8 lg:col-start-5">
            <Reveal>
              <h2
                id="about-title"
                className="font-editorial text-[clamp(2.25rem,5.6vw,4.75rem)] font-semibold leading-[0.98] tracking-[-0.035em]"
              >
                Open to every student. <span className="text-mute">Built for every level.</span>
              </h2>
            </Reveal>

            <div className="mt-12 grid gap-8 md:grid-cols-2 md:gap-10">
              <Reveal delay={0.05}>
                <p className="text-lg leading-relaxed text-ink/90">
                  CTUC is a national Capture The Flag championship for university students across Tunisia. Teams of
                  four take on Jeopardy-style challenges in web, binary exploitation, reverse engineering,
                  cryptography, forensics, OSINT and hardware. Every challenge hides a flag. Capture it to score.
                </p>
              </Reveal>
              <Reveal delay={0.12}>
                <p className="leading-relaxed text-mute">
                  You don&rsquo;t need to be a security expert, or even study computer science. First CTF or fiftieth,
                  any field, any background: if you&rsquo;re a student, there&rsquo;s a place for you. Powered by the{" "}
                  {EVENT.poweredBy.shortName}, CTUC puts security on the national stage of university sport.
                </p>
              </Reveal>
            </div>

            {/* Two parallel competitions. */}
            <RevealGroup as="ul" className="mt-14 grid gap-px border border-line bg-line sm:grid-cols-2">
              {EVENT.tracks.map((t, i) => (
                <RevealItem as="li" key={t.id} className="relative bg-void p-6 md:p-8">
                  <span
                    aria-hidden
                    className={cn("absolute inset-x-0 top-0 h-px", i === 0 ? "bg-signal" : "bg-crimson")}
                  />
                  <p className="annotation text-mute">
                    Track {String.fromCharCode(65 + i)} · Parallel
                  </p>
                  <h3 className="mt-6 font-editorial text-2xl font-semibold tracking-tight md:text-3xl">{t.name}</h3>
                  <p className="mt-3 max-w-[40ch] leading-relaxed text-mute">{t.summary}</p>
                </RevealItem>
              ))}
            </RevealGroup>

            {/* Facts ledger for small screens (desktop shows it in the side rail). */}
            <dl className="mt-12 grid grid-cols-2 border-t border-line lg:hidden">
              {FACTS.map((f, i) => (
                <div key={f.label} className={cn("border-b border-line py-4", i % 2 === 1 && "border-l pl-4")}>
                  <dt className="annotation text-mute">{f.label}</dt>
                  <dd className="mt-1 text-sm">
                    <Confirmed value={f.value} />
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

        {/* Metrics ledger: asymmetric fractional columns, not cards. */}
        <RevealGroup
          as="div"
          className="mt-24 grid grid-cols-1 border-t border-line sm:grid-cols-[1.5fr_1fr_1fr] md:mt-32"
        >
          {EVENT_METRICS.map((m, i) => (
            <RevealItem
              key={m.label}
              className={cn(
                "border-b border-line py-8 pr-4 sm:border-b-0 lg:py-10",
                i > 0 && "sm:border-l sm:pl-6 lg:pl-8",
              )}
            >
              <p className="annotation text-mute">M-0{i + 1}</p>
              <p className="mt-10 font-editorial text-xl font-semibold tracking-tight md:text-2xl">{m.label}</p>
              <p className="mt-2 text-base leading-none">
                <Confirmed value={m.value} className="font-condensed text-5xl font-black md:text-7xl" />
              </p>
            </RevealItem>
          ))}
        </RevealGroup>
      </Container>
    </section>
  );
}
