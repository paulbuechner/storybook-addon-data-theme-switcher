import type { ThemeConfig as _ThemeConfig } from "@/types";

export type ThemeConfig = Partial<
  Pick<_ThemeConfig, "list" | "dataAttribute" | "clearable" | "toolbar">
>;

/**
 * Types contributed to CSF Next (`definePreview`) stories.
 */
export interface DataThemeTypes {
  globals: {
    /**
     * The `dataTheme` value of the active theme, or `"none"` to clear it.
     */
    dataTheme?: string;

    /**
     * The theme switcher configuration.
     */
    dataThemes?: ThemeConfig;
  };
}
