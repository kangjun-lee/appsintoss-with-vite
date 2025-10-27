# useToast Hook Documentation

## Overview

The `useToast` utility hook enables developers to display brief, temporary notification messages on screen. It's useful for providing user feedback or alerting about events.

## How It Works

### Web Environment
- Toast messages automatically disappear after a set duration
- Default: 3000ms (no button), 5000ms (with button)
- Duration is customizable via the `duration` property
- Manual dismissal available through `closeToast` method

### App Environment
- Different default positions for Android and iOS
  - Android: 26px from top
  - iOS: 46px from top
- Automatically accounts for `SafeArea` and `BottomCTA` component heights
- Manual close method unavailable; designed for app bridge environments

## Usage Examples

### Basic Toast Message
```javascript
function Basic() {
  const toast = useToast();
  return (
    <Button
      onClick={() => {
        toast.openToast('메시지를 전송했어요');
      }}
    >
      기본 토스트 열기
    </Button>
  );
}
```

### With Icon
```javascript
function IconToast() {
  const toast = useToast();
  return (
    <Button
      onClick={() => {
        toast.openToast('프로필을 업데이트했어요', {
          icon: 'icon-check',
          iconType: 'circle',
        });
      }}
    >
      아이콘 토스트 열기
    </Button>
  );
}
```

### With Button
```javascript
function ButtonToast() {
  const toast = useToast();
  return (
    <Button
      onClick={() => {
        toast.openToast('결제에 실패했어요', {
          icon: 'icon-warning-circle',
          button: {
            text: '다시 시도하기',
            onClick: () => alert('결제 재시도'),
          },
        });
      }}
    >
      버튼 토스트 열기
    </Button>
  );
}
```

### Position Control
```javascript
function PositionToast() {
  const toast = useToast();
  return (
    <Button
      onClick={() => {
        toast.openToast('새로운 알림이 있어요', {
          type: 'top',
          gap: 30,
        });
      }}
    >
      상단 토스트 열기
    </Button>
  );
}
```

### Custom Duration
```javascript
function AnimationTimingToast() {
  const toast = useToast();
  return (
    <Button
      onClick={() => {
        toast.openToast('메시지예요', {
          duration: 1000,
        });
      }}
    >
      애니메이션 타이밍을 조절한 토스트 열기
    </Button>
  );
}
```

## API Reference

### ToastButton Interface
| Property | Type | Description |
|----------|------|-------------|
| `text` * | string | Button label text |
| `onClick` * | () => void | Click handler function |

### OpenToastOptions Interface
| Property | Default | Type | Description |
|----------|---------|------|-------------|
| `type` | 'bottom' | "top" \| "bottom" | Toast message position |
| `gap` | - | number | Distance from screen edge (overrides other values) |
| `icon` | - | string | Icon name (incompatible with lottie) |
| `iconType` | undefined | "circle" \| "square" | Icon shape |
| `lottie` | - | string | Lottie animation URL (incompatible with icon) |
| `button` | - | ToastButton | Optional button configuration |
| `higherThanCTA` | false | boolean | Display above BottomCTA component |
| `duration` | - | number | Display duration in milliseconds (5000ms with button, 3000ms without) |
