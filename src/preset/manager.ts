import { addons } from "@storybook/manager-api";
import { Addon_TypesEnum } from "@storybook/types";

import { ADDON_ID, TOOL_ID } from "@/constants";
import { DataThemeSelector } from "@/Tool";

addons.register(ADDON_ID, () => {
  // Register the tool
  addons.add(TOOL_ID, {
    title: "Data Theme Switcher",
    type: Addon_TypesEnum.TOOL,
    match: ({ viewMode }) => !!viewMode?.match(/^(story|docs)$/),
    render: DataThemeSelector,
  });
});
