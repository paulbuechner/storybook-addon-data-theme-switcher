import type { ThemeConfig as _ThemeConfig } from "@/types";

export type ThemeConfig = Partial<
  Pick<_ThemeConfig, "list" | "clearable" | "dataAttribute">
>;
