<script setup lang='ts'>
const colorMode = useColorMode()
const colorIconName = computed(() => {
  const COLOR_TO_ICON = {
    system: 'mi-computer',
    dark: 'ri-moon-line',
    light: 'ri-sun-line',
  } as any
  return COLOR_TO_ICON[colorMode.preference] || ''
})

const toggleDark = function () {
  const COLOR_TO_CHANGE = {
    system: 'light',
    dark: 'system',
    light: 'dark',
  } as any
  colorMode.preference = COLOR_TO_CHANGE[colorMode.preference]
}
</script>

<template>
  <div class="select-none" title="Toggle Color Scheme" @click="toggleDark">
    <ColorScheme placeholder="..." tag="span">
      <Icon :name="colorIconName" />
    </ColorScheme>
  </div>
</template>
