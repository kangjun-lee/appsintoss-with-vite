# Progress Bar Component Documentation

## Overview

The `ProgressBar` component visually displays task progress. It can show data loading status, step-by-step completion, and other work progression scenarios to users intuitively.

## Usage

### Basic Implementation

Pass a value between 0.0 and 1.0 to the `progress` prop to display progress. For example, 0.5 represents 50% completion.

```jsx
<ProgressBar progress={0.5} size="normal" />
```

### Size Options

Control component dimensions via the `size` prop. Three sizes are available: `light`, `normal` (default), and `bold`.

```jsx
<ProgressBar progress={0.7} size="light" />
<ProgressBar progress={0.7} size="normal" />
<ProgressBar progress={0.7} size="bold" />
```

### Customizing Color

Modify the progress bar color using the `color` prop. Accepts CSS color values; defaults to `blue400`.

```jsx
<ProgressBar size="normal" progress={0.7} color={colors.blue400} />
<ProgressBar size="normal" progress={0.7} color={colors.green400} />
<ProgressBar size="normal" progress={0.7} color={colors.red400} />
```

### Animation Effects

Enable smooth transitions when progress changes by setting `animate` to `true`.

```jsx
<ProgressBar size="bold" progress={progress} animate />
```

## Props Interface

| Prop | Default | Type | Description |
|------|---------|------|-------------|
| **progress** | — | `number` | Progress value between 0.0-1.0 indicating completion percentage |
| **size** | `'normal'` | `"light"` \| `"normal"` \| `"bold"` | Determines component size |
| **color** | `colors.blue400` | `string` | Sets the progress bar color |
| **animate** | `false` | `boolean` | Enables animation on progress changes |
| **className** | — | `string` | Assigns custom CSS class |
