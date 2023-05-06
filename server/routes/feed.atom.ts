export default defineEventHandler(async (event) => {
  const feed = await generateFeed(event, 'atom')
  setHeader(event, 'content-type', 'application/atom+xml')
  return feed
})
