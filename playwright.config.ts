import { defineConfig } from "@playwright/test";

export default defineConfig({
  testDir: "./e2e",
  timeout: 10_000,
  retries: 0,
  use: {
    baseURL: "http://localhost:6006",
    headless: true,
  },
  webServer: {
    // Start storybook directly: without a terminal (CI), pnpm runs scripts in
    // their own process group, which survives the webServer's SIGKILL and keeps
    // Playwright waiting for its output to close.
    command: "pnpm build && storybook dev -p 6006 --ci",
    url: "http://localhost:6006",
    reuseExistingServer: !process.env.CI,
    timeout: 120_000,
  },
});
