<script setup lang="ts">
const appConfig = useAppConfig()
</script>

<template>
  <div class="w-full my-4">
    <div class="w-full flex items-center space-x-8">
      <ULink v-for="item in appConfig.appNav" :key="item.link" :to="item.link" active-class="c-text-base font-semibold" inactive-class="c-text-muted" class="flex cursor-pointer lg:text-lg items-center font-medium  hover:c-text-base transition duration-300">
        {{ item.label }}
      </ULink>
    </div>
  </div>
</template>
