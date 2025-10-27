# ListRow Legacy Documentation

## Overview

This document describes deprecated ListRow APIs that are being removed in v3. It covers how to use various ListRow components and understand the three main areas: left, contents, and right regions.

## Key Components

### Icons

**ListRow.Icon** - Non-fill icons with configurable shapes:
- `no-background`: Basic icon style
- `squircle-background`: Icon with squircle background (medium/large sizes)
- `circle-background`: Icon with circular background
- `circle-masking`: Image masked as circle

**ListRow.FillIcon** - Fill-style icons with shapes:
- `default`: Basic filled icon
- `squircle`: Squircle-masked icon (medium/large)
- `circle-background`: Circular background
- `circle-masking`: Circular masking

### Supporting Components

**ListRow.IconButton** - Interactive buttons with variants:
- `clear`: Borderless style for simple actions
- `fill`: Solid background for primary actions
- `border`: Bordered style for visual distinction

Supports `label` prop for accessibility and `iconSize` for customization.

**ListRow.Image** - Image display with types:
- default, square, rectangle, rectangle-small, circle, circle-small, 3d-emoji
- Supports `border` prop for outline styling

**ListRow.LeftText** - Text element for left region:
- `default`: Bold text style
- `border`: Text with circular border

**ListRow.Texts** - Multi-line text component:
- 1-line: `1RowTypeA` through `1RowTypeC`
- 2-line: `2RowTypeA` through `2RowTypeF`
- 3-line: `3RowTypeA` through `3RowTypeF`
- Right-aligned variants: `Right1RowTypeA` through `Right2RowTypeE`

### Layout Areas

**Left Area** - Accepts: Icon, FillIcon, LeftText, Image, ImageContainer

**Contents Area** - Accepts: Texts (primary content region)

**Right Area** - Accepts: Texts, IconButton, Switch, Badge, or `withArrow` prop

## Interface Props Reference

All components support standard styling properties and accessibility attributes where applicable.
