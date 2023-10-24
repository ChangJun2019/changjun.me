<script setup lang="ts">
const { page } = useContent()
const { image, title, tag, date } = unref(page)
const dayjs = useDayjs()
const d = computed(() => {
  return dayjs(date).format('YYYY 年 M 月 D 日')
})
</script>

<template>
  <header class="w-full">
    <div class="flex items-center justify-center overflow-hidden rounded-xl c-bg-muted">
      <img :src="image.src" alt="" class="h-auto max-h-80 w-full object-cover md:max-h-120 dark:brightness-80">
    </div>
    <div class="mt-4 text-sm text-primary/60">
      {{ tag }}
    </div>
    <div class="mt-1 text-sm tracking-wide text-secondary opacity-70">
      {{ d }}
    </div>
    <h1 class="mt-4 text-3xl font-extrabold leading-tight tracking-wide xl:text-4xl">
      {{ title }}
    </h1>
  </header>
</template>
