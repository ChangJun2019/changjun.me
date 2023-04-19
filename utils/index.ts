export function cubic(value: number): number {
  return value ** 3
}

export function easeInOutCubic(value: number): number {
  return value < 0.5
    ? cubic(value * 2) / 2
    : 1 - cubic((1 - value) * 2) / 2
}
