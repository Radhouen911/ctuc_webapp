export type Sponsor = {
  name: string;
  /** Path under /public (e.g. "/sponsors/acme.webp") or an absolute URL. */
  logo: string;
  /** Partner website. Omit to show the logo without a link. */
  url?: string;
  /** "light" puts the logo on a white tile, for logos that come on a white background. */
  plate?: "light";
};

/**
 * Confirmed partners, shown in the rolling ribbon in the order listed.
 * Add logos here as agreements are signed; empty slots fill the ribbon until then.
 */
export const SPONSORS: Sponsor[] = [
  { name: "Altered Security", logo: "/sponsors/altered-security.webp", url: "https://www.alteredsecurity.com", plate: "light" },
  { name: "Hackviser", logo: "/sponsors/hackviser.webp", url: "https://hackviser.com" },
  { name: "CyberDefenders", logo: "/sponsors/cyberdefenders.webp", url: "https://cyberdefenders.org" },
  { name: ".xyz", logo: "/sponsors/xyz.svg", url: "https://gen.xyz" },
  { name: "MAD", logo: "/sponsors/mad.webp", plate: "light" },
];

/** The ribbon always shows at least this many items (partners + open slots). */
export const RIBBON_MIN_ITEMS = 8;

/** From the sponsorship brochure ("Ways to support us"). */
export const SUPPORT_WAYS = [
  { title: "Prizes", body: "Hardware, licenses, subscriptions, training or certification vouchers." },
  { title: "Infrastructure", body: "CTF hosting, cloud credits, tooling." },
  { title: "Expertise", body: "Challenge authoring, mentoring, talks and workshops." },
  { title: "Careers", body: "Internship or job opportunities for top performers." },
];
