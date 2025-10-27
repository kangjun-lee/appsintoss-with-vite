# Alphabet Keypad Component Documentation

## Overview

The `AlphabetKeypad` component displays an alphabetic keypad, primarily used for entering authentication codes or text-based inputs. It allows flexible key arrangement to match specific input requirements.

## Usage

### Basic Implementation

```jsx
<AlphabetKeypad
  onKeyClick={() => {}}
  onBackspaceClick={() => {}}
/>
```

### Customizing Key Layout

The `alphabets` property enables customization of displayed letters and their arrangement. Pass an array containing desired letters in your preferred order, and they will render sequentially on the keypad.

**Example with reversed alphabet:**

```jsx
<AlphabetKeypad
  alphabets={[
    'z', 'y', 'x', 'w', 'v', 'u', 't', 's', 'r', 'q',
    'p', 'o', 'n', 'm', 'l', 'k', 'j', 'i', 'h', 'g',
    'f', 'e', 'd', 'c', 'b', 'a'
  ]}
  onKeyClick={() => {}}
  onBackspaceClick={() => {}}
/>
```

## API Documentation

### AlphabetKeypadProps

| Property | Default | Type | Required | Description |
|----------|---------|------|----------|-------------|
| **onKeyClick** | - | `(value: string) => void` | Yes | "Callback function triggered when an alphabetic key is clicked; receives the selected letter value" |
| **onBackspaceClick** | - | `() => void` | Yes | "Callback function triggered on backspace key click; typically handles deletion but customizable for additional logic" |
| **alphabets** | A-Z uppercase | `string[]` | No | "Array of letters to display; case-sensitive; renders in specified order; defaults to uppercase A-Z when omitted" |
