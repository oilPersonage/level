// vite.config.ts
import * as path from "path";
import { defineConfig } from "file:///E:/Projects/level/node_modules/vite/dist/node/index.js";
import dts from "file:///E:/Projects/level/node_modules/vite-plugin-dts/dist/index.mjs";
import glsl from "file:///E:/Projects/level/node_modules/vite-plugin-glsl/src/index.js";
var __vite_injected_original_dirname = "E:\\Projects\\level";
var vite_config_default = defineConfig({
  base: "/level/",
  build: {
    sourcemap: true,
    // Reduce bloat from legacy polyfills.
    target: "esnext",
    // Leave minification up to applications.
    minify: false
  },
  plugins: [
    glsl(),
    dts({
      tsConfigFilePath: path.resolve(__vite_injected_original_dirname, "tsconfig.json"),
      skipDiagnostics: true
    })
  ],
  resolve: {
    alias: {
      "@mocks": path.resolve(__vite_injected_original_dirname, "src/__mocks__"),
      "@src": path.resolve(__vite_injected_original_dirname, "src"),
      "@assets": path.resolve(__vite_injected_original_dirname, "assets"),
      "@styles": path.resolve(__vite_injected_original_dirname, "assets/styles"),
      "@images": path.resolve(__vite_injected_original_dirname, "assets/images"),
      "@icons": path.resolve(__vite_injected_original_dirname, "assets/icons"),
      "@api": path.resolve(__vite_injected_original_dirname, "src/api"),
      app_settings: path.resolve(__vite_injected_original_dirname, "app_settings.js")
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJFOlxcXFxQcm9qZWN0c1xcXFxsZXZlbFwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiRTpcXFxcUHJvamVjdHNcXFxcbGV2ZWxcXFxcdml0ZS5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0U6L1Byb2plY3RzL2xldmVsL3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0ICogYXMgcGF0aCBmcm9tIFwicGF0aFwiO1xuaW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSBcInZpdGVcIjtcbmltcG9ydCBkdHMgZnJvbSBcInZpdGUtcGx1Z2luLWR0c1wiO1xuaW1wb3J0IGdsc2wgZnJvbSBcInZpdGUtcGx1Z2luLWdsc2xcIjtcblxuLy8gaHR0cHM6Ly92aXRlanMuZGV2L2NvbmZpZy9cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XG4gIGJhc2U6IFwiL2xldmVsL1wiLFxuICBidWlsZDoge1xuICAgIHNvdXJjZW1hcDogdHJ1ZSxcbiAgICAvLyBSZWR1Y2UgYmxvYXQgZnJvbSBsZWdhY3kgcG9seWZpbGxzLlxuICAgIHRhcmdldDogXCJlc25leHRcIixcbiAgICAvLyBMZWF2ZSBtaW5pZmljYXRpb24gdXAgdG8gYXBwbGljYXRpb25zLlxuICAgIG1pbmlmeTogZmFsc2UsXG4gIH0sXG4gIHBsdWdpbnM6IFtcbiAgICBnbHNsKCksXG4gICAgZHRzKHtcbiAgICAgIHRzQ29uZmlnRmlsZVBhdGg6IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsIFwidHNjb25maWcuanNvblwiKSxcbiAgICAgIHNraXBEaWFnbm9zdGljczogdHJ1ZSxcbiAgICB9KSxcbiAgXSxcbiAgcmVzb2x2ZToge1xuICAgIGFsaWFzOiB7XG4gICAgICBcIkBtb2Nrc1wiOiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCBcInNyYy9fX21vY2tzX19cIiksXG4gICAgICBcIkBzcmNcIjogcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgXCJzcmNcIiksXG4gICAgICBcIkBhc3NldHNcIjogcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgXCJhc3NldHNcIiksXG4gICAgICBcIkBzdHlsZXNcIjogcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgXCJhc3NldHMvc3R5bGVzXCIpLFxuICAgICAgXCJAaW1hZ2VzXCI6IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsIFwiYXNzZXRzL2ltYWdlc1wiKSxcbiAgICAgIFwiQGljb25zXCI6IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsIFwiYXNzZXRzL2ljb25zXCIpLFxuICAgICAgXCJAYXBpXCI6IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsIFwic3JjL2FwaVwiKSxcbiAgICAgIGFwcF9zZXR0aW5nczogcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgXCJhcHBfc2V0dGluZ3MuanNcIiksXG4gICAgfSxcbiAgfSxcbn0pO1xuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUEyTyxZQUFZLFVBQVU7QUFDalEsU0FBUyxvQkFBb0I7QUFDN0IsT0FBTyxTQUFTO0FBQ2hCLE9BQU8sVUFBVTtBQUhqQixJQUFNLG1DQUFtQztBQU16QyxJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMxQixNQUFNO0FBQUEsRUFDTixPQUFPO0FBQUEsSUFDTCxXQUFXO0FBQUE7QUFBQSxJQUVYLFFBQVE7QUFBQTtBQUFBLElBRVIsUUFBUTtBQUFBLEVBQ1Y7QUFBQSxFQUNBLFNBQVM7QUFBQSxJQUNQLEtBQUs7QUFBQSxJQUNMLElBQUk7QUFBQSxNQUNGLGtCQUF1QixhQUFRLGtDQUFXLGVBQWU7QUFBQSxNQUN6RCxpQkFBaUI7QUFBQSxJQUNuQixDQUFDO0FBQUEsRUFDSDtBQUFBLEVBQ0EsU0FBUztBQUFBLElBQ1AsT0FBTztBQUFBLE1BQ0wsVUFBZSxhQUFRLGtDQUFXLGVBQWU7QUFBQSxNQUNqRCxRQUFhLGFBQVEsa0NBQVcsS0FBSztBQUFBLE1BQ3JDLFdBQWdCLGFBQVEsa0NBQVcsUUFBUTtBQUFBLE1BQzNDLFdBQWdCLGFBQVEsa0NBQVcsZUFBZTtBQUFBLE1BQ2xELFdBQWdCLGFBQVEsa0NBQVcsZUFBZTtBQUFBLE1BQ2xELFVBQWUsYUFBUSxrQ0FBVyxjQUFjO0FBQUEsTUFDaEQsUUFBYSxhQUFRLGtDQUFXLFNBQVM7QUFBQSxNQUN6QyxjQUFtQixhQUFRLGtDQUFXLGlCQUFpQjtBQUFBLElBQ3pEO0FBQUEsRUFDRjtBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
