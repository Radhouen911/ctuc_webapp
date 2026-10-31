import { cn } from "@/lib/utils";

type SectionLabelProps = {
  index: string;
  label: string;
  className?: string;
  tone?: "crimson" | "signal";
};

/** Dossier-style section code, e.g. "§02 — Classification". */
export function SectionLabel({ index, label, className, tone = "crimson" }: SectionLabelProps) {
  return (
    <p className={cn("annotation flex items-center gap-3 text-mute", className)}>
      <span className={tone === "crimson" ? "text-crimson" : "text-signal"}>§{index}</span>
      <span aria-hidden className="h-px w-8 bg-line" />
      <span>{label}</span>
    </p>
  );
}

