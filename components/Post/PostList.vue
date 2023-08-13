<script setup lang="ts">
</script>

<template>
  <div class="grid gap-4 mt-8 sm:grid-cols-2 2xl:grid-cols-4">
    <PostItem v-for="x in 8" :key="x" />
  </div>
</template>
