<script setup lang="ts">
</script>

<template>
  <div>
    <NuxtLayout>
      <div class="blog-page flex flex-col">
        <LayoutBanner type="blog" />
        <AppHorizontal />
        <PostList />
      </div>
    </NuxtLayout>
  </div>
</template>
