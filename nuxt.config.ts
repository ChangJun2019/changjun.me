import { isDevelopment, isProduction } from 'std-env'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({

  components: [
    { path: '~/components/Life', pathPrefix: false },
    { path: '~/components' },
  ],
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

  experimental: {
    inlineSSRStyles: false,
  },

  // https://devtools.nuxt.com/guide/getting-started
  devtools: {
    enabled: true,

    timeline: {
      enabled: true,
    },
  },

  devServer: {
    host: '0.0.0.0',
    port: 5809,
  },

  nitro: {
    prerender: {
      routes: ['/feed.xml', '/feed.json', '/feed.atom', '/life'],
    },
  },

  modules: [
    '@vue-macros/nuxt',
    '@nuxt/content',
    '@unocss/nuxt',
    '@vueuse/nuxt',
    'dayjs-nuxt',
    'nuxt-directus',
    '@nuxt/devtools',
    '@nuxtjs/color-mode',
    '@nuxt/image',
  ],

  css: [
    '@unocss/reset/tailwind.css',
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
    ignores: [isProduction ? '/dev-' : ''],

    markdown: {
      anchorLinks: false,
    },

    navigation: {
      fields: ['title', 'date', 'cover', 'tag', 'description'],
    },

    documentDriven: {
      layoutFallbacks: ['content'],
    },

    highlight: {
      theme: {
        dark: 'vitesse-dark',
        default: 'vitesse-light',
      },
      preload: ['diff', 'json', 'js', 'ts', 'css', 'shell', 'html', 'md', 'yaml', 'php', 'vue', 'bash'],
    },
  },

  dayjs: {
    plugins: ['relativeTime'],
  },

  app: {
    head: {
      viewport: 'width=device-width,initial-scale=1,viewport-fit=cover',
    },
  },

})
