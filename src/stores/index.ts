import { createPinia } from 'pinia'
import useDrawerStore from './modules/layout/drawer'
import useLoadingStore from './modules/layout/loading'

const pinia = createPinia()

export { useDrawerStore, useLoadingStore }
export default pinia
