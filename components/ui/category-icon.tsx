import {
  Binary,
  CircuitBoard,
  Fingerprint,
  Globe,
  KeyRound,
  ScanSearch,
  ShieldCheck,
  SquareTerminal,
  type LucideIcon,
} from "lucide-react";
import type { CategoryIcon as IconId } from "@/data/categories";

const ICONS: Record<IconId, LucideIcon> = {
  web: Globe,
  pwn: SquareTerminal,
  reverse: Binary,
  crypto: KeyRound,
  forensics: Fingerprint,
  osint: ScanSearch,
  hardware: CircuitBoard,
  secure: ShieldCheck,
};

export function CategoryIcon({ id, className }: { id: IconId; className?: string }) {
  const Icon = ICONS[id];
  return <Icon aria-hidden strokeWidth={1.5} className={className} />;
}
