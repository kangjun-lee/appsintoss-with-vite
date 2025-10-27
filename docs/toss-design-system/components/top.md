# Top Component Documentation

## Overview

The `Top` component serves as a versatile page header element that accommodates various layouts. It enables easy placement of multiple elements including text, buttons, and images, primarily used at the page's top to construct header and title sections.

## Core Usage

### Controlling Vertical Spacing

Adjust top and bottom margins using `upperGap` and `lowerGap` properties:

```jsx
<Top
  upperGap={0}
  lowerGap={0}
  title={<Top.TitleParagraph size={28}>Title text</Top.TitleParagraph>}
  right={<Top.RightButton>Action</Top.RightButton>}
/>
```

### Adding Upper Content

Insert content above the main area using the `upper` property. Wrap `Asset` components with `Top.UpperAssetContent` to maintain proper spacing:

```jsx
<Top
  upper={
    <Top.UpperAssetContent
      content={<Asset.Lottie frameShape={Asset.frameShape.SquareLarge} ... />}
    />
  }
  title={...}
/>
```

### Adding Lower Content

Use the `lower` property for bottom-area elements:

**Single button:**
```jsx
<Top
  title={...}
  lower={<Top.LowerButton>Help text</Top.LowerButton>}
/>
```

**Two buttons:**
```jsx
<Top
  title={...}
  lower={
    <Top.LowerCTA
      type="2-button"
      leftButton={<Top.LowerCTAButton color="dark" variant="weak">Fill</Top.LowerCTAButton>}
      rightButton={<Top.LowerCTAButton>Send</Top.LowerCTAButton>}
    />
  }
/>
```

### Right-Side Elements

**Asset content:**
```jsx
<Top
  title={...}
  right={
    <Top.RightAssetContent
      content={<Asset.Lottie ... />}
    />
  }
/>
```

**Button:**
```jsx
<Top
  title={...}
  right={<Top.RightButton color="dark" variant="weak">Action</Top.RightButton>}
/>
```

## Title Variations

- **`Top.TitleParagraph`**: Static text display
- **`Top.TitleTextButton`**: Clickable title with interaction feedback
- **`Top.TitleSelector`**: Title with dropdown arrow icon

## Subtitle Options

All support `subtitleTop` and `subtitleBottom` positioning:

- **`Top.SubtitleParagraph`**: Static text
- **`Top.SubtitleTextButton`**: Interactive text link
- **`Top.SubtitleSelector`**: Button with arrow icon
- **`Top.SubtitleBadges`**: Array of badge components

## Accessibility Features

The component includes built-in ARIA support:

| Attribute | Purpose |
|-----------|---------|
| `role="heading"` | Identifies text as a heading for screen readers |
| `aria-level="1"` | Marks primary headings |
| `aria-level="2"` | Marks secondary headings |
| `aria-haspopup="listbox"` | Indicates dropdown functionality |

## Props Interface

### TopProps

| Property | Default | Type | Description |
|----------|---------|------|-------------|
| `title` | - | `React.ReactNode` | Required. Primary heading content |
| `upperGap` | `24` | `number` | Top padding |
| `lowerGap` | `24` | `number` | Bottom padding |
| `upper` | - | `React.ReactNode` | Upper section content |
| `lower` | - | `React.ReactNode` | Lower section content |
| `subtitleTop` | - | `React.ReactNode` | Content above title |
| `subtitleBottom` | - | `React.ReactNode` | Content below title |
| `right` | - | `React.ReactNode` | Right-aligned content |
| `rightVerticalAlign` | `'center'` | `"center"` \| `"end"` | Right content alignment |

### Component-Specific Props

**TitleParagraph/Selector**: size (`22` \| `28`), color, typography, fontWeight

**SubtitleParagraph/Selector**: size (`13` \| `15` \| `17`), color, typography, fontWeight

**RightButton/LowerButton**: extends Button component with size options

**SubtitleBadges**: `badges` array with `text`, `type`, and `style` properties
