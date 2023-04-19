import { ref } from 'vue'
import { useEventListener, useThrottleFn } from '@vueuse/core'
import { easeInOutCubic } from '~/utils/index'

export function useBackTop() {
  const scrollTop = ref(0)
  const showBtn = ref(false)

  const getScrollTop = function () {
    return window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
  }

  const handleScroll = function () {
    scrollTop.value = getScrollTop()
    showBtn.value = scrollTop.value > 50
  }

  const handleBackTop = function () {
    const beginTime = Date.now()
    const beginValue = getScrollTop()
    const raf = window.requestAnimationFrame || (func => setTimeout(func, 16))
    const frameFunc = () => {
      const progress = (Date.now() - beginTime) / 500
      if (progress < 1) {
        document.documentElement.scrollTop = beginValue * (1 - easeInOutCubic(progress))
        raf(frameFunc)
      }
      else {
        document.documentElement.scrollTop = 0
      }
    }
    raf(frameFunc)
  }

  const throttleHandler = useThrottleFn(handleScroll, 300)

  if (window)
    useEventListener(window, 'scroll', throttleHandler)

  return { showBtn, scrollTop, handleBackTop }
}
