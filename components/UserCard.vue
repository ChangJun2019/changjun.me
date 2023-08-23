<script setup lang="ts">
const userLinks = [
  {
    icon: 'i-cib-twitter',
  },
  {
    icon: 'i-cib-sina-weibo',
  },
]
</script>

<template>
  <div class="max-w-xs flex transform cursor-pointer items-center gap-6 rounded-xl p-3">
    <img class="aspect-square h-26 w-26 rounded-full object-cover" src="https://file.52chinaweb.com/user/avatar.jpeg" alt="avatar">

    <div class="flex flex-col">
      <h1 class="mt-4 text-2xl font-semibold capitalize">
        Chang Jun
      </h1>

      <p class="mt-2 c-text-muted text-sm capitalize">
        柔软的心
      </p>

      <div class="mt-3 flex -mx-2">
        <div v-for="(nav, index) in userLinks" :key="index" class="focus:outline-nones box-border cursor-pointer rounded-lg p-1.5 text-sm transition-colors duration-200 hover:bg-zinc-100 dark:hover:bg-zinc-800">
          <span class="block" :class="nav.icon" />
        </div>
      </div>
    </div>
  </div>
</template>
