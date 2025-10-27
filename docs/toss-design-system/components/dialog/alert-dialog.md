# AlertDialog Component Documentation

## Overview

The `AlertDialog` component delivers important information to users with a single confirmation button for closing notifications. It's commonly used for task completion alerts or status change notifications.

## Basic Usage

The component consists of three main parts:
- **Title** (`title`): The dialog heading
- **Description** (`description`): Optional explanatory text
- **Alert Button** (`alertButton`): Confirmation button

Control visibility using the `open` state and `onClose` handler:

```jsx
function Basic() {
  const [open, setOpen] = React.useState(false);
  return (
    <>
      <Button onClick={() => setOpen(true)}>Open Dialog</Button>
      <AlertDialog
        open={open}
        title={<AlertDialog.Title>Message received</AlertDialog.Title>}
        description={<AlertDialog.Description>Thank you for your feedback</AlertDialog.Description>}
        alertButton={<AlertDialog.AlertButton onClick={() => setOpen(false)}>OK</AlertDialog.AlertButton>}
        onClose={() => setOpen(false)}
      />
    </>
  );
}
```

## Key Features

### Dimmer Click Control

Manage background click behavior using `closeOnDimmerClick`:
- `true` (default): Dialog closes on external click
- `false`: Shows wiggle animation, prevents closing

### Content Handling

The component gracefully manages:
- Long titles with automatic line wrapping
- Extended descriptions with scrolling
- Long button labels without layout breaks

### Optional Description

Dialogs can display with title and button only:

```jsx
<AlertDialog
  open={open}
  title={<AlertDialog.Title>Confirmation</AlertDialog.Title>}
  alertButton={<AlertDialog.AlertButton onClick={() => setOpen(false)}>OK</AlertDialog.AlertButton>}
  onClose={() => setOpen(false)}
/>
```

### Custom Rendering Container

Specify a custom DOM element for rendering:

```jsx
const containerRef = React.useRef(null);
<AlertDialog
  open={isOpen}
  portalContainer={containerRef.current}
  title={<AlertDialog.Title>Custom Container Dialog</AlertDialog.Title>}
  onClose={() => setIsOpen(false)}
/>
```

## Props Reference

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `open` | boolean | — | Controls dialog visibility |
| `title` | ReactNode | — | Dialog heading |
| `description` | ReactNode | — | Optional explanatory text |
| `alertButton` | ReactNode | — | Confirmation button element |
| `closeOnDimmerClick` | boolean | `true` | Allow closing via background click |
| `closeOnBackEvent` | boolean | `true` | Allow closing via back gesture |
| `onClose` | () => void | — | Callback when dialog closes |
| `onEntered` | () => void | — | Callback after open animation completes |
| `onExited` | () => void | — | Callback after close animation completes |
| `portalContainer` | HTMLElement | `document.body` | Target element for rendering |

## Title Props

| Prop | Type | Default |
|------|------|---------|
| `as` | string | `'h3'` |
| `color` | string | `adaptive.grey800` |
| `typography` | typography values | `'t4'` |
| `fontWeight` | weight values | `'bold'` |

## Description Props

| Prop | Type | Default |
|------|------|---------|
| `as` | string | `'h3'` |
| `color` | string | `adaptive.grey600` |
| `typography` | typography values | `'t6'` |
| `fontWeight` | weight values | `'medium'` |

## Alert Button Props

| Prop | Type | Default |
|------|------|---------|
| `size` | string | `'medium'` |
| `color` | string | `colors.blue500` |
| `fontWeight` | weight values | `'bold'` |
| `variant` | `'arrow'` \| `'underline'` \| `'clear'` | — |
