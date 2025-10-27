import {
  BottomCTA,
  Button,
  IconButton,
  List,
  ListHeader,
  ListRow,
  TextField,
  Top,
} from "@toss/tds-mobile";
import { useState } from "react";
import { useNavigate } from "react-router";
import { useLottery } from "../hooks/use-lottery-state";
import { ProbabilitySheet } from "../components/probability-sheet";
import type { LotteryItem } from "../types/lottery";
import { HorizontalPadding } from "~/components/horizontal-padding";
import { colors } from "@toss/tds-colors";

export function SetupPage() {
  const navigate = useNavigate();
  const { items, addItem, removeItem, updateItemProbability } = useLottery();
  const [inputValue, setInputValue] = useState("");
  const [selectedItem, setSelectedItem] = useState<LotteryItem | null>(null);

  const canAddItem =
    Boolean(inputValue.trim()) &&
    inputValue.trim().length < 20 &&
    items.length < 20;

  const handleAddItem = () => {
    if (canAddItem) {
      addItem(inputValue.trim());
      setInputValue("");
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleAddItem();
    }
  };

  const handleStart = () => {
    if (items.length >= 2) {
      navigate("/spin");
    }
  };

  return (
    <>
      <Top
        title={
          <Top.TitleParagraph size={28} textAlign="left">
            어떤 항목을 추첨할까요?
          </Top.TitleParagraph>
        }
      />

      <div>
        <TextField
          variant="box"
          label="항목 입력"
          labelOption="sustain"
          placeholder="예) 피자, 치킨 등"
          value={inputValue}
          hasError={inputValue.length >= 20}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyPress={handleKeyPress}
          style={{ width: "100%" }}
        />
        <HorizontalPadding>
          <Button
            onClick={handleAddItem}
            disabled={!canAddItem}
            style={{ width: "100%" }}
            variant="weak"
          >
            추가
          </Button>
        </HorizontalPadding>

        {items.length > 0 && (
          <>
            <ListHeader
              title={
                <ListHeader.TitleParagraph
                  typography="t5"
                  color={colors.grey800}
                  fontWeight="bold"
                >
                  총 {items.length}개 · 최소 2개 필요
                </ListHeader.TitleParagraph>
              }
            />

            <List>
              {items.map((item) => (
                <ListRow
                  key={item.id}
                  verticalPadding="small"
                  border="indented"
                  contents={
                    <ListRow.Texts
                      type="1RowTypeA"
                      top={
                        <div className="flex items-center gap-2">
                          <span>{item.name}</span>
                          {item.probability !== 1 && (
                            <span className="text-xs text-gray-500">
                              ({item.probability}배)
                            </span>
                          )}
                        </div>
                      }
                    />
                  }
                  left={
                    <div
                      className="w-6 h-6 rounded flex-shrink-0"
                      style={{ backgroundColor: item.color }}
                    />
                  }
                  right={
                    <div className="flex items-center gap-2">
                      <Button
                        onClick={() => setSelectedItem(item)}
                        variant="weak"
                        size="small"
                      >
                        확률
                      </Button>
                      <IconButton
                        onClick={() => removeItem(item.id)}
                        aria-label="삭제"
                        name="delete"
                      />
                    </div>
                  }
                />
              ))}
            </List>
          </>
        )}
      </div>

      <BottomCTA.Single
        fixed
        onClick={handleStart}
        disabled={items.length < 2}
        size="xlarge"
      >
        룰렛 돌리기 ({items.length})
      </BottomCTA.Single>

      <ProbabilitySheet
        isOpen={selectedItem !== null}
        item={selectedItem}
        onClose={() => setSelectedItem(null)}
        onSave={(probability) => {
          if (selectedItem) {
            updateItemProbability(selectedItem.id, probability);
          }
        }}
      />
    </>
  );
}
