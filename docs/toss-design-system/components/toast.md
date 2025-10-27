# Toast Component Documentation

## Overview

The Toast component displays brief feedback messages that automatically disappear after a set duration. It's used to notify users about completed actions or event occurrences, appearing at the top or bottom of the screen.

## Usage

### Position Control

Set message location using the `position` prop with values `"top"` or `"bottom"`:

```jsx
<Toast
  position="top"
  open={isOpen}
  text="Message text"
  onClose={() => setIsOpen(false)}
/>
```

### Icon Addition

Add visual context using `leftAddon` with `Toast.Icon` or `Toast.Lottie`:

```jsx
<Toast
  leftAddon={<Toast.Icon name="icn-success-color" />}
  text="Success message"
/>
```

### Button Implementation

Bottom-positioned toasts support action buttons via the `button` prop:

```jsx
<Toast
  position="bottom"
  button={<Toast.Button onClick={handleClick}>Confirm</Toast.Button>}
/>
```

### CTA Positioning

Use `higherThanCTA` to display the toast above fixed bottom buttons without obstruction.

### Lottie Animations

Embed animated feedback using `Toast.Lottie` with animation source URLs.

## Accessibility

The component implements screen reader support through `aria-live` attributes:
- **"assertive"**: Immediate announcement for critical alerts
- **"polite"** (default): Announces after current content finishes reading

## Key Props

| Prop | Type | Default | Purpose |
|------|------|---------|---------|
| `open` | boolean | — | Controls visibility |
| `position` | "top" \| "bottom" | — | Display location |
| `text` | string | — | Message content |
| `duration` | number | 3000ms | Auto-close timing |
| `onClose` | function | — | Close callback |
| `leftAddon` | ReactNode | — | Icon/animation element |
| `button` | ReactNode | — | Action button (bottom only) |
| `higherThanCTA` | boolean | false | Display above CTA buttons |
