# Suggested Commands

## Development Commands

### Start Development Server
```bash
pnpm dev
# or
pnpm web:dev
```
Starts the Vite dev server with HMR (Hot Module Replacement) at http://100.65.50.87:5173

### Build for Production
```bash
pnpm build
```
Compiles TypeScript and builds the production bundle to the `dist` directory.

### Type Checking
```bash
pnpm typecheck
```
Runs TypeScript compiler in no-emit mode to check for type errors.

### Linting
```bash
pnpm lint
```
Runs ESLint on all files to check for code quality issues.

### Preview Production Build
```bash
pnpm preview
```
Serves the production build locally for testing.

### Deploy
```bash
pnpm deploy
```
Deploys the app using the AIT (Apps-in-Toss) deployment tool.

## Git Commands (Darwin/macOS)
Standard git commands work normally on Darwin:
```bash
git status
git add .
git commit -m "message"
git push
git pull
git log
```

## System Commands (Darwin/macOS)
Darwin uses standard Unix commands:
- `ls` - list files
- `cd` - change directory
- `grep` - search text
- `find` - find files
- `cat` - display file contents
- `mkdir` - create directory
- `rm` - remove files/directories