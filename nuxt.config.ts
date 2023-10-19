// https://nuxt.com/docs/api/configuration/nuxt-config

import pluginSvgVue from '@vuetter/vite-plugin-vue-svg';

export default defineNuxtConfig({
    ssr:false,
    devtools: {enabled: true},
    runtimeConfig: {
        public: {
            apiURL: process.env.API_URL || 'http://localhost:3001'
        }
    },
    modules: [
        '@pinia/nuxt',
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
