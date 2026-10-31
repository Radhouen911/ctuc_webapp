import Image from "next/image";
import { CLUBS } from "@/data/clubs";
import { EVENT } from "@/data/event";
import { Container } from "@/components/layout/container";
import { SectionLabel } from "@/components/ui/section-label";
import { Reveal } from "@/components/ui/reveal";
import { cn } from "@/lib/utils";

const ACCENT = {
  signal: { text: "text-signal", bar: "bg-signal", glow: "rgba(0,184,255,0.16)" },
  crimson: { text: "text-crimson", bar: "bg-crimson", glow: "rgba(255,23,68,0.16)" },
} as const;

/** The two organizing clubs, given equal weight: mirrored rows, one accent each. */
export function Clubs() {
  return (
    <section id="clubs" aria-labelledby="clubs-title" className="relative py-28 md:py-36">
      <Container>
        <div className="grid grid-cols-12 gap-x-6 gap-y-8">
          <div className="col-span-12 md:col-span-7">
            <SectionLabel index="06" label="Organizers" />
            <h2
              id="clubs-title"
              className="mt-8 font-editorial text-[clamp(2.25rem,5vw,4rem)] font-semibold leading-[1] tracking-[-0.035em]"
            >
              Two clubs.
              <br />
              <span className="text-mute">One championship.</span>
            </h2>
          </div>
          <p className="col-span-12 max-w-[46ch] self-end leading-relaxed text-mute md:col-span-4 md:col-start-9">
            {EVENT.shortName} is organized by {CLUBS.map((c) => c.name).join(" and ")}, in partnership with the{" "}
            {EVENT.poweredBy.shortName}.
          </p>
        </div>

        <div className="mt-20 md:mt-24">
          {CLUBS.map((club, i) => {
            const accent = ACCENT[club.accent];
            const flipped = i % 2 === 1;
            return (
              <article
                key={club.id}
                id={club.id}
                aria-labelledby={`${club.id}-title`}
                className="grid grid-cols-12 items-center gap-x-6 gap-y-10 border-t border-line py-14 md:py-20"
              >
                <Reveal className={cn("col-span-12 md:col-span-4", flipped ? "md:order-2 md:col-start-9" : "")}>
                  <figure className="relative mx-auto flex aspect-square w-full max-w-[18rem] items-center justify-center md:max-w-none">
                    <div
                      aria-hidden
                      className="absolute inset-[8%] rounded-full"
                      style={{ background: `radial-gradient(closest-side, ${accent.glow}, transparent)` }}
                    />
                    <Image
                      src={club.logo.src}
                      alt={`${club.name} logo`}
                      width={club.logo.width}
                      height={club.logo.height}
                      sizes="(min-width: 768px) 28vw, 18rem"
                      className="relative h-auto max-h-[78%] w-auto max-w-[78%] object-contain"
                    />
                  </figure>
                </Reveal>

                <div className={cn("col-span-12 md:col-span-7", flipped ? "md:order-1" : "md:col-start-6")}>
                  <span aria-hidden className={cn("block h-0.5 w-10", accent.bar)} />
                  <h3
                    id={`${club.id}-title`}
                    className="mt-6 font-editorial text-[clamp(2rem,4vw,3.25rem)] font-semibold leading-[1.02] tracking-[-0.03em]"
                  >
                    {club.name}
                  </h3>
                  <p className="mt-5 text-lg leading-relaxed text-ink/90">{club.tagline}</p>

                  <p className="annotation mt-10 text-mute">About {club.network.name}</p>
                  <p className="mt-3 max-w-[62ch] leading-relaxed text-mute">{club.network.body}</p>

                  <dl
                    className={cn(
                      "mt-10 grid grid-cols-1 border-t border-line",
                      club.facts.length === 2 ? "sm:grid-cols-2" : "sm:grid-cols-3",
                    )}
                  >
                    {club.facts.map((f, j) => (
                      <div key={f.label} className={cn("border-b border-line py-4 sm:border-b-0", j > 0 && "sm:border-l sm:pl-5")}>
                        <dt className="annotation text-mute">{f.label}</dt>
                        <dd className="mt-1.5 font-editorial text-lg font-semibold tracking-tight">{f.value}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
