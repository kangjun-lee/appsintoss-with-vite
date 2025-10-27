# Stepper Component Documentation

## Overview

The Stepper component visually displays multiple sequential steps. Each step can include a title and description, with customizable icons or buttons on the right side. It's ideal for presenting ordered workflows clearly to users.

## Core Usage

### Adding Steps

Use `StepperRow` components with `StepperRow.Texts` to create steps:

```jsx
<StepperRow
  left={<StepperRow.NumberIcon number={1} />}
  center={<StepperRow.Texts type="A" title="Title" description="Description" />}
/>
```

### Text Type Styling

Three type options control title and description appearance:

- **Type A**: Regular-sized title (t5), regular description (t6)
- **Type B**: Large title (t4), regular description (t6)
- **Type C**: Regular title (t5), small description (t7)

### Left Content Options

**Number Icons**: Display sequential numbers 1-9
```jsx
<StepperRow.NumberIcon number={1} />
```

**Asset Frames**: Add custom images or emojis using Asset components wrapped in `StepperRow.AssetFrame`

### Right Content Options

**Right Arrow**: Navigation indicator
```jsx
<StepperRow.RightArrow />
```

**Right Button**: Actionable button element
```jsx
<StepperRow.RightButton>Button</StepperRow.RightButton>
```

### Hiding Connection Lines

Use the `hideLine` prop to hide the connecting line between steps, typically on the final step.

## Animation Support

Wrap `StepperRow` components in a `Stepper` container to enable entrance animations:

- **play** (default: true): Controls animation execution
- **delay** (default: 0): Sets animation start delay in seconds
- **staggerDelay** (default: 0.1): Controls spacing between sequential step appearances in seconds

## Key Props

| Prop | Type | Default | Purpose |
|------|------|---------|---------|
| `left` | ReactNode | Required | Left area content (icons/images) |
| `center` | ReactNode | Required | Center area with title and description |
| `right` | ReactNode | Optional | Right area content (buttons/arrows) |
| `hideLine` | Boolean | false | Hide connecting line |
| `staggerDelay` | Number | 0.1 | Seconds between step animations |
