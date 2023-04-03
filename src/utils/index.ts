import type { Theme, ThemeConfig } from "@/types";

const defaultOptions: ThemeConfig = {
  clearable: true,
  list: [],
};

export function getConfig(parameters: ThemeConfig | Theme[]): ThemeConfig {
  const options =
    parameters instanceof Array ? { list: parameters } : parameters;

  return {
    ...defaultOptions,
    ...options,
  };
}

export function getSelectedThemeName(
  list: Theme[],
  defaultTheme?: string,
  currentSelectedValue?: string
): string {
  if (!list.length) {
    return "none";
  }

  if (currentSelectedValue === "none") {
    return currentSelectedValue;
  }

  if (
    currentSelectedValue &&
    list.find((i) => i.name === currentSelectedValue)
  ) {
    return currentSelectedValue;
  }

  if (defaultTheme && list.find((i) => i.dataTheme === defaultTheme)) {
    return list.find((i) => i.dataTheme === defaultTheme)?.name ?? "none";
  }

  if (defaultTheme) {
    return defaultTheme;
  }

  if (list.find((i) => i.default)) {
    return list.find((i) => i.default)?.name ?? "none";
  }

  return "none";
}

export function getSelectedTheme(
  list: Theme[],
  themeName: string
): Theme | undefined {
  return list.find(({ name }) => name === themeName);
}
