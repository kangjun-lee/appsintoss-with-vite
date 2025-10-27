# Codebase Structure

## Root Directory
```
lottery-machine/
├── src/              # Source code
├── public/           # Static assets
├── dist/             # Build output (generated)
├── node_modules/     # Dependencies
├── patches/          # pnpm patches
├── docs/             # Documentation
├── .serena/          # Serena MCP configuration
├── .claude/          # Claude configuration
├── .git/             # Git repository
└── config files      # Various configuration files
```

## Source Directory Structure
```
src/
├── components/       # Reusable React components
│   ├── horizontal-padding.tsx
│   ├── probability-sheet.tsx
│   └── wheel-canvas.tsx
├── hooks/            # Custom React hooks
│   ├── use-history.ts
│   └── use-lottery-state.tsx
├── pages/            # Page-level components (routes)
│   ├── demo-page.tsx
│   ├── history-page.tsx
│   ├── home-page.tsx
│   ├── result-page.tsx
│   ├── setup-page.tsx
│   └── spin-page.tsx
├── types/            # TypeScript type definitions
│   └── lottery.ts
├── utils/            # Utility functions
│   ├── colors.ts
│   └── storage.ts
├── app.tsx           # Main App component with routing
├── main.tsx          # Application entry point
└── index.css         # Global styles
```

## Key Files

### Entry Points
- **main.tsx**: Application entry point, renders the App component
- **app.tsx**: Main App component with router and providers setup
- **index.html**: HTML template

### Configuration Files
- **granite.config.ts**: Apps-in-Toss framework configuration
- **vite.config.ts**: Vite bundler configuration
- **tsconfig.json**: TypeScript project configuration (with references)
- **tsconfig.app.json**: TypeScript configuration for application code
- **tsconfig.node.json**: TypeScript configuration for build scripts
- **eslint.config.js**: ESLint configuration
- **package.json**: Project dependencies and scripts

### Core Domain
- **src/types/lottery.ts**: Core type definitions for lottery items, results, and state
- **src/hooks/use-lottery-state.tsx**: Main state management hook/provider
- **src/utils/storage.ts**: Local storage utilities
- **src/utils/colors.ts**: Color utilities

## Routing Structure
The application uses React Router with the following routes:
- `/` - Home page (entry point)
- `/setup` - Setup lottery items
- `/spin` - Spin the wheel animation
- `/result` - Show lottery result
- `/history` - View past results
- `/demo` - Demo mode

## State Management
- Uses React Context API with custom providers
- `LotteryProvider` wraps the entire application
- `TDSMobileAITProvider` provides Toss Design System integration

## Public Assets
- **public/logo.png**: Application icon
- Static files served directly by Vite