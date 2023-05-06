import type { H3Event } from 'h3'
import { Feed } from 'feed'
import dayjs from 'dayjs'
import matter from 'gray-matter'
import MarkdownIt from 'markdown-it'
import fs from 'fs-extra'
import { serverQueryContent } from '#content/server'

export default async function generateFeed(event: H3Event) {
  const { siteUrl: host } = useRuntimeConfig().public!

  const markdown = MarkdownIt({
    html: true,
    breaks: true,
    linkify: true,
  })

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

  const files = await serverQueryContent(event, 'posts').sort({ date: -1 }).limit(10).find()
  const docs = (
    await Promise.all(files.map(async (d) => {
      const _path = `${d._source}/${d._file}`
      const raw = await fs.readFile(_path, 'utf-8')
      const { data, content } = matter(raw)
      const html = markdown.render(content)
      return {
        bodyHtml: html,
        ...d,
      }
    }))
  ) as typeof files
  docs.forEach((doc) => {
    const _link = `${host}${doc._path}/`
    feed.addItem({
      title: doc.title!,
      id: _link,
      link: _link,
      content: doc.bodyHtml,
      description: doc.description || doc.title,
      date: dayjs(doc.date).toDate(),
      image: doc.cover,
    })
  })

  return feed.rss2()
}
