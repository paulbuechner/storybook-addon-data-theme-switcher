# CLAUDE.md

## Project overview

Storybook addon that adds a toolbar button to switch the `data-theme` attribute on the `<html>` element. Targets Storybook 10+ with React.

## Tech stack

- **Runtime:** Storybook 10, React 19
- **Language:** TypeScript 6
- **Bundler:** tsdown
- **Package manager:** pnpm
- **Testing:** Vitest (portable stories via `@storybook/addon-vitest`) + Playwright (e2e)

## Architecture

| Entry                   | Purpose                                                                          | Platform |
|-------------------------|----------------------------------------------------------------------------------|----------|
| `src/preset/manager.ts` | Registers the toolbar button in the Storybook manager UI                         | browser  |
| `src/preset/preview.ts` | Registers the `withGlobals` decorator that applies `data-theme`                  | browser  |
| `src/Tool.tsx`          | Toolbar component: `PopoverProvider` + `ActionList` dropdown                     | browser  |
| `src/withGlobals.ts`    | Decorator that reads globals and sets `data-theme` on `document.documentElement` | browser  |

The manager and preview are separate Storybook iframes. The toolbar button lives in the manager; the decorator runs in the preview.

## Key conventions

### Import paths

- Storybook manager APIs: `storybook/manager-api`
- Storybook components: `storybook/internal/components`
- Storybook theming: `storybook/theming`
- Storybook test utilities: `storybook/test` (not `@storybook/test`)
- Storybook preview API: `storybook/preview-api`
- Icons: `@storybook/icons`

### Path aliases

- `@/*` maps to `./src/*` via `tsconfig.json` paths.
- This alias only works for TypeScript and tsdown. Vite does **not** resolve it, so `.storybook/` files must use relative imports (e.g., `../src/...`).

### Decorator pattern

The `withGlobals` decorator applies `data-theme` **synchronously during render** (not in `useEffect`). This is intentional:

- Eliminates flash of unstyled content on initial load.

## Build

```sh
pnpm build        # runs gen:icon-names then tsdown
pnpm start        # watch build + storybook dev server
```

tsdown config reads entry points from `package.json` `bundler` field. Output goes to `dist/`.

## Testing

```sh
pnpm test         # vitest (portable story tests in browser via Playwright)
pnpm test:e2e     # playwright e2e tests against running Storybook
```

- **Vitest tests** (`src/stories/Button.stories.ts`): Test that `data-theme` attribute and CSS variables apply correctly via the decorator.
- **Playwright e2e tests** (`e2e/theme-switcher.spec.ts`): Test the full toolbar UI interaction - clicking the button, selecting themes, verifying the preview iframe updates.

### E2e test selectors

- Addon button: `[aria-label="Change data-theme attribute"]`
- Popover dropdown: `[aria-label="Theme selector"]` (react-aria Popover, not `data-testid="tooltip"`)
- Preview iframe: `#storybook-preview-iframe`

## Changesets

This project uses `@changesets/cli`. Changesets go in `.changeset/` as markdown files with frontmatter specifying the package and semver bump level.
