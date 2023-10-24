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
    <UButton icon="i-heroicons-arrow-up-circle" variant="ghost" />
  </div>
</template>
