# BottomSheet Component Documentation

## Overview

The `BottomSheet` component is a panel that slides up from the screen's bottom. It's useful for displaying additional details or prompting specific user actions without leaving the page.

## Key Features

- Slides up from the bottom of the screen
- Can include headers, descriptions, and call-to-action buttons
- Supports single and double CTA layouts
- Offers selection options through `BottomSheet.Select`
- Customizable height and expansion behavior
- Accessibility features with ARIA support

## Usage Examples

### Basic Implementation

Create a simple sheet that opens/closes with state management:

```jsx
const [isOpen, setIsOpen] = useState(false);
return (
  <BottomSheet open={isOpen} onClose={() => setIsOpen(false)}>
    <Post.Paragraph>Content goes here</Post.Paragraph>
  </BottomSheet>
);
```

### Adding Headers

Use `BottomSheet.Header` for titles:

```jsx
header={<BottomSheet.Header>Title Text</BottomSheet.Header>}
```

### Adding Descriptions

Pair headers with `BottomSheet.HeaderDescription`:

```jsx
headerDescription={
  <BottomSheet.HeaderDescription>Subtitle text</BottomSheet.HeaderDescription>
}
```

### Single CTA Button

Include action buttons at the bottom:

```jsx
cta={<BottomSheet.CTA onClick={handleAction}>Confirm</BottomSheet.CTA>}
```

### Double CTA Layout

Support two buttons side-by-side:

```jsx
cta={
  <BottomSheet.DoubleCTA
    leftButton={<Button variant="weak">Cancel</Button>}
    rightButton={<Button>Confirm</Button>}
  />
}
```

### Selection Options

Display multiple choices with `BottomSheet.Select`:

```jsx
<BottomSheet.Select
  options={[
    { name: 'Option 1', value: 'opt1' },
    { name: 'Option 2', value: 'opt2' }
  ]}
  onChange={handleChange}
  value={selectedValue}
/>
```

## Core Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `open` | boolean | - | Controls visibility |
| `onClose` | function | - | Callback when closing |
| `header` | ReactNode | - | Title section |
| `headerDescription` | ReactNode | - | Subtitle section |
| `cta` | ReactNode | - | Action button area |
| `children` | ReactNode | - | Main content |
| `hasTextField` | boolean | false | Lifts sheet above keyboard |
| `disableDimmer` | boolean | false | Hides overlay backdrop |
| `maxHeight` | number | - | Non-expanded height (px) |
| `expandedMaxHeight` | number | - | Expanded height (px) |
| `expandBottomSheet` | boolean | false | Enable expand-on-drag |
| `UNSAFE_disableFocusLock` | boolean | - | Maintains page focus |
| `UNSAFE_ignoreDimmerClick` | boolean | - | Prevents close on backdrop click |

## Accessibility

Support ARIA attributes for screen readers:
- `ariaLabelledBy`: Links to title element ID
- `ariaDescribedBy`: Links to description element ID

## Advanced Features

**Keyboard Handling**: Set `hasTextField={true}` when the sheet contains input fields that trigger keyboards.

**Maintaining Page Focus**: Use `UNSAFE_disableFocusLock` and `disableDimmer` together to keep page interaction available while the sheet displays.

**Scrollable Content**: Configure `expandBottomSheet` and `expandBottomSheetWhenScroll` for sheets with scrollable content that expands to full height.
