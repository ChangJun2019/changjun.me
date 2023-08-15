import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetUno,
  presetWebFonts,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'
import { fontFamily } from '@unocss/preset-mini/dist/theme'

export default defineConfig({

  content: {
    // https://unocss.dev/guide/extracting#extracting-from-build-tools-pipeline
    pipeline: {
      include: [
        /\.(vue|svelte|[jt]sx|mdx?|astro|elm|php|phtml|html)($|\?)/,
        // include js/ts files
        'src/**/*.{js,ts}',
        'app.config.ts',
      ],
    },
  },

  safelist: [
    'i-carbon-repo-source-code',
    'i-carbon-blog',
    'i-carbon-book',
    'i-carbon-play-outline',
    'i-carbon-game-console',
    'i-cib-twitter',
    'i-cib-sina-weibo',
    'i-cib-telegram',
    'i-cib-gmail',
    'animate-bobble',
  ],
  shortcuts: [
    {
      'bg-base': 'bg-$c-bg-base',
      'c-bg-primary': 'bg-$c-bg-primary',
      'c-bg-muted': 'bg-$c-bg-muted',
      'c-text-muted': 'bg-$c-text-muted',
      'text-base': 'text-$c-text-base',
      'c-text-primary': 'text-$c-text-primary',
      'text-secondary': 'text-$c-text-secondary',
      'border-base': 'border-$c-border-base',
      'bg-border': 'bg-$c-border-base',
    },
    {
      'nav-icon-btn': 'border border-0 rounded-md p-2 text-lg leading-4 bg-gray-50 dark:bg-gray-900',
    },
  ],

  theme: {
    extend: {
      animation: {
        'bobble-sm': 'bobble-sm 3s ease infinite',
      },
    },
    fontFamily: {
      sans: [
        'Inter',
        'LXGW WenKai',
        ...fontFamily.sans.split(','),
      ],
      mono: [
        'JetBrainsMono',
        ...fontFamily.mono.split(','),
      ],
    },

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
