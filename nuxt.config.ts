import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxt/icon", // '@nuxtjs/tailwindcss',
    // "@nuxt/image",
    "@nuxt/eslint", "@nuxt/fonts", "@nuxtjs/color-mode", "nuxt-headlessui", "@nuxt/ui"],
  ssr: false,
  devtools: { enabled: true },
  app: {
    baseURL: "/",
  },
  css: ["./app/assets/css/main.css"],
  colorMode: {
    classSuffix: "",
    preference: "system",
    fallback: "light",
  },
  runtimeConfig: {
    public: {
      emailjsServiceId: process.env.NUXT_PUBLIC_EMAILJS_SERVICE_ID,
      emailjsTemplateId: process.env.NUXT_PUBLIC_EMAILJS_TEMPLATE_ID,
      emailjsPublicKey: process.env.NUXT_PUBLIC_EMAILJS_PUBLIC_KEY,
    },
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
    serverBundle: false,
    // serverBundle: {
    //   collections: ["uil", "mdi"], // <!--- this
    // },
  },
});
