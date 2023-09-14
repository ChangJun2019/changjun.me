<script setup lang="ts">
const props = defineProps<{
  date: string
  title: string
  cover: string
}>()

const time = computed(() => {
  return useDateFormat(props.date, 'YYYY-DD-MM')
})
</script>

<template>
  <article class="cursor-pointer overflow-hidden border border-base rounded-lg shadow-sm transition dark:shadow-dark hover:shadow-lg">
    <img
      alt="Office"
      :src="props.cover"
      class="aspect-auto h-56 w-full object-center transition duration-500 hover:scale-105"
    >

    <div class="bg-base p-4 sm:p-6">
      <div class="text-xs">
        {{ time }}
      </div>

      <h3 class="mt-0.5 text-lg font-semibold">
        {{ props.title }}
      </h3>
    </div>
  </article>
</template>
