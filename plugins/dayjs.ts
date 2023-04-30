import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime.js'
import 'dayjs/locale/zh-cn'

declare module '#app' {
  interface NuxtApp {
    $dayjs: dayjs.Dayjs
  }
}

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $dayjs(date?: dayjs.ConfigType): dayjs.Dayjs
  }
}

export default defineNuxtPlugin((nuxtApp) => {
  dayjs.locale('zh-cn')
  dayjs.extend(relativeTime)
  nuxtApp.provide('dayjs', dayjs)
})
