# Skeleton Component Documentation

## Overview

The `Skeleton` component temporarily displays a basic layout structure while content loads, allowing users to see the content structure instead of a blank screen. This improves user experience during slow loading times.

## Usage

### Predefined Patterns

The component offers nine preset patterns for common layouts:

- **topList**: Title at top with list
- **topListWithIcon**: Title at top with icon-inclusive list
- **amountTopList**: Title and subtitle at top with list
- **amountTopListWithIcon**: Title, subtitle at top with icon-inclusive list
- **subtitleList**: List with subtitle
- **subtitleListWithIcon**: List with subtitle and icon
- **listOnly**: List format only
- **listWithIconOnly**: Icon-inclusive list
- **cardOnly**: Card format only

### Custom Patterns

Define custom layouts using an array of pattern types:

- **title**: Bold, large skeleton bar for headings
- **subtitle**: Thinner skeleton bar for secondary text
- **list**: Multi-line horizontal bars for data lists
- **listWithIcon**: List with icon placeholder
- **card**: Rectangular block for card layouts
- **spacer(${number})**: Adds customizable whitespace (e.g., `spacer(20)`)

Example: `custom={['title', 'subtitle', 'spacer(20)', 'card']}`

### Repeat Configuration

Use `repeatLastItemCount` to repeat the final element:
- Accepts a number (default: 3)
- Use `'infinite'` for unlimited repetition (max 30 times)

### Background Colors

Set via `background` prop:
- **white**: Light backgrounds
- **grey**: Standard loading screens
- **greyOpacity100**: Opaque dark grey for emphasis

## Props Interface

| Property | Default | Type | Description |
|----------|---------|------|-------------|
| **height** | `auto` | `string` \| `number` | Sets component height |
| **pattern** | `topList` | Predefined pattern strings | Layout pattern selection |
| **custom** | — | Array of pattern types | Custom layout definition |
| **repeatLastItemCount** | `3` | `number` \| `"infinite"` | Repeats final element |
| **play** | `show` | `"show"` \| `"hide"` | Toggle visibility |
| **background** | `grey` | Color options | Background color setting |
