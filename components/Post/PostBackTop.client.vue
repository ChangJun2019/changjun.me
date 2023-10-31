<script setup lang="ts">
import { useWindowScroll } from '@vueuse/core'

const show = computed(() => {
  const { y } = useWindowScroll()
  return y.value >= 300
})

function goTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  })
}
</script>

<template>
  <div :class="show ? 'opacity-90' : 'opacity-0'" class="fixed bottom-4 right-6 transition-all duration-400 ease-in-out" @click.stop="goTop()">
    <button type="button" class="text-primary-500 focus-visible:ring-primary-500 focus:outline-nones dark:text-primary-400 dark:focus-visible:ring-primary-400 inline-flex flex-shrink-0 items-center gap-x-1.5 rounded-md p-1.5 text-sm font-medium hover:bg-zinc-100 focus-visible:outline-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-inset dark:disabled:bg-transparent dark:hover:bg-zinc-800">
      <span class="i-heroicons-arrow-up-circle h-5 w-5 flex-shrink-0" aria-hidden="true" />
    </button>
  </div>
</template>
