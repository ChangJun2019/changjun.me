<script setup lang="ts">
const dayjs = useDayjs()

const postsList = await (await queryContent('posts').find()).sort((a, b) => {
  return dayjs(b.date).valueOf() - dayjs(a.date).valueOf()
})

onMounted(() => {
  console.log('postList', postsList)
})
</script>

<template>
  <div class="grid mt-8 gap-4 2xl:grid-cols-4 sm:grid-cols-2">
    <PostItem v-for="post in postsList" :key="post._id" :title="post.title!" :cover="post.cover" :date="post.date" />
  </div>
</template>
