import type { Meta, StoryObj } from "@storybook/react-vite";

import { Button } from "./Button";

const meta = {
  component: Button,
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DataThemeSwitcher: Story = {
  args: {
    label: "Themed Button",
  },
};

export const CustomDataAttribute: Story = {
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
};
