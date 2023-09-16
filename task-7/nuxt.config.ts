// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  typescript: {
    strict: true,
    shim: false
  },
  modules: ['@nuxtjs/tailwindcss', '@formkit/nuxt',
    ['@pinia/nuxt',
      {
        autoImports: ['defineStore']
      }]
  ],
  css: ['~/assets/css/tailwind.css'],
  devtools: { enabled: false }
})