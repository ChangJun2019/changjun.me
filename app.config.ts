export default defineAppConfig({
  asidebar: {
    logo: '/img/blog-pwa-192x192.png',
    nav: [
      {
        label: 'Created',
        list: [
          {
            name: 'Blog',
            route: '/blog',
            icon: 'i-carbon-blog',
          },
          {
            name: 'Project',
            route: '/project',
            icon: 'i-carbon-repo-source-code',
          },
        ],
      },

      {
        label: 'Life',
        list: [
          {
            name: 'Book',
            route: '/book',
            icon: 'i-carbon-book',
          },
          {
            name: 'Video',
            route: '/video',
            icon: 'i-carbon-play-outline',
          },
          {
            name: 'Game',
            route: '/game',
            icon: 'i-carbon-game-console',
          },
        ],
      },

      {
        label: 'Find Me',
        list: [
          {
            name: 'Twitter',
            route: 'https://twitter.com/52chinaweb',
            icon: 'i-cib-twitter',
          },
          {
            name: 'Weibo',
            route: 'https://weibo.com/u/5484931522',
            icon: 'i-cib-sina-weibo',
          },
          {
            name: 'Telegram',
            route: 'https://t.me/Max88885',
            icon: 'i-cib-telegram',
          },
          {
            name: 'Gmail',
            route: 'mailto:52chinaweb@gmail.com',
            icon: 'i-cib-gmail',
          },
        ],
      },
    ],
  },

  // https://ui.nuxtlabs.com/getting-started/theming
  ui: {
    button: {
      color: {
        primary: {
          ghost: "focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 c-bg-primary c-text-primary shadow hover:c-bg-primary/90"
        }
      }
    },

    slideover: {
      background: 'bg-base'
    },

    card: {
      background: "bg-base",
      divide: "divide-y border-base",
      ring: "ring-1 ring-zinc-200 dark:ring-zinc-800",
    }
  }
})
