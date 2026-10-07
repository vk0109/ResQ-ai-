import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),

    VitePWA({
      registerType: "autoUpdate",

      manifest: {
        name: "RESQ-AI",
        short_name: "RESQ-AI",
        description:
          "Offline-first emergency decision support system",

        theme_color: "#050b14",
        background_color: "#050b14",

        display: "standalone",

        start_url: "/app",
        scope: "/",

        icons: [
          {
            src: "/pwa-192x192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "/pwa-512x512.png",
            sizes: "512x512",
            type: "image/png",
          },
        ],
      },

      workbox: {
        globPatterns: [
          "**/*.{js,css,html,ico,png,svg,woff2}",
        ],

        navigateFallback: "/index.html",
      },

      devOptions: {
        enabled: true,
      },
    }),
  ],
});