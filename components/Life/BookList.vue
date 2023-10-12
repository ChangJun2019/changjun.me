<script setup lang="ts">
import type { Book } from '@/types/life'

const { getItems } = useDirectusItems()
const {
  data: books,
} = await useAsyncData<Book[]>('Books', () =>
  getItems({
    collection: 'Books',
  }))
</script>

<template>
  <section>
    <h3 id="Book" class="c-text-muted text-lg font-semibold my-4">
      图书
    </h3>
    <div class="flex w-full space-x-2 overflow-x-auto py-2" scrollbar="~ rounded track-color-transparent thumb-color-bg-muted">
      <div v-for="book in books" :key="book.isbn" class="relative flex flex-col text-center align-middle flex-shrink-0 basis-22">
        <NuxtLink to="#" class="mt-auto w-full">
          <img class="c-bg-muted w-full min-h-24 h-auto align-middle border-2 border-transparent border-solid dark:opacity-90" :src="book.cover" alt="" loading="lazy">
          <div class="c-text-base px-1 min-h-8 line-clamp-2 text-xs scale-80 transition-all duration-200">
            {{ book.name }}
          </div>
        </NuxtLink>
      </div>
    </div>
  </section>
</template>
