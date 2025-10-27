import { useEffect, useRef, forwardRef, useImperativeHandle } from "react";
import type { LotteryItem } from "../types/lottery";

interface WheelCanvasProps {
  items: LotteryItem[];
  size?: number;
}

export interface WheelCanvasRef {
  spin: (onComplete: (winner: LotteryItem) => void) => void;
}

export const WheelCanvas = forwardRef<WheelCanvasRef, WheelCanvasProps>(
  ({ items, size = 400 }, ref) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const rotationRef = useRef(0);
    const isSpinningRef = useRef(false);

    const drawWheel = (currentRotation: number) => {
      const canvas = canvasRef.current;
      if (!canvas || items.length === 0) return;

      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;
      const radius = Math.min(centerX, centerY) - 10;

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.save();
      ctx.translate(centerX, centerY);
      ctx.rotate((currentRotation * Math.PI) / 180);

      const totalWeight = items.reduce(
        (sum, item) => sum + item.probability,
        0,
      );
      let currentAngle = 0;

      // 각 항목 그리기
      items.forEach((item) => {
        const arcSize = (item.probability / totalWeight) * 2 * Math.PI;

        // 파이 섹션 그리기
        ctx.beginPath();
        ctx.fillStyle = item.color;
        ctx.moveTo(0, 0);
        ctx.arc(0, 0, radius, currentAngle, currentAngle + arcSize);
        ctx.lineTo(0, 0);
        ctx.fill();

        // 테두리
        ctx.strokeStyle = "#fff";
        ctx.lineWidth = 2;
        ctx.stroke();

        // 텍스트
        ctx.save();
        ctx.rotate(currentAngle + arcSize / 2);
        ctx.textAlign = "center";
        ctx.fillStyle = "#fff";
        ctx.font =
          "bold 16px -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif";
        ctx.fillText(item.name, radius * 0.65, 0);
        ctx.restore();

        currentAngle += arcSize;
      });

      ctx.restore();

      // 중앙 원
      ctx.beginPath();
      ctx.arc(centerX, centerY, 20, 0, 2 * Math.PI);
      ctx.fillStyle = "#fff";
      ctx.fill();
      ctx.strokeStyle = "#333";
      ctx.lineWidth = 3;
      ctx.stroke();

      // 상단 포인터
      ctx.beginPath();
      ctx.moveTo(centerX, 10);
      ctx.lineTo(centerX - 15, 35);
      ctx.lineTo(centerX + 15, 35);
      ctx.closePath();
      ctx.fillStyle = "#FF4444";
      ctx.fill();
      ctx.strokeStyle = "#fff";
      ctx.lineWidth = 2;
      ctx.stroke();
    };

    const spin = (onComplete: (winner: LotteryItem) => void) => {
      if (isSpinningRef.current || items.length < 2) return;

      isSpinningRef.current = true;

      // 확률 기반 랜덤 선택
      const totalWeight = items.reduce(
        (sum, item) => sum + item.probability,
        0,
      );
      let random = Math.random() * totalWeight;
      let winnerIndex = 0;

      for (let i = 0; i < items.length; i++) {
        random -= items[i].probability;
        if (random <= 0) {
          winnerIndex = i;
          break;
        }
      }

      // 당첨 항목의 각도 계산
      const totalWeightBefore = items
        .slice(0, winnerIndex)
        .reduce((sum, item) => sum + item.probability, 0);
      const winnerAngle =
        ((totalWeightBefore + items[winnerIndex].probability / 2) /
          totalWeight) *
        360;

      // 최소 5바퀴 + 당첨 위치로
      const minSpins = 5;
      const targetRotation = minSpins * 360 + (270 - winnerAngle);
      const duration = 3000;
      const startTime = Date.now();
      const startRotation = rotationRef.current;

      const animate = () => {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);

        // Ease-out 효과
        const easeOut = 1 - Math.pow(1 - progress, 3);
        const currentRotation = startRotation + targetRotation * easeOut;

        rotationRef.current = currentRotation;
        drawWheel(currentRotation);

        if (progress < 1) {
          requestAnimationFrame(animate);
        } else {
          isSpinningRef.current = false;
          onComplete(items[winnerIndex]);
        }
      };

      requestAnimationFrame(animate);
    };

    useImperativeHandle(ref, () => ({
      spin,
    }));

    // Canvas 초기 렌더링
    useEffect(() => {
      drawWheel(rotationRef.current);
    }, [items]);

    return (
      <canvas
        ref={canvasRef}
        width={size}
        height={size}
        className="max-w-full h-auto"
      />
    );
  },
);

WheelCanvas.displayName = "WheelCanvas";
