<script lang="ts" setup>
const { page } = useContent()
const appConfig = useRuntimeConfig()
const { title, description, image, _path } = page.value
const host = appConfig.public.siteUrl
const path = host + _path
const img = host + image.src
useSeoMeta({
  title,
  ogTitle: title,
  ogUrl: path,
  description,
  ogDescription: description,
  ogImage: img,
  twitterImage: img,
  twitterTitle: title,
  twitterDescription: description,
  twitterCard: 'summary_large_image',
})
</script>

<template>
  <AppLayout>
    <main class="mx-auto max-w-prose px-6 py-4 container lg:px-0 lg:py-8">
      <PostHeader />
      <main class="tracking-wide prose prose-slate dark:prose-invert">
        <slot />

        <a class="not-prose mt-6 inline-flex" href="/blog">
          <button class="border-input inline-flex items-center justify-center whitespace-nowrap border c-border-base rounded bg-base px-4 py-2 text-sm font-medium text-primary transition-colors hover:bg-primary/40" xt-marked="ok">Go Back</button>
        </a>

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
