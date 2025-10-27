# Menu Component Documentation

## Overview

The `Menu` component provides dropdown functionality for selecting items or changing states. It allows developers to organize multiple options and display them in various contexts like settings screens or task lists. Menus can be opened/closed through user actions like button clicks or input.

## Key Features

- **Dropdown menus** with organized item selection
- **Icon support** for visual emphasis
- **Checkbox items** for state management
- **Dynamic control** via trigger component with placement options

## Component Structure

### Basic Components

- **Menu.Dropdown**: Container for dropdown items; accepts `header` prop for titles
- **Menu.Header**: Displays the menu title at the top
- **Menu.DropdownItem**: Individual selectable menu option
- **Menu.DropdownCheckItem**: Menu item with checkbox functionality
- **Menu.DropdownIcon**: Icon display component for menu items
- **Menu.Trigger**: Controls menu open/close via user interaction

## Usage Examples

### Basic Dropdown Menu

```jsx
<Menu.Dropdown header={<Menu.Header>Edit</Menu.Header>}>
  <Menu.DropdownItem>First option</Menu.DropdownItem>
  <Menu.DropdownItem>Second option</Menu.DropdownItem>
  <Menu.DropdownItem>Third option</Menu.DropdownItem>
</Menu.Dropdown>
```

### Menu with Icons

Icons are added via the `right` prop using `Menu.DropdownIcon`:

```jsx
<Menu.DropdownItem right={<Menu.DropdownIcon name="icon-setting-mono" />}>
  Menu item with icon
</Menu.DropdownItem>
```

### Checkbox Menu Items

Control checked state with `checked` and `onCheckedChange` props:

```jsx
<Menu.DropdownCheckItem checked={false}>
  First option
</Menu.DropdownCheckItem>
```

### Controlled Menu with Trigger

```jsx
<Menu.Trigger
  open={open}
  onOpen={() => setOpen(true)}
  onClose={() => setOpen(false)}
  placement="bottom"
  dropdown={<Menu.Dropdown>...</Menu.Dropdown>}
>
  <Button>Click me</Button>
</Menu.Trigger>
```

## API Documentation

### MenuDropdownProps

| Property | Type | Description |
|----------|------|-------------|
| **header** | `React.ReactNode` | "Defines dropdown header, typically using Menu.Header component" |

### MenuDropdownItemProps

| Property | Type | Description |
|----------|------|-------------|
| **left** | `React.ReactNode` | "Component displayed on item's left side" |
| **right** | `React.ReactNode` | "Component displayed on item's right side (icons)" |
| **children** | `React.ReactNode` | "Menu item content" |

### MenuDropdownCheckedItemProps

| Property | Type | Description |
|----------|------|-------------|
| **checked** | `boolean` | "Checkbox state indicator" |
| **onCheckedChange** | `(checked: boolean) => void` | "Callback when check state changes" |

### MenuTriggerProps

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| **open** | `boolean` | - | "Controls menu visibility; requires onOpen/onClose" |
| **defaultOpen** | `boolean` | - | "Initial open state" |
| **children** | `React.ReactNode` | - | "Trigger component (button, etc.)" |
| **dropdown** | `React.ReactNode` | - | "Menu.Dropdown component to display" |
| **placement** | `string` | `'bottom-start'` | "Menu position: top/bottom/left/right with start/end alignment" |
| **onOpen** | `() => void` | - | "Callback when menu opens" |
| **onClose** | `() => void` | - | "Callback when menu closes" |

## Placement Options

Positioning directions: `top`, `bottom`, `left`, `right`

Alignment options: `start`, `end` (centered if omitted)

Examples: `top-start`, `bottom-end`, `left`, `right-start`
