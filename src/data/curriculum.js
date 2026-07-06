export { MONTHS } from "./months.js";
import { MONTHS } from "./months.js";

export const STORAGE_KEY = "claude-learning-it-support-mgr-v1";
export const ALL_WEEKS = MONTHS.flatMap((m) =>
  m.weeks.map((w) => ({ ...w, monthColor: m.color, monthNum: m.month }))
);
export const TOTAL_WEEKS = ALL_WEEKS.length;
