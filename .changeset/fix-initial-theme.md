---
"storybook-addon-data-theme-switcher": patch
---

Fix initial `dataTheme` from `initialGlobals` not applying the `data-theme` attribute on load. The addon's preset no longer overrides the user's `initialGlobals` value, and the decorator now handles an undefined `dataTheme` gracefully.
