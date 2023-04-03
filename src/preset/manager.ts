import { addons, types } from "@storybook/manager-api";

import { ADDON_ID, TOOL_ID } from "@/constants";
import { DataThemeSelector } from "@/Tool";

addons.register(ADDON_ID, () => {
  // Register the tool
  addons.add(TOOL_ID, {
    type: types.TOOL,
    title: "Data Theme Switcher",
    match: ({ viewMode }) => !!viewMode?.match(/^(story|docs)$/),
    render: DataThemeSelector,
  });
});
