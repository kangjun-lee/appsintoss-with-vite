# TextField Component Documentation

## Overview

The `TextField` component is a foundational UI element for user input, offering diverse design options and attributes suitable for various scenarios from basic text entry to password input.

**Key features:**
- `label` and `placeholder` help users understand field purpose
- `help` provides additional guidance messages
- Multiple state options (disabled, error states)
- Flexible design variants

## Component Variants

The `variant` property controls the visual design:

- **box**: Default rectangular style, clear and concise
- **line**: Underline-only style for a clean appearance
- **big**: Enlarged text style emphasizing important content
- **hero**: Large format design to draw user attention

## Usage Patterns

### Error State Management

Use `hasError` property to indicate validation failures. Combine with `help` to provide specific feedback: "When users enter 3+ characters, display error state with message 'Enter less than 3 characters.'"

### Disabled State

Apply `disabled` attribute to prevent interaction, useful for:
- Server response waiting periods
- Conditional field activation based on user actions

### Label Display Options

`labelOption` property controls label visibility:
- **appear**: Label displays only when field contains value
- **sustain**: Label always visible, preventing field confusion

### Affixes

Use `prefix` and `suffix` properties for unit indicators:
- `prefix="$"` for currency fields
- `suffix="원"` for weight measurements

### Right-Side Components

The `right` property places interactive elements like buttons in the field's right area, enabling inline search actions or validation indicators.

## Extended Components

### TextField.Clearable

Provides a clear button for quick content deletion. Supports `onClear` callback for additional operations like resetting filtered lists.

### TextField.Password

Specialized component masking sensitive input with visibility toggle. Includes `onVisibilityChange` callback tracking visibility state changes.

### TextField.Button

Button-styled component mimicking input field appearance but functioning as clickable action element. Uses native `<button>` element for semantic HTML.

## API Reference

### TextFieldPublicProps (Common Properties)

| Property | Type | Default | Purpose |
|----------|------|---------|---------|
| disabled | boolean | false | Prevents user interaction |
| prefix | string | — | Text preceding input |
| suffix | string | — | Text following input |
| right | ReactNode | — | Right-side component |
| placeholder | string | — | Placeholder text |
| format | object | — | Value transformation rules |

### TextFieldProps (Main Component)

| Property | Type | Default | Purpose |
|----------|------|---------|---------|
| variant | "box"\|"line"\|"big"\|"hero" | — | Visual design style |
| label | string | — | Field label |
| labelOption | "appear"\|"sustain" | appear | Label visibility control |
| help | ReactNode | — | Helper/error message |
| hasError | boolean | false | Error state indicator |
| value | string\|number | — | Controlled input value |
| defaultValue | string | — | Initial value |
| onChange | function | — | Change event handler |
| onFocus | function | — | Focus event handler |
| onBlur | function | — | Blur event handler |

### TextFieldClearableProps

Extends `TextField` (excluding `right` property):
- **onClear**: Callback function executed on clear button click

### TextFieldPasswordProps

Extends `TextField` (excluding `right` property):
- **onVisibilityChange**: Callback receiving boolean visibility state

### TextFieldButtonProps

Extends `TextFieldPublicProps`:
- **right**: Default shows downward arrow icon; customizable
