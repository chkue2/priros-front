// https://nuxt.com/docs/api/configuration/nuxt-config

import pluginSvgVue from '@vuetter/vite-plugin-vue-svg';

export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/scss/_style.scss'],
  vite:{
    plugins:[pluginSvgVue()],
    css:{
      preprocessorOptions:{
        scss:{
          additionalData: `@import "~/assets/scss/_variables.scss";`
        }
      }
    }
  }
})
