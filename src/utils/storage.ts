import type { LotteryResult } from "../types/lottery";

const HISTORY_KEY = "lottery_history";
const MAX_HISTORY = 50;

export const storage = {
  getHistory(): LotteryResult[] {
    try {
      const data = localStorage.getItem(HISTORY_KEY);
      return data ? JSON.parse(data) : [];
    } catch {
      return [];
    }
  },

  addHistory(result: LotteryResult): void {
    try {
      const history = this.getHistory();
      const newHistory = [result, ...history].slice(0, MAX_HISTORY);
      localStorage.setItem(HISTORY_KEY, JSON.stringify(newHistory));
    } catch (error) {
      console.error("Failed to save history:", error);
    }
  },

  clearHistory(): void {
    try {
      localStorage.removeItem(HISTORY_KEY);
    } catch (error) {
      console.error("Failed to clear history:", error);
    }
  },
};
