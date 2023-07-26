import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetUno,
  presetWebFonts,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'

export default defineConfig({
  shortcuts: [
    {
      'nav-icon-btn': 'border border-0 rounded-md p-2 text-lg leading-4 bg-gray-50 dark:bg-gray-900',
    },
  ],

  theme: {

    colors: {
      primary: {
        DEFAULT: '#00dd83',
      },
      green: {
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
    maxWidth: {
      prose: '80ch',
    },

  },

  presets: [
    presetUno({}),
    presetAttributify(),
    presetIcons({
      scale: 1.2,
    }),
    presetWebFonts({
      provider: 'google',
      fonts: {
        sans: ['Inter:400,600,800', 'LXGW WenKai'],
        mono: ['JetBrains Mono:500'],
      },
    }),
  ],

  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
  ],

})
