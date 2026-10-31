import Image from "next/image";
import { RIBBON_MIN_ITEMS, SPONSORS, type Sponsor } from "@/data/sponsors";
import { cn } from "@/lib/utils";

type Item = { kind: "sponsor"; sponsor: Sponsor } | { kind: "open"; id: number };

function RibbonItem({ item, hidden }: { item: Item; hidden?: boolean }) {
  const base = "flex h-24 w-56 shrink-0 items-center justify-center border px-6 md:h-28 md:w-64";
  if (item.kind === "open") {
    return (
      <li aria-hidden={hidden} className={cn(base, "border-dashed border-line")}>
        <span className="annotation text-mute">Your logo here</span>
      </li>
    );
  }
  const { sponsor } = item;
  return (
    <li aria-hidden={hidden} className={cn(base, "border-line bg-surface/40")}>
      <a
        href={sponsor.url}
        target="_blank"
        rel="noopener noreferrer"
        tabIndex={hidden ? -1 : undefined}
        className="relative block h-full w-full opacity-80 grayscale transition duration-300 hover:opacity-100 hover:grayscale-0"
      >
        <Image src={sponsor.logo} alt={sponsor.name} fill sizes="256px" className="object-contain py-5" />
        <span className="sr-only">(opens in a new tab)</span>
      </a>
    </li>
  );
}

/**
 * Infinite horizontal ribbon of partner logos. No tiers: every partner gets the same slot.
 * The list is rendered twice and translated by -50% for a seamless CSS-only loop;
 * the copy is hidden from assistive tech and the tab order. Pauses on hover/focus,
 * and stops for reduced-motion users.
 */
export function PartnerRibbon({ className }: { className?: string }) {
  const items: Item[] = [
    ...SPONSORS.map((sponsor) => ({ kind: "sponsor" as const, sponsor })),
    ...Array.from({ length: Math.max(0, RIBBON_MIN_ITEMS - SPONSORS.length) }, (_, id) => ({ kind: "open" as const, id })),
  ];
  const key = (item: Item) => (item.kind === "sponsor" ? item.sponsor.name : `open-${item.id}`);

  return (
    <div
      className={cn(
        "ribbon relative overflow-hidden border-y border-line py-6",
        "[mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]",
        className,
      )}
    >
      <div className="ribbon-track flex w-max gap-4">
        <ul aria-label="Partners" className="flex gap-4">
          {items.map((item) => (
            <RibbonItem key={key(item)} item={item} />
          ))}
        </ul>
        <ul aria-hidden className="flex gap-4">
          {items.map((item) => (
            <RibbonItem key={key(item)} item={item} hidden />
          ))}
        </ul>
      </div>
    </div>
  );
}
