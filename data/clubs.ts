/** The two organizing clubs. Facts come from the CTUC sponsorship brochure. */
export type Club = {
  id: string;
  name: string;
  /** "crimson" for Securinets, "signal" (electric blue) for Engineers Spark. */
  accent: "crimson" | "signal";
  logo: { src: string; width: number; height: number };
  tagline: string;
  /** About the wider network the chapter belongs to. */
  network: { name: string; body: string };
  facts: { label: string; value: string }[];
};

export const CLUBS: Club[] = [
  {
    id: "engineers-spark",
    name: "Engineers Spark iTeam University",
    accent: "signal",
    logo: { src: "/clubs/engineers-spark-iteam-web.png", width: 652, height: 725 },
    tagline: "The iTeam chapter of the Engineers Spark network.",
    network: {
      name: "Engineers Spark",
      body: "Founded in 2013 at ISET'Com, Engineers Spark is a dynamic student network present in several universities, including FST, Esprit, ISAMM and Tekup. Its mission is to provide quality training, particularly in cybersecurity, and to apply those skills through national projects and challenges.",
    },
    facts: [
      { label: "Chapter founded", value: "2026" },
      { label: "Network founded", value: "2013, ISET'Com" },
    ],
  },
  {
    id: "securinets",
    name: "Securinets iTeam University",
    accent: "crimson",
    logo: { src: "/clubs/securinets-iteam.png", width: 425, height: 406 },
    tagline: "A student-led cybersecurity club with 80+ members.",
    network: {
      name: "Securinets",
      body: "Founded in 2003, Securinets now has the largest community of students passionate about cybersecurity in Tunisia. Its main objective is to train students in both the offensive and defensive aspects of cybersecurity by organizing workshops and Capture the Flag competitions.",
    },
    facts: [
      { label: "Club founded", value: "2025" },
      { label: "Members", value: "80+" },
      { label: "Network founded", value: "2003" },
    ],
  },
];
