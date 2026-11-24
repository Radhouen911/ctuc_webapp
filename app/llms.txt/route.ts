import { CATEGORIES } from "@/data/categories";
import { EVENT } from "@/data/event";
import { PRIZE_TRACKS } from "@/data/prizes";
import { SPONSORS } from "@/data/sponsors";
import { RULES_PUBLISHED, SITE_URL } from "@/lib/constants";

export const dynamic = "force-static";

const url = (path: string) => new URL(path, SITE_URL).toString();

/**
 * /llms.txt: a plain-language summary of the site for AI assistants and
 * answer engines (llmstxt.org). Built from /data, so it stays in sync.
 */
export function GET() {
  const facts = [
    `Date: ${EVENT.weekday}, ${EVENT.dateLabel}. The event runs ${EVENT.timeLabel} (Africa/Tunis time); the CTF itself lasts ${EVENT.duration}`,
    `Entry fees (per person): free for iTeam University students; ${EVENT.tracks.map((t) => `${t.name.replace(" CTF", "")} ${t.feeTnd} TND`).join(", ")}`,
    `Venue: ${EVENT.venue.name}, ${EVENT.venue.address}, ${EVENT.venue.country} (${EVENT.venue.mapsUrl})`,
    EVENT.format && `Format: ${EVENT.format} Capture The Flag`,
    EVENT.teamSize && `Team size: ${EVENT.teamSize}`,
    EVENT.eligibility && `Eligibility: ${EVENT.eligibility}, of any field of study`,
    `Tracks (run in parallel): ${EVENT.tracks.map((t) => `${t.name}: ${t.summary}`).join(" ")}`,
    `Prizes: the ${PRIZE_TRACKS.join(" and ")} tracks each award first, second and third place; more teams receive vouchers.`,
    `Challenge categories: ${CATEGORIES.map((c) => c.name).join(", ")}`,
    `Organizers: ${EVENT.organizers.map((o) => o.name).join(", ")}`,
    `Powered by: ${EVENT.poweredBy.name}, ${EVENT.poweredBy.url}`,
    SPONSORS.length > 0 && `Partners: ${SPONSORS.map((s) => s.name).join(", ")}`,
    `Registration: ${EVENT.registrationUrl ?? "not open yet; announced on the website"}`,
  ].filter(Boolean);

  const pages = [
    [`Home`, "/", "overview, countdown, categories, schedule, prizes, venue, organizers, partners"],
    [`Register`, "/register", "registration status, eligibility and team requirements"],
    ...(RULES_PUBLISHED ? [[`Rules`, "/rules", "official competition rules"]] : []),
    [`Sponsors`, "/sponsors", "ways to support the championship and the sponsorship brochure"],
    [`Contact`, "/contact", "contact channels"],
  ];

  const body = `# ${EVENT.fullName}

> ${EVENT.shortName} is Tunisia's national university Capture The Flag (CTF) cybersecurity championship. Teams of four students compete in two parallel Jeopardy-style competitions, a Beginner CTF and an Advanced CTF, on ${EVENT.dateLabel} at ${EVENT.venue.name} in ${EVENT.venue.city}. It is open to students of any Tunisian university, whatever their level or field of study.

## Key facts

${facts.map((f) => `- ${f}`).join("\n")}

## Pages

${pages.map(([name, path, desc]) => `- [${name}](${url(path)}): ${desc}`).join("\n")}

## Optional

${EVENT.brochures.map((b) => `- [${b.title}, ${b.language} (PDF)](${url(b.href)})`).join("\n")}
`;

  return new Response(body, { headers: { "Content-Type": "text/plain; charset=utf-8" } });
}
