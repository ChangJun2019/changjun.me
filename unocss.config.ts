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
import { fontFamily } from '@unocss/preset-mini/dist/theme'
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
      cssExtend: {
        'p,ul,ol,pre': {
          'margin': '0',
          'margin-top': '1.5rem',
          'line-height': 1.75,
        },

        'h1': {
          'margin': '1.75rem 0',
          'font-size': '2.25em',
        },

        'h2': {
          'margin-top': '2.5rem',
          'font-size': '1.75em',
          'font-weight': '600',
          'padding-bottom': '0.5rem',
          'border-bottom-width': '1px',
          'border-style': 'solid',
          'border-bottom-color': 'var(--c-border-base)',
        },

        'h3': {
          'margin': '0',
          'margin-top': '2rem',
          'font-size': '1.375em',
        },

        'h4': {
          'margin': '0',
          'margin-top': '1.5rem',
          'font-size': '1.125em',
        },

        'a': {
          'color': 'var(--c-text-base)',
          'text-decoration-line': 'underline',
          'text-underline-offset': '4px',
          'font-weight': '500',
        },

        'blockquote': {
          'margin': '0',
          'padding-left': '1.5rem',
          'font-style': 'italic',
          'border-left': '2px solid var(--c-border-base)',
          'margin-top': '1.5rem',
          'font-weight': 'normal',
        },

        'ol,ul': {
          padding: '0',
          margin: '1.5rem 0 1.5rem 1.5rem',
        },

        'ol > li::marker,ul > li::marker,summary::marker': {
          color: 'inherit',
        },

        'img,video': {
          'max-width': '100%',
        },
        'figure,picture': {
          margin: '1.5rem 0',
        },

        'figcaption': {
          'color': 'var(--c-text-muted)',
          'font-size': '.875rem',
        },

        'code': {
          'color': 'var(--un-prose-code)',
          'font-size': '.875rem',
          'font-weight': 600,
          'padding': '0.2rem 0.3rem',
          'border-radius': '0.25rem',
          'border': '1px solid var(--c-border-base)',
        },

        ':not(pre) > code::before,:not(pre) > code::after': {
          content: 'none',
        },
        'pre': {
          'padding': '0 1.2rem',
          'overflow-x': 'auto',
          'border-radius': '.375rem',
          'border': '1px solid var(--c-border-base)',
        },
        'pre,code': {
          'white-space': 'pre',
          'word-spacing': 'normal',
          'word-break': 'normal',
          'word-wrap': 'normal',
          '-moz-tab-size': 2,
          '-o-tab-size': 2,
          'tab-size': 2,
          '-webkit-hyphens': 'none',
          '-moz-hyphens': 'none',
          'hyphens': 'none',
          'background': 'var(--c-bg-code)',
          'letter-spacing': 'normal',
        },
        'pre code': {
          'font-weight': 'inherit',
          'border': 'none',
        },
      },
    }),
    presetScrollbar(),
  ],

  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
  ],

})
