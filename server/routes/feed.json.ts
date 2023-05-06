export default defineEventHandler(async (event) => {
  const feed = await generateFeed(event, 'json')
  setHeader(event, 'content-type', 'application/json')
  return feed
})
