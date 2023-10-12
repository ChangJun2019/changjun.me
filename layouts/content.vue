<script lang="ts" setup></script>

<template>
  <AppLayout>
    <main class="container mx-auto max-w-prose px-6 py-4 lg:py-8 lg:px-0">
      <PostHeader />
      <main class="prose prose-slate dark:prose-invert tracking-wide">
        <slot />
      </main>
      <Footer />
    </main>
  </AppLayout>
</template>

<style scoped></style>
