<script setup lang="ts">
</script>

<template>
  <div class="grid mt-8 gap-4 2xl:grid-cols-3 md:grid-cols-2">
    <GameItem v-for="x in 3" :key="x" />
  </div>
</template>
