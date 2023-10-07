<script setup lang="ts">
const { asidebar } = useAppConfig()
const isOpen = ref(false)

const us = {
  width: 'w-48',
  base: 'relative flex flex-col focus:outline-none',
}

const uc = { body: { padding: '' }, ring: '' }
</script>

<template>
  <UButton class="fixed top-6 right-6" icon="i-heroicons-bars-3" size="xs" color="primary" variant="solid" @click="isOpen = true" />

  <USlideover v-model="isOpen" :ui="us">
    <UCard :ui="uc">
      <AppAside />
    </UCard>
  </USlideover>
</template>
