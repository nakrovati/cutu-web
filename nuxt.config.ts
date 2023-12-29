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
  modules: ["@vueuse/nuxt", "@nuxtjs/tailwindcss", "@nuxtjs/color-mode"],
  typescript: {
    tsConfig: {
      compilerOptions: {
        moduleResolution: "bundler",
      },
    },
  },
  colorMode: {
    classSuffix: "",
  },
});
