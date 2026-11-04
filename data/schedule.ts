export type ScheduleSlot = {
  slot: string;
  time: string | null;
  title: string | null;
  note?: string;
};

/** Nothing is timed yet: the start time is still to be announced. */
export const SCHEDULE: ScheduleSlot[] = [
  { slot: "01", time: null, title: "Championship start", note: "Start time TBA" },
  { slot: "02", time: null, title: null },
  { slot: "03", time: null, title: null },
  { slot: "04", time: null, title: null },
  { slot: "05", time: null, title: null },
];
