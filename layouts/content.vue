<script lang="ts" setup></script>

<template>
  <AppLayout>
    <main class="container mx-auto max-w-prose px-6 py-4 lg:py-8 lg:px-0">
      <PostHeader />
      <main class="prose prose-slate dark:prose-invert tracking-wide">
        <slot />

        <UButton to="/blog" variant="outline" class="mt-6 not-prose">
          Go Back
        </UButton>

        <p class="c-text-muted">
          🌟 如果觉着这篇内容对你有所帮助，可以去 <a href="/sponsors" target="_blank">投喂</a> 旺仔和 Max 一点好吃（🍗🥩）的，他们一定会很开心的。
        </p>
      </main>
      <Footer />
      <PostBackTop />
    </main>
  </AppLayout>
</template>

<style scoped></style>
