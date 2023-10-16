// https://nuxt.com/docs/api/configuration/nuxt-config

import pluginSvgVue from '@vuetter/vite-plugin-vue-svg';

export default defineNuxtConfig({
    devtools: {enabled: true},
    runtimeConfig: {
        public: {
            apiURL: process.env.API_URL || 'https://api.priros.co.kr'
        }
    },
    modules: [
        '@pinia/nuxt',
        '@pinia-plugin-persistedstate/nuxt',
        '@nuxt/image',
    ],
    plugins:[

    ],
    css: ['~/assets/scss/_style.scss'],
    vite: {
        plugins: [pluginSvgVue()],
        css: {
            preprocessorOptions: {
                scss: {
                    additionalData: `@import "~/assets/scss/_variables.scss";`
                }
            }
        }
    }
})
