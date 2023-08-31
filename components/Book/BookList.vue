<script setup lang="ts">
const { body: books } = await queryContent('books').where({ title: 'Book' }).only(['body']).findOne()
</script>

<template>
  <div class="grid grid-cols-3 mt-8 gap-6 2xl:grid-cols-8 md:grid-cols-5 xl:grid-cols-6">
    <BookItem v-for="book in books" :key="book.isbn" :book="book" />
  </div>
</template>
