# Icon Button Component Documentation

## Overview

The `IconButton` component enables users to trigger actions or events through icon-based interactions. It maintains a clean UI while conveying functionality intuitively through visual representation.

## Usage

### Variants

The component supports three distinct visual styles controlled via the `variant` prop:

**Clear**
Displays the icon without background coloring in its default state. Background color appears when pressed.

**Fill**
Applies a background color to emphasize the icon. The background disappears upon interaction.

**Border**
Renders a bordered frame around the icon for visual distinction. Background becomes visible when clicked.

## Customization

### Icon Color
Modify icon appearance using the `color` prop. This works exclusively with mono-style icons (those ending in `-mono`).

### Background Color
The `bgColor` prop adjusts the button's background. With `variant="fill"`, the color applies persistently. For `'clear'` and `'border'` variants, it shows only during interaction.

### Icon Sizing
Control icon dimensions via the `iconSize` prop, which accepts numeric values representing pixels.

## Accessibility Requirements

The `aria-label` attribute is **mandatory** for every IconButton instance. Since icons alone lack semantic meaning, explicit action descriptions via `aria-label` are essential for screen reader users.

```
<IconButton
  src="https://static.toss.im/icons/svg/icon-search-bold-mono.svg"
  aria-label="Search functionality"
/>
```

## Interface

### IconButtonProps

| Property | Default | Type | Notes |
|----------|---------|------|-------|
| **aria-label** | Required | `string` | Mandatory accessibility descriptor |
| variant | `'clear'` | `"fill" \| "clear" \| "border"` | Visual style selection |
| src | — | `string` | Icon URL (incompatible with `name`) |
| name | — | `string` | Icon identifier (incompatible with `src`) |
| color | — | `string` | Mono icon color only |
| bgColor | `adaptive.greyOpacity100` | `string` | Background styling |
| iconSize | `24` | `number` | Pixel-based dimensions |
