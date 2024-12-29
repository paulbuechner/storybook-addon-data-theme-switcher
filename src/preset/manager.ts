import { addons, types } from "storybook/internal/manager-api";

import { ADDON_ID, TOOL_ID } from "@/constants";
import { DataThemeSelector } from "@/Tool";

addons.register(ADDON_ID, () => {
  // Register the tool
  addons.add(TOOL_ID, {
    title: "Data Theme Switcher",
    type: types.TOOL,
    match: ({ viewMode }) => !!viewMode?.match(/^(story|docs)$/),
    render: DataThemeSelector,
  });
});
