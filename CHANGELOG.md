# Changelog

## 3.1.0

### Minor Changes

- [#435](https://github.com/paulbuechner/storybook-addon-data-theme-switcher/pull/435) [`ad86bf7`](https://github.com/paulbuechner/storybook-addon-data-theme-switcher/commit/ad86bf75bcc62e5cc9308b8734fb1e93caa8477d) Thanks [@paulbuechner](https://github.com/paulbuechner)! - feat: display selected theme name in toolbar button
  - Show the active theme name next to the icon, similar to Storybook's background button

### Patch Changes

- [#435](https://github.com/paulbuechner/storybook-addon-data-theme-switcher/pull/435) [`ad86bf7`](https://github.com/paulbuechner/storybook-addon-data-theme-switcher/commit/ad86bf75bcc62e5cc9308b8734fb1e93caa8477d) Thanks [@paulbuechner](https://github.com/paulbuechner)! - fix: apply data-theme attribute synchronously in decorator
  - Set `data-theme` during render instead of deferring via `useEffect`
  - Eliminates flash of unstyled content on initial load

- [#435](https://github.com/paulbuechner/storybook-addon-data-theme-switcher/pull/435) [`ad86bf7`](https://github.com/paulbuechner/storybook-addon-data-theme-switcher/commit/ad86bf75bcc62e5cc9308b8734fb1e93caa8477d) Thanks [@paulbuechner](https://github.com/paulbuechner)! - fix: align toolbar button style with Storybook's built-in buttons

- [#435](https://github.com/paulbuechner/storybook-addon-data-theme-switcher/pull/435) [`ad86bf7`](https://github.com/paulbuechner/storybook-addon-data-theme-switcher/commit/ad86bf75bcc62e5cc9308b8734fb1e93caa8477d) Thanks [@paulbuechner](https://github.com/paulbuechner)! - fix: toolbar tooltip and dropdown closing
  - Fix show tooltip on hover
  - Fix dropdown not closing when selecting a theme
  - Dismiss the dropdown when clicking outside

- [#435](https://github.com/paulbuechner/storybook-addon-data-theme-switcher/pull/435) [`ad86bf7`](https://github.com/paulbuechner/storybook-addon-data-theme-switcher/commit/ad86bf75bcc62e5cc9308b8734fb1e93caa8477d) Thanks [@paulbuechner](https://github.com/paulbuechner)! - refactor: migrate to non-deprecated Storybook component APIs

- [#435](https://github.com/paulbuechner/storybook-addon-data-theme-switcher/pull/435) [`ad86bf7`](https://github.com/paulbuechner/storybook-addon-data-theme-switcher/commit/ad86bf75bcc62e5cc9308b8734fb1e93caa8477d) Thanks [@paulbuechner](https://github.com/paulbuechner)! - refactor: simplify toolbar component
  - Replace `memoizerific` memoization with React `useMemo`
  - Simplify component state management

- [#435](https://github.com/paulbuechner/storybook-addon-data-theme-switcher/pull/435) [`ad86bf7`](https://github.com/paulbuechner/storybook-addon-data-theme-switcher/commit/ad86bf75bcc62e5cc9308b8734fb1e93caa8477d) Thanks [@paulbuechner](https://github.com/paulbuechner)! - chore: mv type gen script to `prebuild`
  - Do not require the user to approve unnecessary scripts

## Latest Release

### November 20, 2025: [v3.0.1](/.changelog/v3.0.1.mdx)

## Previous Releases

### November 20, 2025: [v3.0.1](/.changelog/v3.0.1.mdx)

### November 20, 2025: [v3.0.1](/.changelog/v3.0.1.mdx)

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
