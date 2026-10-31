import { cn } from "@/lib/utils";

/** Placeholder CTUC wordmark until the official logo is supplied. */
export function Wordmark({ className }: { className?: string }) {
  return (
    <span className={cn("inline-flex items-center gap-2", className)}>
      <span aria-hidden className="relative block h-[1.1em] w-[0.42em]">
        <span className="absolute inset-y-0 left-0 w-[2px] bg-ink" />
        <span className="absolute left-[2px] top-0 h-[0.5em] w-[0.38em] bg-crimson [clip-path:polygon(0_0,100%_50%,0_100%)]" />
      </span>
      <span className="font-condensed text-[1.35em] font-black leading-none tracking-[-0.01em]">CTUC</span>
    </span>
  );
}

