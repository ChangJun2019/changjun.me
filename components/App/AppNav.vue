<script setup lang="ts">
const appConfig = useAppConfig()
const route = useRoute()
const appNav = computed(() => {
  if (route.meta.layout === 'life') {
    return appConfig.appNav.filter((item) => {
      return !['Book', 'Video', 'Game'].includes(item.label)
    })
  }
  return appConfig.appNav
})
</script>

<template>
  <div class="my-4 w-full">
    <div class="w-full flex items-center space-x-8">
      <NuxtLink
        v-for="item in appNav"
        :key="item.link"
        :to="item.link"
        class="flex cursor-pointer items-center hover:c-text-base transition duration-300 lg:text-lg"
        :class="route.path === item.link ? 'c-text-base font-semibold' : 'c-text-muted font-medium'"
      >
        {{ item.label }}
      </NuxtLink>
    </div>
  </div>
</template>
