<script setup lang="ts">
</script>

<template>
  <AppLayout>
    <main class="mx-auto w-full bg-base px-6 py-4 sm:container lg:px-34 sm:px-8">
      <div class="gap-12 xl:flex">
        <div class="w-prose">
          <AppNav />
          <slot />
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
