import { createContext, useContext, useState, type ReactNode } from "react";
import type { LotteryItem, LotteryResult } from "../types/lottery";
import { getColorByIndex } from "../utils/colors";
import { nanoid } from "nanoid";

interface LotteryContextValue {
  items: LotteryItem[];
  currentResult: LotteryResult | null;
  setItems: (items: LotteryItem[]) => void;
  addItem: (name: string) => void;
  removeItem: (id: string) => void;
  updateItemProbability: (id: string, probability: number) => void;
  setResult: (result: LotteryResult | null) => void;
  resetItems: () => void;
}

const LotteryContext = createContext<LotteryContextValue | null>(null);

export function LotteryProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<LotteryItem[]>([]);
  const [currentResult, setCurrentResult] = useState<LotteryResult | null>(
    null,
  );

  const addItem = (name: string) => {
    const newItem: LotteryItem = {
      id: nanoid(),
      name,
      color: getColorByIndex(items.length),
      probability: 1,
    };
    setItems([...items, newItem]);
  };

  const removeItem = (id: string) => {
    setItems(items.filter((item) => item.id !== id));
  };

  const updateItemProbability = (id: string, probability: number) => {
    setItems(
      items.map((item) => (item.id === id ? { ...item, probability } : item)),
    );
  };

  const resetItems = () => {
    setItems([]);
    setCurrentResult(null);
  };

  return (
    <LotteryContext.Provider
      value={{
        items,
        currentResult,
        setItems,
        addItem,
        removeItem,
        updateItemProbability,
        setResult: setCurrentResult,
        resetItems,
      }}
    >
      {children}
    </LotteryContext.Provider>
  );
}

export function useLottery() {
  const context = useContext(LotteryContext);
  if (!context) {
    throw new Error("useLottery must be used within LotteryProvider");
  }
  return context;
}
