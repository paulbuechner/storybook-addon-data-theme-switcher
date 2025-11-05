import { addons, types } from "storybook/manager-api";

import { ADDON_ID, TAB_ID, TOOL_ID } from "@/constants";
import { DataThemeSelector } from "@/Tool";

addons.register(ADDON_ID, () => {
  // Register the tool
  addons.add(TOOL_ID, {
    title: "Data Theme Switcher",
    type: types.TOOL,
    match: ({ viewMode, tabId }) =>
      !!(viewMode?.match(/^(story)$/) || tabId === TAB_ID),
    render: DataThemeSelector,
  });
});
