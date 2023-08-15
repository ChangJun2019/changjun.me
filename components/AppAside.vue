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
  <aside class="left-0 top-0 hidden sm:fixed sm:block lg:w-64 md:h-screen sm:w-16">
    <!-- full side -->
    <div class="hidden h-screen w-full flex-col overflow-y-auto border-r border-base bg-base px-5 py-8 text-base transition duration-300 ease-linear lg:flex">
      <img class="h-12 w-12" :src="asidebar.logo" alt="">
      <div class="mt-6 flex flex-1 flex-col justify-between">
        <nav class="-mx-3 space-y-6">
          <div v-for="(nav, index) in asidebar.nav" :key="index" class="space-y-3">
            <label class="px-3 text-lg font-semibold">{{ nav.label }}</label>
            <a v-for="item in nav.list" :key="item.route" class="flex transform items-center rounded-lg px-3 py-2 font-medium text-base transition-colors duration-300 hover:bg-zinc-100 dark:hover:bg-zinc-800" href="#">
              <span class="h-5 w-5 rounded" :class="`${item.icon}`" />
              <span class="mx-2">{{ item.name }}</span>
            </a>
          </div>
        </nav>
      </div>9
    </div>

    <!-- simple side -->
    <div class="hidden h-screen w-16 flex-col items-center overflow-y-auto border-r border-base bg-base py-8 lg:hidden sm:flex">
      <nav class="w-full flex flex-1 flex-col items-center space-y-6">
        <img class="h-6 w-6" :src="asidebar.logo" alt="">

        <div v-for="(nav, index) in navList" :key="index" class="focus:outline-nones box-border cursor-pointer rounded-lg p-1.5 text-lg transition-colors duration-200 hover:bg-zinc-100 dark:hover:bg-zinc-800">
          <span class="block" :class="nav.icon" />
        </div>
      </nav>
    </div>
  </aside>
</template>
