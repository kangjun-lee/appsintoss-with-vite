# Badge Component Documentation

## Overview

The Badge component highlights an item's status for quick recognition. It's a visual indicator used in the Toss Design System Mobile.

## Usage

### Size Variants

The component supports four size options via the `size` prop:
- **xsmall**: Smallest badge variant
- **small**: Small badge variant
- **medium**: Medium badge variant
- **large**: Largest badge variant

### Style Variants

Two visual styles are available through the `variant` prop:

**Fill Style**
The "fill" variant features high saturation, creating a visually striking appearance ideal for emphasizing primary items.

**Weak Style**
The "weak" variant uses lower saturation for a more subtle visual presence.

### Color Options

The `color` prop accepts the following palette options:
- blue
- teal
- green
- red
- yellow
- elephant

## Props Interface

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `variant` | "fill" \| "weak" | Yes | Controls badge color saturation and transparency |
| `size` | "xsmall" \| "small" \| "medium" \| "large" | Yes | Determines badge dimensions |
| `color` | "blue" \| "teal" \| "green" \| "red" \| "yellow" \| "elephant" | Yes | Sets the badge color |

## Design Characteristics

- Inline-flex display with centered alignment
- Customizable padding and border-radius based on typography scale
- Typography-driven sizing system
- Bold font weight (700)
- 1.5em line height
