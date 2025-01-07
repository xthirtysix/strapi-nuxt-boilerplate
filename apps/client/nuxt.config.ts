// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2024-11-01',
    future: {
        compatibilityVersion: 4,
    },
    devtools: { enabled: true },
    srcDir: 'src',
    dir: {
        app: 'app',
        pages: 'app/routes',
        layouts: 'app/layouts',
    },
})
