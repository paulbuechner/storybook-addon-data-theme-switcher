---
"storybook-addon-data-theme-switcher": major
---

Update addon for storybook v10:

- Drop support for Storybook v8.3, and v9 (requires Storybook v10).
- As of v10 Storybook now requires addons to target [ESM only](https://storybook.js.org/docs/addons/addon-migration-guide#esm-only-builds). 
  Therefore, this release targets ESM only and drops support for CommonJS.
- Node requirements updated to Node 20.19 or higher.