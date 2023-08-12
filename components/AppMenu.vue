<script setup lang="ts">
const { asidebar } = useAppConfig()
const isOpen = ref(false)
</script>

<template>
  <nav class="sticky top-0 left-0 border-b border-base bg-base z-1 w-full sm:hidden">
    <div class="px-6 py-4 mx-auto flex justify-between items-center">
      <div class="w-full flex items-center justify-between">
        <a href="/">
          <img class="w-6 h-6" :src="asidebar.logo" alt="">
        </a>
        <div class="flex">
          <UButton icon="i-heroicons-bars-3" size="sm" color="primary" square variant="ghost" @click="isOpen = true" />
        </div>
      </div>
    </div>
    <USlideover v-model="isOpen" prevent-close>
      <UCard class="flex flex-col flex-1" :ui="{ body: { base: 'flex-1' }, ring: '' }">
        <template #header>
          <div class="flex items-center justify-between">
            <img class="w-6 h-6" :src="asidebar.logo" alt="">
            <UButton color="gray" variant="ghost" icon="i-heroicons-x-mark-20-solid" class="-my-1" @click="isOpen = false" />
          </div>
        </template>
        <div class="w-full flex flex-col justify-between flex-1 mt-6">
          <nav class="-mx-3 space-y-6 ">
            <div v-for="(nav, index) in asidebar.nav" :key="index" class="space-y-3">
              <label class="px-3 text-lg font-semibold">{{ nav.label }}</label>
              <a v-for="item in nav.list" :key="item.route" class="text-base font-medium flex items-center px-3 py-2  transition-colors duration-300 transform rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800" href="#">
                <span class="w-5 h-5 rounded" :class="`${item.icon}`" />
                <span class="mx-2">{{ item.name }}</span>
              </a>
            </div>
          </nav>
        </div>
      </UCard>
    </USlideover>
  </nav>
</template>
