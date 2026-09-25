# Changelog

## 3.3.0-next.0

### Minor Changes

- [#465](https://github.com/paulbuechner/storybook-addon-data-theme-switcher/pull/465) [`98ba4d8`](https://github.com/paulbuechner/storybook-addon-data-theme-switcher/commit/98ba4d8c285c8405328aff053bab616211121bc2) Thanks [@github-actions](https://github.com/apps/github-actions)! - feat: type the `dataTheme` and `dataThemes` globals for CSF Next stories

- [#465](https://github.com/paulbuechner/storybook-addon-data-theme-switcher/pull/465) [`98ba4d8`](https://github.com/paulbuechner/storybook-addon-data-theme-switcher/commit/98ba4d8c285c8405328aff053bab616211121bc2) Thanks [@github-actions](https://github.com/apps/github-actions)! - feat: support Storybook 11

  - Set the `storybook` peer range to `^10.1.0 || ^11.0.0-0`, which admits Storybook 11 prereleases; the toolbar needs Storybook 10.1+ since 3.1.0
  - CSF Next (`definePreview`) projects must register the addon in `.storybook/preview.ts`, see README

### Patch Changes

- [#465](https://github.com/paulbuechner/storybook-addon-data-theme-switcher/pull/465) [`98ba4d8`](https://github.com/paulbuechner/storybook-addon-data-theme-switcher/commit/98ba4d8c285c8405328aff053bab616211121bc2) Thanks [@github-actions](https://github.com/apps/github-actions)! - fix: fall back to the default toolbar icon when the configured icon is unavailable

  - Storybook's manager bundles its own icon set, which can lack icons from newer `@storybook/icons` releases

## Latest Release

### April 5, 2026: [v3.2.0](/.changelog/v3.2.0.mdx)

## Previous Releases

### April 4, 2026: [v3.1.1](/.changelog/v3.1.1.mdx)

### April 4, 2026: [v3.1.0](/.changelog/v3.1.0.mdx)

### November 20, 2025: [v3.0.1](/.changelog/v3.0.1.mdx)

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
