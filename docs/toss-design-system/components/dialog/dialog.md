# Dialog 이해하기 - Toss Design System

## Overview

The Dialog component serves as a modal interface for conveying important information or requesting user decisions. It's primarily used for task completion notifications, status change alerts, or confirmations before executing critical actions.

## AlertDialog vs ConfirmDialog

| Type | Purpose | Documentation |
|------|---------|---|
| **AlertDialog** | Presents a single confirmation button for acknowledging notifications; used for task completion or status updates | [AlertDialog docs](/tds-mobile/components/Dialog/alert-dialog/) |
| **ConfirmDialog** | Offers two buttons for user selection; used when confirming critical actions before execution | [ConfirmDialog docs](/tds-mobile/components/Dialog/confirm-dialog/) |

## Dialog Structure

Dialogs consist of three main components:

1. **Title** - Displays the primary message using `AlertDialog.Title` or `ConfirmDialog.Title`
2. **Description** - Provides supplementary text (optional) via `AlertDialog.Description` or `ConfirmDialog.Description`
3. **Buttons** - Action controls:
   - AlertDialog: Single confirmation button (`AlertDialog.AlertButton`)
   - ConfirmDialog: Cancel and confirm buttons (`ConfirmDialog.CancelButton`, `ConfirmDialog.ConfirmButton`)

## Key Props

### AlertDialogProps
- `open` - Controls visibility (boolean)
- `title` - Primary message content
- `description` - Optional supplementary text
- `alertButton` - Confirmation button element
- `closeOnDimmerClick` - Allows closing via background click (default: true)
- `closeOnBackEvent` - Allows closing via back navigation (default: true)
- `onClose` - Callback when dialog closes
- `onEntered` - Callback after opening animation completes
- `onExited` - Callback after closing animation completes
- `portalContainer` - DOM element for rendering (default: document.body)

### Title/Description Props
- `as` - HTML tag override
- `color` - Text color customization
- `typography` - Font size/style selection
- `fontWeight` - Font weight level (regular, medium, semibold, bold)

### Button Props
- `size` - Button sizing options
- `color` - Button color (default: blue500)
- `fontWeight` - Font weight level
- `variant` - Style variant (arrow, underline, clear)

---

**Learn more:** See individual component documentation for detailed implementation examples and advanced configurations.
