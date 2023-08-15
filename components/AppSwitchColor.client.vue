<script lang="ts" setup>
const tabs = ref(0)
const items = [{
  label: 'system',
  icon: 'i-heroicons-computer-desktop',
}, {
  label: 'light',
  icon: 'i-heroicons-sun',
}, {
  label: 'dark',
  icon: 'i-heroicons-moon',
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

<style scoped></style>
