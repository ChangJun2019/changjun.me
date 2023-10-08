<script setup lang="ts">
const platform = defineProp<'Switch' | 'PS5'>('platform', { required: true })
const PLATFORM_DATA = {
  Switch: {
    class: 'bg-Switch',
    icon: 'i-ri-switch-fill',
  },
  PS5: {
    class: 'bg-PS5',
    icon: 'i-ri-playstation-fill',
  },
}
const d = computed(() => {
  return PLATFORM_DATA[platform.value]
})
</script>

<template>
  <div :class="d.class" class="inline-flex items-center justify-center text-xs font-semibold  px-1 py-0.5 rounded-sm">
    <span :class="d.icon" class="mr-1" />
    <span>{{ platform }}</span>
  </div>
</template>
