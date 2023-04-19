<template>
  <main class="custom-content-layout">
    <Menus />
    <CHeader />
    <slot />
    <Footer />
    <ClientOnly>
      <BackTop />
    </ClientOnly>
  </main>
</template>
