import dayjs from 'dayjs'

export function cubic(value: number): number {
  return value ** 3
}

export function easeInOutCubic(value: number): number {
  return value < 0.5
    ? cubic(value * 2) / 2
    : 1 - cubic((1 - value) * 2) / 2
}

export function formatTime(date?: string) {
  const nowTime = dayjs()
  const now = nowTime.valueOf()
  const formatTime = dayjs(date).valueOf()
  const poorTime = now - formatTime
  if (poorTime >= 0 && poorTime < 60)
    return '刚刚'

  if (poorTime >= 60 && poorTime < 3600)
    return `${Math.floor(poorTime / 60)}分钟前`

  if (poorTime >= 3600 && poorTime < 86400)
    return `${Math.floor(poorTime / 3600)}小时前`

  if (poorTime >= 86400) {
    const poorDate = nowTime.date() - dayjs(date).date()
    const poorYear = nowTime.year() - dayjs(date).year()
    const poorMonth = poorYear === 0 ? (nowTime.month() - dayjs(date).month()) : nowTime.month() + (12 - dayjs(date).month())

    if (poorMonth > 12)
      return `${poorYear}年前`

    if (poorMonth > 0)
      return `${poorMonth}月前`

    return `${poorDate}天前`
  }

  return poorTime
}
