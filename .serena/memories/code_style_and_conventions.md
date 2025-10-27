# Code Style and Conventions

## TypeScript Configuration
- **Strict Mode**: Enabled with all strict checks
- **Target**: ES2022
- **Module System**: ESNext with bundler resolution
- **JSX**: react-jsx (automatic runtime)
- **Unused Variables**: Not allowed (`noUnusedLocals`, `noUnusedParameters`)
- **Library Checking**: Skipped (`skipLibCheck: true`)

## Naming Conventions
- **Components**: PascalCase with descriptive names
  - Example: `LotteryProvider`, `HomePage`, `SetupPage`
- **Files**: kebab-case for most files
  - Example: `use-lottery-state.tsx`, `home-page.tsx`, `horizontal-padding.tsx`
- **Types/Interfaces**: PascalCase
  - Example: `LotteryItem`, `LotteryResult`, `LotteryState`
- **Hooks**: camelCase with `use` prefix
  - Example: `useLotteryState`, `useHistory`

## File Organization
- **Components**: React components in `src/components/`
- **Pages**: Page-level components in `src/pages/`
- **Hooks**: Custom React hooks in `src/hooks/`
- **Types**: TypeScript type definitions in `src/types/`
- **Utils**: Utility functions in `src/utils/`

## Path Aliases
Use the `~/` alias to reference the src directory:
```typescript
import { LotteryProvider } from '~/hooks/use-lottery-state';
import type { LotteryItem } from '~/types/lottery';
```

## Component Style
- **Functional Components**: Use function declarations with named exports
  ```typescript
  export function App() {
    return <div>...</div>;
  }
  ```
- **Props**: Define explicit interfaces for component props
- **State Management**: Use custom hooks and context providers

## ESLint Rules
- Uses recommended configs for JavaScript, TypeScript, React Hooks, and React Refresh
- React Hooks rules enforced (recommended-latest)
- React Refresh for HMR support in Vite
- ES2020 features enabled
- Browser globals available

## TypeScript Usage
- Always use explicit types for function parameters and return values when not obvious
- Use interfaces for object shapes (e.g., `LotteryItem`, `LotteryState`)
- Leverage type inference where appropriate
- No `any` types (strict mode enforced)

## Comments
Korean comments are used in the codebase for explaining probability values:
```typescript
probability: number; // 1 = 보통, 2 = 2배, 0.5 = 절반
```