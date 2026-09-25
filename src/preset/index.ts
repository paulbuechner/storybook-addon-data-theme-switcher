import { definePreviewAddon } from "storybook/internal/csf";

import addonAnnotations from "./preview";
import type { DataThemeTypes } from "./types";

export default () => definePreviewAddon<DataThemeTypes>(addonAnnotations);

export * from "./types";
