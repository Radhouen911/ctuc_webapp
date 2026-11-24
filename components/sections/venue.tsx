import { ArrowUpRight, MapPin } from "lucide-react";
import { EVENT } from "@/data/event";
import { Container } from "@/components/layout/container";
import { SectionLabel } from "@/components/ui/section-label";
import { Confirmed } from "@/components/ui/tba";
import { CtaLink } from "@/components/ui/cta-link";
import { Reveal } from "@/components/ui/reveal";
import { VenueElevation } from "@/components/effects/venue-elevation";

const { lat, lng } = EVENT.venue.coordinates;

const DETAILS = [
  { label: "Venue", value: EVENT.venue.name },
  { label: "City", value: `${EVENT.venue.city}, ${EVENT.venue.country}` },
  { label: "Date", value: EVENT.dateLabel },
  { label: "Time", value: "16:00 to 08:00" },
  { label: "Coordinates", value: `${lat.toFixed(4)}° N, ${lng.toFixed(4)}° E` },
];

export function Venue() {
  const { venue } = EVENT;
  return (
    <section id="venue" aria-labelledby="venue-title" className="relative py-28 md:py-36">
      <Container>
        <SectionLabel index="05" label="Ground" tone="signal" />
      </Container>

      {/* Full-bleed architectural figure with the venue name set over it. */}
      <div className="relative mt-10 overflow-hidden border-y border-line">
        <VenueElevation className="h-[300px] w-full md:h-[440px]" />
        <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-void via-void/30 to-transparent" />
        <Container className="absolute inset-x-0 bottom-0 pb-8 md:pb-12">
          <Reveal>
            <h2
              id="venue-title"
              className="font-editorial text-[clamp(3rem,10vw,9rem)] font-semibold leading-[0.88] tracking-[-0.045em]"
            >
              {venue.name}
            </h2>
            <p className="annotation mt-4 flex items-center gap-2 text-mute">
              <MapPin aria-hidden strokeWidth={1.5} className="size-3.5 text-crimson" />
              {venue.city}, {venue.country} · Fig. 02 — Elevation study, abstracted
            </p>
          </Reveal>
        </Container>
      </div>

      <Container className="mt-16">
        <div className="grid grid-cols-12 gap-x-6 gap-y-12">
          <figure className="col-span-12 md:col-span-7">
            {venue.mapEmbedUrl ? (
              <div className="brackets p-3">
                {/* Inverted to sit inside the dark identity; the map stays fully interactive. */}
                <iframe
                  src={venue.mapEmbedUrl}
                  title={`Map showing ${venue.name}, ${venue.city}`}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="block aspect-[16/10] w-full border border-line [filter:invert(0.9)_hue-rotate(180deg)_saturate(0.6)_brightness(0.95)]"
                />
              </div>
            ) : (
              <div className="brackets relative flex aspect-[16/10] w-full items-center justify-center bg-surface/60 p-6">
                <div aria-hidden className="absolute inset-6 opacity-60 [background-image:linear-gradient(var(--line)_1px,transparent_1px),linear-gradient(90deg,var(--line)_1px,transparent_1px)] [background-size:48px_48px]" />
                <div aria-hidden className="absolute left-1/2 top-1/2 size-16 -translate-x-1/2 -translate-y-1/2 rounded-full border border-crimson/60">
                  <span className="pulse-dot absolute left-1/2 top-1/2 size-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-crimson" />
                </div>
                <p className="annotation relative mt-32 text-mute">
                  Map embed <Confirmed value={null} />
                </p>
              </div>
            )}
            <figcaption className="mt-4 flex items-center justify-between gap-4">
              <span className="annotation text-mute">Fig. 03 — Location</span>
              <a
                href={venue.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm text-ink underline decoration-line underline-offset-[6px] hover:decoration-crimson"
              >
                Open in Google Maps
                <ArrowUpRight aria-hidden strokeWidth={1.5} className="size-4" />
                <span className="sr-only">(opens in a new tab)</span>
              </a>
            </figcaption>
          </figure>

          <div className="col-span-12 md:col-span-4 md:col-start-9">
            <p className="max-w-[38ch] leading-relaxed text-mute">
              Both tracks of the championship take place at {venue.name} in {venue.city}. Open the map for directions
              from wherever you are.
            </p>
            <dl className="mt-8 border-t border-line">
              {DETAILS.map((a) => (
                <div key={a.label} className="grid grid-cols-[8.5rem_1fr] gap-4 border-b border-line py-4">
                  <dt className="annotation pt-0.5 text-mute">{a.label}</dt>
                  <dd className="text-sm leading-relaxed">
                    <Confirmed value={a.value} />
                  </dd>
                </div>
              ))}
            </dl>
            <CtaLink href={venue.mapsUrl} variant="secondary" className="mt-8">
              Get directions
            </CtaLink>
          </div>
        </div>
      </Container>
    </section>
  );
}
