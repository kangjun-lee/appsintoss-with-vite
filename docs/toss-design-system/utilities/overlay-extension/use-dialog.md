# useDialog Hook Documentation

## Overview

The `useDialog` hook is a utility for displaying Alert and Confirm style dialogs with minimal setup. It provides methods to show modal dialogs with customizable buttons and callbacks.

## Usage Examples

### Alert Dialog

```typescript
function Basic() {
  const { openAlert } = useDialog();
  return (
    <Button
      onClick={() => {
        openAlert({
          title: '알려드릴게요',
          description: '작업이 완료됐어요.',
          alertButton: '확인하기',
        });
      }}
    >
      기본 Alert 다이얼로그 열기
    </Button>
  );
}
```

Opens a basic alert dialog with a title, description, and confirmation button.

### Confirm Dialog

```typescript
function BasicConfirm() {
  const { openConfirm } = useDialog();
  return (
    <Button
      onClick={() => {
        openConfirm({
          title: '삭제할까요?',
          description: '이 작업은 되돌릴 수 없어요.',
          confirmButton: '삭제하기',
          cancelButton: '취소',
        });
      }}
    >
      기본 Confirm 다이얼로그 열기
    </Button>
  );
}
```

Shows a confirmation dialog requesting user decision with confirm and cancel buttons.

### Async Confirm Dialog

```typescript
function AsyncConfirm() {
  const { openAsyncConfirm } = useDialog();
  const delay = async (milliseconds: number) => {
    await new Promise((res) => setTimeout(res, milliseconds));
  };
  return (
    <Button
      onClick={() => {
        openAsyncConfirm({
          title: '상담을 종료할까요?',
          description: '상담을 종료하면 대화를 이어갈 수 없어요.',
          confirmButton: '종료하기',
          cancelButton: '취소',
          onConfirmClick: () => delay(2000),
        });
      }}
    >
      비동기 Confirm 다이얼로그 열기
    </Button>
  );
}
```

Handles asynchronous operations with automatic loading state management during button clicks.

## API Reference

### AlertOptions

| Property | Default | Type | Description |
|----------|---------|------|-------------|
| **title*** | - | `React.ReactNode` | Dialog title |
| description | - | `React.ReactNode` | Dialog description |
| alertButton | `'확인'` | `ReactElement \| string` | Button text or custom component |
| closeOnDimmerClick | `false` | `boolean` | Allow closing on background click |
| onEntered | - | `() => void` | Callback after dialog opens |
| onExited | - | `() => void` | Callback after dialog closes |

### ConfirmOptions

| Property | Default | Type | Description |
|----------|---------|------|-------------|
| **title*** | - | `React.ReactNode` | Dialog title |
| description | - | `React.ReactNode` | Dialog description |
| closeOnDimmerClick | `false` | `boolean` | Allow closing on background click |
| confirmButton | `'확인'` | `ReactElement \| string` | Confirm button |
| cancelButton | `'취소'` | `ReactElement \| string` | Cancel button |
| onEntered | - | `() => void` | Callback after dialog opens |
| onExited | - | `() => void` | Callback after dialog closes |

### AsyncConfirmOptions

| Property | Default | Type | Description |
|----------|---------|------|-------------|
| **title*** | - | `React.ReactNode` | Dialog title |
| description | - | `React.ReactNode` | Dialog description |
| closeOnDimmerClick | `false` | `boolean` | Allow closing on background click |
| confirmButton | `'확인'` | `ReactElement \| string` | Confirm button |
| onConfirmClick | - | `() => Promise<void>` | Async function for confirm |
| confirmButtonLoadingPropName | `'loading'` | `string` | Loading prop name for confirm button |
| cancelButton | `'취소'` | `ReactElement \| string` | Cancel button |
| onCancelClick | - | `() => Promise<void>` | Async function for cancel |
| cancelButtonLoadingPropName | `'loading'` | `string` | Loading prop name for cancel button |
| onEntered | - | `() => void` | Callback after dialog opens |
| onExited | - | `() => void` | Callback after dialog closes |

## Key Features

- **Flexible Buttons**: Supports both text strings and custom React components
- **Background Click Control**: Configure whether dialogs close on dimmer clicks
- **Lifecycle Callbacks**: Hook into dialog open/close events
- **Async Support**: Built-in loading state handling for asynchronous operations
