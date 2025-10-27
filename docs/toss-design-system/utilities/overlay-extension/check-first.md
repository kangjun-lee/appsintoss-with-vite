# Overlay Extension 이해하기

## Overview

The Overlay Extension is a collection of utility hooks that provides a declarative, simplified way to use overlay UI components like Dialog, Toast, and BottomSheet.

## Three Core Hooks

### useDialog
**Purpose:** Display important information requiring user attention or decisions

**Best for:**
- Confirming critical actions
- Showing warning messages
- Situations requiring explicit user confirmation

**Key characteristics:** Centers focus on screen, blocks background interaction

### useToast
**Purpose:** Present temporary notifications and feedback

**Best for:**
- Action completion confirmations
- Error message display
- Transient status updates

**Key characteristics:** Auto-dismisses after specified duration, non-blocking

### useBottomSheet
**Purpose:** Show supplementary information or actions from screen bottom

**Best for:**
- Detailed information presentation
- Additional option menus
- Complex interactions requiring more space

**Key characteristics:** Slides up from bottom, captures user focus without full blocking

## Comparison Table

| Hook | Use Case | Interaction Type |
|------|----------|------------------|
| useDialog | Critical decisions | Blocking overlay |
| useToast | Quick feedback | Non-blocking notification |
| useBottomSheet | Additional content | Slide-up drawer |

## Implementation Example

The documentation includes an interactive example demonstrating all three hooks with buttons that trigger each overlay type with appropriate content and behavior patterns.
