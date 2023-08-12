<script setup lang="ts">
const { asidebar } = useAppConfig()
</script>

<template>

 <nav class="sticky top-0 left-0 border-b border-base bg-base z-1001 w-full sm:hidden">
  <div class="px-6 py-4 mx-auto flex justify-between items-center">
    <div class="w-full flex items-center justify-between">
      <a href="/">
        <img class="w-6 h-6" :src="asidebar.logo" alt="">
      </a>
      <div class="flex">
        <UButton icon="i-heroicons-bars-3" size="sm" color="primary" square variant="ghost" />
      </div>
    </div>
  </div>
 </nav>

</template>
