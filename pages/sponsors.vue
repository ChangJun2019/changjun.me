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
        <div class="container px-6 py-8 mx-auto">
          <div class="lg:flex lg:space-x-16 lg:item-center">
            <div class="lg:w-1/2 flex flex-col prose prose-slate dark:prose-invert tracking-wide">
              <p>🌟 如果觉得这些内容对你有帮助，可以投喂旺仔和 Max 一点零食。 🍗🥩</p>
              <img class="rounded-lg" src="/images/0-sponsors.png" alt="Alipay and Wechat collection codes">
            </div>
            <div class="mt-8 lg:mt-0 lg:w-1/2">
              <div class="grid grid-cols-2 gap-4">
                <div class="grid gap-4">
                  <div>
                    <img class="h-auto max-w-full rounded-lg animate-fade-in" src="/images/sponsors-1.jpg" alt="" loading="lazy">
                  </div>
                  <div>
                    <img class="h-auto max-w-full rounded-lg animate-fade-in" src="/images/sponsors-3.jpg" alt="" loading="lazy">
                  </div>
                  <div>
                    <img class="h-auto max-w-full rounded-lg animate-fade-in" src="/images/sponsors-5.jpg" alt="" loading="lazy">
                  </div>
                </div>
                <div class="grid gap-4">
                  <div>
                    <img class="h-auto max-w-full rounded-lg animate-fade-in" src="/images/sponsors-2.jpg" alt="" loading="lazy">
                  </div>
                  <div>
                    <img class="h-auto max-w-full rounded-lg animate-fade-in" src="/images/sponsors-6.jpg" alt="" loading="lazy">
                  </div>
                  <div>
                    <img class="h-auto max-w-full rounded-lg animate-fade-in" src="/images/sponsors-4.jpg" alt="" loading="lazy">
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
