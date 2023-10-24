<script setup lang="ts">
import type { Video } from '@/types/life'

const { getItems } = useDirectusItems()
const {
  data: videos,
} = await useAsyncData<Video[]>('Videos', () =>
  getItems({
    collection: 'Videos',
    params: {
      sort: '-date_created',
    },
  }))
</script>

<template>
  <section>
    <h3 id="Video" class="my-4 text-lg font-semibold c-text-muted">
      观影
    </h3>
    <div class="w-full flex overflow-x-auto py-2 space-x-2" scrollbar="~ rounded track-color-transparent thumb-color-bg-muted">
      <div v-for="video in videos" :key="video.id" class="relative flex flex-shrink-0 basis-22 flex-col text-center align-middle">
        <NuxtLink to="#" class="mt-auto w-full">
          <img class="h-auto min-h-24 w-full border-2 border-transparent border-solid c-bg-muted align-middle dark:opacity-90" :src="video.cover" alt="" loading="lazy">
          <div class="line-clamp-2 min-h-8 scale-80 px-1 text-xs c-text-base">
            {{ video.name }}
          </div>
        </NuxtLink>
      </div>
    </div>
  </section>
</template>
