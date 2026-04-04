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
