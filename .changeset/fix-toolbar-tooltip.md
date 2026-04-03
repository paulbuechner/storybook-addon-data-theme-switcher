---
"storybook-addon-data-theme-switcher": patch
---

fix: toolbar tooltip and dropdown closing

- Use `tooltip` prop instead of `title` for the hover tooltip
- Fix dropdown not closing when selecting a theme
- Dismiss the dropdown when clicking outside
