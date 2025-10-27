import { BottomCTA, Button, Paragraph, TextButton } from "@toss/tds-mobile";
import { useEffect } from "react";
import { useNavigate } from "react-router";
import { useLottery } from "../hooks/use-lottery-state";
import { colors } from "@toss/tds-colors";

export function ResultPage() {
  const navigate = useNavigate();
  const { currentResult, resetItems } = useLottery();

  useEffect(() => {
    if (!currentResult) {
      navigate("/");
    }
  }, [currentResult, navigate]);

  if (!currentResult) {
    return null;
  }

  const handleNewLottery = () => {
    resetItems();
    navigate("/setup");
  };

  const handleRetry = () => {
    navigate("/spin");
  };

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center p-6">
      <div className="flex-1 flex flex-col items-center justify-center max-w-md w-full animate-[fadeIn_0.5s_ease-out]">
        <div className="text-[60px] mb-6 animate-bounce">🎉</div>

        <Paragraph.Text color={colors.grey600} typography="t4">
          당첨된 결과는
        </Paragraph.Text>

        <Paragraph.Text
          style={{
            color: currentResult.winnerItem.color,
            fontSize: 48,
            fontWeight: "bold",
          }}
        >
          {currentResult.winnerItem.name}
        </Paragraph.Text>

        <div
          className="w-24 h-1 rounded-full mb-8"
          style={{ backgroundColor: currentResult.winnerItem.color }}
        />
      </div>

      <BottomCTA.Double
        fixed
        leftButton={
          <Button onClick={handleRetry} variant="weak" size="xlarge">
            다시 추첨하기
          </Button>
        }
        rightButton={
          <Button onClick={() => navigate("/history")} size="xlarge">
            히스토리 보기
          </Button>
        }
        bottomAccessory={
          <TextButton onClick={handleNewLottery} size="medium">
            새로운 추첨 시작
          </TextButton>
        }
      />

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes scaleIn {
          from {
            transform: scale(0.8);
          }
          to {
            transform: scale(1);
          }
        }
      `}</style>
    </div>
  );
}
