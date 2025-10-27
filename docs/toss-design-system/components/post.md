# Post Component Documentation

## Overview

The `Post` component provides styled formatting for post-style content, including titles, body text, and lists. It's designed for announcements, event pages, and similar content structures.

## Component Purpose

"포스트 형식의 줄글을 쓸 때 적용되는 스타일" — The Post component applies structured styling to long-form post content with distinct elements for different content types.

## Available Subcomponents

### Heading Components
- **Post.H1**: Largest heading level
- **Post.H2**: Large heading level
- **Post.H3**: Standard heading level
- **Post.H4**: Small heading level

### Content Components
- **Post.Paragraph**: Body text styling with optional typography customization
- **Post.Ol**: Ordered (numbered) list container
- **Post.Ul**: Unordered (bullet) list container
- **Post.Li**: List item element (child of Ol or Ul)
- **Post.Hr**: Horizontal divider for visual separation

## Props Interface

All heading and paragraph components accept:

| Prop | Default | Type | Description |
|------|---------|------|-------------|
| `typography` | Varies by component | `"t1"` through `"t7"` or `"st1"` through `"st13"` | Controls text size and weight styling |
| `paddingBottom` | — | `string \| number` | Sets bottom margin in pixels |

**Typography Scale Notes:**
- `t1`–`t7`: Primary body text sizes
- `st1`–`st13`: Secondary/subtitle text sizes

### Component-Specific Defaults
- **Post.H1**: `typography="t2"` (default)
- **Post.H2**: `typography="t3"` (default)
- **Post.H3**: `typography="st8"` (default)
- **Post.H4**: `typography="t5"` (default)
- **Post.Hr**: Only accepts `paddingBottom` prop

## Usage Examples

### Headings
Stack multiple heading levels for content hierarchy with automatic spacing control.

### Paragraphs
Long-form text with consistent line-height and spacing. Typography can be adjusted for emphasis or secondary content.

### Lists
Nest ordered and unordered lists for multi-level information hierarchy. Use `Post.Ol` for sequential steps and `Post.Ul` for non-sequential items.

### Dividers
Apply `Post.Hr` between content blocks to create visual section breaks with customizable spacing.
