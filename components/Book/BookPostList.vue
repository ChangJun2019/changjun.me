<script setup lang="ts">
</script>

<template>
  <div class="grid gap-4 mt-8 sm:grid-cols-2 2xl:grid-cols-3">
    <BookPostItem v-for="x in 1" :key="x" />
  </div>
</template>
