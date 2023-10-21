<script setup lang="ts">
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
