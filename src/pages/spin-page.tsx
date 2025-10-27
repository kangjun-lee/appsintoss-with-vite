import { BottomCTA } from "@toss/tds-mobile";
import { useRef, useState } from "react";
import { useNavigate } from "react-router";
import { useLottery } from "../hooks/use-lottery-state";
import { WheelCanvas } from "../components/wheel-canvas";
import type { WheelCanvasRef } from "../components/wheel-canvas";
import type { LotteryItem, LotteryResult } from "../types/lottery";
import { useHistory } from "../hooks/use-history";
import { nanoid } from "nanoid";

export function SpinPage() {
  const navigate = useNavigate();
  const { items, setResult } = useLottery();
  const { addToHistory } = useHistory();
  const [isSpinning, setIsSpinning] = useState(false);
  const [statusText, setStatusText] = useState("두근두근...");
  const wheelRef = useRef<WheelCanvasRef>(null);

  const handleSpin = () => {
    if (items.length < 2) {
      navigate("/setup");
      return;
    }

    setIsSpinning(true);
    setStatusText("돌아가는 중...");

    wheelRef.current?.spin((winner: LotteryItem) => {
      setStatusText("땡!");

      const result: LotteryResult = {
        id: nanoid(),
        winnerItem: winner,
        allItems: items,
        timestamp: Date.now(),
      };

      setResult(result);
      addToHistory(result);

      setTimeout(() => {
        navigate("/result");
      }, 500);
    });
  };

  if (items.length < 2) {
    navigate("/setup");
    return null;
  }

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center p-6">
      <div className="flex-1 flex flex-col items-center justify-center max-w-md w-full">
        <h2 className="text-[24px] font-bold mb-8 text-gray-900">
          {statusText}
        </h2>

        <div className="mb-8">
          <WheelCanvas ref={wheelRef} items={items} size={400} />
        </div>

        <p className="text-gray-600 text-center mb-8">
          {items.map((item) => item.name).join(", ")}
        </p>
      </div>

      <BottomCTA.Single
        onClick={handleSpin}
        disabled={isSpinning}
        size="xlarge"
        fixed
      >
        {isSpinning ? "회전 중..." : "START!"}
      </BottomCTA.Single>
    </div>
  );
}
