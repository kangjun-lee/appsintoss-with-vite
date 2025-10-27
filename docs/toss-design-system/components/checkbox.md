# Checkbox Component Documentation

## Overview

The `Checkbox` component enables users to select one or more items. It displays checked and unchecked states and supports multiple simultaneous selections.

## Usage Examples

### Shapes

Two visual representations are available:

- **`<Checkbox.Circle />`**: Check icon enclosed in a circular container
- **`<Checkbox.Line />`**: Check icon displayed independently

### State Management

#### External State Control

Use `checked` and `onCheckedChange` properties together to manage checkbox state externally:

```jsx
function Controlled() {
  const [checked, setChecked] = React.useState(true);
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
      <Checkbox.Circle checked={checked} onCheckedChange={setChecked} />
      <Checkbox.Line checked={checked} onCheckedChange={setChecked} />
    </div>
  );
}
```

#### Internal State Management

Use `defaultChecked` to let the component manage its own state internally:

```jsx
<Checkbox.Circle defaultChecked={true} />
<Checkbox.Line defaultChecked={true} />
```

### Size Customization

Adjust component dimensions with the `size` property:

```jsx
<Checkbox.Circle defaultChecked={true} size={24} />
```

### Disabled State

Prevent interaction with `disabled` property. Disabled checkboxes animate with a shake effect when clicked:

```jsx
<Checkbox.Circle disabled />
<Checkbox.Line defaultChecked={true} disabled />
```

### Radio Button Functionality

Set `inputType` to `"radio"` for single-selection behavior among multiple options:

```jsx
<Checkbox.Circle
  inputType="radio"
  value="1"
  checked={checked === '1'}
  onChange={(e) => setChecked(e.target.value)}
/>
```

## Accessibility

### Built-in Support

- **`role="checkbox"` and `tabindex="0"`**: Screen readers recognize the component as a checkbox
- **`aria-checked`**: Automatically updates to reflect current state
- **`aria-disabled="true"`**: Indicates disabled status to assistive technology

### Required Developer Implementation

**`aria-label` is mandatory** to describe the checkbox's purpose clearly. Since visual labels are separate elements, this attribute ensures screen reader users understand the checkbox's function:

```jsx
<Checkbox.Circle
  checked={checked}
  onCheckedChange={setChecked}
  aria-label="Terms of service agreement"
/>
```

Avoid including "checkbox" in the label text, as screen readers already announce the element type.

## Interface

| Property | Default | Type | Description |
|----------|---------|------|-------------|
| `inputType` | `'checkbox'` | `"checkbox"` \| `"radio"` | Determines input element type |
| `size` | `24` | `number` | Component dimensions |
| `checked` | — | `boolean` | Current selection state (external control) |
| `onCheckedChange` | — | `(checked: boolean) => void` | Callback when selection changes |
| `defaultChecked` | — | `boolean` | Initial selection state (internal control) |
| `disabled` | — | `boolean` | Disables interaction when true |
