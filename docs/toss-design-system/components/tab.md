# Tab Component Documentation

## Overview

The Tab component enables efficient switching between multiple content sections on a single screen. Each tab displays a content list, and users can switch between tabs to view corresponding content.

## Description

"The `Tab` component helps display multiple content efficiently by allowing users to switch between different content lists on a single screen."

## Core Features

- Multiple content switching capability
- Selected tab indication
- Customizable sizing options
- Scrollable tab lists for many items
- Built-in accessibility support

## Usage Examples

### Basic Implementation

```javascript
function Basic() {
  const [selected, setSelected] = React.useState(0);

  return (
    <Tab onChange={(index) => setSelected(index)}>
      <Tab.Item selected={selected === 0}>Tab 1</Tab.Item>
      <Tab.Item selected={selected === 1}>Tab 2</Tab.Item>
      <Tab.Item selected={selected === 2}>Tab 3</Tab.Item>
    </Tab>
  );
}
```

### Size Variants

The component supports two size options: `small` and `large`, adjusting height and text size accordingly.

### Fluid Layout

Enable horizontal scrolling for many items using the `fluid` property. This is recommended when displaying four or more tab items.

### Custom Spacing

Adjust spacing between items using the `itemGap` property, specified in pixels.

## API Documentation

### TabProps

| Property | Default | Type | Description |
|----------|---------|------|-------------|
| **children*** | - | `React.ReactNode` | One or more `Tab.Item` components |
| **onChange*** | - | `(index: number, key?: string \| number) => void` | Callback when selected tab changes |
| size | 'large' | "large" \| "small" | Controls height and text size |
| fluid | false | boolean | Enables horizontal scrolling for many items |
| itemGap | - | number | Spacing between tabs in pixels |
| ariaLabel | - | string | Accessibility label for screen readers |

### TabItemProps

| Property | Default | Type | Description |
|----------|---------|------|-------------|
| **selected*** | - | boolean | Indicates if tab is currently active |
| redBean | false | boolean | Shows notification indicator at top-right |

## Accessibility

The component includes built-in accessibility features: "automatic `aria-selected` attribute updates based on selection state" and proper `role="tab"` and `role="tablist"` assignments. Developers should add `aria-label` when using icon-only tabs or when meaning is unclear.
