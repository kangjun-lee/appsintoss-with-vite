# TDS Mobile Getting Started Guide

## Overview

TDS Mobile enables developers to implement a comprehensive collection of UI components designed for mobile environments. The setup process involves installing dependencies, configuring providers, and importing components.

## Installation Requirements

The framework requires three core dependencies:

- `@toss/tds-mobile` - Main component library
- `@toss/tds-mobile-ait` - Provider utilities
- `@emotion/react@^11` - Styling engine
- `react@^18` and `react-dom@^18` - React framework

**Installation command:**
```bash
npm install @toss/tds-mobile @toss/tds-mobile-ait @emotion/react@^11 react@^18 react-dom@^18
```

## Provider Configuration

Applications must wrap their root component with `TDSMobileAITProvider`:

```javascript
import { TDSMobileAITProvider } from '@toss/tds-mobile-ait';

function App({ Component, pageProps }) {
  return (
    <TDSMobileAITProvider>
      <Component {...pageProps} />
    </TDSMobileAITProvider>
  );
}
```

This provider ensures all TDS Mobile components function properly throughout the application.

## Component Usage

Once configured, import and use components directly:

```javascript
import { Button } from '@toss/tds-mobile';

const App = () => <Button>버튼</Button>;
```

The documentation provides access to 40+ components spanning foundations (colors, typography) and interactive elements (buttons, dialogs, forms, and more).
