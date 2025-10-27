# ListRow 영역 구성하기 - Toss Design System

## Overview

This documentation explains how to compose ListRow areas using specific components. After reading, you'll understand which components can be used in ListRow and how to place appropriate elements in the `left`, `contents`, and `right` zones.

## Core Components

### AssetIcon
Icons that convey content characteristics. Supports two usage modes:
- **name** attribute for design system icons
- **url** attribute for external images

**Shape options:**
- `original`: Icon without background
- `squircle`: Squircle-shaped background
- `card`: Card-style background
- `circle`: Circular background (legacy)

**Sizing:** Defaults to "small" and "medium"; with `variant="fill"`, you get "xsmall", "small", and "medium" options.

### IconButton
Small interactive buttons for list items. Supports three variants:
- `fill`: Filled background for emphasis
- `clear`: Clean, minimal appearance
- `border`: Border-outlined style

Includes `label` attribute for accessibility via aria-labels.

### AssetImage
Displays images or thumbnails with shape masking:
- `original`, `squircle`, `card`, `square`, `circle`

Fixed sizes: square (52×52), circle (40×40), original (height 56).

### AssetLottie
Animated Lottie elements with identical shape options to AssetImage. Fixed sizes: original (height 40), square (52×52), circle (40×40).

### AssetText
Text badge for left areas with `squircle` or `card` shapes. Supports "xsmall", "small", "medium" sizes.

### Texts
Multi-line text component for the `contents` area using consistent naming:
- **Prefix numbers** (1Row, 2Row, 3Row) indicate line count
- **"Right"** suffix means right-aligned; otherwise left-aligned
- **Suffix letters** (A, B, C...) represent style sets

**Available types:**
- 1-line: `1RowTypeA–C`, `Right1RowTypeA–E`
- 2-line: `2RowTypeA–F`, `Right2RowTypeA–E`
- 3-line: `3RowTypeA–F`

## Layout Zones

**Left Zone:** Visual anchors like AssetIcon, AssetImage, AssetLottie, or AssetText

**Contents Zone:** Primary text information via Texts component

**Right Zone:** Interactive elements (Texts, IconButton, Switch, Badge) or `withArrow` prop for navigation indicators

## Key Props Reference

| Component | Key Props |
|-----------|-----------|
| AssetIcon | shape, variant, size, backgroundColor, acc, accPosition |
| IconButton | variant, iconSize, label, bgColor |
| AssetImage | src, shape, size, backgroundColor |
| AssetLottie | src, shape, size, backgroundColor |
| AssetText | shape, size, backgroundColor, color |
| Texts | type, top, middle, bottom, marginTop |

---

**Source:** Toss Design System Mobile Documentation
