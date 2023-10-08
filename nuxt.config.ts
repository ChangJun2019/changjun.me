// https://v3.nuxtjs.org/api/configuration/nuxt.config

export default defineNuxtConfig({

  components: [
    { path: '~/components/Life', pathPrefix: false },
    { path: '~/components' },
  ],

  extends: ['@nuxt-themes/typography'],

  // https://nuxt.com/docs/getting-started/configuration
  runtimeConfig: {
    // https://github.com/harlan-zw/nuxt-simple-sitemap#set-site-url-required-when-prerendering
    public: {
      siteUrl: 'https://52chinaweb.com',
      directus: {
        token: '',
      },
    },
  },

  // https://devtools.nuxt.com/guide/getting-started
  devtools: { enabled: true },

  devServer: {
    host: '0.0.0.0',
    port: 5809,
  },

  nitro: {
    prerender: {
      routes: ['/feed.xml', '/feed.json', '/feed.atom'],
    },
  },

  modules: [
    '@vue-macros/nuxt',
    '@nuxt/content',
    '@unocss/nuxt',
    '@vueuse/nuxt',
    '@nuxt/ui',
    'nuxt-directus',
    '@nuxt/devtools',
  ],

  css: [
    '@/style/var.css',
    '@/style/global.css',
  ],

  // https://vue-macros.sxzz.moe/guide/configurations.html
  macros: {},

  // https://color-mode.nuxtjs.org/
  colorMode: {
    preference: 'system',
    classSuffix: '',
  },

  // https://content.nuxtjs.org/api/configuration
  content: {

    documentDriven: {
      layoutFallbacks: ['content'],
    },

    highlight: {
      theme: {
        dark: 'vitesse-dark',
        default: 'vitesse-light',
      },
      preload: [],
    },
  },

})
