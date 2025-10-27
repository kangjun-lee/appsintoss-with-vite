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
│   └── horizontal-padding.tsx
├── hooks/            # Custom React hooks (empty, ready for implementation)
│   └── .gitkeep
├── pages/            # Page-level components (routes)
│   └── home-page.tsx
├── types/            # TypeScript type definitions (empty, ready for implementation)
│   └── .gitkeep
├── utils/            # Utility functions (empty, ready for implementation)
│   └── .gitkeep
├── app.tsx           # Main App component with routing
├── main.tsx          # Application entry point
└── index.css         # Global styles
```

## Key Files

### Entry Points
- **main.tsx**: Application entry point, renders the App component
- **app.tsx**: Main App component with router and TDS provider setup
- **index.html**: HTML template

### Configuration Files
- **granite.config.ts**: Apps-in-Toss framework configuration
- **vite.config.ts**: Vite bundler configuration
- **tsconfig.json**: TypeScript project configuration (with references)
- **tsconfig.app.json**: TypeScript configuration for application code
- **tsconfig.node.json**: TypeScript configuration for build scripts
- **eslint.config.js**: ESLint configuration
- **package.json**: Project dependencies and scripts

### Components
- **src/components/horizontal-padding.tsx**: Utility component for horizontal padding (TDS-compatible)
- **src/pages/home-page.tsx**: Template home page with basic TDS components

## Routing Structure
The application uses React Router with minimal routes:
- `/` - Home page (template starting page)

Additional routes can be added as needed.

## State Management
- Uses React Context API with TDSMobileAITProvider
- Custom providers and hooks can be added in `src/hooks/`

## Public Assets
- **public/logo.png**: Application icon
- Static files served directly by Vite

## Empty Directories (Ready for Implementation)
The following directories contain only `.gitkeep` files and are ready for custom implementation:
- `src/hooks/` - For custom React hooks
- `src/types/` - For TypeScript type definitions
- `src/utils/` - For utility functions
