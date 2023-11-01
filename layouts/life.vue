<script setup lang="ts">
const appConfig = useRuntimeConfig()
const head = {
  title: '关于我的读书、游戏和观影',
  description: '记录和分享我的读书、游戏、和观影，数据由 Directus 管理',
  image: 'https://52chinaweb.com/images/blog-share-card.png',
}

const { title, description, image } = head

useSeoMeta({
  author: 'Jun',
  title,
  ogTitle: title,
  ogType: 'website',
  ogUrl: appConfig.public.siteUrl,
  description,
  ogDescription: description,
  ogImage: image,
  twitterImage: image,
  twitterTitle: title,
  twitterDescription: description,
  twitterCard: 'summary_large_image',
})
</script>

<template>
  <AppLayout>
    <main class="mx-auto w-full bg-base px-6 py-4 sm:container lg:px-34 sm:px-8">
      <div class="gap-12 xl:flex">
        <div class="max-w-prose">
          <AppNav />
          <main class="tracking-wide prose prose-slate dark:prose-invert">
            <slot />
          </main>
        </div>
        <div class="mt-4 xl:mt-20 xl:w-full">
          <BookList />
          <VideoList />
          <GameList />
        </div>
      </div>
      <Footer />
    </main>
  </AppLayout>
</template>
