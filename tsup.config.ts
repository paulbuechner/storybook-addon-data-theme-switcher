import { defineConfig } from "tsup";

export default defineConfig((options) => ({
  entry: ["src/preset/index.ts", "src/preset/preview.ts", "src/preset/manager.ts"],
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
  esbuildOptions(options) {
    options.conditions = ["module"];
  },
}));
