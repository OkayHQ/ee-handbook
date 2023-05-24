import theme from '@nuxt/content-theme-docs'

export default theme({
  buildModules: ['@nuxt/typescript-build'],
  build: {
    transpile: [/^vue-github-button/]
  }
})
