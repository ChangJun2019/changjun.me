<script setup lang="ts">
import type { PageType } from '@/types/app'

const pageType = defineProp<PageType>('type', { default: 'blog', required: true })
</script>

<template>
  <div class="items-center lg:flex">
    <div class="w-full lg:w-1/2">
      <AppNav />
      <div class="mt-8 prose lg:max-w-prose">
        <h1 class="c-text-base">
          What do I want to write
        </h1>
        <p class="mt-3 text-secondary">
          技术、生活、读书、我的思考……
        </p>
      </div>
    </div>

    <div class="mt-6 w-full flex items-center justify-center lg:mt-0 lg:w-1/2">
      <LayoutSvg :type="pageType" />
    </div>
  </div>
</template>
