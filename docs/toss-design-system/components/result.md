# Result Component Documentation

## Overview

The Result component is a page-level component that "visually displays the outcome of a specific task." It's primarily used for communicating success states or errors to users, along with offering various messages and action options.

## Key Features

- **Visual Elements**: Supports icons, images, and other visual content via the Asset component
- **Messaging**: Includes title and description areas for clear communication
- **Actions**: Integrates buttons for user interactions
- **Accessibility**: Built-in support for screen readers and semantic HTML

## Usage Examples

### Adding Visual Elements

The `figure` property allows placing visual content above the title. You can use the Asset component to display icons, animations, or images for intuitive user communication.

### Adding Buttons

The `button` property adds action buttons below the description. Using `Result.Button`, you can implement common actions like retry or return-home functionality.

## Accessibility Features

The component provides built-in accessibility support:

| Feature | Benefit |
|---------|---------|
| `<h5>` heading tag | Screen readers automatically recognize titles |
| `<button>` element | Screen readers identify button type; users tap twice to activate |
| `alt=""` on images | Decorative images are automatically hidden from screen readers |

## Props Interface

| Property | Type | Description |
|----------|------|-------------|
| **figure** | React.ReactNode | Visual element displayed above title; use Asset component for icons or images |
| **title** | React.ReactNode | Main heading conveying the operation outcome |
| **description** | React.ReactNode | Additional context provided below title |
| **button** | React.ReactNode | Action button(s) using Result.Button component |
