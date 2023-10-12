import type { NavType } from './app'

declare module 'nuxt/schema' {
  interface AppConfig {
    appNav: NavType[]
  }
}
