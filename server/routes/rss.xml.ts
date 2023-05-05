export default defineEventHandler(async (event) => {
  const feed = await generateFeed(event)
  setHeader(event, 'content-type', 'text/xml')
  return feed
})
