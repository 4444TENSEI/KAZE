import { defineStore } from 'pinia'
import userLocalData from '@/hooks/useAuthStore'
import { UserInfo } from '@/types/userInfo'
import { PB_BASE_URL, DEFAULT_AVATAR_URL, DEFAULT_BACKGROUND_URL } from '@/config/url'

const useUserInfoStore = defineStore('userInfo', () => {
  // 用户信息
  const userInfo = ref<UserInfo>({
    id: '',
    nickname: '',
    email: '',
    avatarUrl: DEFAULT_AVATAR_URL,
    backgroundUrl: DEFAULT_BACKGROUND_URL,
  })

  /**
   * 更新用户信息
   */
  function updateUserInfo() {
    if (userLocalData) {
      userInfo.value.id = userLocalData.id
      userInfo.value.nickname = userLocalData.nickname
      userInfo.value.email = userLocalData.email
      userInfo.value.avatarUrl = userLocalData.avatar
        ? `${PB_BASE_URL}/api/files/${userLocalData.collectionName}/${userLocalData.id}/${userLocalData.avatar}`
        : DEFAULT_AVATAR_URL
      userInfo.value.backgroundUrl = userLocalData.background
        ? `${PB_BASE_URL}/api/files/${userLocalData.collectionName}/${userLocalData.id}/${userLocalData.background}`
        : DEFAULT_BACKGROUND_URL
      console.log('用户信息已更新', userInfo.value)
    }
  }

  return {
    userInfo,
    updateUserInfo,
  }
})

export default useUserInfoStore
