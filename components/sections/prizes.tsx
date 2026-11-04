import { PLACEMENTS, PRIZE_POOL, PRIZE_TRACKS, type Placement } from "@/data/prizes";
import { Container } from "@/components/layout/container";
import { SectionLabel } from "@/components/ui/section-label";
import { Reveal } from "@/components/ui/reveal";
import { cn } from "@/lib/utils";

// Desktop podium order: 2 · 1 · 3. Step heights encode rank.
const PODIUM: Record<Placement["rank"], { order: string; numeral: string; step: string }> = {
  1: { order: "md:order-2", numeral: "text-[clamp(8rem,22vw,21rem)] text-ink", step: "md:h-56" },
  2: { order: "md:order-1", numeral: "text-[clamp(6rem,15vw,14rem)] prize-outline", step: "md:h-36" },
  3: { order: "md:order-3", numeral: "text-[clamp(5rem,12vw,11rem)] prize-outline", step: "md:h-24" },
};

export function Prizes() {
  return (
    <section
      id="prizes"
      aria-labelledby="prizes-title"
      className="relative isolate overflow-hidden border-y border-line bg-surface/50 py-28 md:py-36"
    >
      <div
        aria-hidden
        className="absolute bottom-[-20%] left-[30%] -z-10 size-[70vw] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(255,23,68,0.11),transparent)] md:size-[44vw]"
      />
      <div
        aria-hidden
        className="absolute bottom-[-20%] left-[70%] -z-10 size-[70vw] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(0,184,255,0.11),transparent)] md:size-[44vw]"
      />
      <Container>
        <div className="grid grid-cols-12 gap-x-6 gap-y-10">
          <div className="col-span-12 md:col-span-7">
            <SectionLabel index="04" label="Stakes" />
            <h2
              id="prizes-title"
              className="mt-8 font-editorial text-[clamp(2.25rem,5vw,4rem)] font-semibold leading-[1] tracking-[-0.035em]"
            >
              Three places on the podium.
              <br />
              <span className="text-mute">In each track.</span>
            </h2>
            <p className="mt-6 max-w-[52ch] leading-relaxed text-mute">
              The {PRIZE_TRACKS.join(" and ")} CTFs each crown their own top three: six winning teams in all.
            </p>
          </div>
          {/* Shown only once the prize pool is confirmed in data/prizes.ts. */}
          {PRIZE_POOL && (
            <div className="col-span-12 self-end md:col-span-4 md:col-start-9 md:text-right">
              <p className="annotation text-mute">Total prize pool</p>
              <p className="mt-3 font-condensed text-5xl font-black md:text-6xl">{PRIZE_POOL}</p>
            </div>
          )}
        </div>

        <ol className="mt-16 grid grid-cols-1 gap-y-0 md:mt-6 md:grid-cols-3 md:items-end md:gap-x-4">
          {PLACEMENTS.map((p) => {
            const style = PODIUM[p.rank];
            return (
              <li key={p.rank} className={cn("border-t border-line md:border-t-0", style.order)}>
                <Reveal delay={p.rank === 1 ? 0 : 0.12 * p.rank}>
                  <div className="flex items-end justify-between gap-4 pt-6 md:block md:pt-0">
                    <p
                      aria-hidden
                      className={cn("font-condensed font-black leading-[0.78] tracking-[-0.04em]", style.numeral)}
                    >
                      {String(p.rank).padStart(2, "0")}
                    </p>
                    <div className="pb-2 text-right md:hidden">
                      <h3 className="font-editorial text-xl font-semibold">{p.title}</h3>
                      <p className="annotation mt-1 text-mute">Per track</p>
                      {p.prize && <p className="mt-1 text-lg">{p.prize}</p>}
                    </div>
                  </div>
                  <div
                    className={cn(
                      "facade mt-4 hidden flex-col justify-between border-t p-5 md:flex",
                      p.rank === 1 ? "border-transparent bg-raised/60 [border-image:linear-gradient(90deg,var(--crimson),var(--signal))_1]" : "border-line bg-raised/30",
                      style.step,
                    )}
                  >
                    <div className="flex items-baseline justify-between">
                      <h3 className="font-editorial text-xl font-semibold tracking-tight">
                        <span className="sr-only">Place {p.rank}: </span>
                        {p.title}
                      </h3>
                      <span className="annotation text-mute">Per track</span>
                    </div>
                    {p.prize && <p className="text-lg">{p.prize}</p>}
                  </div>
                </Reveal>
              </li>
            );
          })}
        </ol>

        <Reveal className="mt-16 md:mt-20">
          <div className="grid gap-4 border-t border-line pt-8 md:grid-cols-12 md:gap-6">
            <p className="annotation text-signal md:col-span-3">Beyond the podium</p>
            <p className="font-editorial text-2xl font-semibold leading-tight tracking-tight md:col-span-8 md:text-3xl">
              The top three aren&rsquo;t the only winners. More teams will take home vouchers.
            </p>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
