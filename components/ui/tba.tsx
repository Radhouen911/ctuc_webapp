import { cn } from "@/lib/utils";

/** The single, consistent marker for unconfirmed information. Size may change; style may not. */
export function Tba({ className }: { className?: string }) {
  return (
    <abbr
      title="To be announced"
      className={cn(className, "font-mono font-normal tracking-[0.04em] text-signal no-underline")}
      style={{ fontStretch: "100%" }}
    >
      [TBA]
    </abbr>
  );
}

type ConfirmedProps = {
  value: string | null | undefined;
  /** Styles for the confirmed value. */
  className?: string;
  /** Sizing for the [TBA] marker. */
  tbaClassName?: string;
};

/** Renders the value when confirmed, otherwise [TBA]. */
export function Confirmed({ value, className, tbaClassName }: ConfirmedProps) {
  if (!value) return <Tba className={tbaClassName} />;
  return <span className={className}>{value}</span>;
}
