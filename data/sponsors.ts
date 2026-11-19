export type Sponsor = {
  name: string;
  /** Path under /public (e.g. "/sponsors/acme.webp") or an absolute URL. */
  logo: string;
  /** Partner website. Omit to show the logo without a link. */
  url?: string;
  /**
   * "light" puts the logo on a white tile, for logos that come on a white background.
   * "black" puts the logo on a black tile, for logos that come on a black square.
   * "banner" fills the whole tile edge to edge, for artwork with its own background.
   */
  plate?: "light" | "black" | "banner";
};

/**
 * Confirmed partners, shown in the rolling ribbon in the order of the sponsorship brochure.
 * Add logos here as agreements are signed.
 */
export const SPONSORS: Sponsor[] = [
  { name: "OffSec", logo: "/sponsors/offsec.webp", url: "https://www.offsec.com", plate: "light" },
  { name: "TryHackMe", logo: "/sponsors/tryhackme.webp", url: "https://tryhackme.com", plate: "light" },
  { name: "CyberDefenders", logo: "/sponsors/cyberdefenders.webp", url: "https://cyberdefenders.org", plate: "banner" },
  { name: "Altered Security", logo: "/sponsors/altered-security.webp", url: "https://www.alteredsecurity.com", plate: "light" },
  { name: "Hackviser", logo: "/sponsors/hackviser.webp", url: "https://hackviser.com" },
  { name: "Infosec4TC", logo: "/sponsors/infosec4tc.webp", plate: "light" },
  { name: "GenAI Security Lab", logo: "/sponsors/genai-security-lab.webp", plate: "light" },
  { name: "MAD", logo: "/sponsors/mad.webp", plate: "light" },
  { name: "Webverse", logo: "/sponsors/webverse.webp", plate: "black" },
  { name: "XSSRat Labs", logo: "/sponsors/xssrat-labs.webp", plate: "light" },
  { name: ".xyz", logo: "/sponsors/xyz.svg", url: "https://gen.xyz" },
];

/** Partners repeat up to at least this many tiles, enough to fill very wide screens without a gap. */
export const RIBBON_MIN_ITEMS = 16;

/** From the sponsorship brochure ("Ways to support us"). */
export const SUPPORT_WAYS = [
  { title: "Prizes", body: "Hardware, licenses, subscriptions, training or certification vouchers." },
  { title: "Infrastructure", body: "CTF hosting, cloud credits, tooling." },
  { title: "Expertise", body: "Challenge authoring, mentoring, talks and workshops." },
  { title: "Careers", body: "Internship or job opportunities for top performers." },
];
