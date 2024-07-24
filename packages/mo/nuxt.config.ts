// https://nuxt.com/docs/api/configuration/nuxt-config

import pluginSvgVue from "@vuetter/vite-plugin-vue-svg";

export default defineNuxtConfig({
  app: {
    head: {
      meta: [
        {
          "http-equiv": "X-UA-Compatible",
          content: "IE=edge",
        },
        {
          "http-equiv": "cache-control",
          content: "no-store",
        },
        {
          name: "referrer",
          content: "origin",
        },
      ],
      script: [
        {
          src: "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.6.347/pdf.min.js",
        },
      ],
    },
  },
  ssr: false,
  devtools: { enabled: true },
  build: {
    extend(config, ctx) {
      config.resolve.alias["@priros/common"] = path.resolve(
        __dirname,
        "../common"
      );
    },
  },
  runtimeConfig: {
    public: {
      apiURL: process.env.API_URL,
    },
  },
  modules: ["@pinia/nuxt", "@nuxt/image"],
  css: ["@priros/common/assets/scss/_style.scss"],
  vite: {
    plugins: [pluginSvgVue()],
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@import "@priros/common/assets/scss/_variables.scss";`,
        },
      },
    },
  },
});
