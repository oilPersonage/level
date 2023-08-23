// vite.config.ts
import path from "path";
import { defineConfig } from "file:///E:/Projects/level/node_modules/vite/dist/node/index.js";
import dts from "file:///E:/Projects/level/node_modules/vite-plugin-dts/dist/index.mjs";
import glsl from "file:///E:/Projects/level/node_modules/vite-plugin-glsl/src/index.js";
var __vite_injected_original_dirname = "E:\\Projects\\level";
var vite_config_default = defineConfig({
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJFOlxcXFxQcm9qZWN0c1xcXFxsZXZlbFwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiRTpcXFxcUHJvamVjdHNcXFxcbGV2ZWxcXFxcdml0ZS5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0U6L1Byb2plY3RzL2xldmVsL3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHBhdGggZnJvbSBcInBhdGhcIjtcbmltcG9ydCB7IGRlZmluZUNvbmZpZyB9IGZyb20gXCJ2aXRlXCI7XG5pbXBvcnQgZHRzIGZyb20gXCJ2aXRlLXBsdWdpbi1kdHNcIjtcbmltcG9ydCBnbHNsIGZyb20gXCJ2aXRlLXBsdWdpbi1nbHNsXCI7XG5cbi8vIGh0dHBzOi8vdml0ZWpzLmRldi9jb25maWcvXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xuICBidWlsZDoge1xuICAgIHNvdXJjZW1hcDogdHJ1ZSxcbiAgICAvLyBSZWR1Y2UgYmxvYXQgZnJvbSBsZWdhY3kgcG9seWZpbGxzLlxuICAgIHRhcmdldDogXCJlc25leHRcIixcbiAgICAvLyBMZWF2ZSBtaW5pZmljYXRpb24gdXAgdG8gYXBwbGljYXRpb25zLlxuICAgIG1pbmlmeTogZmFsc2UsXG4gIH0sXG4gIHBsdWdpbnM6IFtcbiAgICBnbHNsKCksXG4gICAgZHRzKHtcbiAgICAgIHRzQ29uZmlnRmlsZVBhdGg6IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsIFwidHNjb25maWcuanNvblwiKSxcbiAgICAgIHNraXBEaWFnbm9zdGljczogdHJ1ZSxcbiAgICB9KSxcbiAgXSxcbiAgcmVzb2x2ZToge1xuICAgIGFsaWFzOiB7XG4gICAgICBcIkBtb2Nrc1wiOiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCBcInNyYy9fX21vY2tzX19cIiksXG4gICAgICBcIkBzcmNcIjogcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgXCJzcmNcIiksXG4gICAgICBcIkBhc3NldHNcIjogcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgXCJhc3NldHNcIiksXG4gICAgICBcIkBzdHlsZXNcIjogcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgXCJhc3NldHMvc3R5bGVzXCIpLFxuICAgICAgXCJAaW1hZ2VzXCI6IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsIFwiYXNzZXRzL2ltYWdlc1wiKSxcbiAgICAgIFwiQGljb25zXCI6IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsIFwiYXNzZXRzL2ljb25zXCIpLFxuICAgICAgXCJAYXBpXCI6IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsIFwic3JjL2FwaVwiKSxcbiAgICAgIGFwcF9zZXR0aW5nczogcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgXCJhcHBfc2V0dGluZ3MuanNcIiksXG4gICAgfSxcbiAgfSxcbn0pO1xuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUEyTyxPQUFPLFVBQVU7QUFDNVAsU0FBUyxvQkFBb0I7QUFDN0IsT0FBTyxTQUFTO0FBQ2hCLE9BQU8sVUFBVTtBQUhqQixJQUFNLG1DQUFtQztBQU16QyxJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMxQixPQUFPO0FBQUEsSUFDTCxXQUFXO0FBQUE7QUFBQSxJQUVYLFFBQVE7QUFBQTtBQUFBLElBRVIsUUFBUTtBQUFBLEVBQ1Y7QUFBQSxFQUNBLFNBQVM7QUFBQSxJQUNQLEtBQUs7QUFBQSxJQUNMLElBQUk7QUFBQSxNQUNGLGtCQUFrQixLQUFLLFFBQVEsa0NBQVcsZUFBZTtBQUFBLE1BQ3pELGlCQUFpQjtBQUFBLElBQ25CLENBQUM7QUFBQSxFQUNIO0FBQUEsRUFDQSxTQUFTO0FBQUEsSUFDUCxPQUFPO0FBQUEsTUFDTCxVQUFVLEtBQUssUUFBUSxrQ0FBVyxlQUFlO0FBQUEsTUFDakQsUUFBUSxLQUFLLFFBQVEsa0NBQVcsS0FBSztBQUFBLE1BQ3JDLFdBQVcsS0FBSyxRQUFRLGtDQUFXLFFBQVE7QUFBQSxNQUMzQyxXQUFXLEtBQUssUUFBUSxrQ0FBVyxlQUFlO0FBQUEsTUFDbEQsV0FBVyxLQUFLLFFBQVEsa0NBQVcsZUFBZTtBQUFBLE1BQ2xELFVBQVUsS0FBSyxRQUFRLGtDQUFXLGNBQWM7QUFBQSxNQUNoRCxRQUFRLEtBQUssUUFBUSxrQ0FBVyxTQUFTO0FBQUEsTUFDekMsY0FBYyxLQUFLLFFBQVEsa0NBQVcsaUJBQWlCO0FBQUEsSUFDekQ7QUFBQSxFQUNGO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
