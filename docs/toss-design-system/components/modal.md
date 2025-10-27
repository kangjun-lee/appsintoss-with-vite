# Modal Component Documentation

## Overview

The Modal component displays important content requiring user attention or immediate interaction. It appears above other screen content to focus user attention, and users must complete required actions before returning to the main interface.

## Component Structure

The Modal consists of two sub-components:
- **Modal.Overlay**: Background element that helps users focus on the modal content
- **Modal.Content**: Container for the modal's actual content

## Basic Usage

```jsx
function Basic() {
  const [open, setOpen] = React.useState<boolean>(false);

  return (
    <>
      <Button onClick={() => setOpen(true)}>모달 열기</Button>
      <Modal open={open} onOpenChange={setOpen}>
        <Modal.Overlay />
        <Modal.Content
          style={{
            padding: '32px 20px 20px 20px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
          }}
        >
          <p style={{ marginBottom: '24px' }}>Your content here</p>
          <Button display="block" color="primary" onClick={() => setOpen(false)}>
            확인
          </Button>
        </Modal.Content>
      </Modal>
    </>
  );
}
```

## Handling Close Events

Use the `onExited` callback for actions after the modal completely closes and animations finish:

```jsx
<Modal
  open={open}
  onOpenChange={setOpen}
  onExited={() => alert('Modal fully closed')}
>
  {/* Modal content */}
</Modal>
```

## Overlay Click Handling

The overlay's `onClick` callback enables custom behavior when users click the background:

```jsx
<Modal.Overlay onClick={() => alert('Overlay clicked')} />
```

Common use cases:
- Confirming unsaved changes before closing
- Preventing accidental closure during critical operations
- Resetting input values when modal closes

## Props Reference

### ModalProps

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| **open** | `boolean` | — | Controls the modal's open/closed state |
| **onOpenChange** | `(open: boolean) => void` | — | Called when modal state changes |
| **onExited** | `() => void` | — | Called after modal closes and animation completes |
| **portalContainer** | `HTMLElement` | `document.body` | DOM element where modal renders |

### ModalOverlayProps

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| **onClick** | `() => void` | — | Called when overlay background is clicked |

## Accessibility Features

The component provides built-in accessibility support:

- **aria-hidden**: Hides external content from screen readers while modal is open
- **tabIndex={0}**: Allows keyboard focus to move into the modal
- **role="button"**: Identifies overlay as a clickable element for screen readers
