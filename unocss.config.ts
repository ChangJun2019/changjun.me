import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetTypography,
  presetUno,
  presetWebFonts,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'
import { presetScrollbar } from 'unocss-preset-scrollbar'
import { fontFamily } from '@unocss/preset-mini/theme'
import customTypography from './style/typography'

export default defineConfig({

  content: {
    pipeline: {
      include: [
        // the default
        /\.(vue|svelte|[jt]sx|mdx?|astro|elm|php|phtml|html)($|\?)/,
        // include js/ts files
        'app.config.ts',
        'constants/*.{js,ts}',
        'style/*.{js,ts}',
      ],
    },
  },

  safelist: [],
  shortcuts: [
    {
      'bg-base': 'bg-$c-bg-base',
      'c-bg-primary': 'bg-$c-bg-primary',
      'c-bg-muted': 'bg-$c-bg-muted',
      'c-text-base': 'text-$c-text-base',
      'c-text-muted': 'text-$c-text-muted',
      'c-text-primary': 'text-$c-text-primary',
      'text-secondary': 'text-$c-text-secondary',
      'c-border-base': 'border-$c-border-base',
      'bg-border': 'bg-$c-border-base',
    },
    {
      'nav-icon-btn': 'border border-0 rounded-md p-2 text-lg leading-4 bg-gray-50 dark:bg-gray-900',
    },
  ],

  theme: {

    fontFamily: {
      sans: [
        'Inter',
        ...fontFamily.sans.split(','),
      ],
      mono: [
        'JetBrainsMono',
        ...fontFamily.mono.split(','),
      ],
    },

    colors: {
      Switch: '#E70012',
      PS5: '#0070cc',
      primary: '#00dd83',
      slate: {
        50: '#f8fafc',
        100: '#f1f5f9',
        200: '#e2e8f0',
        300: '#cbd5e1',
        400: '#94a3b8',
        500: '#64748b',
        600: '#475569',
        700: '#334155',
        800: '#1e293b',
        900: '#0f172a',
      },
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
        sans: ['Inter:400,600,800'],
        mono: ['JetBrains Mono:500'],
      },
    }),
    presetTypography({
      cssExtend: customTypography,
    }),
    presetScrollbar(),
  ],

  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
  ],

})
