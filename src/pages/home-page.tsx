import {
  BottomCTA,
  Button,
  Paragraph,
  TextButton,
  Top,
} from "@toss/tds-mobile";
import { useNavigate } from "react-router";
import { useHistory } from "../hooks/use-history";
import { useState, useEffect } from "react";

const RANDOM_PHRASES = [
  "오늘 뭐 먹지?",
  "운명에 맡겨볼까?",
  "운이 정해줄 거야",
  "선택 장애? 여기서 해결!",
  "랜덤으로 골라볼까?",
];

export function HomePage() {
  const navigate = useNavigate();
  const { history } = useHistory();
  const [randomPhrase, setRandomPhrase] = useState("");

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * RANDOM_PHRASES.length);
    setRandomPhrase(RANDOM_PHRASES[randomIndex]);
  }, []);

  return (
    <>
      <Top
        upper={
          <Top.UpperAssetContent
            content={
              <Paragraph.Text style={{ fontSize: 80 }}>🎯</Paragraph.Text>
            }
          />
        }
        subtitleTop={
          <Top.SubtitleParagraph size={17}>{randomPhrase}</Top.SubtitleParagraph>
        }
        title={
          <Top.TitleParagraph size={28}>룰렛으로 정해봐요</Top.TitleParagraph>
        }
      />
      <BottomCTA.Single
        fixed
        onClick={() => navigate("/setup")}
        size="xlarge"
        bottomAccessory={
          history.length > 0 && (
            <TextButton
              onClick={() => navigate("/history")}
              size="medium"
              color="dark"
            >
              이전 추첨 보기
            </TextButton>
          )
        }
      >
        추첨 시작하기
      </BottomCTA.Single>

      {}
    </>
  );
}
