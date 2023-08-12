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
            <h3 class="text-base font-semibold leading-6">
              Slideover
            </h3>
            <UButton color="gray" variant="ghost" icon="i-heroicons-x-mark-20-solid" class="-my-1" @click="isOpen = false" />
          </div>
        </template>
      </UCard>
  </USlideover>
 </nav>

</template>
