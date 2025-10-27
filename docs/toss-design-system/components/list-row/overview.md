# ListRow Component Documentation

## Overview

The `ListRow` component is used to create list-based UIs in the Toss Design System. It provides a structured layout with three distinct regions (left, contents, right) for organizing icons, text, and images into intuitive list items.

## Key Features

- **Three-region structure**: Left (icons/images), Contents (text information), Right (supplementary elements)
- **Touch effects**: Visual feedback when users interact with list items
- **Customizable styling**: Multiple padding, border, and disabled state options
- **Loading states**: Skeleton UI support via `ListRow.Loader`
- **Visual effects**: Shine and blink animations for emphasis

## Basic Structure

The component divides content into:
- **left**: "Leftmost area for icons/images to aid intuitive understanding"
- **contents**: "Central area containing primary text information with layout options"
- **right**: "Rightmost area for supplementary information or interactive elements"

## Styling Options

### Border Styles
- `indented`: "Left-indented divider line separating list items"
- `none`: "No divider; creates connected appearance between items"

### Vertical Padding
Options include `small` (8px), `medium` (12px), `large` (16px), and `xlarge` (24px) to control top/bottom spacing.

### Horizontal Padding
- `small`: 20px
- `medium`: 24px

### Disabled States
- **type1**: "Light background applied for basic disabled styling"
- **type2**: "Additional gray overlay for more prominent disabled appearance"

## Interactive Effects

### Touch Effect
Triggered by `onClick` handler or `withTouchEffect` prop for visual interaction feedback.

### Visual Emphasis
- **shine**: "Glowing effect traversing item; useful for highlighting new additions"
- **blink**: "Full-item flashing effect for drawing user attention"

## Loader Component

The `ListRow.Loader` provides skeleton UI with shape options:
- `square`: "Rectangular placeholder shape"
- `circle`: "Circular placeholder shape"
- `bar`: "Horizontal bar placeholder shape"

## API Reference

### ListRowProps

| Prop | Default | Type | Description |
|------|---------|------|-------------|
| border | indented | "indented"\|"none" | Divider line style |
| disabled | false | boolean | Disable interaction |
| disabledStyle | type1 | "type1"\|"type2" | Disabled appearance |
| verticalPadding | medium | small\|medium\|large\|xlarge | Top/bottom spacing |
| horizontalPadding | medium | small\|medium | Left/right spacing |
| left | - | ReactNode | Left area content |
| contents | - | ReactNode | Center area content |
| right | - | ReactNode | Right area content |
| withArrow | false | boolean | Show arrow icon |
| withTouchEffect | false | boolean | Enable touch feedback |

### ListRowLoaderProps

| Prop | Default | Type |
|------|---------|------|
| type | square | square\|circle\|bar |
| verticalPadding | medium | small\|medium\|large\|extraSmall |
