<script setup lang="ts">
const platform = defineProp<string>('platform', { required: true })
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
  return PLATFORM_DATA[platform.value as keyof typeof PLATFORM_DATA]
})
</script>

<template>
  <div :class="d.class" class="inline-flex items-center justify-center rounded-sm px-1 py-0.5 text-xs font-semibold">
    <span :class="d.icon" class="mr-1" />
    <span>{{ platform }}</span>
  </div>
</template>
