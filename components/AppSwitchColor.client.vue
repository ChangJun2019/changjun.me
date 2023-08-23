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

watch(tabs, (val) => {
  colorMode.preference = items[val].label
})
</script>

<template>
  <div class="w-full">
    <UTabs v-model="tabs" :items="items">
      <template #default="{ item }">
        <div class="relative flex items-center gap-2 truncate">
          <UIcon :name="item.icon" class="h-4 w-4 flex-shrink-0" />
        </div>
      </template>
    </UTabs>
  </div>
</template>
