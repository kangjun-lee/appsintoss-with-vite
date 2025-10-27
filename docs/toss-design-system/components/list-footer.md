# ListFooter Component Documentation

## Overview

The `ListFooter` component displays content at the end of list items, typically providing "load more" or list expansion functionality. It offers customizable visual elements including text, icons, dividers, and shadow effects.

## Usage Examples

### Basic Text Usage

Pass a string to `children` to render text. Strings automatically use the `ListFooter.Text` component:

```jsx
<ListFooter>더 보기</ListFooter>
<ListFooter textColor={adaptive.grey600}>더 보기</ListFooter>
<ListFooter>
  <ListFooter.Text color={adaptive.blue400} fontWeight="bold">
    더 보기
  </ListFooter.Text>
</ListFooter>
```

### With Icons

Use the `icon` prop to add icons. Pass a string for automatic rendering or a custom component:

```jsx
<ListFooter icon="icon-plus-small-mono">더 보기</ListFooter>
<ListFooter icon="icon-arrow-down-mono" iconColor={adaptive.grey600} textColor={adaptive.grey600}>
  더 보기
</ListFooter>
<ListFooter icon={<ListFooter.Icon name="icon-arrow-up-mono" color={adaptive.grey600} />}>
  더 보기
</ListFooter>
```

### Border Styles

Control the top divider with the `border` prop:

- **`full`**: Full-width hairline divider (default)
- **`indented`**: Divider with left margin
- **`none`**: No divider

```jsx
<ListFooter border="full">더 보기</ListFooter>
<ListFooter border="indented">더 보기</ListFooter>
<ListFooter border="none">더 보기</ListFooter>
<ListFooter hairline={<ListFooter.Hairline indent={50} style={{ background: `${adaptive.blue100}` }} />}>
  더 보기
</ListFooter>
```

### Shadow Effects

Add visual feedback by including `onClick`. Customize shadows with the `shadow` prop:

```jsx
function Shadow() {
  const onClick = () => {};
  return (
    <div>
      <ListFooter icon="icon-plus-small-mono" onClick={onClick}>더 보기</ListFooter>
      <ListFooter
        icon="icon-plus-small-mono"
        onClick={onClick}
        shadow={<ListFooter.Shadow style={{ background: `radial-gradient(closest-side, ${adaptive.blue100} 0%, transparent 100%)` }} />}
      >
        더 보기
      </ListFooter>
    </div>
  );
}
```

## Accessibility

### Required aria-label

"Provide an `aria-label` to clearly describe the button's purpose for screen reader users, including context about what action occurs."

```jsx
<ListFooter
  onClick={goToNextPage}
  aria-label="다음 페이지로 이동하기"
>
  <ListFooter.Text>더 보기</ListFooter.Text>
</ListFooter>
```

## Props Reference

### ListFooterProps

| Prop | Default | Type | Description |
|------|---------|------|-------------|
| `border` | `"full"` | `"full"` \| `"indented"` \| `"none"` | Top divider style |
| `icon` | — | `string` \| `ReactElement` | Icon to display |
| `hairline` | — | `ReactElement` | Custom divider component |
| `shadow` | — | `ReactElement` | Custom shadow component |
| `textColor` | `adaptive.blue500` | `string` | Text color |
| `iconColor` | `adaptive.blue500` | `string` | Icon color |
| `children` | — | `string` \| `ReactElement` | Footer content |

### ListFooterTextProps

| Prop | Default | Type | Description |
|------|---------|------|-------------|
| `color` | — | `string` | Text color |
| `fontWeight` | `"medium"` | `"regular"` \| `"medium"` \| `"semibold"` \| `"bold"` | Font weight |

### ListFooterIconProps

| Prop | Default | Type | Description |
|------|---------|------|-------------|
| `name` | — | `string` | Icon name (required) |
| `color` | — | `string` | Icon color |

### ListFooterHairLineProps

| Prop | Default | Type | Description |
|------|---------|------|-------------|
| `indent` | — | `number` | Left margin in pixels |
