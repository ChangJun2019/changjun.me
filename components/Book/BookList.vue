<script setup lang="ts">
</script>

<template>
  <div class="grid gap-6 mt-8 grid-cols-3 md:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-8">
    <BookItem v-for="x in 8" :key="x"/>
  </div>
</template>
