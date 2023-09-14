<script setup lang="ts">
const postsList = await queryContent('posts').find()
</script>

<template>
  <div class="grid mt-8 gap-4 2xl:grid-cols-4 sm:grid-cols-2">
    <PostItem v-for="post in postsList" :key="post._id" :title="post.title!" :cover="post.cover" :date="post.date" />
  </div>
</template>
