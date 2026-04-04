import { expect, type Page, test } from "@playwright/test";

/** The addon toolbar button. */
function addonButton(page: Page) {
  return page.locator('[aria-label="Change data-theme attribute"]');
}

/** The popover dropdown that appears when clicking the addon button. */
function dropdown(page: Page) {
  return page.locator('[aria-label="Theme selector"]');
}

/** The story button rendered inside the preview iframe. */
function storyButton(page: Page) {
  return page
    .frameLocator("#storybook-preview-iframe")
    .getByRole("button", { name: /button/i });
}

/** Open the addon dropdown and click a theme option. */
async function selectTheme(page: Page, themeName: string) {
  await addonButton(page).click();
  await dropdown(page).getByText(themeName, { exact: true }).click();
}

test.describe("Data Theme Switcher Addon", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(
      "/?path=/story/stories-button--data-theme-switcher&globals=dataTheme:rainforest"
    );
    await page
      .frameLocator("#storybook-preview-iframe")
      .locator(".sb-show-main")
      .waitFor();

    await selectTheme(page, "Rainforest");
  });

  test("initial dataTheme from initialGlobals is applied on load", async ({
    page,
  }) => {
    // Navigate without globals in the URL and without any toolbar interaction
    await page.goto("/?path=/story/stories-button--data-theme-switcher");
    const iframe = page.frameLocator("#storybook-preview-iframe");
    await iframe.locator(".sb-show-main").waitFor();

    // Assert — the initial dataTheme from .storybook/preview.ts should be applied
    await expect(iframe.locator("html")).toHaveAttribute(
      "data-theme",
      "rainforest"
    );
    await expect(addonButton(page)).toContainText("Rainforest");
  });

  test("toolbar button is visible and shows active theme name", async ({
    page,
  }) => {
    // Assert
    await expect(addonButton(page)).toBeVisible();
    await expect(addonButton(page)).toContainText("Rainforest");
  });

  test("clicking the toolbar button opens the theme dropdown", async ({
    page,
  }) => {
    // Act
    await addonButton(page).click();

    // Assert
    const dd = dropdown(page);
    await expect(dd.getByText("Clear data-theme")).toBeVisible();
    await expect(dd.getByText("Rainforest")).toBeVisible();
    await expect(dd.getByText("Candy")).toBeVisible();
    await expect(dd.getByText("Rose")).toBeVisible();
  });

  test("selecting a theme updates the preview iframe", async ({ page }) => {
    // Arrange
    const iframe = page.frameLocator("#storybook-preview-iframe");

    // Assert — initial theme set by beforeEach
    await expect(iframe.locator("html")).toHaveAttribute(
      "data-theme",
      "rainforest"
    );

    // Act — switch to "Candy"
    await selectTheme(page, "Candy");

    // Assert — theme switched
    await expect(iframe.locator("html")).toHaveAttribute("data-theme", "candy");
    await expect(addonButton(page)).toContainText("Candy");
  });

  test("full theme lifecycle: switch themes then clear", async ({ page }) => {
    // Arrange
    const iframe = page.frameLocator("#storybook-preview-iframe");

    // Assert — starts with "rainforest" (set by beforeEach)
    await expect(iframe.locator("html")).toHaveAttribute(
      "data-theme",
      "rainforest"
    );

    // Act — switch to "Candy"
    await selectTheme(page, "Candy");

    // Assert
    await expect(iframe.locator("html")).toHaveAttribute("data-theme", "candy");

    // Act — switch to "Rose"
    await selectTheme(page, "Rose");

    // Assert
    await expect(iframe.locator("html")).toHaveAttribute("data-theme", "rose");

    // Act — clear the theme
    await addonButton(page).click();
    await dropdown(page).getByText("Clear data-theme").click();

    // Assert — attribute removed
    await expect(iframe.locator("html")).not.toHaveAttribute("data-theme");
  });

  test("dropdown closes when clicking outside", async ({ page }) => {
    // Act — open the dropdown
    await addonButton(page).click();
    await expect(dropdown(page)).toBeVisible();

    // Act — click outside the dropdown
    await page.locator("body").click({ position: { x: 0, y: 0 } });

    // Assert
    await expect(dropdown(page)).not.toBeVisible();
  });

  test("dropdown closes after selecting a theme", async ({ page }) => {
    // Act
    await selectTheme(page, "Candy");

    // Assert
    await expect(dropdown(page)).not.toBeVisible();
  });

  test("button background color changes with theme", async ({ page }) => {
    // Arrange
    const button = storyButton(page);

    // Assert — initial rainforest color (set by beforeEach)
    await expect(button).toHaveCSS("background-color", "rgb(0, 146, 104)");

    // Act — switch to "Candy"
    await selectTheme(page, "Candy");

    // Assert — candy color
    await expect(button).toHaveCSS("background-color", "rgb(225, 61, 144)");

    // Act — clear theme
    await addonButton(page).click();
    await dropdown(page).getByText("Clear data-theme").click();

    // Assert — root default color
    await expect(button).toHaveCSS("background-color", "rgb(107, 112, 252)");
  });
});
