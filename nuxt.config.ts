// https://v3.nuxtjs.org/api/configuration/nuxt.config
import { fileURLToPath } from 'node:url'

export default defineNuxtConfig({
  app: {
    head: {
      title: '52chinaweb',
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

  alias: {
    style: fileURLToPath(new URL('./assets/style', import.meta.url)),
  },

  nitro: {
    prerender: {
      routes: ['/sitemap.xml'],
    },
  },

  extends: ['@nuxt-themes/typography'],

  modules: [
    '@vue-macros/nuxt',
    '@nuxt/content',
    '@nuxtjs/color-mode',
    'nuxt-icon',
    '@unocss/nuxt',
    '@vueuse/nuxt',
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
