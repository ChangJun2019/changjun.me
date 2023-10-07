<script setup lang="ts">
</script>

<template>
  <div class="blog-page flex flex-col px-8">
    <LayoutBanner type="blog" />

    <h2 class="text-2xl lg:text-3xl font-semibold uppercase">
      Reading record
    </h2>
    <BookPostList />

    <AppHorizontal />
    <BookList />
  </div>
</template>
