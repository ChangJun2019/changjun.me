<script setup lang="ts">
const contentQuery = await queryContent('posts').find()
</script>

<template>
  <div class="m-auto mb-3 text-left">
    <article class="mt-2 flex flex-col border rounded-md p-3">
      <NuxtLink v-for="(link, index) of contentQuery" :key="link._path" :to="link._path">
        <p class="h-9 leading-9 hover:font-extrabold hover:text-primary">
          {{ index + 1 }}. {{ link.title }}
        </p>
      </NuxtLink>
    </article>
  </div>
</template>
