/// <reference types="vitest" />
import react from "@vitejs/plugin-react-swc";
import { defineConfig, type PluginOption } from "vite";
import eslint from "vite-plugin-eslint";
import tsconfigPaths from "vite-tsconfig-paths";
import { visualizer } from "rollup-plugin-visualizer";

export default defineConfig({
  plugins: [
    react(),
    tsconfigPaths(),
    eslint(),
    visualizer({
      brotliSize: true,
      gzipSize: true,
      template: "treemap",
      filename: "stats/rollup-stats.html",
      title: "D-Main - Rollup (Build) stats",
      sourcemap: true,
    }) as unknown as PluginOption,
  ],
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./setupTests.ts",
  },
});
