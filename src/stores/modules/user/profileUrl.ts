import { defineStore } from 'pinia'
import pb from '@/api/pocketbase'
import { type UserInfo } from '@/types/userInfo'
import { PB_BASE_URL, DEFAULT_AVATAR_URL, DEFAULT_BACKGROUND_URL } from '@/config/url'

const useUserInfoStore = defineStore('userInfo', () => {
  /** 用户信息 */
  const userInfo = ref<UserInfo>({
    id: '',
    nickname: '',
    email: '',
    avatarUrl: DEFAULT_AVATAR_URL,
    backgroundUrl: DEFAULT_BACKGROUND_URL,
  })

  /** 更新用户信息 */
  function updateUserInfo() {
    const localProfile = pb.authStore.record
    if (!localProfile) {
      return console.error('用户本地数据为空')
    }
    userInfo.value.id = localProfile.id
    userInfo.value.nickname = localProfile.nickname
    userInfo.value.email = localProfile.email
    if (localProfile.avatar) {
      userInfo.value.avatarUrl = `${PB_BASE_URL}/api/files/${localProfile.collectionName}/${localProfile.id}/${localProfile.avatar}`
    }
    if (localProfile.background) {
      userInfo.value.backgroundUrl = `${PB_BASE_URL}/api/files/${localProfile.collectionName}/${localProfile.id}/${localProfile.background}`
    }
    console.log('用户信息已更新', userInfo.value)
  }

  return {
    userInfo,
    updateUserInfo,
  }
})

export default useUserInfoStore
