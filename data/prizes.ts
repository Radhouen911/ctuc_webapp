export type Placement = {
  rank: 1 | 2 | 3;
  title: string;
  prize: string | null;
};

export const PRIZE_POOL: string | null = null;

/** Each track (Beginner and Advanced) crowns its own top three. */
export const PRIZE_TRACKS = ["Beginner", "Advanced"] as const;

export const PLACEMENTS: Placement[] = [
  { rank: 1, title: "Champion", prize: null },
  { rank: 2, title: "Second place", prize: null },
  { rank: 3, title: "Third place", prize: null },
];
