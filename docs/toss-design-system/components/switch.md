# Switch Component Documentation

## Overview
The Switch component is a toggle UI element that allows users to switch between two states (on/off, enabled/disabled). It's commonly used for settings and options, providing more intuitive visual feedback than checkboxes.

## Usage Examples

### Basic Implementation
```jsx
function Basic() {
  const [checked, setChecked] = React.useState(true);
  return <Switch checked={checked} onChange={() => setChecked((prev) => !prev)} />;
}
```

### State Management
Control the on/off state using the `checked` property and pair it with `onChange` to update the state:
```jsx
<Switch checked={true} />
<Switch checked={false} />
```

### Disabled State
Prevent user interaction by adding the `disabled` attribute:
```jsx
<Switch checked disabled />
<Switch checked={false} disabled />
```

### Disabling Touch Animation
Remove the touch animation effect by setting `hasTouchEffect` to false.

## Accessibility Features

The component includes built-in accessibility support:

| ARIA Attribute | Purpose |
|---|---|
| `role="switch"` | Identifies the element as a switch to screen readers |
| `aria-checked` | Communicates on/off state automatically |
| `aria-disabled` | Indicates disabled status to assistive technology |

### Additional Accessibility Considerations
When labels exist separately or only icons are visible, add `aria-label` to describe the switch's purpose—exclude state information like "on" or "off" since those are communicated separately.

## Props Reference

| Prop | Default | Type | Description |
|---|---|---|---|
| `checked` | - | boolean | Represents the on/off state |
| `disabled` | false | boolean | Disables interaction when true |
| `name` | - | string | Sets the HTML input name attribute |
| `hasTouchEffect` | true | boolean | Controls touch animation visibility |
| `onChange` | - | function | Handler for state changes |
| `onClick` | - | function | Handler for click events |
