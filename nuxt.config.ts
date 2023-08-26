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
    '@nuxthq/ui',
    'nuxt-simple-sitemap',
    'nuxt-simple-robots',
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

  devtools: {
    // https://github.com/nuxt/devtools/blob/main/packages/devtools-kit/src/_types/module-options.ts
    enabled: true,
  },

  // https://content.nuxtjs.org/api/configuration
  content: {

    documentDriven: {
      layoutFallbacks: ['content'],
    },

    navigation: {
      fields: ['title', 'date', 'duration', 'cover'],
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
