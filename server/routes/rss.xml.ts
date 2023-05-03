import { Feed } from 'feed'
import dayjs from 'dayjs'
import { serverQueryContent } from '#content/server'

export default defineEventHandler(async (event) => {
  const { host } = useRuntimeConfig()

  const feed = new Feed({
    title: 'Chang Jun\'s Blog',
    description: 'Feed of Chang Jun\'s Blog',
    id: host,
    link: host,
    copyright: 'Chang Jun',
    author: {
      name: 'Chang Jun',
      email: '52chinaweb@gmail.com',
      link: 'https://52chinaweb.com/',
    },
  })

  const docs = await serverQueryContent(event, 'posts').sort({ date: -1 }).limit(10).find()

  docs.forEach((doc) => {
    const _link = `${host}${doc._path}/`
    feed.addItem({
      title: doc.title!,
      id: _link,
      link: _link,
      description: doc.description || doc.title,
      date: dayjs(doc.date).toDate(),
      image: doc.cover,
    })
  })

  setHeader(event, 'content-type', 'text/xml')

  return feed.rss2()
})
