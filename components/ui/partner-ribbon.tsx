import Image from "next/image";
import { RIBBON_MIN_ITEMS, SPONSORS, type Sponsor } from "@/data/sponsors";
import { cn } from "@/lib/utils";

/** Seconds each tile takes to scroll past, so the speed stays the same as partners are added. */
const SECONDS_PER_ITEM = 6;

function RibbonItem({ sponsor, hidden, repeat }: { sponsor: Sponsor; hidden?: boolean; repeat?: boolean }) {
  const banner = sponsor.plate === "banner";
  const logo = (
    <Image
      src={sponsor.logo}
      alt={sponsor.name}
      fill
      sizes="256px"
      className={banner ? "object-cover" : sponsor.plate === "black" ? "object-contain py-2" : "object-contain py-5"}
    />
  );
  const frame = "relative block h-full w-full opacity-90 transition-opacity duration-300 hover:opacity-100";
  return (
    <li
      aria-hidden={hidden}
      data-repeat={repeat || undefined}
      className={cn(
        "flex h-24 w-56 shrink-0 items-center justify-center border md:h-28 md:w-64",
        !banner && "px-6",
        sponsor.plate === "light"
          ? "border-white bg-white"
          : sponsor.plate === "black"
            ? "border-line bg-black"
            : "border-line bg-surface/40",
      )}
    >
      {sponsor.url ? (
        <a
          href={sponsor.url}
          target="_blank"
          rel="noopener noreferrer"
          tabIndex={hidden ? -1 : undefined}
          className={frame}
        >
          {logo}
          <span className="sr-only">(opens in a new tab)</span>
        </a>
      ) : (
        <span className={frame}>{logo}</span>
      )}
    </li>
  );
}

/**
 * Endless horizontal ribbon of partner logos. No tiers: every partner gets the same slot.
 * Partners repeat until one list is wider than any screen, and the list is rendered twice
 * and translated by -50% for a seamless CSS-only loop. Repeats are hidden from assistive
 * tech and the tab order. Pauses on hover/focus, and stops for reduced-motion users.
 */
export function PartnerRibbon({ className }: { className?: string }) {
  if (SPONSORS.length === 0) return null;

  const copies = Math.ceil(RIBBON_MIN_ITEMS / SPONSORS.length);
  const items = Array.from({ length: copies }, (_, copy) => SPONSORS.map((sponsor) => ({ sponsor, copy }))).flat();

  return (
    <div
      className={cn(
        "ribbon relative overflow-hidden border-y border-line py-6",
        "[mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]",
        className,
      )}
    >
      <div className="ribbon-track flex w-max gap-4" style={{ animationDuration: `${items.length * SECONDS_PER_ITEM}s` }}>
        <ul aria-label="Partners" className="flex gap-4">
          {items.map(({ sponsor, copy }) => (
            <RibbonItem key={`${sponsor.name}-${copy}`} sponsor={sponsor} hidden={copy > 0} repeat={copy > 0} />
          ))}
        </ul>
        <ul aria-hidden className="flex gap-4">
          {items.map(({ sponsor, copy }) => (
            <RibbonItem key={`${sponsor.name}-${copy}`} sponsor={sponsor} hidden />
          ))}
        </ul>
      </div>
    </div>
  );
}
