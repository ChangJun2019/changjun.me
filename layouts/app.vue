<script lang="ts" setup></script>

<template>
  <div class="w-full flex flex-col md:flex-row">
    <div class="w-full h-4 md:h-screen md:w-64 sticky top-0 left-0">
      <AppAside />
    </div>
    <main class="w-full bg-base w-prose mx-auto py-4">
      <slot />
    </main>
  </div>
</template>

<style scoped></style>
