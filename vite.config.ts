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
         "@": path.resolve(__dirname, "src"),
         "@app": path.resolve(__dirname, "src/app"),
         "@store": path.resolve(__dirname, "src/app/store"),
         "@app/types": path.resolve(__dirname, "src/app/types"),
         "@assets": path.resolve(__dirname, "src/assets"),
         "@fonts": path.resolve(__dirname, "src/assets/fonts"),
         "@images": path.resolve(__dirname, "src/assets/images"),
         "@features": path.resolve(__dirname, "src/features"),
         "@layouts": path.resolve(__dirname, "src/layouts"),
         "@pages": path.resolve(__dirname, "src/pages"),
         "@shared": path.resolve(__dirname, "src/shared"),
         "@shared/types": path.resolve(__dirname, "src/shared/types"),
         "@components": path.resolve(__dirname, "src/shared/components"),
         "@constants": path.resolve(__dirname, "src/shared/constants"),
         "@hooks": path.resolve(__dirname, "src/shared/hooks"),
         "@utils": path.resolve(__dirname, "src/shared/utils"),
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
