# ConfirmDialog Component Documentation

## Overview

The `ConfirmDialog` component provides an interface for situations requiring user action or selection. It features two buttons—confirm and cancel—enabling users to make clear choices.

## Key Features

- **Structure**: Title, description (optional), cancel button, and confirm button
- **State Management**: Controlled via `open` prop and `onClose` handler
- **Flexibility**: Supports long content with automatic scrolling
- **Dimmer Control**: Customizable background click behavior
- **Portal Rendering**: Can render to specific DOM containers

## Usage Examples

### Basic Implementation

```jsx
function Basic() {
  const [open, setOpen] = React.useState(false);
  return (
    <>
      <Button onClick={() => setOpen(true)}>Open Dialog</Button>
      <ConfirmDialog
        open={open}
        title={<ConfirmDialog.Title>{'Feedback received'}</ConfirmDialog.Title>}
        description={
          <ConfirmDialog.Description>
            {'Your feedback helps us improve.'}
          </ConfirmDialog.Description>
        }
        cancelButton={
          <ConfirmDialog.CancelButton onClick={() => setOpen(false)}>
            No
          </ConfirmDialog.CancelButton>
        }
        confirmButton={
          <ConfirmDialog.ConfirmButton onClick={() => setOpen(false)}>
            Yes
          </ConfirmDialog.ConfirmButton>
        }
        onClose={() => setOpen(false)}
      />
    </>
  );
}
```

### Controlling Dimmer Clicks

Set `closeOnDimmerClick={false}` to prevent closing when users click outside. This triggers a "wiggle" animation instead.

### Long Content Handling

- **Long descriptions**: Automatically generate scrollable content areas
- **Long button text**: Buttons stack vertically when text exceeds available width

### Without Description

Simplify the dialog by omitting the description prop for straightforward confirmations.

### Custom Portal Container

Use `portalContainer` prop to render the dialog within a specific DOM element instead of `document.body`.

## API Reference

### ConfirmDialogProps

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `open` | boolean | - | Controls visibility |
| `title` | ReactNode | - | Dialog title |
| `description` | ReactNode | - | Optional descriptive text |
| `cancelButton` | ReactNode | - | Cancel button element |
| `confirmButton` | ReactNode | - | Confirm button element |
| `closeOnDimmerClick` | boolean | true | Allow closing via background click |
| `closeOnBackEvent` | boolean | true | Allow closing via back navigation |
| `onClose` | () => void | - | Callback when dialog closes |
| `onEntered` | () => void | - | Callback after open animation completes |
| `onExited` | () => void | - | Callback after close animation completes |
| `portalContainer` | HTMLElement | document.body | Target container for rendering |

### ConfirmDialogTitleProps

| Property | Default | Type |
|----------|---------|------|
| `as` | 'h3' | HTML tag |
| `color` | adaptive.grey800 | string |
| `typography` | 't4' | Typography preset |
| `fontWeight` | 'bold' | Font weight |

### ConfirmDialogDescriptionProps

| Property | Default | Type |
|----------|---------|------|
| `as` | 'h3' | HTML tag |
| `color` | adaptive.grey600 | string |
| `typography` | 't6' | Typography preset |
| `fontWeight` | 'medium' | Font weight |

### ConfirmDialogCancelButtonProps

| Property | Default | Type |
|----------|---------|------|
| `type` | 'dark' | Button type |
| `style` | 'weak' | Button style |
| `size` | 'large' | Button size |

### ConfirmDialogConfirmButtonProps

Extends Button component properties. Default `size` is 'large'.
