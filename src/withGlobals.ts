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

  useEffect(() => {
    if (dataTheme === "none") {
      document.documentElement.removeAttribute("data-theme");
      window.localStorage.removeItem("data-theme");
    } else {
      document.documentElement.setAttribute("data-theme", dataTheme);
      window.localStorage.setItem("data-theme", dataTheme);
    }
  }, [dataTheme, updateGlobals]);

  return StoryFn();
};
