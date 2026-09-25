---
"storybook-addon-data-theme-switcher": minor
---

feat: support Storybook 11

- Set the `storybook` peer range to `^10.1.0 || ^11.0.0-0`, which admits Storybook 11 prereleases; the toolbar needs Storybook 10.1+ since 3.1.0
- CSF Next (`definePreview`) projects must register the addon in `.storybook/preview.ts`, see README
