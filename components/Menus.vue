<script setup lang="ts">
</script>

<template>
  <div class="menus-container text-center m-auto text-left mb-3">
    <article class="flex justify-between border rounded-md p-3 mt-2">
      <router-link class="nav-icon-btn" to="/" title="posts">
        <Icon name="carbon:blog" />
      </router-link>
      <a class="nav-icon-btn" href="https://weibo.com/u/5484931522" target="_blank" title="微博">
        <Icon name="ri:weibo-fill" />
      </a>
      <a class="nav-icon-btn" href="https://twitter.com/52chinaweb" target="_blank" title="推特">
        <Icon name="mdi:twitter" />
      </a>
      <a class="nav-icon-btn" href="https://cj-listify.52chinaweb.com" target="_blank" title="微博">
        <Icon name="majesticons:clipboard-list-line" />
      </a>
      <a class="nav-icon-btn" href="https://52chinaweb.com/feed.xml" target="_blank" title="RSS">
        <Icon name="material-symbols:rss-feed-rounded" />
      </a>
      <!-- <button class="nav-icon-btn">
        <ToggleTheme />
      </button> -->
    </article>
  </div>
</template>

<style scoped>
</style>
