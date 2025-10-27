# Typography Guide - Toss Design System Mobile

## Overview

Typography serves as a foundational element for the Toss Design System, establishing "a clear information hierarchy and delivering unified visuals across diverse devices and environments." The system prioritizes accessibility and responsive design across native and web platforms.

## Core Token Structure

The design system employs hierarchical typography tokens ranging from Typography 1 through Typography 7, supplemented by subtitle variants (st1-st13). Each token specifies font size and line height to ensure consistent text rendering without requiring developers to hardcode specific values.

### Key Token Levels

| Level | Purpose |
|-------|---------|
| Typography 1 | Very large headings (30px) |
| Typography 2 | Large headings (26px) |
| Typography 3 | Standard headings (22px) |
| Typography 5 | Body text (17px) |
| Typography 6 | Small body text (15px) |

## Accessibility: Larger Text Support

Both iOS and Android provide accessibility settings enabling users to enlarge text. The system accommodates these adjustments through scaling ratios:

**iOS Scale Mapping:**
- Large: 100%
- xLarge: 110%
- xxxLarge: 160%

**Android Approach:**
"Android provides unrestricted scaling percentages," using formulas like `(base value) × (NN%) × 0.01` for dynamic calculations.

## Implementation Best Practices

Designers and developers should "use the tokens directly without memorizing or hardcoding specific font sizes and line heights," enabling the system to respond flexibly to user accessibility preferences and platform-specific requirements.
