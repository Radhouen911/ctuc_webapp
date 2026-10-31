import { RULE_SECTIONS, RULES_VERSION } from "@/data/rules";
import { EVENT } from "@/data/event";
import { Container } from "@/components/layout/container";
import { Tba, Confirmed } from "@/components/ui/tba";
import { CtaLink } from "@/components/ui/cta-link";
import { notFound } from "next/navigation";
import { pageMetadata } from "@/lib/metadata";
import { RULES_PUBLISHED } from "@/lib/constants";

export const metadata = {
  ...pageMetadata({
    title: "Rules",
    path: "/rules",
    description:
      "Official rules of CTUC – Cybersecurity Tunisian University Championship: eligibility, teams, format, scoring, conduct, fair play and disqualification.",
  }),
  // Keep the hidden page out of search engines until it is published.
  ...(RULES_PUBLISHED ? {} : { robots: { index: false, follow: false } }),
};

const published = RULE_SECTIONS.filter((s) => s.body).length;
const statusOf = (s: (typeof RULE_SECTIONS)[number]) =>
  !s.body ? "Pending" : s.pending?.length ? "Partially published" : "Published";

export default function RulesPage() {
  // Hidden until the rulebook is final: behaves exactly like a missing page.
  if (!RULES_PUBLISHED) notFound();

  return (
    <div className="pb-16 pt-[calc(var(--nav-h)+3.5rem)] md:pt-[calc(var(--nav-h)+5rem)]">
      <Container>
        {/* Document header */}
        <header className="grid grid-cols-12 gap-x-6 gap-y-8 border-b border-line pb-12">
          <div className="col-span-12 md:col-span-8">
            <p className="annotation text-mute">
              {EVENT.edition} / Rulebook
            </p>
            <h1 className="rise mt-6 font-editorial text-[clamp(3rem,8vw,7rem)] font-semibold leading-[0.9] tracking-[-0.05em]">
              The rules.
            </h1>
          </div>
          <dl className="col-span-12 grid grid-cols-3 gap-4 self-end md:col-span-4">
            <div>
              <dt className="annotation text-mute">Version</dt>
              <dd className="mt-1 text-sm">
                <Confirmed value={RULES_VERSION} />
              </dd>
            </div>
            <div>
              <dt className="annotation text-mute">Sections</dt>
              <dd className="mt-1 font-mono text-sm">{RULE_SECTIONS.length}</dd>
            </div>
            <div>
              <dt className="annotation text-mute">Published</dt>
              <dd className="mt-1 font-mono text-sm">
                {published}/{RULE_SECTIONS.length}
              </dd>
            </div>
          </dl>
        </header>

        <div className="mt-8 flex items-start gap-4 border-l-2 border-signal bg-surface/60 p-5" role="note">
          <p className="max-w-[78ch] text-sm leading-relaxed text-mute">
            <span className="text-ink">The full rulebook is not published yet.</span> Confirmed points are shown below.
            Anything marked <Tba /> is still being decided and should not be assumed.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-12 gap-x-6 gap-y-10">
          {/* Table of contents */}
          <nav aria-label="Rulebook sections" className="col-span-12 lg:col-span-3">
            <div className="lg:sticky lg:top-[calc(var(--nav-h)+2rem)]">
              <p className="annotation mb-4 text-mute">Contents</p>
              <ol className="grid grid-cols-1 border-t border-line sm:grid-cols-2 lg:grid-cols-1">
                {RULE_SECTIONS.map((s) => (
                  <li key={s.id} className="border-b border-line">
                    <a href={`#${s.id}`} className="group flex items-baseline gap-3 py-2.5 text-sm text-mute hover:text-ink">
                      <span className="annotation w-10 text-mute group-hover:text-crimson">{s.code}</span>
                      <span>{s.title}</span>
                      {(!s.body || s.pending?.length) && <span aria-hidden className="ml-auto size-1.5 rounded-full bg-signal/60" />}
                    </a>
                  </li>
                ))}
              </ol>
            </div>
          </nav>

          {/* Sections */}
          <div className="col-span-12 lg:col-span-8 lg:col-start-5">
            {RULE_SECTIONS.map((s) => (
              <section key={s.id} id={s.id} aria-labelledby={`${s.id}-title`} className="border-b border-line py-10 first:pt-0">
                <div className="flex items-baseline justify-between gap-4">
                  <p className="annotation text-crimson">{s.code}</p>
                  <p className="annotation text-mute">{statusOf(s)}</p>
                </div>
                <h2 id={`${s.id}-title`} className="mt-3 font-editorial text-3xl font-semibold tracking-tight md:text-4xl">
                  {s.title}
                </h2>
                {s.body ? (
                  <div className="mt-6 max-w-[68ch] space-y-4 leading-relaxed text-ink/90">
                    {s.body.map((p) => (
                      <p key={p}>{p}</p>
                    ))}
                    {s.pending && s.pending.length > 0 && (
                      <dl className="!mt-8 border-t border-line">
                        {s.pending.map((item) => (
                          <div key={item} className="flex items-baseline justify-between gap-4 border-b border-line py-3">
                            <dt className="text-sm text-mute">{item}</dt>
                            <dd className="text-sm">
                              <Tba />
                            </dd>
                          </div>
                        ))}
                      </dl>
                    )}
                  </div>
                ) : (
                  <div className="mt-6 grid gap-3 sm:grid-cols-[7rem_1fr]">
                    <p className="annotation pt-0.5 text-mute">Will cover</p>
                    <p className="max-w-[60ch] leading-relaxed text-mute">{s.scope}</p>
                    <p className="annotation pt-0.5 text-mute">Official text</p>
                    <p>
                      <Tba />
                    </p>
                  </div>
                )}
              </section>
            ))}

            <div className="mt-12 flex flex-col gap-4 sm:flex-row sm:items-center">
              <CtaLink href="/register">Register your team</CtaLink>
              <CtaLink href="/contact" variant="text">
                Questions about the rules
              </CtaLink>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
