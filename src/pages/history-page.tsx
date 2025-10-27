import {
  Asset,
  List,
  ListHeader,
  ListRow,
  Result,
  Top,
  useToast,
} from "@toss/tds-mobile";
import { useNavigate } from "react-router";
import { useHistory } from "../hooks/use-history";
import { useLottery } from "../hooks/use-lottery-state";
import type { LotteryResult } from "../types/lottery";
import { colors } from "@toss/tds-colors";
import { useRef } from "react";

export function HistoryPage() {
  const navigate = useNavigate();
  const { history, clearHistory } = useHistory();
  const { setItems } = useLottery();
  const toast = useToast();

  const dialogRef = useRef<HTMLDivElement>(null);

  const handleReuseItems = (result: LotteryResult) => {
    setItems(result.allItems);
    navigate("/spin");
  };

  const handleClearHistory = () => {
    clearHistory();
    toast.openToast("추첨 히스토리를 삭제했어요.", {
      icon: "icn-success-color",
    });
  };

  const groupByDate = (results: LotteryResult[]) => {
    const groups: { [key: string]: LotteryResult[] } = {};

    results.forEach((result) => {
      const date = new Date(result.timestamp);
      const today = new Date();
      const yesterday = new Date(today);
      yesterday.setDate(yesterday.getDate() - 1);

      let label: string;
      if (date.toDateString() === today.toDateString()) {
        label = "오늘";
      } else if (date.toDateString() === yesterday.toDateString()) {
        label = "어제";
      } else {
        label = date.toLocaleDateString("ko-KR", {
          month: "long",
          day: "numeric",
        });
      }

      if (!groups[label]) {
        groups[label] = [];
      }
      groups[label].push(result);
    });

    return groups;
  };

  const formatTime = (timestamp: number) => {
    const date = new Date(timestamp);
    return date.toLocaleTimeString("ko-KR", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    });
  };

  const groupedHistory = groupByDate(history);

  return (
    <>
      <Top
        title={<Top.TitleParagraph size={28}>추첨 히스토리</Top.TitleParagraph>}
        right={
          <Top.RightButton
            onClick={() => handleClearHistory()}
            disabled={history.length === 0}
            color="danger"
            variant="weak"
          >
            전체삭제
          </Top.RightButton>
        }
      />

      {history.length === 0 ? (
        <Result
          figure={
            <Asset.Image
              src="https://static.toss.im/lotties/empty-2-spot-apng.png"
              frameShape={Asset.frameShape.CleanH60}
            />
          }
          title="아직 추첨 기록이 없어요"
          description="메인화면으로 돌아가 추첨을 시작해주세요."
          style={{ marginTop: "-30%" }}
          button={
            <Result.Button onClick={() => navigate("/setup")}>
              첫 추첨 시작하기
            </Result.Button>
          }
        />
      ) : (
        <div className="space-y-6">
          {Object.entries(groupedHistory).map(([dateLabel, results]) => (
            <div key={dateLabel}>
              <ListHeader
                title={
                  <ListHeader.TitleParagraph
                    typography="t5"
                    color={colors.grey800}
                    fontWeight="bold"
                  >
                    {dateLabel}
                  </ListHeader.TitleParagraph>
                }
              />

              <List>
                {results.map((result) => (
                  <ListRow
                    key={result.id}
                    border="indented"
                    onClick={() => handleReuseItems(result)}
                    withArrow
                    contents={
                      <ListRow.Texts
                        type="3RowTypeA"
                        top={result.winnerItem.name}
                        middle={result.allItems
                          .map((item) => item.name)
                          .join(", ")}
                        bottom={formatTime(result.timestamp)}
                      />
                    }
                  />
                ))}
              </List>
            </div>
          ))}
        </div>
      )}

      <div ref={dialogRef} style={{ position: "relative" }}></div>
    </>
  );
}
