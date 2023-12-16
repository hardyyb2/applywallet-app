import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import { defineConfig } from "vitest/config";

export default defineConfig({
  plugins: [tsconfigPaths(), react()],
  test: {
    css: true,
    globals: true,
    environment: "jsdom",
    setupFiles: "/setupTest.ts",
  },
});
