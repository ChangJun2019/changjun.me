<script setup lang="ts">
const { asidebar } = useAppConfig()
const isOpen = ref(false)
</script>

<template>
  <nav class="sticky left-0 top-0 z-1 w-full border-b border-base bg-base sm:hidden">
    <div class="mx-auto flex items-center justify-between px-6 py-4">
      <div class="w-full flex items-center justify-between">
        <a href="/">
          <img class="h-6 w-6" :src="asidebar.logo" alt="">
        </a>
        <div class="flex">
          <UButton icon="i-heroicons-bars-3" size="sm" color="primary" square variant="solid" @click="isOpen = true" />
        </div>
      </div>
    </div>
    <USlideover v-model="isOpen" prevent-close>
      <UCard class="flex flex-1 flex-col" :ui="{ body: { base: 'flex-1' }, ring: '' }">
        <template #header>
          <div class="flex items-center justify-between">
            <img class="h-6 w-6" :src="asidebar.logo" alt="">
            <UButton color="primary" variant="ghost" icon="i-heroicons-x-mark-20-solid" class="-my-1" @click="isOpen = false" />
          </div>
        </template>
        <div class="mt-6 w-full flex flex-1 flex-col justify-between">
          <nav class="mb-6 -mx-3 space-y-6">
            <div v-for="(nav, index) in asidebar.nav" :key="index" class="space-y-3">
              <label class="px-3 text-lg font-semibold">{{ nav.label }}</label>
              <NuxtLink v-for="item in nav.list" :key="item.route" :to="item.route" class="flex transform items-center rounded-lg px-3 py-2 font-medium text-base transition-colors duration-300 hover:bg-zinc-100 dark:hover:bg-zinc-800">
                <span class="h-5 w-5 rounded" :class="`${item.icon}`" />
                <span class="mx-2">{{ item.name }}</span>
              </NuxtLink>
            </div>
          </nav>
          <AppSwitchColor />
        </div>
      </UCard>
    </USlideover>
  </nav>
</template>
