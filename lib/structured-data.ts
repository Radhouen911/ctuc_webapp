import { CLUBS } from "@/data/clubs";
import { EVENT } from "@/data/event";
import { SITE_URL } from "@/lib/constants";

const url = (path: string) => new URL(path, SITE_URL).toString();

/**
 * schema.org data for search engines: the site itself and the event
 * (date, venue, organizers). Only confirmed facts from /data are used.
 */
export function homeJsonLd() {
  return [
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: EVENT.shortName,
      alternateName: EVENT.name,
      url: url("/"),
      inLanguage: "en",
    },
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: EVENT.fullName,
      alternateName: EVENT.shortName,
      url: url("/"),
      logo: url("/icon.png"),
      email: EVENT.contactEmail ?? undefined,
      sameAs: EVENT.socials.map((s) => s.url),
      member: CLUBS.map((club) => ({ "@type": "Organization", name: club.name })),
    },
    {
      "@context": "https://schema.org",
      "@type": "Event",
      name: EVENT.fullName,
      alternateName: EVENT.shortName,
      description: `Tunisia's national university Capture The Flag championship. Teams of four compete in parallel Beginner and Advanced Jeopardy CTFs covering web, binary exploitation, reverse engineering, cryptography, forensics, OSINT and hardware.`,
      url: url("/"),
      image: [url("/opengraph-image.png")],
      // Dates only: the start and end times are not confirmed yet.
      startDate: EVENT.startDate,
      endDate: EVENT.endDate,
      eventStatus: "https://schema.org/EventScheduled",
      eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
      inLanguage: "en",
      location: {
        "@type": "Place",
        name: EVENT.venue.name,
        address: {
          "@type": "PostalAddress",
          streetAddress: EVENT.venue.address,
          addressLocality: EVENT.venue.city,
          addressCountry: "TN",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: EVENT.venue.coordinates.lat,
          longitude: EVENT.venue.coordinates.lng,
        },
        hasMap: EVENT.venue.mapsUrl,
      },
      organizer: CLUBS.map((club) => ({ "@type": "Organization", name: club.name, url: url(`/#${club.id}`) })),
      performer: { "@type": "PerformingGroup", name: "Student teams from Tunisian universities" },
      sponsor: { "@type": "Organization", name: EVENT.poweredBy.name, url: EVENT.poweredBy.url },
      audience: { "@type": "EducationalAudience", educationalRole: "student" },
      // Published only once the entry fee is confirmed: a price must never be guessed.
      ...(EVENT.entryFeeTnd !== null && {
        offers: {
          "@type": "Offer",
          url: url("/register"),
          price: EVENT.entryFeeTnd,
          priceCurrency: "TND",
          // Registration is not open until its URL is set.
          availability: `https://schema.org/${EVENT.registrationUrl ? "InStock" : "PreOrder"}`,
          ...(EVENT.registrationOpens && { validFrom: EVENT.registrationOpens }),
        },
      }),
    },
  ];
}

/** Serialize for a <script type="application/ld+json">, escaping "<" so no tag can break out. */
export function jsonLdScript(data: unknown) {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}
