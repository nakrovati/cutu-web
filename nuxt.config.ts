export default defineNuxtConfig({
  devtools: {
    enabled: true,
  },
  runtimeConfig: { public: { backendURL: process.env.BACKEND_URL } },
  app: {
    head: {
      htmlAttrs: {
        lang: "en",
      },
    },
  },
  modules: [
    "radix-vue/nuxt",
    "@vueuse/nuxt",
    "@nuxtjs/tailwindcss",
    "@nuxtjs/color-mode",
  ],
  colorMode: {
    classSuffix: "",
  },
});
