import { ArrowUpRight } from "lucide-react";
import { EVENT } from "@/data/event";
import { Container } from "@/components/layout/container";
import { CtaLink } from "@/components/ui/cta-link";
import { Tba } from "@/components/ui/tba";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Contact",
  path: "/contact",
  description: "Contact the CTUC – Cybersecurity Tunisian University Championship team: general questions, sponsorship and social channels.",
});

export default function ContactPage() {
  return (
    <section aria-labelledby="contact-title" className="relative isolate overflow-hidden pb-16 pt-[calc(var(--nav-h)+3.5rem)] md:pt-[calc(var(--nav-h)+5rem)]">
      <Container>
        <div className="grid grid-cols-12 gap-x-6 gap-y-16">
          <div className="col-span-12 lg:col-span-6">
            <p className="annotation text-mute">{EVENT.edition} / Contact</p>
            <h1
              id="contact-title"
              className="rise mt-6 font-editorial text-[clamp(2.75rem,7vw,6rem)] font-semibold leading-[0.92] tracking-[-0.045em]"
            >
              Talk to the championship.
            </h1>
            <p className="mt-8 max-w-[46ch] leading-relaxed text-mute">
              Contact channels are being set up. Until they are published, this page lists what is confirmed and marks
              the rest <Tba />. There is no contact form yet, because nothing could be delivered from it.
            </p>
          </div>

          <div className="col-span-12 lg:col-span-5 lg:col-start-8 lg:mt-20">
            <dl className="border-t border-line">
              <div className="grid grid-cols-[9rem_1fr] gap-4 border-b border-line py-5">
                <dt className="annotation pt-1 text-mute">General email</dt>
                <dd>
                  {EVENT.contactEmail ? (
                    <a href={`mailto:${EVENT.contactEmail}`} className="font-mono underline underline-offset-4 hover:text-crimson">
                      {EVENT.contactEmail}
                    </a>
                  ) : (
                    <Tba />
                  )}
                </dd>
              </div>
              <div className="grid grid-cols-[9rem_1fr] gap-4 border-b border-line py-5">
                <dt className="annotation pt-1 text-mute">Social</dt>
                <dd>
                  {EVENT.socials.length > 0 ? (
                    <ul className="space-y-1">
                      {EVENT.socials.map((s) => (
                        <li key={s.url}>
                          <a href={s.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 hover:text-crimson">
                            {s.label}
                            <ArrowUpRight aria-hidden strokeWidth={1.5} className="size-4" />
                            <span className="sr-only">(opens in a new tab)</span>
                          </a>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <Tba />
                  )}
                </dd>
              </div>
              <div className="grid grid-cols-[9rem_1fr] gap-4 border-b border-line py-5">
                <dt className="annotation pt-1 text-mute">Venue</dt>
                <dd className="leading-relaxed">
                  {EVENT.venue.name}
                  <br />
                  <span className="text-mute">
                    {EVENT.venue.city}, {EVENT.venue.country}
                  </span>
                </dd>
              </div>
              <div className="grid grid-cols-[9rem_1fr] gap-4 border-b border-line py-5">
                <dt className="annotation pt-1 text-mute">Powered by</dt>
                <dd>
                  <a
                    href={EVENT.poweredBy.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 hover:text-crimson"
                  >
                    {EVENT.poweredBy.shortName}
                    <ArrowUpRight aria-hidden strokeWidth={1.5} className="size-4" />
                    <span className="sr-only">(opens in a new tab)</span>
                  </a>
                </dd>
              </div>
            </dl>
          </div>
        </div>

        {/* Sponsorship band */}
        <div className="mt-24 grid items-end gap-8 border-t border-line pt-10 md:grid-cols-12">
          <div className="md:col-span-7">
            <p className="annotation text-crimson">Sponsorship inquiries</p>
            <p className="mt-4 font-editorial text-3xl font-semibold leading-tight tracking-tight md:text-4xl">
              Want your organization behind {EVENT.shortName}?
            </p>
          </div>
          <div className="md:col-span-4 md:col-start-9 md:justify-self-end">
            <CtaLink href="/sponsors#contact" size="lg">
              Sponsorship inquiry
            </CtaLink>
          </div>
        </div>
      </Container>
    </section>
  );
}
