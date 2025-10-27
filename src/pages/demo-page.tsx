import {
  List,
  ListHeader,
  ListRow,
  Top,
  Button,
  TextField,
  IconButton,
  TextButton,
  Slider,
  Result,
  Asset,
  Paragraph,
  useToast,
  Border,
  SegmentedControl,
  Tab,
  TableRow,
  Bubble,
  Badge,
  BoardRow,
  BottomCTA,
  BottomInfo,
  Post,
} from "@toss/tds-mobile";
import { useState } from "react";
import { useNavigate } from "react-router";
import { adaptive, colors } from "@toss/tds-colors";
import { HorizontalPadding } from "~/components/horizontal-padding";

interface SectionProps {
  title: string;
  children: React.ReactNode;
}

function Section({ title, children }: SectionProps) {
  return (
    <div className="mb-8">
      <ListHeader
        title={
          <ListHeader.TitleParagraph
            typography="t5"
            color={colors.grey800}
            fontWeight="bold"
          >
            {title}
          </ListHeader.TitleParagraph>
        }
      />
      {children}
    </div>
  );
}

function DemoItem({
  label,
  children,
  withHorizontalPadding,
  column,
}: {
  label: string;
  children: React.ReactNode;
  withHorizontalPadding?: boolean;
  column?: boolean;
}) {
  const commonClasses = `flex flex-wrap gap-3 items-start mb-8 ${column ? "flex-col" : ""} w-full`;

  return (
    <>
      <ListHeader
        title={
          <ListHeader.TitleParagraph
            typography="t7"
            color={colors.grey700}
            fontWeight="medium"
          >
            {label}
          </ListHeader.TitleParagraph>
        }
        style={{ marginBottom: "8px", marginTop: "-20px" }}
      />
      {withHorizontalPadding && (
        <HorizontalPadding className={commonClasses}>
          {children}
        </HorizontalPadding>
      )}
      {!withHorizontalPadding && (
        <div className={commonClasses}>{children}</div>
      )}
    </>
  );
}

export function DemoPage() {
  const navigate = useNavigate();
  const toast = useToast();
  const [sliderValue, setSliderValue] = useState(1.5);
  const [textValue, setTextValue] = useState("");
  const [segmentValue, setSegmentValue] = useState("1");
  const [tabValue, setTabValue] = useState("tab1");

  return (
    <>
      <Top
        upper={
          <Top.UpperAssetContent
            content={
              <Asset.Lottie
                frameShape={Asset.frameShape.SquareLarge}
                scale={1}
                src="https://static.toss.im/lotties-common/check-green-spot.json"
              />
            }
          />
        }
        subtitleTop={
          <Top.SubtitleParagraph>
            Subtitle을 이곳에 띄울 수 있음
          </Top.SubtitleParagraph>
        }
        title={
          <Top.TitleParagraph size={28}>TDS 컴포넌트 데모</Top.TitleParagraph>
        }
        right={<Top.RightButton variant="weak">버튼</Top.RightButton>}
      />

      {/* 버튼 섹션 */}
      <Section title="Button 컴포넌트">
        <DemoItem label="Size variants" withHorizontalPadding>
          <Button size="small">Small</Button>
          <Button size="medium">Medium</Button>
          <Button size="large">Large</Button>
          <Button size="xlarge" style={{ width: "100%" }}>
            XLarge
          </Button>
        </DemoItem>

        <DemoItem label="Variant types" withHorizontalPadding>
          <Button variant="fill">Primary</Button>
          <Button variant="weak">Weak</Button>
        </DemoItem>

        <DemoItem label="Color options" withHorizontalPadding>
          <Button color="primary">Primary Color</Button>
          <Button color="dark">Dark Color</Button>
          <Button color="danger">Danger Color</Button>
        </DemoItem>

        <DemoItem label="States" withHorizontalPadding>
          <Button disabled>Disabled</Button>
          <Button loading>Loading</Button>
        </DemoItem>
      </Section>

      <Border variant="height16" />

      {/* TextButton & IconButton */}
      <Section title="TextButton & IconButton">
        <DemoItem label="TextButton sizes" withHorizontalPadding>
          <TextButton size="small">Small TextButton</TextButton>
          <TextButton size="medium">Medium TextButton</TextButton>
          <TextButton size="large">Large TextButton</TextButton>
        </DemoItem>

        <DemoItem label="IconButton" withHorizontalPadding>
          <div className="flex gap-2">
            <IconButton name="home" aria-label="홈" />
            <IconButton name="search" aria-label="검색" />
            <IconButton name="delete" aria-label="삭제" />
            <IconButton name="add" aria-label="추가" />
          </div>
        </DemoItem>
      </Section>

      <Border variant="height16" />

      {/* TextField */}
      <Section title="TextField 컴포넌트">
        <TextField
          variant="box"
          label="라벨"
          placeholder="플레이스홀더를 입력하세요"
          value={textValue}
          onChange={(e) => setTextValue(e.target.value)}
          style={{ width: "100%" }}
        />

        <TextField
          variant="box"
          label="Sustain Label"
          labelOption="sustain"
          placeholder="항상 라벨이 위에 표시됩니다"
          style={{ width: "100%" }}
        />

        <TextField
          variant="box"
          label="에러 상태"
          hasError
          help="에러 메시지입니다"
          value="잘못된 값"
        />

        <TextField
          variant="box"
          label="비활성화"
          disabled
          value="비활성화된 필드"
        />
      </Section>

      <Border variant="height16" />

      {/* Slider */}
      <Section title="Slider 컴포넌트">
        <HorizontalPadding>
          <Slider
            value={sliderValue}
            minValue={0.5}
            maxValue={3}
            step={0.1}
            label={{ min: "0.5배", mid: "보통", max: "3배" }}
            onValueChange={setSliderValue}
            style={{ width: "100%", flex: 1 }}
          />
        </HorizontalPadding>
      </Section>

      <Border variant="height16" />

      {/* List & ListRow */}
      <Section title="List & ListRow 컴포넌트">
        <DemoItem label="다양한 ListRow 타입">
          <List style={{ width: "100%" }}>
            <ListRow
              border="indented"
              contents={<ListRow.Texts type="1RowTypeA" top="1줄 타입" />}
            />
            <ListRow
              border="indented"
              contents={
                <ListRow.Texts
                  type="2RowTypeA"
                  top="2줄 타입 상단"
                  bottom="2줄 타입 하단"
                />
              }
            />
            <ListRow
              border="indented"
              contents={
                <ListRow.Texts
                  type="3RowTypeA"
                  top="3줄 타입 상단"
                  middle="3줄 타입 중간"
                  bottom="3줄 타입 하단"
                />
              }
            />
            <ListRow
              border="indented"
              onClick={() => {}}
              contents={
                <ListRow.Texts
                  type="3RowTypeA"
                  top="3줄 타입 - 터치 가능"
                  middle="3줄 타입 중간"
                  bottom="3줄 타입 하단"
                />
              }
            />{" "}
          </List>
        </DemoItem>

        <DemoItem label="WithArrow & Left accessory">
          <List style={{ width: "100%" }}>
            <ListRow
              border="indented"
              withArrow
              contents={<ListRow.Texts type="1RowTypeA" top="화살표 포함" />}
            />
            <ListRow
              border="indented"
              left={
                <div
                  className="w-10 h-10 rounded-full"
                  style={{ backgroundColor: colors.blue500 }}
                />
              }
              contents={
                <ListRow.Texts type="1RowTypeA" top="왼쪽 아이템 포함" />
              }
            />
          </List>
        </DemoItem>
      </Section>

      <Border variant="height16" />

      {/* Paragraph */}
      <Section title="Paragraph 컴포넌트">
        <DemoItem label="다양한 타이포그래피" withHorizontalPadding column>
          <Paragraph.Text typography="t1" fontWeight="bold">
            매우 큰 제목 (+bold)
          </Paragraph.Text>
          <Paragraph.Text typography="t2" fontWeight="bold">
            큰 제목 (+bold)
          </Paragraph.Text>
          <Paragraph.Text typography="t3" fontWeight="semibold">
            일반 제목 (+semibold)
          </Paragraph.Text>
          <Paragraph.Text typography="t4" fontWeight="medium">
            작은 제목 (+medium)
          </Paragraph.Text>
          <Paragraph.Text typography="t5">일반 본문</Paragraph.Text>
          <Paragraph.Text typography="t6">작은 본문</Paragraph.Text>
          <Paragraph.Text typography="t7">안 읽어도 됨</Paragraph.Text>
        </DemoItem>
      </Section>

      <Border variant="height16" />

      {/* Result */}
      <Section title="Result 컴포넌트">
        <Result
          figure={
            <Asset.Image
              src="https://static.toss.im/lotties/empty-2-spot-apng.png"
              frameShape={Asset.frameShape.CleanH60}
            />
          }
          title="빈 화면 예시"
          description="아직 데이터가 없습니다"
          button={<Result.Button onClick={() => {}}>시작하기</Result.Button>}
        />
      </Section>

      <Border variant="height16" />

      {/* Toast */}
      <Section title="Toast (useToast)">
        <DemoItem label="토스트 메시지" withHorizontalPadding>
          <Button
            size="medium"
            onClick={() =>
              toast.openToast("기본 토스트 메시지입니다", {
                icon: "icn-success-color",
              })
            }
          >
            성공 토스트
          </Button>
          <Button
            size="medium"
            variant="weak"
            color="danger"
            onClick={() =>
              toast.openToast("에러가 발생했습니다", {
                icon: "icn-error-color",
              })
            }
          >
            에러 토스트
          </Button>
        </DemoItem>
      </Section>

      <Border variant="height16" />

      {/* Top 컴포넌트 설명 */}
      <Section title="Segment Control">
        <SegmentedControl
          value={segmentValue}
          onChange={(value) => setSegmentValue(value)}
        >
          <SegmentedControl.Item value="1">아이템1</SegmentedControl.Item>
          <SegmentedControl.Item value="2">아이템2</SegmentedControl.Item>
          <SegmentedControl.Item value="3">아이템3</SegmentedControl.Item>
        </SegmentedControl>
      </Section>

      <Border variant="height16" />

      {/* Top 컴포넌트 설명 */}
      <Section title="Top 컴포넌트">
        <DemoItem label="현재 페이지 상단에서 확인 가능" withHorizontalPadding>
          <div
            className="p-4 rounded"
            style={{ backgroundColor: colors.grey100 }}
          >
            <p className="text-sm" style={{ color: colors.grey700 }}>
              이 페이지 상단의 헤더가 Top 컴포넌트입니다.
              <br />
              다양한 옵션: title, left, right, upper, subtitle 등
            </p>
          </div>
        </DemoItem>
      </Section>

      <Border variant="height16" />

      {/* Tab 컴포넌트 */}
      <Section title="Tab 컴포넌트">
        <DemoItem label="기본 탭" withHorizontalPadding>
          <Tab
            onChange={(index) => setTabValue(`tab${index + 1}`)}
            style={{ width: "100%" }}
          >
            <Tab.Item selected={tabValue === "tab1"}>탭 1</Tab.Item>
            <Tab.Item selected={tabValue === "tab2"}>탭 2</Tab.Item>
            <Tab.Item selected={tabValue === "tab3"}>탭 3</Tab.Item>
          </Tab>
        </DemoItem>

        <DemoItem label="Small 사이즈" withHorizontalPadding>
          <Tab
            size="small"
            onChange={(index) => setTabValue(`tab${index + 1}`)}
            style={{ width: "100%" }}
          >
            <Tab.Item selected={tabValue === "tab1"}>탭 1</Tab.Item>
            <Tab.Item selected={tabValue === "tab2"}>탭 2</Tab.Item>
            <Tab.Item selected={tabValue === "tab3"}>탭 3</Tab.Item>
          </Tab>
        </DemoItem>

        <DemoItem label="알림 표시 (redBean)" withHorizontalPadding>
          <Tab
            onChange={(index) => setTabValue(`tab${index + 1}`)}
            style={{ width: "100%" }}
          >
            <Tab.Item selected={tabValue === "tab1"} redBean>
              알림있음
            </Tab.Item>
            <Tab.Item selected={tabValue === "tab2"}>탭 2</Tab.Item>
            <Tab.Item selected={tabValue === "tab3"}>탭 3</Tab.Item>
          </Tab>
        </DemoItem>
      </Section>

      <Border variant="height16" />

      {/* TableRow 컴포넌트 */}
      <Section title="TableRow 컴포넌트">
        <DemoItem label="Space-between 정렬">
          <div className="w-full">
            <TableRow
              align="space-between"
              left="계좌번호"
              right="1234-5678-90"
            />
            <TableRow
              align="space-between"
              left="이체 금액"
              right="100,000원"
            />
          </div>
        </DemoItem>

        <DemoItem label="Left 정렬 (leftRatio 30%)">
          <div className="w-full">
            <TableRow align="left" left="이름" right="김토스" leftRatio={30} />
            <TableRow
              align="left"
              left="계좌번호"
              right="1234-5678-90"
              leftRatio={30}
            />
            <TableRow
              align="left"
              left="금액"
              right="100,000원"
              leftRatio={30}
            />
          </div>
        </DemoItem>
      </Section>

      <Border variant="height16" />

      {/* Bubble 컴포넌트 */}
      <Section title="Bubble 컴포넌트">
        <DemoItem label="대화 예시" withHorizontalPadding column>
          <div className="flex flex-col gap-4 w-full">
            <div>
              <Bubble background="grey" withTail={false}>
                안녕하세요!
              </Bubble>
            </div>
            <div className="w-full flex justify-end">
              <Bubble background="grey" withTail>
                반갑습니다!
              </Bubble>
            </div>
            <div>
              <Bubble background="blue" withTail={false}>
                도움이 필요하신가요?
              </Bubble>
            </div>
            <div className="w-full flex justify-end">
              <Bubble background="blue" withTail>
                네, 문의사항이 있습니다
              </Bubble>
            </div>
          </div>
        </DemoItem>
      </Section>

      <Border variant="height16" />

      {/* Badge 컴포넌트 */}
      <Section title="Badge 컴포넌트">
        <DemoItem label="Size variants" withHorizontalPadding>
          <Badge variant="fill" size="xsmall" color="blue">
            XSmall
          </Badge>
          <Badge variant="fill" size="small" color="blue">
            Small
          </Badge>
          <Badge variant="fill" size="medium" color="blue">
            Medium
          </Badge>
          <Badge variant="fill" size="large" color="blue">
            Large
          </Badge>
        </DemoItem>

        <DemoItem label="Variant: Fill" withHorizontalPadding>
          <Badge variant="fill" size="medium" color="blue">
            Blue
          </Badge>
          <Badge variant="fill" size="medium" color="teal">
            Teal
          </Badge>
          <Badge variant="fill" size="medium" color="green">
            Green
          </Badge>
          <Badge variant="fill" size="medium" color="red">
            Red
          </Badge>
          <Badge variant="fill" size="medium" color="yellow">
            Yellow
          </Badge>
          <Badge variant="fill" size="medium" color="elephant">
            Elephant
          </Badge>
        </DemoItem>

        <DemoItem label="Variant: Weak" withHorizontalPadding>
          <Badge variant="weak" size="medium" color="blue">
            Blue
          </Badge>
          <Badge variant="weak" size="medium" color="teal">
            Teal
          </Badge>
          <Badge variant="weak" size="medium" color="green">
            Green
          </Badge>
          <Badge variant="weak" size="medium" color="red">
            Red
          </Badge>
          <Badge variant="weak" size="medium" color="yellow">
            Yellow
          </Badge>
          <Badge variant="weak" size="medium" color="elephant">
            Elephant
          </Badge>
        </DemoItem>
      </Section>

      <Border variant="height16" />

      {/* BoardRow 컴포넌트 */}
      <Section title="BoardRow 컴포넌트">
        <DemoItem label="아코디언 형식 (Q&A)">
          <BoardRow title="첫 번째 질문입니다">
            <BoardRow.Text>
              첫 번째 질문에 대한 답변입니다. BoardRow는 아코디언 형태로
              콘텐츠를 표시할 수 있습니다.
            </BoardRow.Text>
          </BoardRow>
          <BoardRow title="두 번째 질문은 처음부터 열려있습니다" initialOpened>
            <BoardRow.Text>
              initialOpened 속성을 사용하면 처음부터 열린 상태로 렌더링됩니다.
            </BoardRow.Text>
          </BoardRow>
          <BoardRow title="세 번째 질문입니다">
            <BoardRow.Text>
              BoardRow.Text를 사용하거나 Post 컴포넌트를 사용하여 복잡한
              레이아웃도 구성할 수 있습니다.
            </BoardRow.Text>
          </BoardRow>
        </DemoItem>
      </Section>

      <Border variant="height16" />

      <Section title="BottomInfo 컴포넌트"> </Section>

      <div style={{ width: "100%", maxWidth: 375, margin: "auto" }}>
        <BottomInfo bottomGradient={"none"}>
          <Post.Ul paddingBottom={24} typography="t7">
            <Post.Li>
              대출기간 40년의 경우 만39세 (만 나이를 사용해주세요!) 이하 또는
              신혼부부(혼인신고후 7년이내) 대상으로 한 상품입니다.
            </Post.Li>
            <Post.Li>
              회사 및 대출모집인은 해당상품에 대해 충분히 설명할 의무가 있으며,
              고객님께서는 이에 대한 충분한 설명을 받으시길 바랍니다.
            </Post.Li>
            <Post.Li>
              대출금 중도상환시 중도상환수수료 부과기간 잔여일수에 대해
              중도상환수수료가 발생할 수 있습니다.
            </Post.Li>
          </Post.Ul>
        </BottomInfo>
      </div>

      {/* BottomCTA */}
      <BottomCTA.Single
        fixed
        onClick={() => navigate("/")}
        size="xlarge"
        variant="weak"
        style={{ width: "100%" }}
      >
        홈으로 돌아가기
      </BottomCTA.Single>
    </>
  );
}
