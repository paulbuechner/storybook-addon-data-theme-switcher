import type { Meta, StoryObj } from "@storybook/react-vite";
import { expect, within } from "storybook/test";

import { Button } from "./Button";

const meta = {
  component: Button,
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

/** Helper to assert the active theme, CSS variable, and button color. */
function expectTheme(
  button: HTMLElement,
  theme: { attribute: string | null; variable: string; color: string }
) {
  // Assert — data-theme attribute
  if (theme.attribute === null) {
    expect(document.documentElement.getAttribute("data-theme")).toBeNull();
  } else {
    expect(document.documentElement.getAttribute("data-theme")).toBe(
      theme.attribute
    );
  }

  // Assert — CSS variable
  const primaryColor = getComputedStyle(
    document.documentElement
  ).getPropertyValue("--primary-500");
  expect(primaryColor.trim()).toBe(theme.variable);

  // Assert — button background color
  expect(getComputedStyle(button).backgroundColor).toBe(theme.color);
}

/**
 * Verifies the full theme lifecycle: applies each theme via the data-theme
 * attribute, checks that CSS variables and rendered button color update,
 * then clears. Resilient to prior interactive theme changes since it
 * explicitly sets each state before asserting.
 */
export const DataThemeSwitcher: Story = {
  args: {
    label: "Themed Button",
  },
  play: async ({ canvasElement }) => {
    // Arrange
    const canvas = within(canvasElement);
    const button = canvas.getByRole("button");
    const html = document.documentElement;

    // Arrange — set "rainforest"
    html.setAttribute("data-theme", "rainforest");

    // Assert
    expectTheme(button, {
      attribute: "rainforest",
      variable: "#009268",
      color: "rgb(0, 146, 104)",
    });

    // Arrange — switch to "candy"
    html.setAttribute("data-theme", "candy");

    // Assert
    expectTheme(button, {
      attribute: "candy",
      variable: "#e13d90",
      color: "rgb(225, 61, 144)",
    });

    // Arrange — switch to "rose"
    html.setAttribute("data-theme", "rose");

    // Assert
    expectTheme(button, {
      attribute: "rose",
      variable: "#f43f5e",
      color: "rgb(244, 63, 94)",
    });

    // Arrange — clear the theme
    html.removeAttribute("data-theme");

    // Assert — falls back to :root defaults
    expectTheme(button, {
      attribute: null,
      variable: "#6b70fc",
      color: "rgb(107, 112, 252)",
    });
  },
};
