import tailwindcss from "@tailwindcss/vite"

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: ['./app/assets/css/main.css'],
  modules: [
    '@nuxt/icon',
    // '@nuxtjs/tailwindcss',
    '@nuxt/image',
    '@nuxt/eslint',
    '@nuxt/fonts',
    '@nuxtjs/color-mode'
  ],
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
})