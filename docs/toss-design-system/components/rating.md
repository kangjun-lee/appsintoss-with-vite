# Rating Component Documentation

## Overview

The `Rating` component enables users to provide evaluations of items or content by selecting from a series of icons. It "displays visual feedback immediately based on the selected score" and supports both interactive and read-only modes.

## Usage Examples

### Interactive Rating with Size Variants

The component supports three sizes for interactive mode: `medium`, `large`, and `big`. Users can adjust the rating by selecting different icon counts.

```jsx
<Rating
  readOnly={false}
  value={3}
  max={5}
  size="medium"
  aria-label="별점 평가"
  onValueChange={handleValueChange}
/>
```

### Read-Only Display

When `readOnly` is set to `true`, the component displays a static rating with three layout options:

- **full**: Complete display with score information
- **compact**: Condensed version
- **iconOnly**: Shows only the rating icons

```jsx
<Rating
  readOnly={true}
  value={5}
  max={5}
  size="medium"
  variant="full"
/>
```

Read-only mode supports five size options: `tiny`, `small`, `medium`, `large`, and `big`.

### Disabled State

Set `disabled={true}` to prevent interaction while maintaining visual appearance:

```jsx
<Rating
  readOnly={false}
  value={5}
  disabled={true}
  aria-label="현재 별점 현황"
/>
```

## Accessibility

The component includes built-in accessibility support through several ARIA attributes:

| Attribute | Effect | Purpose |
|-----------|--------|---------|
| `aria-label` | Default: "별점 평가" | Communicates the component's role to screen readers |
| `aria-valuetext` | Announces current value (e.g., "5점 만점 중 3점") | Provides score context |
| `aria-hidden={true}` | Prevents redundant reading | Hides visual icons from screen readers |

The component includes a hidden `<input type="range" />` element for keyboard navigation support.

## Props Interface

| Prop | Type | Default | Required | Description |
|------|------|---------|----------|-------------|
| `readOnly` | boolean | — | Yes | Determines interactive vs. display-only mode |
| `value` | number | — | Yes | Current rating value |
| `size` | string | — | Yes | `medium`/`large`/`big` (interactive) or `tiny`/`small`/`medium`/`large`/`big` (read-only) |
| `variant` | string | — | Yes* | `full`/`compact`/`iconOnly` (read-only only) |
| `max` | number | 5 | No | Maximum rating value |
| `onValueChange` | function | undefined | No | Callback when rating changes (interactive mode) |
| `disabled` | boolean | false | No | Disables interaction (interactive mode only) |

*Required only when `readOnly={true}`
