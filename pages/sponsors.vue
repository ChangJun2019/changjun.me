<script setup lang="ts">
definePageMeta({
  documentDriven: false,
  layout: 'empty',
})
</script>

<template>
  <div>
    <NuxtLayout>
      <section>
        <div class="mx-auto px-6 py-8 container">
          <div class="lg:item-center lg:flex lg:space-x-16">
            <div class="flex flex-col tracking-wide prose prose-slate lg:w-1/2 dark:prose-invert">
              <p>🌟 如果觉得这些内容对你有帮助，可以投喂旺仔和 Max 一点零食。 🍗🥩</p>
              <img class="rounded-lg" src="/images/0-sponsors.png" alt="Alipay and Wechat collection codes">
            </div>
            <div class="mt-8 lg:mt-0 lg:w-1/2">
              <div class="grid grid-cols-2 gap-4">
                <div class="grid gap-4">
                  <div>
                    <img class="h-auto max-w-full animate-fade-in rounded-lg" src="/images/sponsors-1.jpg" alt="" loading="lazy">
                  </div>
                  <div>
                    <img class="h-auto max-w-full animate-fade-in rounded-lg" src="/images/sponsors-3.jpg" alt="" loading="lazy">
                  </div>
                  <div>
                    <img class="h-auto max-w-full animate-fade-in rounded-lg" src="/images/sponsors-5.jpg" alt="" loading="lazy">
                  </div>
                </div>
                <div class="grid gap-4">
                  <div>
                    <img class="h-auto max-w-full animate-fade-in rounded-lg" src="/images/sponsors-2.jpg" alt="" loading="lazy">
                  </div>
                  <div>
                    <img class="h-auto max-w-full animate-fade-in rounded-lg" src="/images/sponsors-6.jpg" alt="" loading="lazy">
                  </div>
                  <div>
                    <img class="h-auto max-w-full animate-fade-in rounded-lg" src="/images/sponsors-4.jpg" alt="" loading="lazy">
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </NuxtLayout>
  </div>
</template>
