// https://nuxt.com/docs/api/configuration/nuxt-config
import path from "path";
import pluginSvgVue from '@vuetter/vite-plugin-vue-svg';

export default defineNuxtConfig({
  devtools: { enabled: true },
  build:{
      extend(config, ctx) {
          config.resolve.alias['@priros/common'] = path.resolve(__dirname,'../common');
      }
  },
  runtimeConfig: {
      public: {
          apiURL: process.env.API_URL || 'http://localhost:8080'
      }
  },
  modules: [
      '@pinia/nuxt',
      '@nuxt/image',
  ],
  css: ['@priros/common/assets/scss/_style.scss'],
  vite: {
      plugins: [pluginSvgVue()],
      css: {
          preprocessorOptions: {
              scss: {
                  additionalData: `@import "@priros/common/assets/scss/_variables.scss";`
              }
          }
      }
  }
})
