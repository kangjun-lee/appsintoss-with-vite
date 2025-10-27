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
  - Example: `HomePage`, `UserProfile`, `DataTable`
- **Files**: kebab-case for most files
  - Example: `home-page.tsx`, `user-profile.tsx`, `horizontal-padding.tsx`
- **Types/Interfaces**: PascalCase
  - Example: `User`, `ApiResponse`, `AppState`
- **Hooks**: camelCase with `use` prefix
  - Example: `useAuth`, `useLocalStorage`, `useFetch`
- **Utility Functions**: camelCase
  - Example: `formatDate`, `parseQuery`, `validateEmail`

## File Organization
- **Components**: React components in `src/components/`
- **Pages**: Page-level components in `src/pages/`
- **Hooks**: Custom React hooks in `src/hooks/`
- **Types**: TypeScript type definitions in `src/types/`
- **Utils**: Utility functions in `src/utils/`

## Path Aliases
Use the `~/` alias to reference the src directory:
```typescript
import { HorizontalPadding } from '~/components/horizontal-padding';
import type { User } from '~/types/user';
import { formatDate } from '~/utils/date';
```

## Component Style
- **Functional Components**: Use function declarations with named exports
  ```typescript
  export function HomePage() {
    return <div>...</div>;
  }
  ```
- **Props**: Define explicit interfaces for component props
  ```typescript
  interface UserCardProps {
    name: string;
    email: string;
    onSelect?: () => void;
  }
  
  export function UserCard({ name, email, onSelect }: UserCardProps) {
    return <div onClick={onSelect}>...</div>;
  }
  ```
- **State Management**: Use custom hooks and context providers

## ESLint Rules
- Uses recommended configs for JavaScript, TypeScript, React Hooks, and React Refresh
- React Hooks rules enforced (recommended-latest)
- React Refresh for HMR support in Vite
- ES2020 features enabled
- Browser globals available

## TypeScript Usage
- Always use explicit types for function parameters and return values when not obvious
- Use interfaces for object shapes
- Leverage type inference where appropriate
- No `any` types (strict mode enforced)

## TDS (Toss Design System) Guidelines
- **Never** use `className` on TDS components - use `style` prop instead
- Use TDS components instead of basic HTML elements (Button, Paragraph, etc.)
- Import colors from `@toss/tds-colors` instead of hardcoding values
- Use typography tokens (t1-t7) instead of custom font sizes
- See `design_guide` memory for detailed TDS usage

## Comments
- Use English for general code comments
- Korean comments are acceptable for domain-specific explanations
