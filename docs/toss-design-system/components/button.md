# Button Component Documentation

## Overview

The `Button` component is a fundamental UI element used to trigger user actions and execute events. It handles various interactions like form submission, opening dialogs, canceling operations, and deletions.

## Usage Examples

### Size Variants

Configure button dimensions using the `size` prop with options: `small`, `medium`, `large`, or `xlarge`.

```jsx
<Button size="small">Small</Button>
<Button size="medium">Medium</Button>
<Button size="large">Large</Button>
<Button size="xlarge">XLarge</Button>
```

### Style Variants

#### Fill Variant
High-saturation styling suitable for primary actions. The `fill` variant creates visually prominent buttons that draw user attention immediately.

```jsx
<Button color="primary" variant="fill">Primary</Button>
<Button color="dark" variant="fill">Dark</Button>
<Button color="danger" variant="fill">Danger</Button>
<Button color="light" variant="fill">Light</Button>
```

#### Weak Variant
Low-saturation styling for secondary or less critical actions. The `weak` variant uses semi-transparent design, allowing background colors to show through slightly, creating a softer appearance.

```jsx
<Button color="primary" variant="weak">Primary</Button>
<Button color="dark" variant="weak">Dark</Button>
<Button color="danger" variant="weak">Danger</Button>
<Button color="light" variant="weak">Light</Button>
```

### Display Modes

Control layout behavior with the `display` prop:

- **inline**: Positions alongside other elements
- **block**: Causes line breaks with full width
- **full**: Occupies entire parent container width

```jsx
<Button display="inline">Inline</Button>
<Button display="block">Block</Button>
<Button display="full">Full</Button>
```

### Loading State

Enable loading indication with the `loading` prop. Three sequential indicators animate while maintaining consistent button width.

```jsx
<Button color="primary" loading>Primary</Button>
<Button color="dark" loading>Dark</Button>
<Button color="danger" loading>Danger</Button>
```

### Disabled State

Prevent interaction using the `disabled` prop. Disabled buttons cannot be clicked and display visual feedback.

```jsx
<Button color="primary" disabled>Primary</Button>
<Button color="dark" disabled>Dark</Button>
<Button color="danger" disabled>Danger</Button>
```

### Combined Loading and Disabled States

Both properties work simultaneously for comprehensive state management.

```jsx
<Button color="primary" loading disabled>Primary</Button>
```

### Custom Styling with CSS Variables

Customize button appearance through CSS custom properties:

- `--button-color`: Text color
- `--button-background-color`: Background color
- `--button-disabled-opacity-color`: Disabled background opacity
- `--button-disabled-text-opacity`: Disabled text opacity
- `--button-gradient-color`: Loading gradient effect color
- `--button-loader-color`: Loading indicator color
- `--button-loading-background-color`: Loading dim layer color
- `--button-loading-opacity`: Loading dim transparency
- `--button-pressed-background-color`: Pressed state dim color
- `--button-pressed-opacity`: Pressed state transparency

```jsx
<Button style={{
  '--button-color': 'white',
  '--button-background-color': 'red'
}}>
  Apply Now
</Button>
```

## Accessibility Features

The component provides built-in accessibility:

| Feature | Effect | Purpose |
|---------|--------|---------|
| `button` role | Recognized as "button" by screen readers | Clarifies interactive element |
| `disabled` attribute | Announces disabled state | Indicates unavailable interaction |
| `loading` prop | Uses `aria-busy` attribute | Communicates processing status |

### Additional Accessibility Considerations

**Semantic HTML Tags**

Use the `as` prop to select appropriate HTML elements:

```jsx
<Button as="button" htmlType="submit">Submit</Button>
<Button as="a" href="https://example.com">Link</Button>
```

**Icon-Only or Unclear Buttons**

Add `aria-label` for buttons lacking sufficient text context:

```jsx
<Button aria-label="Like">♥</Button>
<Button aria-label="Delete Account - Use Caution" color="danger">
  Delete
</Button>
```

**Loading State Communication**

Provide context when loading without visible text:

```jsx
<Button loading aria-label="Loading data">
  ⟳
</Button>
```

## Props Interface

| Property | Default | Type | Description |
|----------|---------|------|-------------|
| `as` | `'button'` | `"button" \| "a"` | Changes button HTML tag |
| `color` | `'primary'` | `"primary" \| "danger" \| "light" \| "dark"` | Button color scheme |
| `variant` | `'fill'` | `"fill" \| "weak"` | Visual style intensity |
| `display` | `'inline'` | `"inline" \| "block" \| "full"` | Layout behavior |
| `size` | `'xlarge'` | `"small" \| "medium" \| "large" \| "xlarge"` | Dimensions |
| `loading` | — | `boolean` | Shows loading spinner |
| `disabled` | — | `boolean` | Disables interaction |
| `type` | — | `"button" \| "submit" \| "reset"` | HTML button type |
| `htmlStyle` | — | `React.CSSProperties` | Inline styles |
