import type { IconsProps } from "@storybook/components";

import type { Theme } from "./Theme";

type ToolbarConfig = {
  /**
   * The title to display in the toolbar.
   */
  title?: string;

  /**
   * The icon to display in the toolbar.
   */
  icon?: IconsProps["icon"];
};

export interface ThemeConfig {
  /**
   * The data theme value to use for the active theme. Retrieved from globalTypes globals["dataTheme"].
   */
  default?: string;

  /**
   * The list of themes to display in the selector.
   */
  list: Theme[];

  /**
   * The data attribute to use. Retrieved from globalTypes globals["dataAttribute"].
   */
  dataAttribute?: string;

  /**
   * Controls whether the user can clear the theme selection.
   */
  clearable?: boolean;

  /**
   * The toolbar configuration.
   */
  toolbar?: ToolbarConfig;

  /**
   * The function to call when the theme changes.
   *
   * @param themeName The name of the theme that was selected.
   */
  onChange?: (themeName: Theme | undefined) => void;
}
