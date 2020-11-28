export default {
  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'Web Developer',
    titleTemplate: "Christian R. Paranas | %s",
    htmlAttrs: {
      lang: 'en',
      amp: true
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'keywords', content: 'Christian Paranas, Christian, Paranas, Web Developer, Student, Tacloban, Philippines'},
      { hid: 'description', name: 'description', content: "I'm Christian R. Paranas, I am a Student and a Freelance Web Developer currently in Tacloban City, Philippines." }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Fredoka+One&display=swap'
      }
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    '@/assets/main.css'
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    "@nuxtjs/color-mode",
    '@nuxtjs/tailwindcss',
    '@nuxtjs/svg'
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    '@nuxtjs/sitemap'
  ],
  sitemap: {
    hostname: 'https://christianparanas.me',
    gzip: true,
    exclude: [
      '/secret',
      '/admin/**'
    ]
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
  }
}
