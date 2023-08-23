<script setup lang="ts">
</script>

<template>
  <AppLayout>
    <main class="mx-auto w-full bg-base px-6 py-4 sm:container lg:px-10 sm:px-8 lg:pl-66 sm:pl-24">
      <div class="justify-between gap-6 xl:flex">
        <div class="max-w-prose">
          <slot />
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
