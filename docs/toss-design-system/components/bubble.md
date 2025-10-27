# Bubble Component Documentation

## Overview

The `Bubble` component displays messages in conversational UI, allowing distinction between user and other party messages through color and tail styling.

## Description

> "The `Bubble` component is used to display messages in conversational UI. This component allows you to distinguish between a user's message and the other party's message through color and speech bubble shape."

## Usage

### Distinguishing Message Sender

Use the `background` prop to identify the message source:
- **`blue`** = Your message
- **`grey`** = Other party's message

### Tail Configuration

Control whether the speech bubble includes a pointer:
- When enabled, `grey` bubbles have tails on the left
- When enabled, `blue` bubbles have tails on the right
- Default behavior includes the tail

## Props Interface

### BubbleProps

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| **background** * | `"blue"` \| `"grey"` | — | Background color identifying sender; blue for you, grey for others |
| **withTail** | `boolean` | `true` | Determines whether the bubble displays a pointer tail |
| **children** | `React.ReactNode` | — | Content inside bubble; typically string or custom components |

*Required prop

## Code Examples

**Basic Usage:**
```jsx
<Bubble background="blue" withTail>
  Hello
</Bubble>
```

**Conversation Pattern:**
```jsx
<div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
  <Bubble background="grey" withTail>
    Hello
  </Bubble>
  <Bubble background="blue" withTail>
    Hi there!
  </Bubble>
</div>
```

**Without Tail:**
```jsx
<Bubble background="blue" withTail={false}>
  Message without pointer
</Bubble>
```
