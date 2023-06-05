// https://v3.nuxtjs.org/api/configuration/nuxt.config

export default defineNuxtConfig({

  extends: ['@nuxt-themes/typography'],

  // https://nuxt.com/docs/getting-started/configuration
  runtimeConfig: {
    // https://github.com/harlan-zw/nuxt-simple-sitemap#set-site-url-required-when-prerendering
    public: {
      siteUrl: 'https://52chinaweb.com',
    },
  },

  app: {
    head: {
      title: 'Chang Jun',
      meta: [
        { name: 'author', content: 'ChangJun' },
        { name: 'og:title', content: 'ChangJun\'s blog' },
        { name: 'og:type', content: 'website' },
        { name: 'og:url', content: 'https://52chinaweb.com/' },
      ],
      link: [
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/img/blog-apple-touch-icon.png' },
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/img/blog-favicon-32x32.png' },
        { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/img/blog-favicon-16x16.png' },
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'stylesheet', href: 'https://cdn.staticfile.org/lxgw-wenkai-screen-webfont/1.7.0/style.min.css' },
      ],
    },
  },

  experimental: {
    payloadExtraction: true,
  },

  debug: false,
  nitro: {
    prerender: {
      routes: ['/feed.xml', '/feed.json', '/feed.atom'],
    },
  },

  // https://github.com/harlan-zw/nuxt-simple-sitemap/blob/main/src/module.ts
  sitemap: {
    discoverImages: false,
  },

  // https://github.com/harlan-zw/nuxt-simple-robots/blob/main/src/module.ts
  robots: {},

  modules: [
    '@vue-macros/nuxt',
    '@nuxt/content',
    '@nuxtjs/color-mode',
    'nuxt-icon',
    '@unocss/nuxt',
    '@vueuse/nuxt',
    'nuxt-simple-sitemap',
    'nuxt-simple-robots',
    '@nuxt/devtools',
  ],

  css: [
    '@/assets/style/main.css',
  ],

  // https://vue-macros.sxzz.moe/guide/configurations.html
  macros: {},

  // https://color-mode.nuxtjs.org/
  colorMode: {
    preference: 'system',
    classSuffix: '',
  },

  devtools: {
    // https://github.com/nuxt/devtools/blob/main/packages/devtools-kit/src/_types/module-options.ts
    enabled: true,
  },

  // https://content.nuxtjs.org/api/configuration
  content: {

    documentDriven: true,

    navigation: {
      fields: ['title', 'date', 'duration', 'cover'],
    },

    highlight: {
      theme: {
        dark: 'material-ocean',
        default: 'material-palenight',
      },
      preload: [],
    },
  },
})
