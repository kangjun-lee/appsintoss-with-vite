# Bottom Info Component Documentation

## Overview

The `BottomInfo` component displays critical information or disclaimers at the screen's bottom. It's particularly useful for financial products requiring legal notices or disclaimers, and works well alongside the `Post` component for organized information presentation.

## Usage Examples

### Basic Implementation

The component displays a list of important notices:

- Loan terms with age restrictions
- Disclosure requirements
- Early repayment fee information

### Gradient Customization

#### Adjusting the Gradient

The `bottomGradient` prop controls the bottom gradient appearance. The default value is `"linear-gradient(adaptive.greyBackground, rgba(255,255,255,0))"` but can be customized to match your design:

```jsx
<BottomInfo
  bottomGradient={`linear-gradient(${adaptive.greyBackground}, ${adaptive.blue100})`}
>
  <Post.Ul paddingBottom={24} typography="t7">
    <Post.Li>Your content here</Post.Li>
  </Post.Ul>
</BottomInfo>
```

#### Removing the Gradient

Set `bottomGradient` to `"none"` to eliminate the gradient effect. However, this approach isn't recommended for typical use cases as it may create inconsistency on iOS devices.

```jsx
<BottomInfo bottomGradient="none">
  {/* content */}
</BottomInfo>
```

## Interface

### BottomInfoProps

| Property | Default | Type | Description |
|----------|---------|------|-------------|
| **bottomGradient** | `"linear-gradient(adaptive.greyBackground, rgba(255,255,255,0))"` | `"none"` \| `"linear-gradient(${string})"` | Configures the bottom gradient's color and visibility |
