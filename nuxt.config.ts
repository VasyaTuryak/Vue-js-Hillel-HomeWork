// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [

    '@pinia/nuxt'
  ],
  alias: {
    pinia: "/node_modules/@pinia/nuxt/node_modules/pinia/dist/pinia.mjs"
  },
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },

})


// export default defineNuxtConfig({
//   modules: ['@pinia/nuxt'],
//   devtools: { enabled: true },
// })
