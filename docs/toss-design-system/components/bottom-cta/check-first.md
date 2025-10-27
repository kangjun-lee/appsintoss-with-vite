# BottomCTA 이해하기 - Toss Design System

## Overview

The BottomCTA component is a "call-to-action button displayed in the user interface" designed to help users complete specific tasks. It's typically fixed at the bottom of the page for easy access during scrolling or keyboard input.

## Key Concepts

### FixedBottomCTA vs BottomCTA

Both provide fixed bottom call-to-action buttons, but differ in their anchoring behavior:

- **FixedBottomCTA**: Always remains fixed to the screen's bottom
- **BottomCTA**: Can toggle between fixed and scrollable states via the `fixed` prop

FixedBottomCTA is essentially a pre-configured BottomCTA with `fixed={true}` as the default setting. It uses `BottomCTA.Single` (one button) by default; use `FixedBottomCTA.Double` for two-button variants.

### Single vs Double

| Type | Buttons | Description | Use Case |
|------|---------|-------------|----------|
| **Single** | 1 | Renders one button; content controlled via `children` prop | Primary action only |
| **Double** | 2 | Renders two buttons; controlled via `leftButton` and `rightButton` props | Primary + secondary actions |

## Learning Outcomes

After reviewing this documentation, you'll understand:
- The distinction between FixedBottomCTA and BottomCTA components
- The differences between Single and Double button variants

**Related Documentation:**
- [Single variant](/tds-mobile/components/BottomCTA/Single/)
- [Double variant](/tds-mobile/components/BottomCTA/Double/)
- [FixedBottomCTA](/tds-mobile/components/BottomCTA/fixed-bottom-cta/)
