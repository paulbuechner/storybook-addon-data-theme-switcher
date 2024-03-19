/* eslint-disable react-hooks/rules-of-hooks */
import { useEffect, useGlobals } from "@storybook/preview-api";
import type {
  Renderer,
  PartialStoryFn as StoryFunction,
} from "@storybook/types";

import { DATA_THEME_KEY, DATA_THEMES_KEY } from "@/constants";

export const withGlobals = (StoryFn: StoryFunction<Renderer>) => {
  const [globals, updateGlobals] = useGlobals();

  const dataTheme = globals[DATA_THEME_KEY];
  const dataAttribute = globals[DATA_THEMES_KEY].dataAttribute || "data-theme";

  useEffect(() => {
    if (dataTheme === "none") {
      document.documentElement.removeAttribute(dataAttribute);
      window.localStorage.removeItem(dataAttribute);
    } else {
      document.documentElement.setAttribute(dataAttribute, dataTheme);
      window.localStorage.setItem(dataAttribute, dataTheme);
    }
  }, [dataAttribute, dataTheme, updateGlobals]);

  return StoryFn();
};
