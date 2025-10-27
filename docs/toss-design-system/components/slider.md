# Slider Component Documentation

## Overview

The `Slider` component enables users to select numeric values by dragging a handle along a horizontal track within a specified range. It provides visual representation and intuitive control for numeric selection scenarios.

## Key Features

### Color Customization
Users can modify the slider's track color using the `color` property. This enhances visual feedback and communicates specific states or meanings. The default color is `blue400`.

### Label Display
The `label` property allows developers to display minimum, maximum, and optional middle values beneath the slider. This is particularly useful in scenarios like price range selection, where showing "100 만원," "150 만원," and "200 만원" helps users identify the range clearly.

### Tooltip Integration
Using `tooltip` with `Slider.Tooltip`, developers can display the current value in real-time above the slider. This feature proves invaluable for precise value selection and providing immediate feedback during interaction.

## Core Props

| Property | Type | Purpose |
|----------|------|---------|
| `value` | number | Current slider value |
| `onValueChange` | function | Callback when value changes |
| `minValue` | number | Minimum allowed value |
| `maxValue` | number | Maximum allowed value |
| `color` | string | Track color customization |
| `label` | object | Min/max/mid labels display |
| `tooltip` | ReactElement | Tooltip component configuration |

## Usage Patterns

The component supports both controlled and uncontrolled patterns through `value`/`defaultValue` properties, making it flexible for various implementation needs.
