export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,
  // router
  router: {
    extendRoutes(routes, resolve) {
      return [
        ...routes,
        {
          name: 'home',
          path: '/', // <--- change this
          component: resolve(__dirname, 'pages/user/home/index.vue'),
          chunkName: 'pages/user/home/index'
        },
        {
          name: 'about',
          path: '/about', // <--- change this
          component: resolve(__dirname, 'pages/user/about/index.vue'),
          chunkName: 'pages/user/about/index'
        },
        {
          name: 'login',
          path: '/login', // <--- change this
          component: resolve(__dirname, 'pages/user/login/index.vue'),
          chunkName: 'pages/user/login/index'
        },
      ]
    }
  },
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'WEB-NUXT',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
