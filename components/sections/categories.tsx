import { CATEGORIES } from "@/data/categories";
import { Container } from "@/components/layout/container";
import { SectionLabel } from "@/components/ui/section-label";
import { CategoryIcon } from "@/components/ui/category-icon";
import { RevealGroup, RevealItem } from "@/components/ui/reveal";

export function Categories() {
  return (
    <section id="challenges" aria-labelledby="challenges-title" className="relative py-28 md:py-36">
      <Container>
        <div className="grid grid-cols-12 gap-x-6 gap-y-12">
          <div className="col-span-12 lg:col-span-4">
            <div className="lg:sticky lg:top-[calc(var(--nav-h)+3rem)]">
              <SectionLabel index="02" label="Classification" tone="signal" />
              <h2
                id="challenges-title"
                className="mt-8 font-editorial text-[clamp(2.25rem,4.6vw,3.75rem)] font-semibold leading-[1] tracking-[-0.035em]"
              >
                Eight disciplines.
                <br />
                <span className="text-mute">No weak side allowed.</span>
              </h2>
              <p className="mt-6 max-w-[42ch] leading-relaxed text-mute">
                Every challenge belongs to one classification. Teams that cover all eight climb. Teams that
                specialise hit a wall.
              </p>
            </div>
          </div>

          <RevealGroup
            as="ul"
            className="col-span-12 grid gap-px border border-line bg-line sm:grid-cols-2 lg:col-span-8"
          >
            {CATEGORIES.map((c, i) => (
              <RevealItem
                as="li"
                key={c.code}
                className="group relative flex min-h-[15rem] flex-col bg-void p-6 transition-colors duration-500 hover:bg-surface md:min-h-[17rem] md:p-8"
              >
                <span
                  aria-hidden
                  className="split-line absolute left-0 top-0 h-px w-0 transition-[width] duration-500 ease-expo group-hover:w-full"
                />
                <div className="flex items-start justify-between">
                  <span className="annotation text-signal">
                    {c.code}
                    <span aria-hidden className="ml-3 text-mute">
                      {String(i + 1).padStart(2, "0")}/{String(CATEGORIES.length).padStart(2, "0")}
                    </span>
                  </span>
                  <CategoryIcon
                    id={c.icon}
                    className="size-5 text-mute transition-colors duration-300 group-hover:text-signal"
                  />
                </div>
                <h3 className="mt-14 font-editorial text-2xl font-semibold tracking-tight md:mt-16 md:text-[1.75rem]">
                  {c.name}
                </h3>
                <p className="mt-3 max-w-[40ch] text-[15px] leading-relaxed text-mute">{c.description}</p>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </Container>
    </section>
  );
}
