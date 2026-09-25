/* eslint-disable react-hooks/rules-of-hooks */
import { useEffect, useGlobals, useRef } from "storybook/preview-api";
import type {
  Renderer,
  PartialStoryFn as StoryFunction,
} from "storybook/internal/types";

import { DATA_THEME_KEY, DATA_THEMES_KEY } from "@/constants";

export const withGlobals = (StoryFn: StoryFunction<Renderer>) => {
  const [globals, updateGlobals] = useGlobals();

  const dataTheme = globals[DATA_THEME_KEY];
  const dataAttribute = globals[DATA_THEMES_KEY]?.dataAttribute || "data-theme";

  // Track the last value set by this decorator to distinguish from external changes
  const lastSetValue = useRef<string | null>(null);

  if (!dataTheme || dataTheme === "none") {
    document.documentElement.removeAttribute(dataAttribute);
    globalThis.localStorage.removeItem(dataAttribute);
    lastSetValue.current = null;
  } else {
    document.documentElement.setAttribute(dataAttribute, dataTheme);
    globalThis.localStorage.setItem(dataAttribute, dataTheme);
    lastSetValue.current = dataTheme;
  }

  // Watch for external changes to the data-theme attribute
  useEffect(() => {
    const observer = new MutationObserver(() => {
      const currentValue = document.documentElement.getAttribute(dataAttribute);

      if (currentValue !== lastSetValue.current) {
        lastSetValue.current = currentValue;
        updateGlobals({
          [DATA_THEME_KEY]: currentValue ?? "none",
        });
      }
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: [dataAttribute],
    });

    return () => observer.disconnect();
  }, [dataAttribute, updateGlobals]);

  return StoryFn();
};
