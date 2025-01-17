import { createPinia } from 'pinia'
import useDrawerStore from './modules/layout/drawer'
import useSettingStore from './modules/setting/theme'
import useLoadingStore from './modules/layout/loading'

const pinia = createPinia()

export { useDrawerStore, useSettingStore, useLoadingStore }
export default pinia
