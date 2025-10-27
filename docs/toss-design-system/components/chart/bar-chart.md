# BarChart Component Documentation

## Overview

The `BarChart` component is a data visualization tool that displays information using bar graph format. It allows developers to represent data through bar heights and apply colors to emphasize specific bars, enabling users to quickly understand data importance.

## Basic Usage

### Data Structure

Each data item requires:

- **maxValue**: Sets the maximum value for the entire chart; all bar values display as a proportion of this maximum
- **value**: The actual bar value determining height
- **label**: X-axis text describing each bar
- **barAnnotation**: Text or number displayed above each bar
- **theme**: Bar color (`blue`, `green`, `yellow`, `orange`, `red`, `grey`, `default`)

```jsx
<BarChart
  data={[
    { maxValue: 10, value: 6, label: '1월', barAnnotation: 6 },
    { maxValue: 10, value: 5, label: '2월', barAnnotation: 5 },
  ]}
  fill={{
    type: 'all-bar',
    theme: 'green',
  }}
/>
```

## Styling Options

### All-Bar Mode
Applies uniform color across all bars using the `all-bar` type with a specified theme.

### Single-Bar Mode
Highlights one bar by specifying its index via the `single-bar` type with `barIndex` and `theme` properties.

### Auto Mode
Automatically colors multiple bars from right to left following the sequence: blue → green → yellow → orange → red → grey. Specify the `count` property for how many bars to color.

## Configuration

**Height Property**: Sets overall chart height in pixels (default: 205px). This adjusts total component dimensions, not individual bar heights.

**Large Datasets**: When exceeding 12 data items, only the first and last bars display labels and annotations to prevent overlap.

## Interface

### BarChartProps

| Property | Default | Type | Description |
|----------|---------|------|-------------|
| `data` | — | `BarChartData[]` | Chart data array |
| `fill` | — | `AllBar \| SingleBar \| Auto` | Fill configuration |
| `height` | 205 | `number` | Chart height in pixels |

### BarChartData

| Property | Type | Description |
|----------|------|-------------|
| `value` | `number` | Bar length value |
| `maxValue` | `number` | Maximum value (auto-calculated if omitted) |
| `label` | `string` | X-axis label |
| `theme` | Color enum | Bar color selection |
| `barAnnotation` | `string \| number` | Text/number above bar |

### Fill Types

**AllBar**: `{ type: 'all-bar', theme: ColorTheme }`

**SingleBar**: `{ type: 'single-bar', barIndex: number, theme: ColorTheme }`

**Auto**: `{ type: 'auto', count: number }`
