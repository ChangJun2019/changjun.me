<script setup lang="ts">
const appConfig = useRuntimeConfig()
const head = {
  title: 'ChangJun\'s Blog',
  description: 'This is my personal website where I document and share my learning, technology, life, and personal reflections.',
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
      <div class="justify-between gap-6 xl:flex">
        <div class="max-w-prose">
          <AppNav />
          <main class="tracking-wide prose prose-slate dark:prose-invert">
            <slot />
          </main>
          <UserCard />
        </div>
        <div class="mt-2 max-w-lg xl:mt-8 xl:w-1/2">
          <HomeGallery />
        </div>
      </div>
      <Footer />
    </main>
  </AppLayout>
</template>
