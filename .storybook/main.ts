import type { StorybookConfig } from "@storybook/react-vite";

const config: StorybookConfig = {
  stories: ["../src/stories/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "./local-preset.js",
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  docs: {},
  core: {
    disableTelemetry: true,
  },
};

export default config;
