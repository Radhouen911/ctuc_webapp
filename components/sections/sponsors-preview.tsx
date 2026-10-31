import { EVENT } from "@/data/event";
import { SPONSORS } from "@/data/sponsors";
import { Container } from "@/components/layout/container";
import { SectionLabel } from "@/components/ui/section-label";
import { CtaLink } from "@/components/ui/cta-link";
import { PartnerRibbon } from "@/components/ui/partner-ribbon";

export function SponsorsPreview() {
  const hasPartners = SPONSORS.length > 0;

  return (
    <section id="sponsors" aria-labelledby="sponsors-title" className="relative py-28 md:py-36">
      <Container>
        <div className="grid grid-cols-12 gap-x-6 gap-y-8">
          <div className="col-span-12 md:col-span-6">
            <SectionLabel index="07" label="Partners" />
            <h2
              id="sponsors-title"
              className="mt-8 font-editorial text-[clamp(2rem,4vw,3.25rem)] font-semibold leading-[1.02] tracking-[-0.03em]"
            >
              {hasPartners ? "Backed by our partners." : "Partner with CTUC."}
            </h2>
          </div>
          <div className="col-span-12 flex flex-col gap-6 self-end md:col-span-5 md:col-start-8">
            <p className="max-w-[44ch] leading-relaxed text-mute">
              Prizes, infrastructure, expertise or careers: every contribution helps train the next generation of
              Tunisian security talent. New partners join this ribbon as they sign on.
            </p>
            <div className="flex flex-wrap items-center gap-x-8 gap-y-4">
              <CtaLink href="/sponsors" variant="text">
                Become a partner
              </CtaLink>
              {EVENT.brochureUrl && (
                <CtaLink href={EVENT.brochureUrl} variant="text">
                  Sponsorship brochure (PDF)
                </CtaLink>
              )}
            </div>
          </div>
        </div>
      </Container>

      <PartnerRibbon className="mt-14" />
    </section>
  );
}
