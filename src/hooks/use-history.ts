import { useState, useEffect } from "react";
import type { LotteryResult } from "../types/lottery";
import { storage } from "../utils/storage";

export function useHistory() {
  const [history, setHistory] = useState<LotteryResult[]>([]);

  useEffect(() => {
    setHistory(storage.getHistory());
  }, []);

  const addToHistory = (result: LotteryResult) => {
    storage.addHistory(result);
    setHistory(storage.getHistory());
  };

  const clearHistory = () => {
    storage.clearHistory();
    setHistory([]);
  };

  return {
    history,
    addToHistory,
    clearHistory,
  };
}
