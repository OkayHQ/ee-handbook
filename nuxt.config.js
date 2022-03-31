import theme from '@nuxt/content-theme-docs'

export default theme({
  buildModules: ['@nuxt/typescript-build', '@nuxtjs/google-analytics'],
  router: {
    base: '/handbook/'
  },
  i18n: {
    baseUrl: '/handbook'
  },
  build: {
    transpile: [/^vue-github-button/]
  },
  env: {
    eventsEndpoint: process.env.EVENTS_ENDPOINT  
  },
  googleAnalytics: {
    id: process.env.GOOGLE_ANALYTICS_ID
  }
})
