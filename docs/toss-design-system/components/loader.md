# Loader Component Documentation

## Overview

The `Loader` component provides visual feedback during content loading, helping users understand that data is being retrieved or a process is underway.

## Usage

### Size Configuration

The `size` property controls the loader's dimensions with three options:
- `small`
- `medium` (default)
- `large`

### Type Configuration

The `type` property determines the loader's appearance:
- `primary` (default) - standard blue styling
- `dark` - darker variant
- `light` - suited for dark backgrounds

### Label Addition

Add descriptive text below the loader using the `label` property to explain loading status or describe ongoing operations. The property supports multiline text.

## Interface

### LoaderProps

| Property | Default | Type | Description |
|----------|---------|------|-------------|
| **size** | `'medium'` | `"small"` \| `"medium"` \| `"large"` | Specifies loader dimensions |
| **type** | `'primary'` | `"primary"` \| `"dark"` \| `"light"` | Determines color styling across variant types |
| **label** | — | `string` | Text displayed below loader supporting multiple lines |
| **style** | — | `React.CSSProperties` | Direct inline styling |
| **className** | — | `string` | CSS class assignment |
| **id** | — | `string` | Unique identifier |

## Key Features

- Smooth fade-in animation (0.7s delay)
- Rotating SVG animation (1.8s duration)
- Supports custom styling and class names
- Flexible sizing for various UI contexts
- Multiple color themes for different backgrounds
