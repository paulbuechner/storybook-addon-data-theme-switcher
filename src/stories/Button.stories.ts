import type { Meta, StoryObj } from "@storybook/react-vite";

import { Button } from "./Button";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args

const meta = {
  component: Button,
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    // backgroundColor: "#ff0",
    label: "Button",
  },
};

export const Secondary: Story = {
  args: {
    ...Primary.args,
    label: "😄👍😍💯",
  },
};

export const Tertiary: Story = {
  args: {
    ...Primary.args,
    label: "📚📕📈🤓",
  },
};
