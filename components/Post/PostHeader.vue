<script setup lang="ts">
const { page } = useContent()
const { image, title, tag, date } = unref(page)
const d = computed(() => {
  return useDayjs(date).format('YYYY年M月D日')
})
</script>

<template>
  <header class="w-full">
    <div class="flex items-center justify-center rounded-xl overflow-hidden c-bg-muted">
      <img :src="image.src" alt="" class="w-full h-auto max-h-80 md:max-h-120 dark:brightness-80 object-cover">
    </div>
    <div class="text-sm text-primary/60 mt-4">
      {{ tag }}
    </div>
    <div class="text-secondary text-sm mt-1 opacity-70 tracking-wide">
      {{ d }}
    </div>
    <h1 class="text-3xl xl:text-4xl leading-tight font-extrabold tracking-wide mt-4">
      {{ title }}
    </h1>
  </header>
</template>
