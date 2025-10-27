# Toss Design System - Colors Guide

## Overview

The Toss color system provides "unified color naming to help developers and designers maintain consistent UI implementations aligned with design guidelines."

## Installation

```bash
yarn add @toss/tds-colors
```

## Basic Usage

Import and apply colors from the colors object:

```javascript
import { colors } from '@toss/tds-colors';

<div style={{ backgroundColor: colors.blue500 }} />
```

## Color Palettes

### Grey Scale
- grey50: #f9fafb through grey900: #191f28
- 10-step progression from lightest to darkest

### Primary Colors
- **Blue**: #e8f3ff (blue50) to #194aa6 (blue900)
- **Red**: #ffeeee (red50) to #a51926 (red900)
- **Orange**: #fff3e0 (orange50) to #e45600 (orange900)

### Secondary Colors
- **Yellow**: #fff9e7 to #dd7d02
- **Green**: #f0faf6 to #027648
- **Teal**: #edf8f8 to #076565
- **Purple**: #f9f0fc to #65237b

### Grey with Opacity
- greyOpacity50 through greyOpacity900
- Ranges from 0.02 to 0.91 transparency with dark blue base

## Background Colors

- **background**: #FFFFFF
- **greyBackground**: Light theme grey100
- **layeredBackground**: #FFFFFF
- **floatedBackground**: #FFFFFF

Each color palette follows a consistent numbering system (50, 100, 200...900) for easy selection and accessibility.
