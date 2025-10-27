import { BottomCTA, Paragraph, Top } from "@toss/tds-mobile";

export function HomePage() {
  return (
    <>
      <Top
        subtitleTop={
          <Top.SubtitleParagraph size={17}>
            토스앱에 내 서비스 오픈하기
          </Top.SubtitleParagraph>
        }
        title={
          <Top.TitleParagraph size={28}>
            앱인토스 개발을 시작해보세요.
          </Top.TitleParagraph>
        }
      />

      <BottomCTA.Single fixed size="xlarge" disabled>
        코드를 수정하세요
      </BottomCTA.Single>
    </>
  );
}
