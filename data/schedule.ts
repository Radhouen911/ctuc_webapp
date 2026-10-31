export type ScheduleSlot = {
  slot: string;
  time: string | null;
  title: string | null;
  note?: string;
};

/** Only the start time is confirmed (it matches the official countdown). */
export const SCHEDULE: ScheduleSlot[] = [
  { slot: "01", time: "09:00", title: "Championship start", note: "Africa/Tunis · UTC+01:00" },
  { slot: "02", time: null, title: null },
  { slot: "03", time: null, title: null },
  { slot: "04", time: null, title: null },
  { slot: "05", time: null, title: null },
];
