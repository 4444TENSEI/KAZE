import { createPinia } from 'pinia'
import useDrawerStore from './modules/layout/drawer'
import useLoadingStore from './modules/layout/loading'
import useUserInfoStore from './modules/user/profileUrl'
import useCaptchaStore from './modules/captcha'

const pinia = createPinia()

export { useDrawerStore, useLoadingStore, useUserInfoStore, useCaptchaStore }
export default pinia
