<script lang="ts" setup>
const tabs = ref(0)
const items = [{
  label: 'system',
  icon: 'i-ri-mac-line',
}, {
  label: 'light',
  icon: 'i-ri-sun-line',
}, {
  label: 'dark',
  icon: 'i-ri-moon-line',
}]

const colorMode = useColorMode()

onMounted(() => {
  const preference = colorMode.preference
  const index = items.findIndex(item => item.label === preference)
  if (index > -1)
    tabs.value = index
})

watch(tabs, (val) => {
  colorMode.preference = items[val].label
})

function handleSwitch(index: number) {
  tabs.value = index
}
</script>

<template>
  <div class="w-full">
    <div class="relative inline-grid grid-cols-3 h-10 w-full items-center rounded-lg c-bg-muted p-1">
      <div
        v-for="(item, index) in items" :key="index"
        :class="tabs === index ? 'bg-base' : ''"
        class="relative h-8 w-full inline-flex flex-shrink-0 cursor-pointer items-center justify-center gap-2 truncate whitespace-nowrap rounded-md px-3 text-sm font-medium transition-colors duration-200 ease-out"
        @click="handleSwitch(index)"
      >
        <span class="h-4 w-4 flex-shrink-0" :class="item.icon" />
      </div>
    </div>
  </div>
</template>
