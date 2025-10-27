# Board Row Component Documentation

## Overview

The `BoardRow` component is designed to present substantial information in constrained spaces with a clean, organized layout. It functions similarly to an accordion component, allowing users to expand and collapse content sections—commonly used for Q&A formats.

## Key Features

**Structure**: The component consists of a title area, prefix element, icon, and expandable content section. Users click the title to toggle the content visibility.

**Default Behavior**: The component remains collapsed initially unless configured otherwise.

## Usage Patterns

### Initial State Control
Use the `initialOpened` prop to render the component in an expanded state from the start, displaying content without requiring user interaction.

### External State Management
Combine `isOpened`, `onOpen`, and `onClose` props to manage panel visibility from outside the component. The `isOpened` boolean controls visibility, while the callback functions respond to user interactions.

### Content Area Options
- **Simple text**: Use `BoardRow.Text` for straightforward content
- **Complex layouts**: Employ the `Post` component family (Paragraph, List items) for structured information

## Accessibility Features

The component automatically implements:
- Semantic `<button>` element for the header
- `aria-expanded` attribute that updates based on panel state
- Screen reader support for open/closed status

No additional accessibility configuration is required.

## Component Props

| Prop | Type | Default | Purpose |
|------|------|---------|---------|
| `title` | ReactNode | Required | Header display text |
| `initialOpened` | boolean | false | Initial expansion state |
| `isOpened` | boolean | false | Controlled expansion state |
| `onOpen` | function | — | Expansion callback |
| `onClose` | function | — | Collapse callback |
| `prefix` | ReactNode | — | Pre-title element |
| `icon` | ReactNode | — | Icon display area |
| `children` | ReactNode | — | Expandable content |
