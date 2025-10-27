# TableRow Component Documentation

## Overview

The `TableRow` component is designed for concisely displaying data in a left-right arrangement. It's particularly useful for presenting information titles and content side-by-side, with flexible text sizing and alignment options.

## Core Functionality

`TableRow` arranges content in two columns using three essential properties:

- **left**: Accepts strings, numbers, or React components for the left section
- **right**: Accepts strings, numbers, or React components for the right section
- **align**: Controls layout direction with two options

## Usage Patterns

### Space-Between Alignment

When using `align="space-between"`, the left and right elements position at opposite ends, creating clear visual separation between titles and data. This layout works best when information categories need distinct visual distinction.

**Example usage:**
```jsx
<TableRow align="space-between" left="김토스" right="받는 분" />
<TableRow align="space-between" left="강토스" right="받는 분 통장표시" />
<TableRow align="space-between" left="이체 1일 전" right="미리알림" />
```

### Left Alignment

The `align="left"` approach groups both elements together on the left side. This arrangement suits constrained spaces or when content density matters.

The `leftRatio` property controls the left area's width proportionally. Setting `leftRatio={30}` allocates 30% of total width to the left section.

**Example usage:**
```jsx
<TableRow align="left" left="김토스" right="받는 분" />
<TableRow align="left" left="강토스" right="받는 분 통장표시" leftRatio={30} />
```

## API Reference

### TableRowProps Interface

| Property | Default | Type | Description | Required |
|----------|---------|------|-------------|----------|
| left | — | `React.ReactNode` | Left-positioned content (string, number, or component) | Yes |
| right | — | `React.ReactNode` | Right-positioned content (string, number, or component) | Yes |
| align | — | `"left" \| "space-between"` | Layout direction setting | Yes |
| leftRatio | — | `number` | Fixed width ratio for left area as percentage | No |
