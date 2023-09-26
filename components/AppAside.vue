<script setup lang="ts">
const { asidebar } = useAppConfig()
const navList = computed(() => {
  let r = [] as any
  asidebar.nav.forEach((item) => {
    r = r.concat(item.list)
  })
  return r
})
</script>

<template>
  <aside class="w-full">
    <!-- full side -->
    <div class="h-screen w-full flex-col overflow-y-auto bg-base px-5 py-8 text-base transition duration-300 ease-linear flex">
      <img class="h-12 w-12 animate-fade-in-left" :src="asidebar.logo" alt="">
      <div class="mt-4 flex flex-1 flex-col justify-between">
        <nav class="-mx-3 space-y-2">
          <div v-for="(nav, index) in asidebar.nav" :key="index" class="space-y-2">
            <label class="px-3 text-lg font-semibold">{{ nav.label }}</label>
            <NuxtLink :to="item.route" v-for="item in nav.list" :key="item.route" class="group flex transform items-center rounded-lg px-3 py-2 font-medium transition-colors duration-300 hover:bg-zinc-100 dark:hover:bg-zinc-800">
              <span class="h-5 w-5 rounded group-hover:animate-tada" :class="`${item.icon}`" />
              <span class="mx-2">{{ item.name }}</span>
            </NuxtLink>
          </div> 
        </nav>
      </div>

      <AppSwitchColor />
    </div>
  </aside>
</template>
