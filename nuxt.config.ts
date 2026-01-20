import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxt/icon", // '@nuxtjs/tailwindcss',
    "@nuxt/image", "@nuxt/eslint", "@nuxt/fonts", "@nuxtjs/color-mode", "nuxt-headlessui", "@nuxt/ui"],
  devtools: { enabled: true },
  css: ["./app/assets/css/main.css"],
  colorMode: {
    classSuffix: "",
    preference: "light",
    fallback: "light",
  },
  compatibilityDate: "2025-07-15",
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
  eslint: {
    config: {
      stylistic: {
        semi: true,
        quotes: "double",
        commaDangle: "always-multiline",
        indent: 2,
      },
    },
  },
  headlessui: {
    prefix: "Headless",
  },
  icon: {
    mode: "css",
    cssLayer: "base",
    serverBundle: {
      collections: ["uil", "mdi"], // <!--- this
    },
  },
});
