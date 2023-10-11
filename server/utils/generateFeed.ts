import type { H3Event } from 'h3'
import { Feed } from 'feed'
import matter from 'gray-matter'
import MarkdownIt from 'markdown-it'
import fs from 'fs-extra'
import { serverQueryContent } from '#content/server'

export type FeedType = 'rss' | 'json' | 'atom'

export default async function generateFeed(event: H3Event, type: FeedType = 'rss') {
  const { siteUrl: host } = useRuntimeConfig().public

  const markdown = MarkdownIt({
    html: true,
    breaks: true,
    linkify: true,
  })

  const author = {
    name: 'Chang Jun',
    email: '52chinaweb@gmail.com',
    link: host,
  }

  const feed = new Feed({
    title: 'Chang Jun\'s Blog',
    description: 'Feed of Chang Jun\'s Blog',
    id: host,
    link: host,
    image: `${host}/img/blog-favicon-32x32.png`,
    favicon: `${host}/img/blog-favicon-32x32.png`,
    copyright: 'CC BY-NC 4.0. © 2023 Chang Jun. All Rights Reserved.',
    author,
    feedLinks: {
      json: `${host}/feed.json`,
      atom: `${host}/feed.atom`,
      rss: `${host}/feed.xml`,
    },
  })

  const files = await serverQueryContent(event, 'posts').sort({ date: -1 }).limit(10).find()
  const docs = (
    await Promise.all(files.map(async (d) => {
      const _path = `${d._source}/${d._file}`
      const raw = await fs.readFile(_path, 'utf-8')
      const { content } = matter(raw)
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
      date: new Date(doc.date),
      image: `${host}${doc.image?.src || ''}`,
      author: [author],
    })
  })

  if (type === 'atom')
    return feed.atom1()
  if (type === 'json')
    return feed.json1()
  return feed.rss2()
}
