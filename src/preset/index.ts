import { definePreviewAddon } from "storybook/internal/csf";

import addonAnnotations from "./preview";

export default () => definePreviewAddon(addonAnnotations);

export * from "./types";
