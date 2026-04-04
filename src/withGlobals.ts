/* eslint-disable react-hooks/rules-of-hooks */
import { useGlobals } from "storybook/preview-api";
import type {
  Renderer,
  PartialStoryFn as StoryFunction,
} from "storybook/internal/types";

import { DATA_THEME_KEY, DATA_THEMES_KEY } from "@/constants";

export const withGlobals = (StoryFn: StoryFunction<Renderer>) => {
  const [globals] = useGlobals();

  const dataTheme = globals[DATA_THEME_KEY];
  const dataAttribute = globals[DATA_THEMES_KEY].dataAttribute || "data-theme";

  if (dataTheme === "none") {
    document.documentElement.removeAttribute(dataAttribute);
    globalThis.localStorage.removeItem(dataAttribute);
  } else {
    document.documentElement.setAttribute(dataAttribute, dataTheme);
    globalThis.localStorage.setItem(dataAttribute, dataTheme);
  }

  return StoryFn();
};
