# BottomCTA.Single Component Documentation

## Overview

`BottomCTA.Single` is a simplified CTA (Call-To-Action) component that renders a **single button** at the bottom of the mobile screen. It's part of the Toss Design System's BottomCTA component family.

## Key Features

The component supports:
- Single button rendering with customizable content
- Background styling (default or transparent)
- SafeArea padding support for notched devices
- Keyboard integration with fixed positioning above input fields
- Scroll-based visibility toggling
- Animated entrance effects (fade, scale, slide)
- Accessory elements (top and bottom)

## Usage Patterns

### Basic Implementation

The component accepts children content that renders inside the button:

```jsx
<BottomCTA.Single>
  여기는 설명이 들어갑니다
</BottomCTA.Single>
```

### Remove Background

To eliminate the gradient and background color, set the `background` prop to `"none"`.

### SafeArea Support

When `hasSafeAreaPadding` is `true` (default), the component adds padding-bottom equal to the device's safe area. The system uses the `--toss-safe-area-bottom` CSS variable for this measurement.

### Keyboard Integration

Setting `fixedAboveKeyboard` to `true` positions the button above mobile keyboards, enabling seamless interaction during text input. This feature is exclusive to `BottomCTA.Single`.

### Accessory Elements

Use `topAccessory` and `bottomAccessory` props to render content above or below the button.

### Animated Entrance

The `showAfterDelay` prop triggers initial animations with configurable timing and effect types (slide, fade, or scale).

### Scroll Behavior

Enable `hideOnScroll` to automatically hide the button during downward scrolling and reveal it when scrolling upward. Control sensitivity using `hideOnScrollDistanceThreshold`.

## API Reference

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| **children** | `React.ReactNode` | Required | Button content |
| `showAfterDelay` | `{ animation, delay }` | — | Initial entrance animation |
| `show` | `boolean` | `false` | Toggle visibility with animation |
| `hideOnScroll` | `boolean` | `false` | Auto-hide on scroll |
| `hideOnScrollDistanceThreshold` | `number` | `1` | Scroll distance (px) to trigger hide |
| `hasSafeAreaPadding` | `boolean` | `true` | Apply safe area bottom padding |
| `hasPaddingBottom` | `boolean` | `true` | Enable padding-bottom |
| `takeSpace` | `boolean` | — | Reserve layout space when fixed |
| `fixed` | `boolean` | — | Fix to screen bottom |
| `containerStyle` | `React.CSSProperties` | — | Custom container styles |
| `containerRef` | `React.Ref` | — | Container element reference |
| `background` | `"default"` \| `"none"` | `"default"` | Background styling |
| `topAccessory` | `React.ReactNode` | — | Top element |
| `bottomAccessory` | `React.ReactNode` | — | Bottom element |
| `fixedAboveKeyboard` | `boolean` | — | Position above keyboards |

## Important Notes

⚠️ Avoid modifying `opacity` or `bottom` CSS properties via `containerStyle` when mobile keyboards are active, as this may cause layout conflicts.
