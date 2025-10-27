# ListHeader Component Documentation

## Overview

The `ListHeader` component serves as a header UI element for pages or sections, enabling user interactions and providing additional information. It combines a title, supplementary description, and interactive elements in a single component.

## Key Features

- **Flexible Title Options**: Supports three title variations—paragraph text, text button, and selector dropdown
- **Description Positioning**: Descriptions can be placed above (default) or below the title
- **Right-aligned Elements**: Supports text accessories or arrow icons on the right side
- **Alignment Control**: Right elements can be centered or bottom-aligned

## Usage Examples

### Basic Structure

The component displays a title with optional description and right-side accessories:

```jsx
<ListHeader
  title={<ListHeader.TitleParagraph typography="t5" fontWeight="bold">
    Title Content
  </ListHeader.TitleParagraph>}
  right={<ListHeader.RightText typography="t7">Accessory</ListHeader.RightText>}
  description={<ListHeader.DescriptionParagraph>
    Description content
  </ListHeader.DescriptionParagraph>}
  rightAlignment="center"
/>
```

### Title Variants

**Paragraph Text**: Standard text title with typography and weight control

**Text Button**: Clickable title with variants (clear, arrow, underline)

**Selector**: Dropdown-style title element for selection scenarios

### Description Position

Control description placement via `descriptionPosition` prop:
- `"top"` (default): Description appears above the title
- `"bottom"`: Description appears below the title

### Right Elements

**RightText**: Simple text accessor on the right side

**RightArrow**: Clickable element with arrow icon and text

## Props API

### ListHeaderProps

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `title` | `React.ReactNode` | Required | Main heading element (use TitleParagraph, TitleSelector, or TitleTextButton) |
| `titleWidthRatio` | `number` | `0.66` | Proportion of space occupied by title relative to right element |
| `description` | `React.ReactNode` | `undefined` | Optional supplementary text below/above title |
| `descriptionPosition` | `"top"` \| `"bottom"` | `"top"` | Location of description text |
| `right` | `React.ReactNode` | `undefined` | Right-side element (RightText or RightArrow) |
| `rightAlignment` | `"center"` \| `"bottom"` | `"center"` | Vertical alignment of right element |

### Sub-component Props

**TitleParagraph**: Accepts `typography` ("t7", "t5", "t4"), `fontWeight` ("bold", "medium", "regular"), and `color`

**TitleTextButton**: Extends TextButton; includes `size` ("xsmall", "medium", "large") and `variant` ("clear", "arrow", "underline")

**TitleSelector**: Requires `typography` and supports `color` customization

**RightText**: Needs `typography` ("t7", "t6") and accepts `color`

**RightArrow**: Requires `typography`, supports `onClick` handler, customizable arrow and text colors
