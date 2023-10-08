<script setup lang="ts">
import type { MarkdownParsedContent } from '@nuxt/content/dist/runtime/types'

interface Article extends MarkdownParsedContent {
  title: string
  cover: string
  date: string
  tag: string
  description: string
}

const { data: postList } = await useAsyncData('postList', () => queryContent<Article>('posts').sort({ date: -1 }).find())

const formatDate = computed(() => {
  return function (time: any) {
    if (useDayjs().diff(useDayjs(time), 'year') >= 1)
      return useDayjs(time).format('YYYY年M月D日')
    else
      return useDayjs(time).fromNow()
  }
})
</script>

<template>
  <div class="grid mt-8 gap-8 2xl:grid-cols-3 sm:grid-cols-2">
    <article
      v-for="post in postList"
      :key="post._id"
      class="overflow-hidden rounded-lg border c-border-base bg-base cursor-pointer"
    >
      <img
        alt="Office"
        :src="post.cover"
        class="h-48 w-full object-cover dark:opacity-80"
      >

      <div class="px-4 sm:px-6 sm:py-4 flex flex-col">
        <div class="text-sm text-primary/60">
          {{ post.tag }}
        </div>
        <h3 class="font-semibold text-base mt-2">
          {{ post.title }}
        </h3>

        <p class="mt-2 line-clamp-2 text-sm/relaxed c-text-muted">
          {{ post.description }}
        </p>

        <p class="text-secondary text-sm mt-2 opacity-70">
          {{ formatDate(post.date) }}
        </p>
      </div>
    </article>
  </div>
</template>
