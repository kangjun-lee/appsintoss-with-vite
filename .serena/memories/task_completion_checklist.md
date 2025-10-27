# Task Completion Checklist

When completing a coding task, follow these steps:

## 1. Type Checking
Always run type checking to ensure no TypeScript errors:
```bash
pnpm typecheck
```
This runs `tsc --noEmit` on the app code without generating output files.

## 2. Linting
Run ESLint to check for code quality issues:
```bash
pnpm lint
```
Fix any linting errors or warnings before considering the task complete.

## 3. Build Verification (if applicable)
For significant changes, verify the production build works:
```bash
pnpm build
```
This compiles TypeScript and creates the production bundle.

## 4. Local Testing
Test the changes in development mode:
```bash
pnpm dev
```
- Verify the UI works correctly
- Test on mobile viewport (the app is mobile-optimized)
- Check for console errors or warnings
- Test the affected user flows

## 5. Code Review Checks
Before submitting:
- Ensure all new code follows the project's naming conventions
- Use path aliases (`~/`) for imports
- Add appropriate TypeScript types
- Remove any console.logs or debug code
- Ensure React hooks are used correctly (no ESLint warnings)

## 6. Git Workflow
```bash
git status              # Check modified files
git add <files>         # Stage changes
git commit -m "msg"     # Commit with descriptive message
git push                # Push to remote
```

## No Testing Framework
Note: This project does not currently have a testing framework configured.
Manual testing in the browser is required.

## Deployment
For deploying to production:
```bash
pnpm deploy
```
This uses the AIT deployment tool to deploy the app.