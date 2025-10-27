export interface LotteryItem {
  id: string;
  name: string;
  color: string;
  probability: number; // 1 = 보통, 2 = 2배, 0.5 = 절반
}

export interface LotteryResult {
  id: string;
  winnerItem: LotteryItem;
  allItems: LotteryItem[];
  timestamp: number;
}

export interface LotteryState {
  items: LotteryItem[];
  currentResult: LotteryResult | null;
}
