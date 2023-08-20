<script setup lang="ts">
const { navigation, page, surround, globals, toc } = useContent()

const { title, date, duration, cover } = unref(page)
</script>

<template>
  <header class="w-full">
    <img :src="cover" alt="" class="h-auto w-full rounded-md object-cover">
    <h1 class="my-8 text-5xl font-semibold">
      {{ title }}
    </h1>
  </header>
</template>
