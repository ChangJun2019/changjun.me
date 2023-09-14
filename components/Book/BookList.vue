<script setup lang="ts">
import type { Book } from '@/types/book'

const { getItems } = useDirectusItems()
const {
  data: books,
  pending,
  error,
  refresh,
} = await useAsyncData<Book[]>('Books', () =>
  getItems({
    collection: 'Books',
  }),
)
</script>

<template>
  <div class="grid grid-cols-3 mt-8 gap-6 2xl:grid-cols-8 md:grid-cols-5 xl:grid-cols-6">
    <BookItem v-for="book in books" :key="book.isbn" :book="book" />
  </div>
</template>
