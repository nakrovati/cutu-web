export default defineNuxtConfig({
  runtimeConfig: { public: { backendURL: process.env.BACKEND_URL } },
  app: {
    head: {
      htmlAttrs: {
        lang: "en",
      },
    },
  },
  postcss: {
    plugins: {
      autoprefixer: {},
    },
  },
  plugins: [{ src: "~/plugins/vercel.ts", mode: "client" }],
  modules: ["@vueuse/nuxt", "@nuxtjs/tailwindcss"],
  typescript: {
    tsConfig: {
      compilerOptions: {
        moduleResolution: "bundler",
      },
    },
  },
});
