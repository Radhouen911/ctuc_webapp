export type ScheduleSlot = {
  slot: string;
  time: string | null;
  title: string | null;
  note?: string;
};

/** The championship runs from Saturday 16:00 to Sunday 08:00; the slots in between are still to be announced. */
export const SCHEDULE: ScheduleSlot[] = [
  { slot: "01", time: "16:00", title: "Championship start", note: "Saturday 5 December" },
  { slot: "02", time: null, title: null },
  { slot: "03", time: null, title: null },
  { slot: "04", time: null, title: null },
  { slot: "05", time: "08:00", title: "Championship ends", note: "Sunday 6 December" },
];
