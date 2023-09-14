<script setup lang="ts">
import type { Book } from '@/types/book'
import defaultImg from '@/assets/imgs/defaultImg.svg'

const props = defineProps<{
  book: Book
}>()
</script>

<template>
  <a href="#" class="group flex flex-col justify-end">
    <img
      :src="props.book.cover || defaultImg"
      alt=""
      class="aspect-auto min-h-38 w-full rounded object-cover"
    >
    <h3
      class="line-clamp-2 mt-1 min-h-9 text-center text-sm font-medium lg:text-base group-hover:underline group-hover:underline-offset-4"
    >
      {{ props.book.name }}
    </h3>
  </a>
</template>
