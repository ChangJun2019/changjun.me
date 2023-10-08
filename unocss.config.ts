import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetUno,
  presetWebFonts,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'
import { presetScrollbar } from 'unocss-preset-scrollbar'
import { fontFamily } from '@unocss/preset-mini/dist/theme'

export default defineConfig({

  content: {
    pipeline: {
      include: [
        // the default
        /\.(vue|svelte|[jt]sx|mdx?|astro|elm|php|phtml|html)($|\?)/,
        // include js/ts files
        'app.config.ts',
        'constants/*.{js,ts}',
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
      'Switch': '#E70012',
      'PS5': '#0070cc',
      'primary': '#00dd83',
      'bg-muted': 'var(--c-bg-muted)',
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
    presetScrollbar(),
  ],

  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
  ],

})
