# Design Guide - Pickly (픽클리)

이 문서는 Pickly 프로젝트에서 Toss Design System (TDS)을 올바르게 사용하기 위한 가이드입니다.

## 📋 목차

- [핵심 원칙](#핵심-원칙)
- [중요 규칙 (DO/DON'T)](#중요-규칙-dodont)
- [Foundation](#foundation)
  - [Colors](#colors)
  - [Typography](#typography)
- [컴포넌트 사용 가이드](#컴포넌트-사용-가이드)
- [스타일링 가이드라인](#스타일링-가이드라인)
- [토스스러운 UI/UX 패턴](#토스스러운-uiux-패턴)
- [참고 문서](#참고-문서)

---

## 핵심 원칙

1. **TDS 우선 사용**: 모든 UI 요소는 TDS 컴포넌트를 우선적으로 사용합니다
2. **직접 스타일링 최소화**: 가능한 한 TDS가 제공하는 props와 옵션을 활용합니다
3. **일관된 디자인**: TDS의 디자인 토큰(색상, 타이포그래피)을 사용하여 일관성을 유지합니다
4. **토스스러운 경험**: 토스 제품군과 동일한 UI/UX 패턴을 따릅니다

---

## 중요 규칙 (DO/DON'T)

### ❌ DON'T

```tsx
// ❌ TDS 컴포넌트에 className 사용 금지
<Button className="mt-4 bg-blue-500">버튼</Button>

// ❌ 기본 HTML 태그로 버튼 만들기 금지
<button className="px-4 py-2">버튼</button>
<div onClick={handleClick}>클릭</div>

// ❌ 기본 HTML 태그로 텍스트 표시 금지
<div className="text-lg font-bold">제목</div>
<p>본문 텍스트</p>

// ❌ 직접 색상 값 하드코딩 금지
<div style={{ color: '#000000', backgroundColor: '#ffffff' }}>
```

### ✅ DO

```tsx
// ✅ TDS 컴포넌트에 inline style 사용
<Button style={{ marginTop: '16px' }}>버튼</Button>

// ✅ TDS Button 컴포넌트 사용
<Button size="medium" variant="fill" color="primary">
  버튼
</Button>

// ✅ TDS Paragraph 컴포넌트 사용
<Paragraph.Text typography="t3" fontWeight="bold" color={colors.grey900}>
  제목
</Paragraph.Text>

// ✅ TDS colors 사용
import { colors } from '@toss/tds-colors';

<div style={{ color: colors.grey900, backgroundColor: colors.grey100 }}>
```

---

## Foundation

### Colors

`@toss/tds-colors`에서 제공하는 색상 팔레트를 사용합니다.

#### Import

```tsx
import { colors, adaptive } from '@toss/tds-colors';
```

#### 주요 색상 팔레트

**Grey Scale**
```tsx
colors.grey50   // #f9fafb (가장 밝음)
colors.grey100  // ...
colors.grey700  // 보조 텍스트
colors.grey800  // 주요 텍스트
colors.grey900  // #191f28 (가장 어두움)
```

**Primary Colors**
```tsx
colors.blue500  // 토스 블루
colors.red500   // 경고/에러
colors.green500 // 성공
colors.orange500 // 강조
```

**Background Colors**
```tsx
colors.background         // #FFFFFF
colors.greyBackground     // grey100
colors.layeredBackground  // #FFFFFF
```

#### 사용 예시

```tsx
// Paragraph 컴포넌트에 색상 적용
<Paragraph.Text color={colors.grey800}>
  주요 텍스트
</Paragraph.Text>

// inline style로 배경색 적용
<div style={{ backgroundColor: colors.grey100 }}>
  내용
</div>

// ListHeader에 색상 적용
<ListHeader
  title={
    <ListHeader.TitleParagraph color={colors.grey700}>
      섹션 제목
    </ListHeader.TitleParagraph>
  }
/>
```

### Typography

TDS는 t1~t7까지의 타이포그래피 토큰을 제공합니다.

#### Typography Tokens

| Token | 용도 | 폰트 크기 |
|-------|------|----------|
| t1 | 매우 큰 제목 | 30px |
| t2 | 큰 제목 | 26px |
| t3 | 일반 제목 | 22px |
| t4 | 작은 제목 | 20px |
| t5 | 본문 텍스트 | 17px |
| t6 | 작은 본문 | 15px |
| t7 | 캡션/보조 정보 | 13px |

#### Font Weight

```tsx
fontWeight="regular"   // 400
fontWeight="medium"    // 500
fontWeight="semibold"  // 600
fontWeight="bold"      // 700
```

#### 사용 예시

```tsx
// 큰 제목
<Paragraph.Text typography="t2" fontWeight="bold">
  페이지 제목
</Paragraph.Text>

// 일반 본문
<Paragraph.Text typography="t5">
  본문 내용입니다.
</Paragraph.Text>

// 보조 정보
<Paragraph.Text typography="t7" color={colors.grey700}>
  안 읽어도 되는 정보
</Paragraph.Text>

// Top 컴포넌트의 제목
<Top
  title={
    <Top.TitleParagraph size={28}>
      TDS 컴포넌트 데모
    </Top.TitleParagraph>
  }
/>
```

---

## 컴포넌트 사용 가이드

### Button 컴포넌트

버튼은 `<Button>`, `<TextButton>`, `<IconButton>`을 사용합니다.

#### Button

```tsx
import { Button } from '@toss/tds-mobile';

// Size variants
<Button size="small">Small</Button>
<Button size="medium">Medium</Button>
<Button size="large">Large</Button>
<Button size="xlarge">XLarge</Button>

// Variant types
<Button variant="fill">Primary</Button>
<Button variant="weak">Secondary</Button>

// Color options
<Button color="primary">Primary</Button>
<Button color="dark">Dark</Button>
<Button color="danger">Danger</Button>

// States
<Button disabled>Disabled</Button>
<Button loading>Loading</Button>

// Full width
<Button size="xlarge" style={{ width: '100%' }}>
  전체 너비 버튼
</Button>
```

#### TextButton

텍스트 형태의 버튼입니다.

```tsx
import { TextButton } from '@toss/tds-mobile';

<TextButton size="small">Small TextButton</TextButton>
<TextButton size="medium">Medium TextButton</TextButton>
<TextButton size="large">Large TextButton</TextButton>
```

#### IconButton

아이콘만 있는 버튼입니다. 접근성을 위해 `aria-label`을 반드시 포함해야 합니다.

```tsx
import { IconButton } from '@toss/tds-mobile';

<IconButton name="home" aria-label="홈" />
<IconButton name="search" aria-label="검색" />
<IconButton name="delete" aria-label="삭제" />
<IconButton name="add" aria-label="추가" />
```

### Paragraph 컴포넌트

모든 텍스트 표시에 사용합니다. **절대 `<div>`, `<p>`, `<span>` 태그를 직접 사용하지 않습니다.**

```tsx
import { Paragraph } from '@toss/tds-mobile';
import { colors } from '@toss/tds-colors';

// 기본 사용
<Paragraph.Text typography="t5">
  본문 텍스트
</Paragraph.Text>

// 다양한 스타일 조합
<Paragraph.Text typography="t3" fontWeight="bold" color={colors.grey900}>
  큰 제목
</Paragraph.Text>

<Paragraph.Text typography="t7" color={colors.grey700}>
  보조 정보
</Paragraph.Text>

// 여러 줄 텍스트
<Paragraph typography="t5">
  <Paragraph.Text>첫 번째 줄</Paragraph.Text>
  <Paragraph.Text>두 번째 줄</Paragraph.Text>
</Paragraph>
```

### List & ListRow 컴포넌트

리스트 형태의 UI를 구성할 때 사용합니다.

#### ListHeader

섹션 헤더를 표시합니다.

```tsx
import { ListHeader } from '@toss/tds-mobile';
import { colors } from '@toss/tds-colors';

<ListHeader
  title={
    <ListHeader.TitleParagraph
      typography="t5"
      color={colors.grey800}
      fontWeight="bold"
    >
      섹션 제목
    </ListHeader.TitleParagraph>
  }
/>
```

#### List & ListRow

```tsx
import { List, ListRow } from '@toss/tds-mobile';

<List style={{ width: '100%' }}>
  {/* 1줄 타입 */}
  <ListRow
    border="indented"
    contents={<ListRow.Texts type="1RowTypeA" top="1줄 텍스트" />}
  />
  
  {/* 2줄 타입 */}
  <ListRow
    border="indented"
    contents={
      <ListRow.Texts
        type="2RowTypeA"
        top="상단 텍스트"
        bottom="하단 텍스트"
      />
    }
  />
  
  {/* 클릭 가능한 ListRow */}
  <ListRow
    border="indented"
    withArrow
    onClick={() => handleClick()}
    contents={<ListRow.Texts type="1RowTypeA" top="클릭 가능" />}
  />
  
  {/* 왼쪽 아이콘/이미지 추가 */}
  <ListRow
    border="indented"
    left={
      <div
        className="w-10 h-10 rounded-full"
        style={{ backgroundColor: colors.blue500 }}
      />
    }
    contents={<ListRow.Texts type="1RowTypeA" top="왼쪽 아이템 포함" />}
  />
</List>
```

### TextField 컴포넌트

입력 필드를 표시할 때 사용합니다.

```tsx
import { TextField } from '@toss/tds-mobile';

const [value, setValue] = useState('');

<TextField
  variant="box"
  label="라벨"
  placeholder="플레이스홀더"
  value={value}
  onChange={(e) => setValue(e.target.value)}
  style={{ width: '100%' }}
/>

// 항상 라벨 표시
<TextField
  variant="box"
  label="라벨"
  labelOption="sustain"
  placeholder="텍스트 입력"
  style={{ width: '100%' }}
/>

// 에러 상태
<TextField
  variant="box"
  label="에러 필드"
  hasError
  help="에러 메시지입니다"
  value="잘못된 값"
/>

// 비활성화
<TextField
  variant="box"
  label="비활성화"
  disabled
  value="비활성화된 필드"
/>
```

### Slider 컴포넌트

슬라이더 입력을 표시할 때 사용합니다.

```tsx
import { Slider } from '@toss/tds-mobile';

const [value, setValue] = useState(1);

<Slider
  value={value}
  minValue={0.5}
  maxValue={3}
  step={0.1}
  label={{ min: '0.5배', mid: '보통', max: '3배' }}
  onValueChange={setValue}
  style={{ width: '100%' }}
/>
```

### Top 컴포넌트

페이지 상단 헤더를 표시합니다.

```tsx
import { Top, Asset } from '@toss/tds-mobile';

<Top
  // 상단 이미지/아이콘
  upper={
    <Top.UpperAssetContent
      content={
        <Asset.Lottie
          frameShape={Asset.frameShape.SquareLarge}
          scale={1}
          src="https://example.com/lottie.json"
        />
      }
    />
  }
  // 부제목
  subtitleTop={
    <Top.SubtitleParagraph>
      부제목
    </Top.SubtitleParagraph>
  }
  // 제목
  title={
    <Top.TitleParagraph size={28}>
      페이지 제목
    </Top.TitleParagraph>
  }
  // 우측 버튼
  right={<Top.RightButton variant="weak">버튼</Top.RightButton>}
/>
```

### BottomCTA 컴포넌트

하단 고정 버튼을 표시합니다.

```tsx
import { BottomCTA } from '@toss/tds-mobile';

// 단일 버튼
<BottomCTA.Single
  fixed
  onClick={handleClick}
  size="xlarge"
  variant="fill"
  style={{ width: '100%' }}
>
  계속하기
</BottomCTA.Single>

// 이중 버튼
<BottomCTA.Double
  fixed
  left={
    <BottomCTA.Button variant="weak" onClick={handleCancel}>
      취소
    </BottomCTA.Button>
  }
  right={
    <BottomCTA.Button variant="fill" onClick={handleConfirm}>
      확인
    </BottomCTA.Button>
  }
/>
```

### Result 컴포넌트

빈 상태나 완료 화면을 표시합니다.

```tsx
import { Result, Asset } from '@toss/tds-mobile';

<Result
  figure={
    <Asset.Image
      src="https://example.com/empty-state.png"
      frameShape={Asset.frameShape.CleanH60}
    />
  }
  title="아직 데이터가 없습니다"
  description="새로운 항목을 추가해보세요"
  button={
    <Result.Button onClick={handleStart}>
      시작하기
    </Result.Button>
  }
/>
```

### Toast (useToast)

토스트 메시지를 표시합니다.

```tsx
import { useToast } from '@toss/tds-mobile';

const toast = useToast();

// 성공 토스트
toast.openToast('저장되었습니다', {
  icon: 'icn-success-color',
});

// 에러 토스트
toast.openToast('오류가 발생했습니다', {
  icon: 'icn-error-color',
});
```

### Border 컴포넌트

섹션 사이 구분선을 표시합니다.

```tsx
import { Border } from '@toss/tds-mobile';

<Border variant="height8" />
<Border variant="height16" />
```

### Tab 컴포넌트

탭 네비게이션을 표시합니다.

```tsx
import { Tab } from '@toss/tds-mobile';

const [tabValue, setTabValue] = useState('tab1');

<Tab
  onChange={(index) => setTabValue(`tab${index + 1}`)}
  style={{ width: '100%' }}
>
  <Tab.Item selected={tabValue === 'tab1'}>탭 1</Tab.Item>
  <Tab.Item selected={tabValue === 'tab2'}>탭 2</Tab.Item>
  <Tab.Item selected={tabValue === 'tab3'}>탭 3</Tab.Item>
</Tab>

// Small 사이즈
<Tab size="small" onChange={handleChange}>
  <Tab.Item selected={selected === 0}>탭 1</Tab.Item>
  <Tab.Item selected={selected === 1}>탭 2</Tab.Item>
</Tab>

// 알림 표시
<Tab onChange={handleChange}>
  <Tab.Item selected={selected === 0} redBean>
    알림있음
  </Tab.Item>
  <Tab.Item selected={selected === 1}>탭 2</Tab.Item>
</Tab>
```

### SegmentedControl 컴포넌트

세그먼트 컨트롤을 표시합니다.

```tsx
import { SegmentedControl } from '@toss/tds-mobile';

const [value, setValue] = useState('1');

<SegmentedControl
  value={value}
  onChange={(value) => setValue(value)}
>
  <SegmentedControl.Item value="1">아이템1</SegmentedControl.Item>
  <SegmentedControl.Item value="2">아이템2</SegmentedControl.Item>
  <SegmentedControl.Item value="3">아이템3</SegmentedControl.Item>
</SegmentedControl>
```

### Badge 컴포넌트

뱃지를 표시합니다.

```tsx
import { Badge } from '@toss/tds-mobile';

// Size variants
<Badge variant="fill" size="xsmall" color="blue">XSmall</Badge>
<Badge variant="fill" size="small" color="blue">Small</Badge>
<Badge variant="fill" size="medium" color="blue">Medium</Badge>
<Badge variant="fill" size="large" color="blue">Large</Badge>

// Colors
<Badge variant="fill" size="medium" color="blue">Blue</Badge>
<Badge variant="fill" size="medium" color="teal">Teal</Badge>
<Badge variant="fill" size="medium" color="green">Green</Badge>
<Badge variant="fill" size="medium" color="red">Red</Badge>
<Badge variant="fill" size="medium" color="yellow">Yellow</Badge>

// Weak variant
<Badge variant="weak" size="medium" color="blue">Blue</Badge>
```

### TableRow 컴포넌트

키-값 쌍을 표시합니다.

```tsx
import { TableRow } from '@toss/tds-mobile';

// Space-between 정렬
<TableRow
  align="space-between"
  left="계좌번호"
  right="1234-5678-90"
/>

// Left 정렬 (leftRatio 30%)
<TableRow
  align="left"
  left="이름"
  right="김토스"
  leftRatio={30}
/>
```

---

## 스타일링 가이드라인

### TDS 컴포넌트 스타일링

**TDS 컴포넌트에는 `className`을 사용할 수 없습니다.** 대신 `style` prop을 사용합니다.

```tsx
// ❌ 잘못된 예시
<Button className="mt-4 w-full">버튼</Button>

// ✅ 올바른 예시
<Button style={{ marginTop: '16px', width: '100%' }}>버튼</Button>
```

### 레이아웃 래퍼 스타일링

레이아웃을 위한 wrapper `<div>`에는 TailwindCSS 클래스를 사용할 수 있습니다.

```tsx
// ✅ 레이아웃 wrapper에 className 사용 가능
<div className="flex gap-4 items-center">
  <Button size="medium">버튼 1</Button>
  <Button size="medium">버튼 2</Button>
</div>

<div className="w-full max-w-md mx-auto">
  <TextField
    variant="box"
    label="입력"
    style={{ width: '100%' }}
  />
</div>
```

### HorizontalPadding 컴포넌트 활용

좌우 패딩이 필요할 때는 `HorizontalPadding` 컴포넌트를 사용합니다.

```tsx
import { HorizontalPadding } from '~/components/horizontal-padding';

<HorizontalPadding className="flex gap-3">
  <Button size="medium">버튼 1</Button>
  <Button size="medium">버튼 2</Button>
</HorizontalPadding>
```

### 색상과 타이포그래피

직접 색상값이나 폰트 크기를 지정하지 않고, TDS의 토큰을 사용합니다.

```tsx
// ❌ 잘못된 예시
<Paragraph.Text style={{ fontSize: '20px', color: '#000000' }}>
  텍스트
</Paragraph.Text>

// ✅ 올바른 예시
<Paragraph.Text typography="t4" color={colors.grey900}>
  텍스트
</Paragraph.Text>
```

---

## 토스스러운 UI/UX 패턴

### 1. 명확한 정보 계층

타이포그래피를 활용하여 정보의 중요도를 시각적으로 구분합니다.

```tsx
// 페이지 제목
<Paragraph.Text typography="t2" fontWeight="bold" color={colors.grey900}>
  페이지 제목
</Paragraph.Text>

// 섹션 제목
<Paragraph.Text typography="t5" fontWeight="bold" color={colors.grey800}>
  섹션 제목
</Paragraph.Text>

// 본문
<Paragraph.Text typography="t5" color={colors.grey800}>
  본문 내용
</Paragraph.Text>

// 보조 정보
<Paragraph.Text typography="t7" color={colors.grey700}>
  보조 정보 (안 읽어도 됨)
</Paragraph.Text>
```

### 2. 적절한 여백 사용

Border 컴포넌트로 섹션을 구분합니다.

```tsx
<Section1 />
<Border variant="height16" />
<Section2 />
<Border variant="height16" />
<Section3 />
```

### 3. 터치 영역 확보

ListRow에 onClick을 추가하면 자동으로 터치 효과가 적용됩니다.

```tsx
<ListRow
  border="indented"
  onClick={() => navigate('/detail')}
  withArrow
  contents={<ListRow.Texts type="1RowTypeA" top="클릭 가능한 항목" />}
/>
```

### 4. 명확한 상태 표시

로딩, 비활성화 등의 상태를 명확히 표시합니다.

```tsx
// 로딩 상태
<Button loading>처리 중...</Button>

// 비활성화 상태
<Button disabled>사용 불가</Button>

// TextField 에러 상태
<TextField
  variant="box"
  label="이메일"
  hasError
  help="올바른 이메일을 입력해주세요"
  value={email}
/>
```

### 5. 일관된 버튼 위계

Primary 액션은 fill variant, Secondary 액션은 weak variant를 사용합니다.

```tsx
// 주요 액션
<Button variant="fill" color="primary">
  다음
</Button>

// 보조 액션
<Button variant="weak" color="dark">
  취소
</Button>

// 위험한 액션
<Button variant="fill" color="danger">
  삭제
</Button>
```

### 6. Bottom CTA 활용

주요 액션 버튼은 하단에 고정합니다.

```tsx
<BottomCTA.Single
  fixed
  onClick={handleSubmit}
  size="xlarge"
  disabled={!isValid}
>
  제출하기
</BottomCTA.Single>
```

### 7. 피드백 제공

사용자 액션에 대한 피드백을 토스트로 제공합니다.

```tsx
const toast = useToast();

const handleSave = async () => {
  try {
    await saveData();
    toast.openToast('저장되었습니다', {
      icon: 'icn-success-color',
    });
  } catch (error) {
    toast.openToast('저장에 실패했습니다', {
      icon: 'icn-error-color',
    });
  }
};
```

---

## 참고 문서

### 프로젝트 내 문서
- TDS Introduction: docs/toss-design-system/introduction.md
- Colors: docs/toss-design-system/foundation/colors.md
- Typography: docs/toss-design-system/foundation/typography.md
- Components: docs/toss-design-system/components/ (40+ 컴포넌트 문서)

### 예제 코드
- demo-page.tsx: src/pages/demo-page.tsx - TDS 컴포넌트 사용 예제

### 주요 컴포넌트 문서
- Button: docs/toss-design-system/components/button.md
- Paragraph: docs/toss-design-system/components/paragraph.md
- ListRow: docs/toss-design-system/components/list-row/overview.md
- TextField: docs/toss-design-system/components/text-field/text-field.md
- Top: docs/toss-design-system/components/top.md
- BottomCTA: docs/toss-design-system/components/bottom-cta/single.md

---

## 빠른 체크리스트

새로운 컴포넌트를 만들 때:

- [ ] TDS 컴포넌트를 우선적으로 사용했는가?
- [ ] TDS 컴포넌트에 `className` 대신 `style`을 사용했는가?
- [ ] `<button>`, `<div>`, `<p>` 같은 기본 HTML 태그 대신 TDS 컴포넌트를 사용했는가?
- [ ] 색상은 `colors` 객체에서 가져왔는가?
- [ ] 텍스트는 `typography` 토큰을 사용했는가?
- [ ] 적절한 여백과 구분선(Border)을 사용했는가?
- [ ] 버튼의 위계(fill/weak, primary/danger)가 적절한가?
- [ ] 사용자 피드백(Toast, 로딩 상태 등)을 제공하는가?
