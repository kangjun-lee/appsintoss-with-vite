# SplitTextField Component Documentation

## Overview

The `SplitTextField` component divides input data across multiple fields, making it ideal for structured formats like resident registration numbers. It automatically advances focus between fields and includes two specialized variants: `RRN13` (13-digit) and `RRNFirst7` (7-digit).

## Component Variants

### RRN13 - Full 13-Digit Input

The `RRN13` variant accepts complete resident registration numbers across two separate fields. Once users complete the first 6 digits, focus automatically transfers to the second field for the remaining 7 digits.

**Key Features:**
- Automatic focus management between fields
- Optional masking of sensitive digits (default: enabled)
- Multiple style variants: box, line, big, hero

### RRNFirst7 - 7-Digit Input

The `RRNFirst7` variant captures only the first 7 digits (birth date and gender code), suitable for basic age verification scenarios.

**Key Features:**
- Gender code masking support (default: disabled)
- Same visual variants as RRN13
- Simplified data collection

## Core Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `"box" \| "line" \| "big" \| "hero"` | — | Visual style of the input field |
| `label` | `string` | `'주민등록번호'` | Label text displayed above |
| `help` | `React.ReactNode` | — | Helper text displayed below |
| `mask` | `boolean` | `true` (RRN13) / `false` (RRNFirst7) | Masks sensitive portions |
| `first` | `TextFieldPublicProps` | — | Configuration for first field |
| `second` | `TextFieldPublicProps` | — | Configuration for second field |
| `hasError` | `boolean` | `false` | Error state indicator |
| `focused` | `boolean` | — | Focus state |

## Usage Examples

### Basic RRN13 Implementation

```jsx
<SplitTextField.RRN13
  variant="box"
  label="주민등록번호"
  help="주민등록번호를 입력해주세요."
/>
```

### Custom Placeholders

```jsx
<SplitTextField.RRN13
  variant="box"
  label="주민등록번호"
  first={{ placeholder: '앞 6자리' }}
  second={{ placeholder: '뒷 7자리' }}
/>
```

### Disable Masking

```jsx
<SplitTextField.RRN13
  variant="box"
  mask={false}
  label="주민등록번호"
/>
```

### RRNFirst7 with Gender Code Masking

```jsx
<SplitTextField.RRNFirst7
  variant="box"
  label="주민등록번호 (앞 7자리)"
  mask={true}
  first={{ placeholder: 'YYMMDD' }}
  second={{ placeholder: '*' }}
/>
```

## Key Design Decisions

- "As quoted, the component provides separated input fields for different data portions, improving accuracy and clarity."
- Default masking behavior differs between variants: RRN13 masks by default for privacy, while RRNFirst7 doesn't mask the gender code unless explicitly enabled.
