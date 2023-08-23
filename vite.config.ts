import path from "path";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";
import glsl from "vite-plugin-glsl";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: "src/index.tsx",
      formats: ["es", "cjs"],
    },
    rollupOptions: {
      external: ["react"],
      output: {
        // Since we publish our ./src folder, there's no point
        // in bloating sourcemaps with another copy of it.
        sourcemapExcludeSources: true,
      },
    },
    sourcemap: true,
    // Reduce bloat from legacy polyfills.
    target: "esnext",
    // Leave minification up to applications.
    minify: false,
  },
  plugins: [
    glsl(),
    dts({
      tsConfigFilePath: path.resolve(__dirname, "tsconfig.json"),
      skipDiagnostics: true,
    }),
  ],
  resolve: {
    alias: {
      "@mocks": path.resolve(__dirname, "src/__mocks__"),
      "@src": path.resolve(__dirname, "src"),
      "@assets": path.resolve(__dirname, "assets"),
      "@styles": path.resolve(__dirname, "assets/styles"),
      "@images": path.resolve(__dirname, "assets/images"),
      "@icons": path.resolve(__dirname, "assets/icons"),
      "@api": path.resolve(__dirname, "src/api"),
      app_settings: path.resolve(__dirname, "app_settings.js"),
    },
  },
});
