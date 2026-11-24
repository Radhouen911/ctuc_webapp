export type RuleSection = {
  id: string;
  code: string;
  title: string;
  /** What the section will cover once published. Describes scope only, never the rule itself. */
  scope: string;
  /** Confirmed text. `null` until the organizers publish it. */
  body: string[] | null;
  /** Details of this section that are still to be announced. */
  pending?: string[];
};

export const RULES_VERSION: string | null = null;

export const RULE_SECTIONS: RuleSection[] = [
  {
    id: "overview",
    code: "R-01",
    title: "Competition overview",
    scope: "What the championship is, when and where it takes place, and the disciplines involved.",
    body: [
      "CTUC – Cybersecurity Tunisian University Championship is a national Capture The Flag competition for university students, powered by iTeam University.",
      "It runs overnight from Saturday 5 December 2026 at 16:00 to Sunday 6 December 2026 at 08:00, at UTICA, Tunis, Tunisia.",
      "Two competitions run in parallel: a Beginner CTF and an Advanced CTF.",
      "Challenges are drawn from eight classifications: Web, Pwn, Reverse Engineering, Cryptography, Forensics, OSINT, Hardware and Secure Coding.",
    ],
  },
  {
    id: "eligibility",
    code: "R-02",
    title: "Eligibility",
    scope: "Who may compete and any required documentation.",
    body: [
      "The championship is open to students of a Tunisian university, whatever their field of study or level of experience.",
    ],
    pending: ["Proof of student status"],
  },
  {
    id: "teams",
    code: "R-03",
    title: "Team requirements",
    scope: "Team size, composition and substitutions.",
    body: ["Teams are made of 4 players.", "Each team competes in one track: Beginner or Advanced."],
    pending: ["Substitution policy", "Track selection rules"],
  },
  {
    id: "format",
    code: "R-04",
    title: "Competition format",
    scope: "Competition style, duration, challenge release and the platform used during the event.",
    body: [
      "Both tracks use the Jeopardy format: teams pick from a board of independent challenges across all categories, and each solved challenge yields a flag worth points.",
    ],
    pending: ["Duration", "Challenge release schedule", "CTF platform"],
  },
  {
    id: "scoring",
    code: "R-05",
    title: "Scoring",
    scope: "How points are awarded, how ties are broken and when the scoreboard is frozen.",
    body: null,
  },
  {
    id: "conduct",
    code: "R-06",
    title: "Code of conduct",
    scope: "Expected behaviour towards other participants, staff, volunteers and the venue.",
    body: null,
  },
  {
    id: "fair-play",
    code: "R-07",
    title: "Fair play",
    scope: "Collaboration limits, flag sharing, permitted tools and attacks on the competition infrastructure.",
    body: null,
  },
  {
    id: "disqualification",
    code: "R-08",
    title: "Disqualification conditions",
    scope: "Which violations lead to point penalties or disqualification, and how decisions are appealed.",
    body: null,
  },
];
