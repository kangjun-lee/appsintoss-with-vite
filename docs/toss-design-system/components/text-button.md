# Text Button Component Documentation

## Overview

The `TextButton` component enables users to trigger actions or execute events. It extends the `ParagraphText` component and inherits all of its properties.

## Usage Examples

### Size Adjustment

The component supports six size options via the `size` prop: `xsmall`, `small`, `medium`, `large`, `xlarge`, and `xxlarge`. This allows flexible text scaling across different use cases.

### Variants

The `variant` prop controls the button's appearance with three options:

**Arrow Variant**
Adds a right-aligned arrow icon to the button, useful for navigation or forward-progression indicators across medium, extra-large, and double-extra-large sizes.

**Underline Variant**
Applies an underline decoration to the button text, creating a link-like appearance.

**Clear Variant** (Default)
Presents a plain text button without additional decorations.

### Disabled State

Setting the `disabled` prop prevents user interaction and applies visual styling to indicate unavailability. Disabled buttons show reduced opacity (38%) and are not clickable.

## API Reference

### TextButtonProps

| Property | Default | Type | Description |
|----------|---------|------|-------------|
| **size** * | — | `xsmall` \| `small` \| `medium` \| `large` \| `xlarge` \| `xxlarge` | Determines button size |
| **variant** | `clear` | `arrow` \| `underline` \| `clear` | Controls visual presentation |
| **disabled** | — | `boolean` | Indicates disabled state |

*Required property
