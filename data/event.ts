import { EVENT_END_ISO, EVENT_START_ISO } from "@/lib/constants";

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
  endsAt: EVENT_END_ISO,
  dateLabel: "5–6 December 2026",
  /** Saturday 16:00 to Sunday 08:00 (Africa/Tunis): the whole overnight event. The CTF itself lasts `duration`. */
  timeLabel: "Saturday 16:00 to Sunday 08:00",
  startTime: "16:00",
  endTime: "08:00",
  /** The day the championship starts; it runs overnight and ends on `endDate`. */
  startLabel: "5 December 2026",
  startDate: "2026-12-05",
  endDate: "2026-12-06",
  dateCompact: "05–06.12.2026",
  weekday: "Saturday to Sunday",

  venue: {
    name: "UTICA",
    /** The place on the organizers' Google Maps link: the CICT congress center of UTICA. */
    address: "Centre International des Congrès de Tunis (CICT), UTICA, Tunis",
    city: "Tunis",
    country: "Tunisia",
    /** Resolved from the organizers' Google Maps link. */
    coordinates: { lat: 36.8328619, lng: 10.1864953 },
    mapsUrl: "https://maps.app.goo.gl/zKZ9Guw6tiWFnwJKA",
    mapEmbedUrl: "https://maps.google.com/maps?q=36.8328619,10.1864953&z=16&hl=en&output=embed",
  },

  poweredBy: {
    name: "iTeam University",
    shortName: "iTeam University",
    url: "https://iteam-univ.tn/",
    logo: { src: "/clubs/iteam-university-white.png", width: 4742, height: 1614 },
  },

  /** Organizers in credit order; `url` is set where the organizer has a public site. */
  organizers: [
    { name: "Securinets iTeam University" },
    { name: "Engineers Spark iTeam University" },
    { name: "iTeam University", url: "https://iteam-univ.tn/" },
  ] as { name: string; url?: string }[],
  organizerCredit:
    "Organized by Securinets iTeam University, Engineers Spark iTeam University & iTeam University",

  format: "Jeopardy" as string | null,
  duration: "8 hours" as string | null,
  eligibility: "Students of a Tunisian university" as string | null,
  teamSize: "4 players" as string | null,

  /** Two competitions run in parallel. */
  tracks: [
    {
      id: "beginner",
      name: "Beginner CTF",
      summary: "For students taking their first steps in security. No prior CTF experience needed.",
      feeTnd: 5,
    },
    {
      id: "advanced",
      name: "Advanced CTF",
      summary: "For experienced players ready for hard challenges and a tougher scoreboard.",
      feeTnd: 10,
    },
  ],

  registrationUrl: "https://forms.gle/KyCgC3fVPjYz77cu5" as string | null,
  registrationOpens: null as string | null,
  registrationCloses: null as string | null,
  /** Entry fees, per person, in Tunisian dinars. Track fees live on `tracks[].feeTnd`. */
  entryFees: {
    /** Students of iTeam University enter free, in either track. */
    iteamStudentsTnd: 0,
  },
  /** From the sponsorship brochure. */
  contactEmail: "contact@ctuc.tech" as string | null,
  sponsorshipEmail: "sponsor@ctuc.tech" as string | null,
  /** Sponsorship brochures, one per language. */
  brochures: [
    { lang: "en", language: "English", title: "Sponsorship brochure", href: "/CTUC_2026_Sponsorship_EN.pdf", size: "540 KB" },
    { lang: "fr", language: "Français", title: "Dossier de sponsoring", href: "/CTUC_2026_Dossier_Sponsoring_FR.pdf", size: "568 KB" },
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
  { label: "Competition hours", value: "8" },
  { label: "Prize pool", value: null },
];
