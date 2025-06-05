import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import mkcert from "vite-plugin-mkcert";
import path from "node:path";

export default defineConfig({
  plugins: [react(), mkcert()],
  server: {
    open: true,
    host: true,
  },
  resolve: {
    alias: {
      "@": `${path.resolve(__dirname, "src")}`,
      "@api": `${path.resolve(__dirname, "src/api")}`,
      "@assets": `${path.resolve(__dirname, "src/assets")}`,
      "@components": `${path.resolve(__dirname, "src/Components")}`,
      "@container": `${path.resolve(__dirname, "src/Components/Container")}`,
      "@ui": `${path.resolve(__dirname, "src/Components/UI")}`,
      "@layouts": `${path.resolve(__dirname, "src/Layouts")}`,
      "@pages": `${path.resolve(__dirname, "src/pages")}`,
      "@constants": `${path.resolve(__dirname, "src/shared/constants")}`,
      "@data": `${path.resolve(__dirname, "src/shared/data")}`,
      "@types": `${path.resolve(__dirname, "src/shared/types")}`,
      "@validations": `${path.resolve(__dirname, "src/shared/validations")}`,
      "@hooks": `${path.resolve(__dirname, "src/shared/hooks")}`,
      "@utils": `${path.resolve(__dirname, "src/utils")}`,
      "@styles": `${path.resolve(__dirname, "src/styles")}`,
      "@store": `${path.resolve(__dirname, "src/store")}`,
      "@slices": `${path.resolve(__dirname, "src/store/slices")}`,
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
        @use "sass:color";
        @use "@/styles/_variables.scss" as *;
        @use "@/styles/_mixins.scss" as *;
		    @use "@/styles/_functions.scss" as *;
        `,
      },
    },
  },
  build: {
    outDir: "dist",
    rollupOptions: {
      output: {
        manualChunks: undefined,
      },
    },
  },
  base: "/",
});
