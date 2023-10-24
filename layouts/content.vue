<script lang="ts" setup></script>

<template>
  <AppLayout>
    <main class="mx-auto max-w-prose px-6 py-4 container lg:px-0 lg:py-8">
      <PostHeader />
      <main class="tracking-wide prose prose-slate dark:prose-invert">
        <slot />

        <UButton to="/blog" variant="outline" class="not-prose mt-6">
          Go Back
        </UButton>

        <p class="c-text-muted">
          🌟 如果觉着这篇内容对你有所帮助，可以去 <a href="/sponsors" target="_blank">投喂</a> 旺仔和 Max 一点零食（🍗🥩），他们一定会很开心的。
        </p>
      </main>
      <Footer />
      <PostBackTop />
    </main>
  </AppLayout>
</template>

<style scoped></style>
