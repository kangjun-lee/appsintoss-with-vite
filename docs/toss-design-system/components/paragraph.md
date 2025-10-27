# Paragraph Component Documentation

## Overview

The `Paragraph` component displays text with support for complex compositions through various sub-elements and properties.

## Usage

### Text Display

Use `Paragraph.Text` to render textual content. The component accepts multiple text children that render sequentially.

```jsx
<Paragraph typography="t5">
  <Paragraph.Text>First line of text</Paragraph.Text>
  <Paragraph.Text>Second line of text</Paragraph.Text>
</Paragraph>
```

### Icons

Incorporate icons using `Paragraph.Icon`:

```jsx
<Paragraph typography="t5">
  <Paragraph.Text>Text with icon</Paragraph.Text>
  <Paragraph.Icon name="heart-line" />
</Paragraph>
```

### Badges

Add badges via `Paragraph.Badge`:

```jsx
<Paragraph typography="t5">
  <Paragraph.Text>Text with badge</Paragraph.Text>
  <Paragraph.Badge color="blue" variant="fill">Badge text</Paragraph.Badge>
</Paragraph>
```

### Links

Create links using `Paragraph.Link`. Two style options exist:
- **underline**: Link with underline
- **none**: Link without underline (default color: blue500)

```jsx
<Paragraph.Link as="a" href="https://example.com" type="underline">
  <Paragraph.Text>Underlined link</Paragraph.Text>
</Paragraph.Link>
```

## API Reference

### ParagraphProps

| Property | Default | Type | Description |
|----------|---------|------|-------------|
| `typography` * | — | Typography token (t1–t7, st1–st13) | Determines text size |
| `display` | `'block'` | `"block"` \| `"inline"` | CSS display property |
| `ellipsisAfterLines` | — | `number` | Line clamp; text truncates after specified lines |
| `textAlign` | — | Text align values | Alignment direction |
| `fontWeight` | `'regular'` | `"regular"` \| `"medium"` \| `"semibold"` \| `"bold"` | Text weight |
| `color` | — | `string` | CSS color code or color name |

### ParagraphText Props

| Property | Default | Type | Description |
|----------|---------|------|-------------|
| `children` | — | `React.ReactNode` | Child elements |
| `typography` | — | Typography token | Overrides parent typography |
| `fontWeight` | — | Font weight values | Text weight |
| `color` | — | `string` | Text color |
| `id`, `style`, `className` | — | Standard HTML attributes | Element attributes |

### ParagraphBadge Props

| Property | Default | Type | Description |
|----------|---------|------|-------------|
| `style` * | — | `"fill"` \| `"weak"` | Visual style |
| `type` * | — | Color types (blue, teal, green, red, yellow, elephant) | Badge color |
| `typography` | — | Typography token | Text size |
| `children` | — | `React.ReactNode` | Badge content |

### ParagraphLink Props

| Property | Default | Type | Description |
|----------|---------|------|-------------|
| `type` | `'clear'` | `"underline"` \| `"clear"` | Link styling |
| `color` | Blue500 | `string` | Link text color |
| `typography`, `fontWeight` | — | Typography/weight values | Text styling |

### ParagraphIcon Props

| Property | Default | Type | Description |
|----------|---------|------|-------------|
| `typography` | — | Typography token | Icon height sizing |
| `id`, `style`, `className` | — | Standard HTML attributes | Element attributes |
