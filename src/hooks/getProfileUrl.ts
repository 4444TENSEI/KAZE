import pb from '@/api/pocketbase'
import { TABLE_USERS } from '@/config/table'

// 基础URL
export const BASE_URL = import.meta.env.VITE_POCKETBASE_URL
// 默认头像URL
export const DEFAULT_AVATAR_URL =
  'https://testingcf.jsdelivr.net/gh/4444TENSEI/CDN/img/avatar/kaze/png/comfortable.png'
// 默认背景图URL
export const DEFAULT_BACKGROUND_URL =
  'https://testingcf.jsdelivr.net/gh/4444TENSEI/CDN@master/img/background/yoru/002.webp'
// 用户头像URL
export const USER_AVATAR_URL = `${BASE_URL}/api/files/${TABLE_USERS}/${pb.authStore.record?.id}/${pb.authStore.record?.avatar}`
// 用户背景图URL
export const USER_BACKGROUND_URL = `${BASE_URL}/api/files/${TABLE_USERS}/${pb.authStore.record?.id}/${pb.authStore.record?.background}`
