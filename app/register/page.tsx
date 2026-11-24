import { EVENT } from "@/data/event";
import { Container } from "@/components/layout/container";
import { CtaLink } from "@/components/ui/cta-link";
import { CountdownCompact } from "@/components/ui/countdown";
import { Confirmed } from "@/components/ui/tba";
import { pageMetadata } from "@/lib/metadata";
import { RULES_PUBLISHED } from "@/lib/constants";

export const metadata = pageMetadata({
  title: "Register",
  path: "/register",
  description: `Register your team for CTUC, ${EVENT.dateLabel} at ${EVENT.venue.name}, ${EVENT.venue.city}.`,
});

// Registration dates appear only once they are set; until then they are left out entirely.
const DETAILS = [
  ...(EVENT.registrationOpens ? [{ label: "Registration opens", value: EVENT.registrationOpens }] : []),
  ...(EVENT.registrationCloses ? [{ label: "Registration closes", value: EVENT.registrationCloses }] : []),
  { label: "Team size", value: EVENT.teamSize },
  { label: "Eligibility", value: EVENT.eligibility },
  { label: "Format", value: EVENT.format },
  { label: "Entry (per person)", value: `Free for iTeam University students · ${EVENT.tracks.map((t) => `${t.name.replace(" CTF", "")} ${t.feeTnd} TND`).join(" · ")}` },
  { label: "Tracks", value: EVENT.tracks.map((t) => t.name.replace(" CTF", "")).join(" · ") },
];

export default function RegisterPage() {
  const open = Boolean(EVENT.registrationUrl);

  return (
    <section aria-labelledby="register-title" className="relative isolate overflow-hidden pb-16 pt-[calc(var(--nav-h)+3.5rem)] md:pt-[calc(var(--nav-h)+5rem)]">
      <div aria-hidden className="absolute -right-[10vw] top-[10vh] -z-10 size-[50vw] rounded-full bg-[radial-gradient(closest-side,rgba(0,184,255,0.1),transparent)]" />
      <Container>
        <div className="grid grid-cols-12 gap-x-6 gap-y-14">
          <div className="col-span-12 lg:col-span-7">
            <p className="annotation flex items-center gap-3 text-mute">
              <span className={open ? "pulse-dot block size-2 rounded-full bg-signal" : "block size-2 rounded-full border border-mute"} aria-hidden />
              Registration status: {open ? "open" : "not open yet"}
            </p>
            <h1
              id="register-title"
              className="rise mt-8 font-editorial text-[clamp(2.75rem,7vw,6.25rem)] font-semibold leading-[0.92] tracking-[-0.045em]"
            >
              {open ? "Register your team." : (
                <>
                  Registration
                  <br />
                  <span className="text-mute">opens soon.</span>
                </>
              )}
            </h1>
            <p className="mt-8 max-w-[52ch] text-lg leading-relaxed text-mute">
              {open
                ? "Registration is handled on the official platform. You will leave this site to complete it."
                : "Team registration is not open yet. When it opens, the registration link will appear right here."}
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
              {open && EVENT.registrationUrl && (
                <CtaLink href={EVENT.registrationUrl} size="lg">
                  Continue to registration
                </CtaLink>
              )}
              {RULES_PUBLISHED && (
                <CtaLink href="/rules" variant="text">
                  Read the rules first
                </CtaLink>
              )}
            </div>
          </div>

          <aside className="col-span-12 lg:col-span-4 lg:col-start-9 lg:mt-14">
            <div className="brackets p-6">
              <p className="annotation text-mute">Before you register</p>
              <dl className="mt-4 border-t border-line">
                {DETAILS.map((d) => (
                  <div key={d.label} className="flex items-baseline justify-between gap-4 border-b border-line py-3">
                    <dt className="text-sm text-mute">{d.label}</dt>
                    <dd className="text-sm">
                      <Confirmed value={d.value} />
                    </dd>
                  </div>
                ))}
                <div className="flex items-baseline justify-between gap-4 border-b border-line py-3">
                  <dt className="text-sm text-mute">Event</dt>
                  <dd className="text-right text-sm">
                    {EVENT.dateLabel}
                    <br />
                    <span className="text-mute">{EVENT.venue.name}</span>
                  </dd>
                </div>
              </dl>
              <p className="annotation mb-3 mt-8 text-mute">Championship starts in</p>
              <CountdownCompact />
            </div>
          </aside>
        </div>
      </Container>
    </section>
  );
}
