export default {
  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'Software Developer',
    titleTemplate: "Christian Paranas | %s",
    htmlAttrs: {
      lang: 'en',
      amp: true
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'keywords', content: 'Christian Paranas, Paranas Christian, Christian, Paranas, Christian R. Paranas, christianparanas, Web Developer, Student, Tacloban, Philippines'},
      { hid: 'description', name: 'description', content: "I'm Christian R. Paranas, I'm a software developer currently in Tacloban City, Philippines. Specializing in building websites and applications. My current toolset includes Vue, React, Redux, Node, Laravel and other various frameworks, libraries and technologies related to them." },
      { property: "og:title", content: "Christian Paranas | Software Developer" },
      { property: "og:url", content: "https://christianparanas.me" },
      { property: "og:site_name", content: "Christian Paranas | Software Developer" },
      { property: "og:image", content: "https://og-image.vercel.app/christianparanas.me.png" },
      { property: "og:type", content: "website" },
      {
        property: "og:description",
        content: "Christian Paranas is a software developer currently in Tacloban City, Philippines. Specializing in building websites and applications."
      }
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
    '@nuxtjs/svg',
    '@nuxtjs/google-analytics',
    '@nuxtjs/date-fns'
  ],

  googleAnalytics: {
    id: 'UA-184158056-1'
  },

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    '@nuxt/content',
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
