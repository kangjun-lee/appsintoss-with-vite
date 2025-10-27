# Highlight Component Documentation

## Overview

The `Highlight` component emphasizes specific screen areas by darkening everything else while keeping the targeted region visible and bright.

## Usage

### Basic Implementation

Wrap the element you want to highlight:

```jsx
<Highlight open>
  <div>Item to highlight</div>
</Highlight>
```

### Adding Padding

Apply internal spacing around the highlighted area:

```jsx
<Highlight padding={10}>
  <div>Item to highlight</div>
</Highlight>
```

### Displaying Messages

Add descriptive text to explain the highlighted region:

```jsx
<Highlight message="Highlight message" messageXAlignment="center">
  <div>Item to highlight</div>
</Highlight>
```

### Message Alignment and Styling

Customize message positioning and color. Vertical alignment affects arrow placement, while horizontal alignment keeps the arrow centered:

```jsx
<Highlight
  message="Long highlight message with custom alignment"
  messageXAlignment="right"
  messageYAlignment="bottom"
  messageColor="pink"
>
  <div>Item to highlight</div>
</Highlight>
```

### Native Integration

Within Toss apps, use the AppBridge `showHighlight` method to trigger native highlight functionality.

## Key Properties

| Property | Default | Description |
|----------|---------|-------------|
| `open` | - | Controls visibility (required) |
| `padding` | 0 | Internal spacing in pixels |
| `delay` | 0 | Animation delay in seconds |
| `message` | - | Descriptive text or custom render function |
| `messageColor` | white | Text color value |
| `messageXAlignment` | auto | Left/center/right positioning |
| `messageYAlignment` | auto | Top/bottom positioning |
| `onClick` | - | Callback when tapping darkened area |
| `onExited` | - | Callback when animation completes |
