// https://v3.nuxtjs.org/api/configuration/nuxt.config
import { fileURLToPath } from 'node:url'

export default defineNuxtConfig({

  // https://nuxt.com/docs/getting-started/configuration
  runtimeConfig: {
    // https://github.com/harlan-zw/nuxt-simple-sitemap#set-site-url-required-when-prerendering
    public: {
      siteUrl: 'https://52chinaweb.com',
    },
    host: 'https://52chinaweb.com',
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
        { rel: 'apple-touch-icon', sizes: '180x180', href: 'https://cjimg-1254386489.cos.ap-shanghai.myqcloud.com/blog-apple-touch-icon.png' },
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: 'https://cjimg-1254386489.cos.ap-shanghai.myqcloud.com/blog-favicon-32x32.png' },
        { rel: 'icon', type: 'image/png', sizes: '16x16', href: 'https://cjimg-1254386489.cos.ap-shanghai.myqcloud.com/blog-favicon-16x16.png' },
        { rel: 'stylesheet', href: 'https://cdn.staticfile.org/lxgw-wenkai-screen-webfont/1.7.0/style.min.css' },
      ],
    },
  },

  experimental: {
    payloadExtraction: true,
  },

  alias: {
    style: fileURLToPath(new URL('./assets/style', import.meta.url)),
  },

  nitro: {
    prerender: {
      routes: ['/rss.xml'],
    },
  },

  // https://github.com/harlan-zw/nuxt-simple-sitemap/blob/main/src/module.ts
  sitemap: {
    discoverImages: false,
  },

  extends: ['@nuxt-themes/typography'],

  modules: [
    '@vue-macros/nuxt',
    '@nuxt/content',
    '@nuxtjs/color-mode',
    'nuxt-icon',
    '@unocss/nuxt',
    '@vueuse/nuxt',
    'nuxt-simple-sitemap',
    '@nuxt/devtools',
  ],

  css: [
    'style/main.css',
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

  // pwa: {
  //   registerType: 'autoUpdate',
  //   manifest: {
  //     name: 'Chang Jun Blog',
  //     short_name: 'CJBlog',
  //     theme_color: '#00dd83',
  //     icons: [
  //       {
  //         src: '/img/pwa-192x192.png',
  //         sizes: '192x192',
  //         type: 'image/png',
  //       },
  //       {
  //         src: '/img/pwa-512x512.png',
  //         sizes: '512x512',
  //         type: 'image/png',
  //       },
  //       {
  //         src: '/img/pwa-512x512.png',
  //         sizes: '512x512',
  //         type: 'image/png',
  //         purpose: 'any maskable',
  //       },
  //     ],
  //   },
  //   workbox: {
  //     navigateFallback: '/',
  //     globPatterns: ['**/*.{js,css,html,png,svg,ico}'],
  //   },
  //   devOptions: {
  //     enabled: true,
  //     type: 'module',
  //   },
  // },

})
