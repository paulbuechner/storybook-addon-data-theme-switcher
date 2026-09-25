import { Button } from "./Button";

import preview from "../../.storybook/preview";

const meta = preview.meta({
  component: Button,
});

export const DataThemeSwitcher = meta.story({
  args: {
    label: "Themed Button",
  },
});

export const CustomDataAttribute = meta.story({
  args: {
    label: "Themed Button",
  },
  globals: {
    dataThemes: {
      list: [
        { name: "Rainforest", dataTheme: "rainforest", color: "#00755e" },
        { name: "Candy", dataTheme: "candy", color: "#ffb7d5" },
        { name: "Rose", dataTheme: "rose", color: "#be123c" },
      ],
      dataAttribute: "data-color-scheme",
      clearable: true,
      toolbar: {
        title: "Change data-color-scheme attribute",
        icon: "PaintBrushIcon",
      },
    },
  },
});
