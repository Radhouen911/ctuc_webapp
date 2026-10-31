import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { cn, isExternal } from "@/lib/utils";

type Variant = "primary" | "secondary" | "text";
type Size = "md" | "lg";

type CtaLinkProps = {
  href: string;
  children: React.ReactNode;
  variant?: Variant;
  size?: Size;
  className?: string;
  /** Hide the arrow glyph. */
  plain?: boolean;
};

const sizes: Record<Size, string> = {
  md: "h-11 px-5 text-sm",
  lg: "h-14 px-7 text-[15px]",
};

export function ctaClasses(variant: Variant, size: Size = "md") {
  return cn(
    "group relative isolate inline-flex select-none items-center justify-center gap-3 whitespace-nowrap font-medium",
    "transition-[transform,color] duration-300 ease-expo active:translate-y-px active:scale-[0.99]",
    variant !== "text" && sizes[size],
    variant === "primary" && "text-void",
    variant === "secondary" && "text-ink",
    variant === "text" && "gap-2 text-ink underline decoration-line underline-offset-[6px] hover:decoration-signal",
  );
}

/**
 * The chamfered surface sits in its own layer so focus outlines are never clipped.
 * Primary is neutral (neither club's color) and carries the crimson | blue split bar.
 */
export function CtaSurface({ variant }: { variant: Variant }) {
  if (variant === "text") return null;
  if (variant === "primary") {
    return (
      <span aria-hidden className="chamfer absolute inset-0 -z-10 bg-ink transition-colors duration-300 ease-expo group-hover:bg-white">
        <span className="split-line absolute inset-x-0 bottom-0 h-[3px]" />
      </span>
    );
  }
  return (
    <span
      aria-hidden
      className="absolute inset-0 -z-10 border border-line bg-void/60 backdrop-blur-sm transition-colors duration-300 ease-expo group-hover:border-mute"
    />
  );
}

export function CtaLink({ href, children, variant = "primary", size = "md", className, plain }: CtaLinkProps) {
  const external = isExternal(href);
  const content = (
    <>
      <CtaSurface variant={variant} />
      <span className="relative">{children}</span>
      {!plain && (
        <ArrowUpRight
          aria-hidden
          strokeWidth={1.75}
          className="relative size-4 transition-transform duration-300 ease-expo group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
        />
      )}
      {external && <span className="sr-only">(opens in a new tab)</span>}
    </>
  );

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={cn(ctaClasses(variant, size), className)}>
        {content}
      </a>
    );
  }
  return (
    <Link href={href} className={cn(ctaClasses(variant, size), className)}>
      {content}
    </Link>
  );
}
