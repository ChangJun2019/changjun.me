import { SIDE_BAR } from '@/constants/sidebar'
import { NAV } from '@/constants/app'

export default defineAppConfig({

  appNav: NAV,

  asidebar: {
    logo: '/img/blog-pwa-192x192.png',
    nav: SIDE_BAR,
  },

  // https://ui.nuxtlabs.com/getting-started/theming
  ui: {

    button: {
      variant: {
        solid: 'focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 c-bg-primary c-text-primary shadow hover:c-bg-primary/90',
        ghost: 'focus:outline-nones hover:bg-zinc-100 dark:hover:bg-zinc-800',
      },
    },

    slideover: {
      background: 'bg-base',
    },

    card: {
      background: 'bg-base',
      divide: 'divide-y divide-zinc-200 dark:divide-zinc-800',
      ring: 'ring-1 ring-zinc-200 dark:ring-zinc-800',
    },

    tabs: {
      list: {
        background: 'c-bg-muted',
        marker: {
          background: 'bg-base',
        },
      },
    },
  },
})
