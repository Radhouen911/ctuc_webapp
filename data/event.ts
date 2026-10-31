import { EVENT_START_ISO } from "@/lib/constants";

/**
 * Editable event facts. `null` means "not yet confirmed" and renders as [TBA].
 * Never fill a field here unless the organizers have confirmed it.
 */
export const EVENT = {
  shortName: "CTUC",
  name: "Cybersecurity Tunisian University Championship",
  fullName: "CTUC – Cybersecurity Tunisian University Championship",
  tagline: "Find the flaw. Take the flag.",
  edition: "CTUC·26",
  startsAt: EVENT_START_ISO,
  dateLabel: "28 November 2026",
  dateCompact: "28.11.2026",
  weekday: "Saturday",

  venue: {
    name: "Tunis Science City",
    /** From the sponsorship brochure. */
    address: "Mohamed Bouazizi Avenue, Tunis",
    description:
      "A national institution dedicated to spreading scientific and technical culture, in the north of Tunis. The six-hectare site includes exhibition spaces, a planetarium, a media library and a congress center with two auditoriums.",
    city: "Tunis",
    country: "Tunisia",
    /** Resolved from the organizers' Google Maps link. */
    coordinates: { lat: 36.8495842, lng: 10.1885171 },
    mapsUrl: "https://maps.app.goo.gl/JYZExL94axedzQEN9",
    mapEmbedUrl:
      "https://maps.google.com/maps?q=Cit%C3%A9+des+Sciences+%C3%A0+Tunis&ll=36.8495842,10.1885171&z=16&hl=en&output=embed",
  },

  poweredBy: {
    name: "Fédération Tunisienne des Sports Scolaires et Universitaires",
    shortName: "FTSSU",
    url: "https://www.fisu.net/nusf/tunisia/",
  },

  organizerCredit: "Organized by Securinets iTeam University & Engineers Spark iTeam University",

  format: "Jeopardy" as string | null,
  duration: null as string | null,
  eligibility: "Students of a Tunisian university" as string | null,
  teamSize: "4 players" as string | null,

  /** Two competitions run in parallel on the same day. */
  tracks: [
    {
      id: "beginner",
      name: "Beginner CTF",
      summary: "For students taking their first steps in security. No prior CTF experience needed.",
    },
    {
      id: "advanced",
      name: "Advanced CTF",
      summary: "For experienced players ready for hard challenges and a tougher scoreboard.",
    },
  ],

  registrationUrl: null as string | null,
  registrationOpens: null as string | null,
  registrationCloses: null as string | null,
  contactEmail: null as string | null,
  sponsorshipEmail: null as string | null,
  brochureUrl: "/CTUC_Sponsorshipfolder.pdf" as string | null,

  socials: [] as { label: string; url: string }[],
};

export type EventMetric = { label: string; value: string | null };

export const EVENT_METRICS: EventMetric[] = [
  { label: "Parallel tracks", value: "2" },
  { label: "Competition hours", value: null },
  { label: "Prize pool", value: null },
];
