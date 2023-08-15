<script setup lang="ts">
import type { PageType } from '@/types/app'

const pageType = defineProp<PageType>('type', { default: 'blog', required: true })
</script>

<template>
  <div class="items-center lg:flex">
    <div class="w-full lg:w-1/2">
      <div class="lg:max-w-lg">
        <h1 class="text-3xl font-semibold lg:text-4xl">
          What did I write
        </h1>
        <p class="mt-3 text-secondary">
          小时候的梦想是成为一名作家，因为他们总是会能表达你想象之外。长大后，越来越不敢表达，因为顾虑太多，所以更缄默。这是一个认识自己的过程，我想试试看能不能写一个新的「我」。
        </p>
      </div>
    </div>

    <div class="mt-6 w-full flex items-center justify-center lg:mt-0 lg:w-1/2">
      <LayoutSvg :type="pageType" />
    </div>
  </div>
</template>
