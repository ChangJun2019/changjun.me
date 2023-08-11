<script setup lang="ts">
// aside 组件接受一个参数用于控制是缩小模式还是大模式
const { asidebar } = useAppConfig()
</script>

<template>
  <aside class="flex flex-col w-full h-screen px-5 py-8 overflow-y-auto bg-base text-base border-r border-base">
    <a href="#">
      <img class="w-12 h-12" :src="asidebar.logo" alt="">
    </a>

    <div class="flex flex-col justify-between flex-1 mt-6">
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
  </aside>
</template>
