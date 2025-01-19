import { defineStore } from 'pinia'
import { THEME_MAP } from '@/hooks/map'

const useThemeStore = defineStore('theme', () => {
  const theme = ref(useStorage(THEME_MAP, 'light'))
  return {
    theme,
  }
})

export default useThemeStore
