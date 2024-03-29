// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  typescript: {
    strict: true,
    shim: false
  },
  modules: ['@nuxtjs/tailwindcss', 'nuxt-svgo', 
  ['@pinia/nuxt',
    {
      autoImports: ['defineStore']
    }]
  ],
  svgo: {
    autoImportPath: '~/assets/icons/'
  },
  css: ['~/assets/css/tailwind.css'],
  devtools: { enabled: false }
})