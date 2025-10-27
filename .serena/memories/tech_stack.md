# Tech Stack

## Core Technologies
- **Language**: TypeScript (~5.9.3) with strict mode enabled
- **Runtime**: Node.js ^22
- **Package Manager**: pnpm (with patch support)

## Frontend Framework
- **React**: ^18.3.1
- **React DOM**: ^18.3.1
- **React Router**: ^7.9.4 (for client-side routing)

## Build Tools
- **Vite**: ^7 (build tool and dev server)
- **Granite**: @apps-in-toss/web-framework ^1.3.0 (AIT framework wrapper)
- **TypeScript Compiler**: Used for type checking

## UI & Styling
- **TailwindCSS**: ^4.1.16
- **Emotion**: ^11 (CSS-in-JS)
- **Toss Design System**: @toss/tds-mobile ^2.1.2 and @toss/tds-mobile-ait ^2.1.2
- **Toss Colors**: @toss/tds-colors ^0.1.0

## Code Quality Tools
- **ESLint**: ^9.36.0
  - TypeScript ESLint
  - React Hooks plugin
  - React Refresh plugin
- **TypeScript**: For type checking

## Utilities
- **nanoid**: ^5.1.6 (for generating unique IDs)

## Build Configuration
- Uses Vite for bundling
- TypeScript project references (tsconfig.app.json, tsconfig.node.json)
- Path aliases configured (~/\* -> src/\*)
- React Compiler enabled for optimizations