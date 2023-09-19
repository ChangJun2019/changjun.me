<script setup lang="ts">
const props = defineProps<{
  title: string
  cover: string
}>()
</script>

<template>
  <article class="group">
    <img
      alt="Lava"
      :src="props.cover"
      class="h-56 w-full rounded-xl object-cover shadow-xl transition hover:scale-105"
    >

    <div class="p-4">
      <a href="#">
        <h3 class="text-center font-medium lg:text-lg">
          {{ props.title }}
        </h3>
      </a>
    </div>
  </article>
</template>
