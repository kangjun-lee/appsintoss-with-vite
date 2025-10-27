# FixedBottomCTA Component Documentation

## Overview

The `FixedBottomCTA` component displays a call-to-action button fixed at the bottom of the screen. It's part of the Toss Design System's Mobile component library.

## Basic Usage

```jsx
<FixedBottomCTA>확인!!</FixedBottomCTA>
```

## Double Button Variant

The Double variant renders two buttons side-by-side:

```jsx
<FixedBottomCTA.Double
  leftButton={
    <CTAButton color="dark" variant="weak">
      취소
    </CTAButton>
  }
  rightButton={<CTAButton>확인</CTAButton>}
/>
```

## Scroll Animation Feature

Adding the `hideOnScroll` prop enables automatic show/hide behavior based on scroll direction. "When users scroll down, the button disappears; scrolling up makes it reappear."

```jsx
<FixedBottomCTA.Double
  hideOnScroll
  leftButton={
    <CTAButton color="dark" variant="weak">
      취소
    </CTAButton>
  }
  rightButton={<CTAButton>확인</CTAButton>}
/>
```

## Key Props

- **leftButton**: React component rendered on the left side (Double variant)
- **rightButton**: React component rendered on the right side (Double variant)
- **hideOnScroll**: Boolean flag enabling scroll animation behavior
