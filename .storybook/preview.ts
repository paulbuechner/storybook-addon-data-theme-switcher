import { definePreview } from "@storybook/react-vite";
import addonDocs from "@storybook/addon-docs";

import type { ThemeConfig } from "@/preset/types";

import dataThemeSwitcher from "../dist/index.js";

import "../src/styles/globals.css";

export default definePreview({
  addons: [addonDocs(), dataThemeSwitcher()],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    backgrounds: {
      options: {
        light: { name: "Light", value: "#f5f5f0" },
        dark: { name: "Dark", value: "#1a1a1a" },
      },
    },
  },
  initialGlobals: {
    backgrounds: "light",
    /**
     * storybook-addon-data-theme-switcher configuration for Storybook.
     */
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
});
