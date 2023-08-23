<script setup lang="ts">
</script>

<template>
  <section class="mt-2">
    <h2 class="text-2xl font-semibold uppercase lg:text-3xl">
      电视剧
    </h2>
    <div class="grid grid-cols-3 mt-8 gap-4 2xl:grid-cols-7 lg:grid-cols-5 md:grid-cols-4 xl:grid-cols-6">
      <VideoItem v-for="x in 8" :key="x" />
    </div>
  </section>
</template>
