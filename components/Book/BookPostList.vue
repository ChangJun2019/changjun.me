<script setup lang="ts">
const books = await queryContent('books').only(['title', 'cover', '_id']).find()
</script>

<template>
  <div class="grid mt-8 gap-4 2xl:grid-cols-3 sm:grid-cols-2">
    <BookPostItem v-for="book in books" :key="book._id" :title="book.title!" :cover="book.cover" />
  </div>
</template>
