# useBottomSheet Documentation

## Overview

The `useBottomSheet` hook provides utility functionality to easily control bottom sheets that slide up from the screen's bottom. It manages open/closed states, content display, and user interactions while reducing repetitive code and ensuring consistent implementation.

## Usage Examples

### Basic Bottom Sheet

Display a simple bottom sheet using the `open` method:

```javascript
function Basic() {
  const { open, close } = useBottomSheet();
  return (
    <Button
      onClick={() => {
        open({
          header: 'Basic Bottom Sheet',
          children: <Text style={{ margin: '0 24px 24px 24px' }}>
            Simple content-only bottom sheet.
          </Text>,
          onClose: () => close(),
        });
      }}
    >
      Open Basic Bottom Sheet
    </Button>
  );
}
```

**Key features:**
- Pass title via `header` prop
- Pass content via `children` prop
- Control dimmer click behavior with `closeOnDimmerClick` (default: `true`)

### Single Button Bottom Sheet

Use `openOneButtonSheet` for a bottom sheet with one button:

```javascript
function OneButtonSheet() {
  const { openOneButtonSheet } = useBottomSheet();
  return (
    <Button
      onClick={() => {
        openOneButtonSheet({
          header: 'Single Button Sheet',
          children: <Text style={{ margin: '0 24px' }}>
            Bottom sheet with one button.
          </Text>,
          button: 'Confirm',
        });
      }}
    >
      Open Single Button Sheet
    </Button>
  );
}
```

### Two Button Bottom Sheet

Display a bottom sheet with two buttons using `openTwoButtonSheet`:

```javascript
function TwoButtonSheet() {
  const { openTwoButtonSheet } = useBottomSheet();
  return (
    <Button
      onClick={async () => {
        await openTwoButtonSheet({
          header: 'Two Button Sheet',
          children: <Text style={{ margin: '0 24px' }}>
            Bottom sheet with two buttons.
          </Text>,
          leftButton: 'Cancel',
          rightButton: 'Confirm',
        });
      }}
    >
      Open Two Button Sheet
    </Button>
  );
}
```

### Async Operations

Handle asynchronous tasks with `openAsyncTwoButtonSheet`. Buttons show loading state until operations complete:

```javascript
function AsyncSheet() {
  const { openAsyncTwoButtonSheet } = useBottomSheet();
  const delay = async (milliseconds: number) => {
    await new Promise((res) => setTimeout(res, milliseconds));
  };
  return (
    <Button
      onClick={() => {
        openAsyncTwoButtonSheet({
          header: 'Cancel Payment?',
          children: <Text style={{ margin: '0 24px' }}>
            Cancellation cannot be reversed.
          </Text>,
          leftButton: 'Cancel',
          rightButton: 'Confirm',
          onRightButtonClick: () => delay(1000),
        });
      }}
    >
      Open Async Bottom Sheet
    </Button>
  );
}
```

## API Interface

### BottomSheetOptions

| Property | Default | Type | Description |
|----------|---------|------|-------------|
| **children*** | — | `React.ReactNode` | Content displayed in the bottom sheet |
| **header** | — | `React.ReactNode` | Title shown in the header |
| **closeOnDimmerClick** | `true` | `boolean` | Controls whether clicking the dimmer closes the sheet |
| **onEntered** | — | `() => void` | Callback executed after sheet opens |
| **onExited** | — | `() => void` | Callback executed after sheet closes |
| **UNSAFE_disableFocusLock** | — | `boolean` | Disables focus restriction outside sheet |
| **UNSAFE_ignoreDimmerClick** | — | `boolean` | Prevents dimmer clicks from closing sheet |
| **UNSAFE_ignoreBackEvent** | — | `boolean` | Ignores back navigation events |

### OneButtonOptions

Extends `BottomSheetOptions` with:

| Property | Default | Type | Description |
|----------|---------|------|-------------|
| **topAccessory** | — | `React.ReactNode` | Element displayed at sheet top |
| **bottomAccessory** | — | `React.ReactNode` | Element displayed at sheet bottom |
| **button** | `'Confirm'` | `string \| ReactElement` | Button text or custom button element |
| **closeOnButtonClick** | `true` | `boolean` | Whether button click closes sheet |

### TwoButtonOptions

Extends `BottomSheetOptions` with:

| Property | Default | Type | Description |
|----------|---------|------|-------------|
| **leftButton** | `'Cancel'` | `string \| ReactElement` | Left button text or element |
| **closeOnLeftButtonClick** | `true` | `boolean` | Whether left button closes sheet |
| **rightButton** | `'Confirm'` | `string \| ReactElement` | Right button text or element |
| **closeOnRightButtonClick** | `true` | `boolean` | Whether right button closes sheet |

### AsyncOneButtonOptions & AsyncTwoButtonOptions

Include async callback properties:

| Property | Default | Type | Description |
|----------|---------|------|-------------|
| **onClick** (single) | — | `() => Promise<void>` | Async function on button click |
| **onLeftButtonClick** (dual) | — | `() => Promise<void>` | Async function on left click |
| **onRightButtonClick** (dual) | — | `() => Promise<void>` | Async function on right click |
| **loadingPropName** | `'loading'` | `string` | Button loading state prop name |
