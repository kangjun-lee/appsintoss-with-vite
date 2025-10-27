import { BottomSheet, Button, Post, Slider } from "@toss/tds-mobile";
import { useState } from "react";
import type { LotteryItem } from "../types/lottery";
import { HorizontalPadding } from "./horizontal-padding";

interface ProbabilitySheetProps {
  isOpen: boolean;
  item: LotteryItem | null;
  onClose: () => void;
  onSave: (probability: number) => void;
}

export function ProbabilitySheet({
  isOpen,
  item,
  onClose,
  onSave,
}: ProbabilitySheetProps) {
  const [probability, setProbability] = useState(1);

  const handleSave = () => {
    onSave(probability);
    onClose();
  };

  const getProbabilityLabel = (prob: number) => {
    if (prob === 1) return "보통";
    if (prob > 1) return `다른 항목보다 ${prob}배 더 자주 당첨돼요`;
    return `다른 항목보다 ${Math.round((1 / prob) * 10) / 10}배 덜 당첨돼요`;
  };

  // Update probability when item changes
  if (item && probability !== item.probability) {
    setProbability(item.probability);
  }

  if (!item) return null;

  return (
    <BottomSheet
      open={isOpen}
      onClose={onClose}
      header={
        <BottomSheet.Header>
          {item.name} 당첨 확률을 조정해요
        </BottomSheet.Header>
      }
      cta={
        <BottomSheet.DoubleCTA
          leftButton={
            <Button variant="weak" color="dark" onClick={onClose}>
              닫기
            </Button>
          }
          rightButton={<Button onClick={handleSave}>저장</Button>}
        />
      }
      UNSAFE_disableFocusLock
    >
      <HorizontalPadding>
        <Slider
          value={probability}
          minValue={0.5}
          maxValue={3}
          label={{ min: `0.5배`, mid: `보통`, max: `3배` }}
          onValueChange={(newValue) => setProbability(newValue)}
        />
      </HorizontalPadding>
    </BottomSheet>
  );
}
