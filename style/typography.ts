// https://github.com/unocss/unocss/blob/main/packages/preset-typography/src/preflights/default.ts

export default {
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
}
