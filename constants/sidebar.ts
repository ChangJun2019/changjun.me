import { MY_LINKS } from './profile'

export const SIDE_BAR = [
  {
    label: 'Created',
    list: [
      {
        name: 'Blog',
        route: '/blog',
        icon: 'i-ri-article-line',
      },
      {
        name: 'Project',
        route: '/project',
        icon: 'i-ri-folder-line',
      },
    ],
  },

  {
    label: 'Life',
    list: [
      {
        name: 'Book',
        route: '/book',
        icon: 'i-ri-book-line',
      },
      {
        name: 'Video',
        route: '/video',
        icon: 'i-ri-play-circle-line',
      },
      {
        name: 'Game',
        route: '/game',
        icon: 'i-ri-switch-line',
      },
    ],
  },

  {
    label: 'Find Me',
    list: MY_LINKS,
  },
]
