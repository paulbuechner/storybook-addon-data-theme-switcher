---
"storybook-addon-data-theme-switcher": patch
---

fix: fall back to the default toolbar icon when the configured icon is unavailable

- Storybook's manager bundles its own icon set, which can lack icons from newer `@storybook/icons` releases
