# Tooltip Component Documentation

## Overview

The `Tooltip` component displays supplementary information when users focus on specific UI elements like icons or buttons. It's commonly positioned above small interface components.

## Usage

### State Management

**External State Control:**
Use the `open` prop to manage the tooltip's open/closed state from a parent component.

**Internal State Control:**
Omit the `open` prop to let the component manage its own state. Use these props:
- `openOnHover`: Opens on mouse hover, closes when pointer leaves
- `openOnFocus`: Opens when focused, closes when focus is lost
- `dismissible`: Closes when clicking outside or pressing Escape
- `defaultOpen`: Sets initial state

## Key Features

**Sizing:** Configure via `size` prop (`small`, `medium`, `large`; default: `medium`)

**Positioning:**
- `placement`: Set vertical position (`top` or `bottom`; default: `bottom`)
- `autoFlip`: Automatically adjusts direction if tooltip leaves viewport
- `offset`: Control distance from trigger element
- `anchorPositionByRatio`: Position arrow (0-1 scale; default: 0.5)

**Messaging:**
- `message`: Tooltip content
- `messageAlign`: Text alignment (`left`, `center`, `right`; default: `left`)

**Arrow Styling:**
- `clipToEnd`: Arrow shape (`none`, `left`, `right`; default: `none`)

**Animation:**
- `motionVariant`: Motion intensity (`weak` or `strong`; default: `weak`)

**Positioning Strategy:**
- `strategy`: CSS position property (`absolute` or `fixed`; default: `absolute`)

## Props Interface (TooltipProps)

| Property | Default | Type | Description |
|----------|---------|------|-------------|
| size | 'medium' | string | Component size |
| message | — | ReactNode | Tooltip content |
| placement | 'bottom' | string | Vertical position |
| offset | — | number | Distance from trigger |
| autoFlip | false | boolean | Auto-adjust direction |
| strategy | 'absolute' | string | CSS position property |
