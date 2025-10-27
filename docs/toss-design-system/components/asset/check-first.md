# Asset 이해하기 - Toss Design System Mobile

## Overview

The `Asset` component enables consistent presentation of various media assets including icons, images, videos, and Lottie animations in a unified manner.

## Core Structure

The Asset component comprises three primary parts:

### Frame
- Provides the foundational layout structure for all Asset variants
- Delivers consistent sizing and styling across different asset types
- Offers multiple preset shapes: square, rectangle, and circular configurations

### Content
- Contains the actual media content (images, icons, videos, text, Lottie animations)
- Supports `scaleType` property to control how content fits within the frame
- Adjustable scaling and positioning options

### Union
- Conveys supplementary information about the content
- **Overlap**: Indicates multiple layered items
- **Acc** (Accessory): Displays status or additional features as small visual elements

## Asset Types

The component supports multiple content types:

- **Icon**: Displays vector icons with customizable colors
- **Image**: Renders static images with crop/contain options
- **Video**: Embeds video content with optional playback controls
- **Lottie**: Animates JSON-based Lottie animations
- **Text**: Renders text content within the frame structure

## Key Properties

| Property | Purpose |
|----------|---------|
| `frameShape` | Defines frame dimensions and shape |
| `scaleType` | Controls content scaling behavior |
| `backgroundColor` | Sets frame background color |
| `scale` | Adjusts content scaling factor |
| `acc` | Adds accessory elements |
| `accPosition` | Positions accessory elements |
| `overlap` | Indicates layered content state |

## Design Philosophy

"The core of the Asset component is the Frame component, which provides consistent layout and styling foundation across all Asset types."
