<script setup lang="ts">
import type { Book } from '@/types/life'

const { getItems } = useDirectusItems()
const {
  data: books,
} = await useAsyncData<Book[]>('Books', () =>
  getItems({
    collection: 'Books',
    params: {
      sort: '-readingTime',
    },
  }))
</script>

<template>
  <section>
    <h3 id="Book" class="my-4 text-lg font-semibold c-text-muted">
      图书
    </h3>
    <div class="w-full flex overflow-x-auto py-2 space-x-2" scrollbar="~ rounded track-color-transparent thumb-color-bg-muted">
      <div v-for="book in books" :key="book.isbn" class="relative flex flex-shrink-0 basis-22 flex-col text-center align-middle">
        <NuxtLink to="#" class="mt-auto w-full">
          <img class="h-auto min-h-24 w-full border-2 border-transparent border-solid c-bg-muted align-middle dark:opacity-90" :src="book.cover" alt="" loading="lazy">
          <div class="line-clamp-2 min-h-8 scale-80 px-1 text-xs c-text-base transition-all duration-200">
            {{ book.name }}
          </div>
        </NuxtLink>
      </div>
    </div>
  </section>
</template>
