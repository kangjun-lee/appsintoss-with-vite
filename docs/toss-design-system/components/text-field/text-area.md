# TextArea Component Documentation

## Overview

The `TextArea` component enables multi-line text input for extended content like feedback, addresses, and notes. It provides flexible height management through fixed or auto-adjusting dimensions.

## Key Features

- **Fixed Height Mode**: Set specific dimensions using the `height` property for consistent layouts
- **Auto-Adjusting Height**: Content automatically expands as users type, eliminating unnecessary scrolling
- **Minimum Height Control**: Use `minHeight` to prevent the field from becoming too small

## Usage Examples

### Fixed Height Text Area

```jsx
<TextArea
  variant="box"
  height="200px"
  placeholder="Enter text here."
  help="Fixed-height text field"
/>
```

This approach maintains a stable layout while providing ample space for user input.

### Auto-Adjusting Height Text Area

```jsx
<TextArea
  variant="box"
  placeholder="Type longer text or press enter to see auto-adjustment."
  help="Auto-adjusting height text field"
  minHeight={100}
/>
```

The field grows dynamically with content while respecting the minimum height threshold.

## API Reference

### TextAreaProps

Extends `TextField` component, excluding `prefix`, `suffix`, and `right` properties.

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| **minHeight** | `string` \| `number` | — | Sets the minimum height of the textarea |
| **height** | `string` \| `number` | — | Sets the fixed height of the textarea |

## Use Cases

- Customer feedback and reviews
- Address entry forms
- Note-taking applications
- Detailed description fields
- Comment sections
