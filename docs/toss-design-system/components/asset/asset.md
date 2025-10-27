# Asset - Wrapped Components Documentation

## Overview

The Toss Design System provides pre-wrapped combinations of frequently used `Frame` component with `ContentIcon`, `ContentImage`, `ContentLottie`, `ContentText`, and `ContentVideo` components for easier implementation.

## Wrapped Components

The library offers five wrapped asset components:

- `Asset.Icon` = `Frame` + `ContentIcon`
- `Asset.Image` = `Frame` + `ContentImage`
- `Asset.Lottie` = `Frame` + `ContentLottie`
- `Asset.Text` = `Frame` + `ContentText`
- `Asset.Video` = `Frame` + `ContentVideo`

### Property Naming Convention

The `Frame` component's `shape` property is renamed to `frameShape` in wrapped components:

```tsx
// Direct Frame usage
<Frame shape={{ width: 100, height: 100 }} {...restProps} />

// Wrapped component usage
<Asset.Image frameShape={{ width: 100, height: 100 }} {...restProps} />
```

Pre-defined frameShape presets are available for common dimensions.

## Usage Examples

### Icon Assets

Display icons with consistent sizing and styling within frames.

```tsx
<Asset.Icon color="green" name="heart-line" />
```

**Color customization** accepts CSS color values and adaptive color system values:

```tsx
<div style={{ display: 'flex', flexDirection: 'row', gap: '32px' }}>
  <Asset.Icon color="green" name="heart-line" />
  <Asset.Icon color="red" name="heart-line" />
  <Asset.Icon color="blue" name="heart-line" />
</div>
```

### Image Assets

Display images with configurable sizing and scaling behavior:

```tsx
<Asset.Image
  frameShape={{ height: 100, width: 100 }}
  scaleType="crop"
  src="https://static.toss.im/2d-emojis/svg/u1F600.svg"
/>
```

### Lottie Animations

Render Lottie animation files:

```tsx
<Asset.Lottie
  frameShape={{ height: 300, width: 300 }}
  scaleType="crop"
  src="https://static.toss.im/lotties/activation/1won_new/1won.json"
/>
```

### Text Assets

Display text content within framed containers:

```tsx
<Asset.Text frameShape={{ height: 100, width: 100 }}>
  Text
</Asset.Text>
```

### Video Assets

Embed and control video playback:

```tsx
<Asset.Video
  frameShape={{ height: 200, width: 200 }}
  as="video"
  src="https://static.toss.im/3d/number-100-light.mp4"
/>
```

#### Video Control Properties

- `controls`: Display playback controls
- `autoPlay`: Enable automatic playback on load
- `loop`: Repeat video when finished
- `muted`: Mute audio
- `playsInline`: Play inline on supported devices

```tsx
<Asset.Video
  frameShape={{ height: 200, width: 200 }}
  as="video"
  src="https://static.toss.im/3d/number-100-light.mp4"
  controls
  autoPlay={false}
  loop={false}
/>
```

## API Reference

### IconProps

| Property | Default | Type | Description |
|----------|---------|------|-------------|
| **name** | - | string | Icon identifier |
| **color** | - | string | Icon color value |

### ImageProps

| Property | Default | Type | Description |
|----------|---------|------|-------------|
| **src** | - | string | Image URL |
| **scaleType** | 'fit' | "fit" \| "crop" | Scaling mode (fit maintains ratio; crop fills frame) |
| **alt** | - | string | Alternative text |

### VideoProps

| Property | Default | Type | Description |
|----------|---------|------|-------------|
| **src** | - | string | Video URL |
| **autoPlay** | true | boolean | Auto-play on load |
| **loop** | true | boolean | Loop playback |
| **muted** | true | boolean | Mute audio |
| **controls** | false | boolean | Show controls |
| **playsInline** | true | boolean | Inline playback mode |

### LottieProps

| Property | Default | Type | Description |
|----------|---------|------|-------------|
| **src** | - | string | Animation file URL |
| **scaleType** | 'fit' | "fit" \| "crop" | Scaling mode |

### TextProps

| Property | Default | Type | Description |
|----------|---------|------|-------------|
| **children** | - | ReactNode | Text content |

### AssetCommonType

| Property | Default | Type | Description |
|----------|---------|------|-------------|
| **frameShape** | - | FrameShapeType | Frame dimensions and shape |
| **backgroundColor** | - | string | Frame background color |
| **id** | - | string | Component identifier |
| **className** | - | string | CSS class name |
| **style** | - | CSSProperties | Inline styles |
| **acc** | - | ReactNode | Accessory elements |
| **accPosition** | 'bottom-right' | FrameAccPositionType | Accessory placement |
| **overlap** | - | { color: string } | Overlap indicator styling |
