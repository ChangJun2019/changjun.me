<script setup lang="ts">
import type { Game } from '@/types/life'

const { getItems } = useDirectusItems()
const {
  data: games,
} = await useAsyncData<Game[]>('Games', () =>
  getItems({
    collection: 'Games',
  }))
</script>

<template>
  <section>
    <h3 id="Game" class="c-text-muted text-lg font-semibold my-4">
      游戏
    </h3>
    <div class="w-full grid gap-8 sm:grid-cols-2">
      <div
        v-for="game in games"
        :key="game.id"
        class="overflow-hidden rounded-lg border c-border-base bg-base shadow-sm"
      >
        <img
          :alt="game.name"
          :src="game.cover"
          class="h-46 w-full object-cover dark:opacity-90"
        >

        <div class="p-4 sm:px-6 sm:py-4">
          <h3 class="c-text-base font-semibold line-clamp-2 min-h-12">
            {{ game.name }}
          </h3>

          <p class="mt-2 line-clamp-3 text-sm/relaxed c-text-muted">
            {{ game.comment }}
          </p>
        </div>
        <div class="flex sm:px-6 sm:pb-4 space-x-4">
          <GameBadge :platform="game.platform" />
          <div v-if="game.duration" class="inline-flex items-center justify-center text-xs c-bg-primary c-text-primary font-semibold px-1 py-0.5 rounded-sm">
            {{ game.duration }}
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
