import { defineConfig } from "vite";

export default defineConfig({
  root: "src/app",
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@import "./src/shared/styles/colors.scss";',
      },
    },
  },
});
