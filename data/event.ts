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
  dateLabel: "5–6 December 2026",
  /** The day the championship starts; it runs overnight and ends on `endDate`. */
  startLabel: "5 December 2026",
  startDate: "2026-12-05",
  endDate: "2026-12-06",
  dateCompact: "05–06.12.2026",
  weekday: "Saturday to Sunday",

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

  /** Two competitions run in parallel. */
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
  /** Entry fee in Tunisian dinars; 0 means free. */
  entryFeeTnd: 0 as number | null,
  /** From the sponsorship brochure. */
  contactEmail: "contact@ctuc.tech" as string | null,
  sponsorshipEmail: "sponsor@ctuc.tech" as string | null,
  /** Sponsorship brochures, one per language. */
  brochures: [
    { lang: "en", language: "English", title: "Sponsorship brochure", href: "/CTUC_2026_Sponsorship_EN.pdf", size: "477 KB" },
    { lang: "fr", language: "Français", title: "Dossier de sponsoring", href: "/CTUC_2026_Dossier_Sponsoring_FR.pdf", size: "557 KB" },
  ],

  socials: [
    { label: "Instagram", url: "https://www.instagram.com/ctuc_ctf/" },
    { label: "Facebook", url: "https://www.facebook.com/people/Cybersecurity-Tunisian-University-Championship/61595952819807/" },
    { label: "LinkedIn", url: "https://www.linkedin.com/company/cybersecurity-tunisian-university-championship/" },
  ] as { label: string; url: string }[],
};

export type EventMetric = { label: string; value: string | null };

export const EVENT_METRICS: EventMetric[] = [
  { label: "Parallel tracks", value: "2" },
  { label: "Competition hours", value: null },
  { label: "Prize pool", value: null },
];
