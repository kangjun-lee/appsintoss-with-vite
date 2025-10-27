# Full Secure Keypad Component Documentation

## Overview

The `FullSecureKeypad` component is a security-focused input interface that displays both numeric and alphabetic characters. It's designed for password and authentication code entry, with randomly positioned blank spaces to prevent input pattern prediction.

## Key Features

- **Dual input capability**: Supports both numbers (0-9) and alphabetic characters
- **Security design**: Random blank cell positioning prevents entry pattern detection
- **Dual language display**: Shows English letters with Korean Hangul equivalents
- **Submit functionality**: Includes a configurable submission button
- **Ref-based control**: Allows programmatic manipulation of blank space positions

## Usage

### Basic Implementation

```jsx
<FullSecureKeypad
  onKeyClick={() => {}}
  onBackspaceClick={() => {}}
  onSpaceClick={() => {}}
  onSubmit={() => {}}
/>
```

### Randomizing Blank Positions

Access the `ref` object to call `reorderEmptyCells()` and shuffle blank cell positions:

```jsx
const ref = React.useRef({ reorderEmptyCells: () => {}, element: null });

<FullSecureKeypad
  ref={ref}
  onKeyClick={() => {}}
  onBackspaceClick={() => {}}
  onSpaceClick={() => {}}
  onSubmit={() => {
    ref.current.reorderEmptyCells();
  }}
/>
```

## API Reference

### FullSecureKeypadProps

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| **onKeyClick** * | `(value: string) => void` | — | Executes when numeric or alphabetic keys are clicked |
| **onBackspaceClick** * | `() => void` | — | Executes on backspace key click; typically removes last input |
| **onSpaceClick** * | `() => void` | — | Executes when space key is clicked |
| **onSubmit** * | `() => void` | — | Executes when submission button is clicked |
| submitDisabled | `boolean` | `false` | Disables submission button when true |
| submitButtonText | `string` | `'입력 완료'` | Text displayed on the submission button |

### FullSecureKeypadRef

| Property | Type | Description |
|----------|------|-------------|
| **reorderEmptyCells** * | `() => void` | Randomly redistributes blank positions for enhanced security |
| **element** * | `HTMLDivElement` | DOM reference to the component container |

---

*Required props marked with asterisk
