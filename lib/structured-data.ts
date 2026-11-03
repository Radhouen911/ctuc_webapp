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
      startDate: EVENT.startsAt,
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
      organizer: CLUBS.map((club) => ({ "@type": "Organization", name: club.name })),
      sponsor: { "@type": "Organization", name: EVENT.poweredBy.name, url: EVENT.poweredBy.url },
      audience: { "@type": "EducationalAudience", educationalRole: "student" },
    },
  ];
}

/** Serialize for a <script type="application/ld+json">, escaping "<" so no tag can break out. */
export function jsonLdScript(data: unknown) {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}
