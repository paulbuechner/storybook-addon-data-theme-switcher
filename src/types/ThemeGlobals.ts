import type { ThemeConfig } from "./ThemeConfig";

export type ThemeGlobals = {
  dataTheme: string;
  dataThemes: ThemeConfig;
};

export type UpdateThemeGlobalsFn = (
  themeGlobals: Partial<Pick<ThemeGlobals, "dataTheme">>
) => void;
