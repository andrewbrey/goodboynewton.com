/// <reference types="vitest" />
/// <reference types="vite/client" />

import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import { configDefaults } from "vitest/config";

const defaultInclude = configDefaults.include ?? [];

export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  test: {
    include: [...defaultInclude, "**/__tests__/**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"],
    globals: true,
    environment: "happy-dom",
    setupFiles: ["./test/setup-test-env.ts"],
  },
});
