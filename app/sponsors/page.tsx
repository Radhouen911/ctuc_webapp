import { Download, Mail } from "lucide-react";
import { EVENT } from "@/data/event";
import { SUPPORT_WAYS } from "@/data/sponsors";
import { Container } from "@/components/layout/container";
import { SectionLabel } from "@/components/ui/section-label";
import { CtaLink } from "@/components/ui/cta-link";
import { PartnerRibbon } from "@/components/ui/partner-ribbon";
import { Tba } from "@/components/ui/tba";
import { RevealGroup, RevealItem } from "@/components/ui/reveal";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Sponsors",
  path: "/sponsors",
  description:
    "Partner with CTUC, Tunisia's national university Capture The Flag championship: prizes, infrastructure, expertise and careers. Download the sponsorship brochure.",
});

export default function SponsorsPage() {
  const email = EVENT.sponsorshipEmail ?? EVENT.contactEmail;

  return (
    <>
      {/* Hero */}
      <section
        aria-labelledby="sponsors-hero"
        className="relative overflow-hidden pb-24 pt-[calc(var(--nav-h)+4rem)] md:pb-32 md:pt-[calc(var(--nav-h)+6rem)]"
      >
        <div aria-hidden className="facade absolute inset-y-0 left-0 -z-10 w-1/2 [mask-image:linear-gradient(to_right,black,transparent)]" />
        <Container>
          <div className="grid grid-cols-12 gap-x-6 gap-y-12">
            <div className="col-span-12 lg:col-span-9">
              <SectionLabel index="00" label="Partnerships" />
              <h1
                id="sponsors-hero"
                className="rise mt-10 font-editorial text-[clamp(2.75rem,7.2vw,6.75rem)] font-semibold leading-[0.92] tracking-[-0.045em]"
              >
                Back the next generation of Tunisian security talent
              </h1>
            </div>
            <div className="col-span-12 flex flex-col justify-end gap-6 lg:col-span-3">
              <p className="leading-relaxed text-mute">
                {EVENT.shortName} brings students from across Tunisia to {EVENT.venue.name} on {EVENT.dateLabel}.
                Partners help make it happen.
              </p>
              <div className="flex flex-col gap-3">
                <CtaLink href="#contact" size="lg">
                  Get in touch
                </CtaLink>
                {EVENT.brochures.map((b) => (
                  <a
                    key={b.lang}
                    href={b.href}
                    hrefLang={b.lang}
                    download
                    className="group flex items-center gap-3 border border-line px-5 py-3.5 text-sm text-ink transition-colors hover:border-mute active:translate-y-px"
                  >
                    <Download aria-hidden strokeWidth={1.5} className="size-4 shrink-0 text-signal" />
                    <span className="flex flex-col gap-1">
                      <span lang={b.lang}>{b.title}</span>
                      <span className="annotation text-mute">
                        {b.language} · PDF · {b.size}
                      </span>
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Ways to support (from the brochure) */}
      <section aria-labelledby="ways-title" className="border-t border-line py-24 md:py-32">
        <Container>
          <div className="grid grid-cols-12 gap-x-6 gap-y-12">
            <div className="col-span-12 lg:col-span-4">
              <SectionLabel index="01" label="Ways to support" tone="signal" />
              <h2
                id="ways-title"
                className="mt-8 font-editorial text-[clamp(2rem,4vw,3.25rem)] font-semibold leading-[1.02] tracking-[-0.03em]"
              >
                Every contribution can be tailored to your goals.
              </h2>
              <p className="mt-6 max-w-[40ch] leading-relaxed text-mute">
                Financial, in-kind and technical contributions are all welcome. Every partner receives a report with
                participation figures, reach and highlights.
              </p>
            </div>
            <RevealGroup as="ol" className="col-span-12 grid gap-px border border-line bg-line sm:grid-cols-2 lg:col-span-8">
              {SUPPORT_WAYS.map((w, i) => (
                <RevealItem as="li" key={w.title} className="group relative bg-void p-6 md:p-8">
                  <span
                    aria-hidden
                    className="split-line absolute left-0 top-0 h-px w-0 transition-[width] duration-500 ease-expo group-hover:w-full"
                  />
                  <p aria-hidden className="font-condensed text-6xl font-black leading-none text-outline">
                    0{i + 1}
                  </p>
                  <h3 className="mt-8 font-editorial text-2xl font-semibold tracking-tight">{w.title}</h3>
                  <p className="mt-3 max-w-[38ch] leading-relaxed text-mute">{w.body}</p>
                </RevealItem>
              ))}
            </RevealGroup>
          </div>
        </Container>
      </section>

      {/* Partners ribbon */}
      <section aria-labelledby="partners-title" className="py-16 md:py-24">
        <Container>
          <SectionLabel index="02" label="Partners" />
          <h2 id="partners-title" className="sr-only">
            Partners
          </h2>
        </Container>
        <PartnerRibbon className="mt-10" />
      </section>

      {/* Contact by email */}
      <section id="contact" aria-labelledby="contact-title" className="border-t border-line py-24 md:py-32">
        <Container>
          <div className="grid grid-cols-12 gap-x-6 gap-y-12">
            <div className="col-span-12 lg:col-span-7">
              <SectionLabel index="03" label="Get in touch" tone="signal" />
              <h2
                id="contact-title"
                className="mt-8 font-editorial text-[clamp(2.25rem,5vw,4.25rem)] font-semibold leading-[0.98] tracking-[-0.04em]"
              >
                Tell us what matters to your organization.
              </h2>
              <p className="mt-6 max-w-[48ch] leading-relaxed text-mute">
                Write to us, and we will shape a partnership around it.
              </p>
            </div>

            <div className="col-span-12 self-end lg:col-span-4 lg:col-start-9">
              <dl className="border-t border-line">
                <div className="flex items-center justify-between gap-4 border-b border-line py-5">
                  <dt className="annotation flex items-center gap-2 text-mute">
                    <Mail aria-hidden strokeWidth={1.5} className="size-4" />
                    Email
                  </dt>
                  <dd className="text-right text-sm">
                    {email ? (
                      <a href={`mailto:${email}`} className="font-mono underline decoration-line underline-offset-4 hover:decoration-signal">
                        {email}
                      </a>
                    ) : (
                      <Tba />
                    )}
                  </dd>
                </div>
              </dl>
              <div className="mt-6 flex flex-wrap gap-x-8 gap-y-3">
                {EVENT.brochures.map((b) => (
                  <CtaLink key={b.lang} href={b.href} variant="text">
                    Brochure ({b.language})
                  </CtaLink>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
