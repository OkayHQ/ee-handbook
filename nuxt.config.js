import theme from '@nuxt/content-theme-docs'

export default theme({
  buildModules: ['@nuxt/typescript-build'],
  app: {
    baseURL: '/ee-handbook/'
  },
  build: {
    transpile: [/^vue-github-button/]
  }
})
