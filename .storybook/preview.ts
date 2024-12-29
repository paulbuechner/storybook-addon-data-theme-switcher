import type { Preview } from "@storybook/react";
import type { ThemeConfig } from "@/preset/types";

import "../styles/globals.css";

const preview = {
  parameters: {
    backgrounds: {
      default: "light",
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  initialGlobals: {
    dataTheme: "rainforest",
    dataThemes: {
      list: [
        { name: "Rainforest", dataTheme: "rainforest", color: "#00755e" },
        { name: "Candy", dataTheme: "candy", color: "#ffb7d5" },
        { name: "Rose", dataTheme: "rose", color: "#be123c" },
      ],
      dataAttribute: "data-theme",
      clearable: true,
      toolbar: {
        title: "Change data-theme attribute",
        icon: "PaintBrushIcon",
      },
    } satisfies ThemeConfig,
  },
} satisfies Preview;

export default preview;
