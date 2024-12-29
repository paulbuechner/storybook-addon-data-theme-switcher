---
"storybook-addon-data-theme-switcher": major
---

**BREAKING Change**: Preparations for storybook v9 have been made. Consult the
updated documentation [
`README`](https://github.com/paulbuechner/storybook-addon-data-theme-switcher/tree/main)
for information on how to migrate to this version.

- Updated the addon to use `@storybook/icons` package to render the data theme
  switch icon, as it otherwise would become deprecated with the release of
  storybook v9.

- Migrated to new consolidated `initialGlobals` API to define and load the
  data-themes.

