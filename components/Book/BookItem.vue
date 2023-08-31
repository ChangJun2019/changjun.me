<script setup lang="ts">
import type { Book } from '@/types/book'

const props = defineProps<{
  book: Book
}>()
</script>

<template>
  <a href="#" class="group block">
    <img
      :src="props.book.cover"
      alt=""
      class="aspect-auto w-full rounded object-cover"
    >

    <div class="mt-3">
      <h3
        class="text-center text-sm font-medium lg:text-base group-hover:underline group-hover:underline-offset-4"
      >
        {{ props.book.name }}
      </h3>
    </div>
  </a>
</template>
