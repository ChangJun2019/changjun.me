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
      <ULink v-for="item in appNav" :key="item.link" :to="item.link" active-class="c-text-base font-semibold" inactive-class="c-text-muted" class="flex cursor-pointer items-center font-medium hover:c-text-base transition duration-300 lg:text-lg">
        {{ item.label }}
      </ULink>
    </div>
  </div>
</template>
