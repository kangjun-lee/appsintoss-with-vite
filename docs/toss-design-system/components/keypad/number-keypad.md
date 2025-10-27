# Number Keypad Component Documentation

## Overview

The `NumberKeypad` component displays a numeric keypad interface, primarily used for inputting numeric passwords. It offers flexible key arrangement to match desired input methods.

## Key Features

- **Customizable key layout**: Arrange number keys in any order
- **Security mode**: Enhanced protection for sensitive inputs like identification numbers
- **Simple API**: Easy-to-use callback functions for key interactions

## Usage

### Basic Implementation

```jsx
<NumberKeypad
  onKeyClick={() => {}}
  onBackspaceClick={() => {}}
/>
```

### Custom Key Arrangement

Use the `numbers` property to define which digits appear and their display order:

```jsx
<NumberKeypad
  numbers={[1, 3, 5, 7, 9, 2, 4, 6, 8, 0]}
  onKeyClick={() => {}}
  onBackspaceClick={() => {}}
/>
```

### Secure Keypad Mode

Enable security features for sensitive data entry:

```jsx
<NumberKeypad
  secure={true}
  onKeyClick={() => {}}
  onBackspaceClick={() => {}}
/>
```

When `secure={true}`, the component registers the clicked digit plus two random numbers not adjacent to it, obscuring user input patterns. Additionally, it prevents screen capture on Android and blocks screenshots when the app moves to the background.

⚠️ **Security Note**: Always set `secure={true}` when requesting sensitive information like ID verification numbers.

## API Reference

### NumberKeypadProps

| Property | Type | Default | Required | Description |
|----------|------|---------|----------|-------------|
| **onKeyClick** | `(value: string) => void` | — | Yes | Callback function triggered when any number key is clicked |
| **onBackspaceClick** | `() => void` | — | Yes | Callback for backspace key action; enables custom deletion logic |
| **numbers** | `(0\|1\|2\|3\|4\|5\|6\|7\|8\|9)[]` | `[1,2,3,4,5,6,7,8,9,0]` | No | Array of digits to display in specified order |
| **secure** | `boolean` | `false` | No | Enables security mode with randomized adjacent key registration |
