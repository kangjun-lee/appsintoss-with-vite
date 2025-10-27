# Numeric Spinner Component Documentation

## Overview

The `NumericSpinner` component enables simple integer input handling by providing increment and decrement buttons. It's useful for entering or modifying numbers without a keyboard.

## Usage

### Managing Input Values

#### External State Management

To manage the component's value externally, use the `number` and `onNumberChange` props together:

```jsx
function Controlled() {
  const [value, setValue] = React.useState(0);
  return (
    <NumericSpinner
      size="large"
      number={value}
      onNumberChange={(number) => {
        setValue(number);
      }}
    />
  );
}
```

#### Internal State Management

Use `defaultNumber` to let the component manage its own state internally:

```jsx
<NumericSpinner size="large" defaultNumber={0} />
```

### Size Variants

The component supports four size options: `tiny`, `small`, `medium`, and `large`.

```jsx
<div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
  <NumericSpinner size="tiny" defaultNumber={0} />
  <NumericSpinner size="small" defaultNumber={0} />
  <NumericSpinner size="medium" defaultNumber={0} />
  <NumericSpinner size="large" defaultNumber={0} />
</div>
```

### Disabling the Component

```jsx
<NumericSpinner size="large" defaultNumber={0} disable />
```

## Accessibility

The component includes built-in accessibility features:

- **Button semantics**: Uses `<button>` tags for screen reader recognition
- **Live updates**: `aria-live="polite"` announces changes automatically
- **Custom labels**: Use `decreaseAriaLabel` and `increaseAriaLabel` for context-specific descriptions

Example with custom labels:

```jsx
<NumericSpinner
  number={value}
  onNumberChange={setValue}
  decreaseAriaLabel="상품 수량 줄이기"
  increaseAriaLabel="상품 수량 늘리기"
/>
```

## Props Interface

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `size` * | `"tiny" \| "small" \| "medium" \| "large"` | — | Component size |
| `number` | `number` | `0` | Displayed value; use with `onNumberChange` for external management |
| `defaultNumber` | `number` | — | Initial value for internal state management |
| `minNumber` | `number` | `0` | Minimum allowed value |
| `maxNumber` | `number` | `999` | Maximum allowed value |
| `disable` | `boolean` | `false` | Disables increment/decrement buttons |
| `onNumberChange` | `(number: number) => void` | — | Callback when value changes |

\* Required prop
