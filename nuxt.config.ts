// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: [
        '@nuxtjs/tailwindcss',
        'nuxt-security'
      ],
    app: {
      cdnURL: "https://d2y54ydewtf141.cloudfront.net",
    }
})

