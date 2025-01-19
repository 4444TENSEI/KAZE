import { createPinia } from 'pinia'
import useDrawerStore from './modules/layout/drawer'
import useThemeStore from './modules/setting/theme'
import useLoadingStore from './modules/layout/loading'

const pinia = createPinia()

export { useDrawerStore, useThemeStore, useLoadingStore }
export default pinia
