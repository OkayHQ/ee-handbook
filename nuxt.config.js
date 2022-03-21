import theme from '@nuxt/content-theme-docs'

export default theme({
  buildModules: ['@nuxt/typescript-build', '@nuxtjs/google-analytics'],
  router: {
    base: '/handbook/'
  },
  googleAnalytics: {
    id: process.env.GOOGLE_ANALYTICS_ID
  }
})
