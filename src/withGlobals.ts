/* eslint-disable react-hooks/rules-of-hooks */
import { useEffect, useGlobals } from "@storybook/preview-api";
import type {
  Renderer,
  PartialStoryFn as StoryFunction,
} from "@storybook/types";

import { PARAM_KEY } from "@/constants";

export const withGlobals = (StoryFn: StoryFunction<Renderer>) => {
  const [globals, updateGlobals] = useGlobals();
  const dataTheme = globals[PARAM_KEY];
  const dataAttribute = globals.dataThemes.dataAttribute || "data-theme";
  useEffect(() => {
    if (dataTheme === "none") {
      document.documentElement.removeAttribute(dataAttribute);
      window.localStorage.removeItem(dataAttribute);
    } else {
      document.documentElement.setAttribute(dataAttribute, dataTheme);
      window.localStorage.setItem(dataAttribute, dataTheme);
    }
  }, [dataTheme, updateGlobals]);

  return StoryFn();
};
