# Asset 활용하기 - Toss Design System

## Overview

The `Asset` component framework enables consistent styling for asset presentation through the `Frame` component, which manages size, shape, background, and related visual properties.

## Key Components

### Frame Component
The foundational component providing unified styling for all Asset components. It combines:
- **Frame**: Handles sizing, shape, background color, and accessories
- **Content Component**: Renders the actual asset (image, video, text, etc.)

## Usage Examples

### Basic Frame Usage

```jsx
<Asset.Frame
  shape={Asset.frameShape.RectangleLarge}
  content={<Asset.ContentImage src="emoji.svg" alt="smile" />}
/>
```

### Preset Frame Shapes

Available presets organize assets by category:

- **Square**: Small, Medium, Large sizes
- **Rectangle**: Medium, Large sizes
- **Circle**: Small, Medium, Large sizes
- **Card**: Small, Medium, Large sizes

Access via `Asset.frameShape.[ShapeName]`

### Accessories

Add supplementary elements to frames:

```jsx
<Asset.Image
  src="image.svg"
  frameShape={Asset.frameShape.SquareSmall}
  acc={<Asset.ContentImage src="badge.svg" />}
  accPosition="bottom-right"
/>
```

**Position options**: `top-left`, `top-right`, `bottom-left`, `bottom-right`

### Overlap Effects

Indicate grouped items using overlap:

```jsx
<Asset.Image
  src="image.svg"
  overlap={{ color: '#3182F6' }}
/>
```

### Scale Type Control

Manage image fitting behavior:

- **fit**: Maintains aspect ratio within frame bounds
- **crop**: Fills frame, clipping overflow

```jsx
<Asset.Lottie
  frameShape={{ height: 200, width: 200 }}
  scaleType="fit"
  src="animation.json"
/>
```

### Custom Frame Sizing

```jsx
<Asset.Text
  frameShape={{ height: 200, width: 200 }}
  backgroundColor={colors.greyBackground}
>
  Text
</Asset.Text>
```

## Interface Documentation

### FrameProps

| Property | Default | Type | Description |
|----------|---------|------|-------------|
| **content*** | — | `React.ReactNode` | Primary content displayed within frame |
| **shape*** | — | `FrameShapeType` | Defines frame dimensions and shape |
| **backgroundColor** | `adaptive.grey100` | `string` | Frame background color |
| **acc** | — | `React.ReactNode` | Accessory elements (badges, indicators) |
| **accPosition** | `bottom-right` | Position enum | Accessory placement location |
| **accMasking** | `none` | `"circle"\|"none"` | Content masking under accessory |
| **overlap** | — | `{ color: string }` | Overlap effect styling |
| **color** | — | `string` | Content color (typically icons) |

### FrameShapeType

| Property | Type | Description |
|----------|------|-------------|
| **width** | `string\|number` | Frame width |
| **height** | `string\|number` | Frame height |
| **radius** | `string\|number` | Corner border-radius |
| **acc** | `FrameAccShapeType` | Accessory configuration |
| **overlap** | `FrameOverlapShapeType` | Overlap settings |

### FrameAccShapeType

| Property | Type | Description |
|----------|------|-------------|
| **width** | `string\|number` | Accessory width |
| **height** | `string\|number` | Accessory height |
| **x** | `string\|number` | X-axis position |
| **y** | `string\|number` | Y-axis position |

### FrameOverlapShapeType

| Property | Type | Description |
|----------|------|-------------|
| **x** | `string\|number` | X-axis offset |
| **y** | `string\|number` | Y-axis offset |
| **blur** | `string\|number` | Blur intensity |
| **spread** | `string\|number` | Spread distance |

## Related Resources

- [Asset 이해하기](/tds-mobile/components/Asset/check-first/) - Conceptual foundation
- [래핑한 컴포넌트 활용하기](/tds-mobile/components/Asset/asset/) - Pre-wrapped component usage
