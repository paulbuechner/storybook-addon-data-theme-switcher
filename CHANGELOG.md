# Changelog

## 3.1.0-next.0

### Minor Changes

- [`ef215fd`](https://github.com/paulbuechner/storybook-addon-data-theme-switcher/commit/ef215fda274dcfa5966ade48daf14aba517e3adc) Thanks [@paulbuechner](https://github.com/paulbuechner)! - feat: display selected theme name in toolbar button
  - Show the active theme name next to the icon, similar to Storybook's background button

### Patch Changes

- [`aa59ed9`](https://github.com/paulbuechner/storybook-addon-data-theme-switcher/commit/aa59ed9f99318f89295c615dfa76ef8f86e2986c) Thanks [@paulbuechner](https://github.com/paulbuechner)! - fix: apply data-theme attribute synchronously in decorator
  - Set `data-theme` during render instead of deferring via `useEffect`
  - Eliminates flash of unstyled content on initial load

- [`9600a07`](https://github.com/paulbuechner/storybook-addon-data-theme-switcher/commit/9600a076a0077769737035517c101a5c72e5fb2e) Thanks [@paulbuechner](https://github.com/paulbuechner)! - fix: align toolbar button style with Storybook's built-in buttons

- [`9600a07`](https://github.com/paulbuechner/storybook-addon-data-theme-switcher/commit/9600a076a0077769737035517c101a5c72e5fb2e) Thanks [@paulbuechner](https://github.com/paulbuechner)! - fix: toolbar tooltip and dropdown closing
  - Fix show tooltip on hover
  - Fix dropdown not closing when selecting a theme
  - Dismiss the dropdown when clicking outside

- [`6b00aae`](https://github.com/paulbuechner/storybook-addon-data-theme-switcher/commit/6b00aae65a45695b6a6df9e87be974d7222d4969) Thanks [@paulbuechner](https://github.com/paulbuechner)! - refactor: migrate to non-deprecated Storybook component APIs

- [`9008c19`](https://github.com/paulbuechner/storybook-addon-data-theme-switcher/commit/9008c19091616045c4aed1a41fffb633dcce3991) Thanks [@paulbuechner](https://github.com/paulbuechner)! - refactor: simplify toolbar component
  - Replace `memoizerific` memoization with React `useMemo`
  - Simplify component state management

- [`ad3aaea`](https://github.com/paulbuechner/storybook-addon-data-theme-switcher/commit/ad3aaeae7b59fd666d6386b7600bd9aaf7a798d2) Thanks [@paulbuechner](https://github.com/paulbuechner)! - chore: mv type gen script to `prebuild`
  - Do not require the user to approve unnecessary scripts

## Latest Release

### November 20, 2025: [v3.0.1](/.changelog/v3.0.1.mdx)

## Previous Releases

### November 9, 2025: [v3.0.0](/.changelog/v3.0.0.mdx)

### November 5, 2025: [v3.0.0-next.0](/.changelog/v3.0.0-next.0.mdx)

### November 5, 2025: [v3.0.0-next.0](/.changelog/v3.0.0-next.0.mdx)

### November 5, 2025: [v2.0.2](/.changelog/v2.0.2.mdx)

### November 5, 2025: [v2.0.1](/.changelog/v2.0.1.mdx)

### June 7, 2025: [v2.0.0-next.0](/.changelog/v2.0.0-next.0.mdx)

### June 7, 2025: [v2.0.0-next.0](/.changelog/v2.0.0-next.0.mdx)

### March 2, 2025: [v1.0.1](/.changelog/v1.0.1.mdx)

### December 30, 2024: [v1.0.0](/.changelog/v1.0.0.mdx)

### March 20, 2024: [v0.4.2](/.changelog/v0.4.2.mdx)

### March 19, 2024: [v0.4.1](/.changelog/v0.4.1.mdx)

### March 19, 2024: [v0.4.0](/.changelog/v0.4.0.mdx)

### January 28, 2024: [v0.2.0](/.changelog/v0.2.0.mdx)

### January 28, 2024: [v0.2.0](/.changelog/v0.2.0.mdx)

### April 15, 2023: [v0.1.7](/.changelog/v0.1.7.mdx)
