---
"storybook-addon-data-theme-switcher": patch
---

fix: apply data-theme attribute synchronously in decorator

- Set `data-theme` during render instead of deferring via `useEffect`
- Eliminates flash of unstyled content on initial load
