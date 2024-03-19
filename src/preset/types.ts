import type { ThemeConfig as _ThemeConfig } from "@/types";

export type ThemeConfig = Partial<
  Pick<_ThemeConfig, "list" | "dataAttribute" | "clearable" | "toolbar">
>;
