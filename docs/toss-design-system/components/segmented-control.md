# Segmented Control Component Documentation

## Overview

The `SegmentedControl` component enables users to select a single option from multiple choices. It functions similarly to a radio button group and is commonly used in mobile interfaces.

## Usage Examples

### Controlled State Management

To manage the component's state externally, combine the `value` and `onChange` props:

```jsx
function Controlled() {
  const [value, setValue] = React.useState('1');
  return (
    <SegmentedControl value={value} onChange={(value) => setValue(value)}>
      <SegmentedControl.Item value="1">Item 1</SegmentedControl.Item>
      <SegmentedControl.Item value="2">Item 2</SegmentedControl.Item>
      <SegmentedControl.Item value="3">Item 3</SegmentedControl.Item>
    </SegmentedControl>
  );
}
```

### Uncontrolled State Management

Use `defaultValue` for internal state management without external tracking:

```jsx
<SegmentedControl defaultValue="1">
  <SegmentedControl.Item value="1">Item 1</SegmentedControl.Item>
  <SegmentedControl.Item value="2">Item 2</SegmentedControl.Item>
  <SegmentedControl.Item value="3">Item 3</SegmentedControl.Item>
</SegmentedControl>
```

### Size Variants

The component supports two size options via the `size` prop:

```jsx
<SegmentedControl size="small" defaultValue="1">...</SegmentedControl>
<SegmentedControl size="large" defaultValue="1">...</SegmentedControl>
```

### Scrollable Layout

Set `alignment="fluid"` to enable horizontal scrolling when content exceeds container width:

```jsx
<SegmentedControl defaultValue="1" alignment="fluid">
  {/* Multiple items that wrap */}
</SegmentedControl>
```

## API Reference

### SegmentedControlProps

| Prop | Default | Type | Description |
|------|---------|------|-------------|
| `children` | — | `React.ReactNode` | One or more `SegmentedControl.Item` components |
| `size` | `'small'` | `"small"` \| `"large"` | Controls component size |
| `alignment` | `'fixed'` | `"fixed"` \| `"fluid"` | Fixed width or content-based width with scrolling |
| `value` | — | `string` | Current selected value (controlled) |
| `defaultValue` | — | `string` | Initial selected value (uncontrolled) |
| `onChange` | — | `(v: string) => void` | Callback fired on selection change |

### SegmentedControlItemProps

| Prop | Default | Type | Description |
|------|---------|------|-------------|
| `children` | — | `React.ReactNode` | Item label text |
| `value` | — | `string` | Value passed to `onChange` when selected |
| `size` | — | `"small"` \| `"large"` | Adjusts text size and padding |

## Accessibility

The component provides built-in accessibility features:

- **`role="radiogroup"`**: Identifies the container as a radio group
- **`role="radio"`**: Individual items are marked as radio buttons
- **`aria-checked`**: Automatically reflects selection state
- **`aria-labelledby`**: Associates labels with radio elements

These features ensure screen reader compatibility without additional configuration required.
