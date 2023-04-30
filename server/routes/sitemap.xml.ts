import { SitemapStream, streamToPromise } from 'sitemap'
import { serverQueryContent } from '#content/server'

export default defineEventHandler(async (event) => {
  // Fetch all documents
  const docs = await serverQueryContent(event).find()
  const { host } = useRuntimeConfig()
  const sitemap = new SitemapStream({
    hostname: host,
  })
  for (const doc of docs) {
    sitemap.write({
      url: doc._path,
      changefreq: 'weekly',
    })
  }
  sitemap.end()
  return streamToPromise(sitemap)
})
