<script setup lang="ts">
import dayjs from 'dayjs'

const contentQuery = await (await queryContent('posts').find()).sort((a, b) => {
  return dayjs(b.date).valueOf() - dayjs(a.date).valueOf()
})
</script>

<template>
  <div class="m-auto text-left mb-3">
    <article class="flex flex-col border rounded-md p-3 mt-2">
      <NuxtLink v-for="(link, index) of contentQuery" :key="link._path" :to="link._path">
        <p class="font-sans h-9 leading-9 hover:text-green-500 hover:font-bold">
          {{ index + 1 }}. {{ link.title }}
        </p>
      </NuxtLink>
    </article>
  </div>
</template>
