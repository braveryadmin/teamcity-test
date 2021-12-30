export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'beaver-dealer',
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
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,600,700,800,900'
      }
    ],
    script: [
      {
        src: "https://www.gstatic.com/charts/loader.js",
        body: true,
      },
      {
        src: "https://unpkg.com/lightweight-charts@3.4.0/dist/lightweight-charts.standalone.production.js",
        body: true,
      },
      {
        src: "https://code.highcharts.com/highcharts.js",
        body: true,
      },
      {
        src: "https://code.highcharts.com/modules/data.js",
        body: true,
      },
      // {
      //   src: "https://code.highcharts.com/modules/exporting.js",
      //   body: true,
      // },
      {
        src: "https://code.highcharts.com/modules/export-data.js",
        body: true,
      },
      {
        src: "https://code.highcharts.com/modules/accessibility.js",
        body: true
      }
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    "ant-design-vue/dist/antd.css",
  ],

  buildModules: [
    '@nuxtjs/style-resources'
  ],

  styleResources: {
    scss: [
      '~/styles/global.scss'
    ]
  },

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~plugins/aos', ssr: false },
    { src: '~plugins/elementUI', ssr: true },
    { src: '~/plugins/vidle.js' },
    { src: "~/plugins/click-outside.js", ssr: false }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/toast',
    'nuxt-highcharts',
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {

  },

  axios: {
    baseURL: 'https://dev.beaverdealer.com/', // Used as fallback if no runtime config is provided
  },

  toast: {
    position: 'top-center',
    duration: '2500'
  },

  server: {
    port: 8000,
    host: "0.0.0.0"
  }
}
