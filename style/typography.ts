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
  },
}
