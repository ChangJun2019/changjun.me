<script setup lang="ts">
import dayjs from 'dayjs'

const nowYear = dayjs().year()
</script>

<template>
  <footer class="mt-4 text-center font-sans">
    <p>
      <a class="hover:text-green-500 hover:underline" href="https://creativecommons.org/licenses/by-nc/4.0/">CC BY-NC 4.0</a>
    </p>
    <p mt-2>
      © 2023 Chang Jun. All Rights Reserved.
    </p>
    <p mt-2>
      <a class=" hover:text-green-500 hover:underline" href="https://beian.miit.gov.cn/">晋ICP备19013203号</a>
    </p>
  </footer>
</template>
