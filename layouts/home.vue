<script setup lang="ts">
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
