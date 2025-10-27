# SearchField Component Documentation

## Overview

The `SearchField` component is designed for implementing search input functionality. It features fixed positioning capabilities, search term deletion functionality, and various configuration options.

## Key Features

- **Search Input**: A text input field with search icon
- **Delete Functionality**: Built-in button to clear entered search terms
- **Fixed Positioning**: "Ability to pin the search box to the top of the screen, keeping it visible during scrolling"
- **Layout Control**: Space preservation option when using fixed positioning

## Usage Examples

### Basic Implementation

```jsx
<SearchField placeholder="검색어를 입력하세요" />
```

### Fixed Position at Top

```jsx
<SearchField
  placeholder="검색어를 입력하세요"
  fixed
  takeSpace
/>
```

The `takeSpace` property maintains page layout when the component uses fixed positioning, preventing other elements from shifting.

### Delete Action Handler

```jsx
<SearchField
  placeholder="검색어를 입력하고 오른쪽 버튼을 클릭해보세요."
  onDeleteClick={() => alert('delete')}
/>
```

## API Reference

### SearchFieldProps

| Property | Default | Type | Description |
|----------|---------|------|-------------|
| **fixed** | `false` | boolean | "Pins the component to the top of the screen" |
| **takeSpace** | `true` | boolean | "Fills the space occupied by the fixed component when both values are true" |
| **onDeleteClick** | — | `() => void` | Callback function triggered when the delete icon is clicked |
