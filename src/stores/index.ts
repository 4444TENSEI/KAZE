import { createPinia } from 'pinia'
import useDrawerStore from './modules/user/layout/drawer'
import useLoadingStore from './modules/user/layout/loading'
import useUserInfoStore from './modules/user/profileUrl'

const pinia = createPinia()

export { useDrawerStore, useLoadingStore, useUserInfoStore }
export default pinia
