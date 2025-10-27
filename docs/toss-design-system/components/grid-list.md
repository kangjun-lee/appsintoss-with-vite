# GridList Component Documentation

## Overview

The `GridList` component arranges `GridList.Item` components in a grid layout. Each item contains an image and text, and provides touch feedback with a zoom effect on mobile devices.

## Basic Usage

```jsx
<GridList>
  <GridList.Item
    image={
      <img
        src="https://static.toss.im/icons/png/4x/icn-bank-toss.png"
        style={{ width: '24px', height: '24px' }}
      />
    }
  >
    Item 1
  </GridList.Item>
  <GridList.Item
    image={
      <img
        src="https://static.toss.im/icons/png/4x/icn-bank-toss.png"
        style={{ width: '24px', height: '24px' }}
      />
    }
  >
    Item 2
  </GridList.Item>
</GridList>
```

## Column Configuration

The `column` prop controls the number of grid columns. Supports `1`, `2`, or `3` columns (default: `3`).

### 1-Column Grid

Use for longer content or emphasized menu items that require more prominence.

```jsx
<GridList column={1}>
  <GridList.Item image={<img src="..." />}>
    Single Column
  </GridList.Item>
</GridList>
```

### 2-Column Grid

Ideal for larger item sizes and improved content readability.

```jsx
<GridList column={2}>
  <GridList.Item image={<img src="..." />}>
    Two Columns
  </GridList.Item>
</GridList>
```

### 3-Column Grid

Default layout efficiently displays multiple options like categories or menus.

```jsx
<GridList column={3}>
  <GridList.Item image={<img src="..." />}>
    Three Columns
  </GridList.Item>
</GridList>
```

## API Reference

### GridListProps

| Prop | Default | Type | Description |
|------|---------|------|-------------|
| `column` | `3` | `1 \| 2 \| 3` | "Determines the number of displayed columns; accepts 1, 2, or 3." |
| `children` | — | `React.ReactNode` | "Child elements, typically GridList.Item components." |

### GridListItemProps

| Prop | Default | Type | Required | Description |
|------|---------|------|----------|-------------|
| `image` | — | `React.ReactNode` | Yes | "Visual element displayed in the item; accepts img tags or ReactNode elements." |
| `children` | — | `React.ReactNode` | No | "Text rendered at item bottom via Paragraph component." |
