export type Sponsor = {
  name: string;
  /** Path under /public (e.g. "/sponsors/acme.svg") or an absolute URL. */
  logo: string;
  url: string;
};

/**
 * Confirmed partners, shown in the rolling ribbon in the order listed.
 * Add logos here as agreements are signed; empty slots fill the ribbon until then.
 */
export const SPONSORS: Sponsor[] = [];

/** The ribbon always shows at least this many items (partners + open slots). */
export const RIBBON_MIN_ITEMS = 8;

/** From the sponsorship brochure ("Ways to support us"). */
export const SUPPORT_WAYS = [
  { title: "Prizes", body: "Hardware, licenses, subscriptions, training or certification vouchers." },
  { title: "Infrastructure", body: "CTF hosting, cloud credits, tooling." },
  { title: "Expertise", body: "Challenge authoring, mentoring, talks and workshops." },
  { title: "Careers", body: "Internship or job opportunities for top performers." },
];
