import pb from '@/api/pocketbase'
import { TABLE_USERS } from '@/config/table'

// 基础URL
export const BASE_URL = import.meta.env.VITE_POCKETBASE_URL
// 用户信息
export const USER_PROFILE = pb.authStore.record
// 用户TOKEN状态
export const USER_VALID = pb.authStore.isValid
// 用户id
export const USER_ID = pb.authStore.record?.id
// 用户昵称
export const USER_NAME = pb.authStore.record?.nickname
// 用户头像文件名
export const USER_AVATAR = pb.authStore.record?.avatar
// 用户背景图文件名
export const USER_BACKGROUND = pb.authStore.record?.background
// 用户头像URL
export const USER_AVATAR_URL = USER_AVATAR
  ? `${BASE_URL}/api/files/${TABLE_USERS}/${USER_ID}/${USER_AVATAR}`
  : 'https://testingcf.jsdelivr.net/gh/4444TENSEI/CDN/img/avatar/kaze/png/comfortable.png'
// 用户背景图URL
export const USER_BACKGROUND_URL = USER_BACKGROUND
  ? `${BASE_URL}/api/files/${TABLE_USERS}/${USER_ID}/${USER_BACKGROUND}`
  : 'https://testingcf.jsdelivr.net/gh/4444TENSEI/CDN@master/img/background/yoru/002.webp'
