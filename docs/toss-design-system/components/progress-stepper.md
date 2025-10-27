# Progress Stepper Component

## Overview

The `ProgressStepper` component combines a progress bar and stepper to visually display task progress in stages. It shows users their current position and remaining steps clearly, making work completion status easily understandable at a glance.

## Usage

### Changing the Variant

Use the `variant` prop to modify the component's appearance:

- **compact**: Presents steps in a streamlined style showing clear progression
- **icon**: Includes icons at each stage for easier recognition and more intuitive visual distinction

### Simple Form Usage

Omitting the `title` prop from `ProgressStep` creates a minimal stepper. This approach works well when space is limited or step descriptions aren't necessary.

### Showing Completed Steps

Set `variant="icon"` and `checkForFinish={true}` to display checkmarks for all steps before the current one, making completion status immediately obvious.

### Setting Step-Specific Icons

With `variant="icon"`, use the `icon` prop on each `ProgressStep` to add meaningful icons. This helps users distinguish each stage's purpose and quickly grasp progress status.

## Interface

### ProgressStepperProps

| Prop | Default | Type | Description |
|------|---------|------|-------------|
| **variant** | — | `"compact"` \| `"icon"` | Style for displaying progress stages |
| paddingTop | `'default'` | `"default"` \| `"wide"` | Controls top spacing (wide: 24px, default: 16px) |
| activeStepIndex | `0` | `number` | Sets the current progress stage |
| checkForFinish | `false` | `boolean` | Shows completed stages as checkmarks (icon variant only) |

### ProgressStepProps

| Prop | Default | Type | Description |
|------|---------|------|-------------|
| title | — | `string` | Title for each stage |
| icon | — | `React.ReactNode` | Icon for each stage (icon variant only) |
