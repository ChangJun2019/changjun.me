import { defineTheme } from 'pinceau'

export default defineTheme({
  // https://github.com/nuxt-themes/typography/blob/main/tokens.config.ts
  prose: {
    h1: {
      fontWeight: '800',
    },

    code: {
      block: {
        fontSize: '15px',
      },
    },

    img: {
      borderRadius: '0.5rem',
    },
  },

  typography: {
    body: {
      color: {
        initial: '#09090b',
        dark: '#fafafa',
      },
      backgroundColor: {
        initial: 'rgba(255,255,255)',
        dark: 'rgba(9,9,11)',
      },
    },
    font: {
      sans: 'Inter,ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji',
      mono: 'JetBrains Mono, ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace',
    },

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
  },
})
