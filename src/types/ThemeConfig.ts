import type { Theme } from "./Theme";

export interface ThemeConfig {
  /**
   * Controls whether the user can clear the theme selection.
   */
  clearable?: boolean;

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
   * The function to call when the theme changes.
   *
   * @param themeName The name of the theme that was selected.
   */
  onChange?: (themeName: Theme | undefined) => void;
}
