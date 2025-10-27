# Border Component Documentation

## Overview

The Border component from the Toss Design System Mobile (TDS Mobile) is used to create visual separation between UI elements. As described in the documentation, it "draws lines around elements to clarify distinctions and express hierarchical relationships." This component is primarily used for distinguishing lists and sections.

## Key Features

- **Visual Separation**: Creates clear boundaries between content sections
- **Flexible Styling**: Three distinct visual variants for different use cases
- **Customizable Height**: Supports custom sizing for specific variants

## Usage Patterns

### 1. **Item Division**
Use the Border component to separate list items or sections with a line. Two primary options exist:
- `full`: Line spans the complete width
- `padding24`: Line includes 24px margins on both sides

### 2. **Left Margin Application**
When left padding is necessary, set the variant to `padding24` to maintain consistent spacing from the left edge.

### 3. **Section Division**
For separating distinct content sections, use the `height16` variant to create spacing between areas.

## Interface/Props

| Property | Default | Type | Description |
|----------|---------|------|-------------|
| **variant** | `"full"` | `"full"` \| `"padding24"` \| `"height16"` | Determines component appearance. Use `full` or `padding24` for item division; use `height16` for section spacing. |
| **height** | — | `string` | Custom height setting available when variant is `height16`. |

## Visual Examples

The component demonstrates three distinct applications:
- Full-width divider between list rows
- Padded divider with left margin spacing
- Spacer variant creating vertical separation between content groups

This component integrates seamlessly with other TDS Mobile components like ListRow for cohesive interface design.
