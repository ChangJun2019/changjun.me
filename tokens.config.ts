import { defineTheme } from 'pinceau'

export default defineTheme({
  // https://github.com/nuxt-themes/typography/blob/main/tokens.config.ts
  color: {
    primary: {
      50: '#e6fff1',
      100: '#a3ffce',
      200: '#7affbd',
      300: '#4ff7a9',
      400: '#26eb95',
      500: '#00dd83',
      600: '#00b874',
      700: '#009161',
      800: '#006b4b',
      900: '#004532',
    },
  },
  prose: {
    code: {
      block: {
        fontSize: '15px',
      },
    },

  },
  font: {
    sans: 'Inter, LXGW WenKai Screen, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji',
    mono: 'JetBrains Mono, ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace',
  },
})
