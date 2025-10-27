# BottomCTA.Double Documentation

## Overview

`BottomCTA.Double` is a component variant that renders **two buttons** at the bottom of the screen, designed for mobile interfaces.

## Usage

### Basic Implementation

The component requires two button props:

```jsx
<BottomCTA.Double
  leftButton={<CTAButton color="danger" variant="weak">Left</CTAButton>}
  rightButton={<CTAButton>Right</CTAButton>}
/>
```

### Removing Background

To eliminate the default background styling, set the `background` prop to `"none"`:

```jsx
<BottomCTA.Double
  background="none"
  leftButton={...}
  rightButton={...}
/>
```

### SafeArea Padding

The `hasSafeAreaPadding` property (default: `true`) adds bottom padding equivalent to device safe areas. The component uses the CSS variable `--bottom-cta-padding-bottom`, which incorporates `--toss-safe-area-bottom` values from webview user-agent data.

### Styling the Container

Customize the outermost element using `containerStyle`. However, avoid modifying `opacity` or `bottom` properties when mobile keyboards are present.

### Adding Accessory Elements

Use `topAccessory` and `bottomAccessory` props to insert content above or below the button container.

### Animation Options

The `showAfterDelay` property enables initial animations with configurable timing:

```jsx
<BottomCTA.Double
  showAfterDelay={{ animation: 'fade', delay: 1 }}
  leftButton={...}
  rightButton={...}
/>
```

Supported animations: `'slide'`, `'fade'`, `'scale'`

### Scroll-Based Hiding

Enable `hideOnScroll` to automatically hide buttons during scrolling. Use `hideOnScrollDistanceThreshold` to set the scroll distance (in pixels) before visibility changes trigger.

## API Reference

| Property | Default | Type | Description |
|----------|---------|------|-------------|
| **leftButton** * | - | `React.ReactNode` | Left button element |
| **rightButton** * | - | `React.ReactNode` | Right button element |
| showAfterDelay | - | `{ animation: "slide" \| "fade" \| "scale"; delay: number; }` | Initial appearance animation configuration |
| show | false | `boolean` | Toggles animation when visibility changes |
| hideOnScroll | false | `boolean` | Hides during scroll activity |
| hideOnScrollDistanceThreshold | 1 | `number` | Scroll distance in pixels triggering hide behavior |
| hasSafeAreaPadding | true | `boolean` | Applies device safe-area bottom padding |
| hasPaddingBottom | true | `boolean` | Controls overall bottom padding (when false, padding = 0) |
| takeSpace | - | `boolean` | Reserves layout space when fixed |
| fixed | - | `boolean` | Fixes component to screen bottom |
| containerStyle | - | `React.CSSProperties` | Custom container styling |
| containerRef | - | `React.Ref<HTMLDivElement>` | Container element reference |
| background | 'default' | `"default"` \| `"none"` | Background visibility |
| topAccessory | - | `React.ReactNode` | Content rendered above buttons |
| bottomAccessory | - | `React.ReactNode` | Content rendered below buttons |

*Required properties
