import { defineConfig } from "tsup";

export default defineConfig((options) => ({
  entry: [
    "src/preset/index.ts",
    "src/preset/preview.ts",
    "src/preset/manager.ts",
    "src/preset/types.ts",
  ],
  splitting: false,
  minify: !options.watch,
  format: ["cjs", "esm"],
  dts: {
    resolve: true,
  },
  treeshake: true,
  sourcemap: true,
  clean: true,
  platform: "browser",
  esbuildOptions(esBuildOptions) {
    esBuildOptions.conditions = ["module"];
  },
}));
