<script setup lang="ts">
</script>

<template>
  <div class="w-full">
    <Head>
      <Html lang="zh-Hans" />
      <Title>Chang Jun' Blog</Title>
      <Meta name="author" content="ChangJun" />
      <Meta name="description" content="ChangJun\'s Blog" />
      <Meta name="og:title" content="ChangJun\'s Blog" />
      <Meta name="og:type" content="website" />
      <Meta name="og:url" content="https://52chinaweb.com/" />
      <Link rel="apple-touch-icon" sizes="180x180" href="/blog-apple-touch-icon.png" />
      <Link rel="icon" type="image/png" sizes="32x32" href="/blog-favicon-32x32.png" />
      <Link rel="icon" type="image/png" sizes="16x16" href="/blog-favicon-16x16.png" />
      <Link rel="icon" type="image/x-icon" href="/favicon.ico" />
    </Head>
    <slot />
  </div>
</template>
