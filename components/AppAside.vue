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
  <aside class="w-full h-4 md:h-screen lg:w-64 sticky top-0 left-0 md:w-16">
    <!-- full side -->
    <div class="lg:flex hidden  flex-col w-full h-screen px-5 py-8 overflow-y-auto bg-base text-base border-r border-base transition duration-300 ease-linear">
      <img class="w-12 h-12" :src="asidebar.logo" alt="">
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
    </div>

    <!-- simple side -->
    <div class="flex-col items-center w-16 h-screen py-8 overflow-y-auto bg-base border-base border-r hidden md:flex lg:hidden">
      <nav class="w-full flex flex-col items-center flex-1 space-y-6">
        <img class="w-6 h-6" :src="asidebar.logo" alt="">

        <div v-for="(nav, index) in navList" :key="index" class="p-1.5 box-border text-lg cursor-pointer focus:outline-nones transition-colors duration-200 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800">
          <span class="block" :class="nav.icon" />
        </div>
      </nav>
    </div>
  </aside>
</template>
