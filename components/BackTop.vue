<script setup lang="ts">
import { useBackTop } from '@/composables/backTop'

const { showBtn, handleBackTop } = useBackTop()
</script>

<template>
  <div v-show="showBtn" class="fixed cursor-pointer z-1 hover:text-blue-500 bottom-8 right-4 border border-1 rounded-md p-2 text-lg leading-4 bg-gray-50 dark:bg-gray-900" @click="handleBackTop">
    <Icon name="mdi:rocket" />
  </div>
</template>

<style scoped>
</style>
