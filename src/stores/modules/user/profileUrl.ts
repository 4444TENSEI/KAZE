import { defineStore } from 'pinia'
import { UserInfo } from '@/types/userInfo'
import { AuthRecord } from 'pocketbase'
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
  function updateUserInfo(userProfile: AuthRecord) {
    if (!userProfile) {
      return console.error('用户数据错误')
    }
    userInfo.value.id = userProfile.id
    userInfo.value.nickname = userProfile.nickname
    userInfo.value.email = userProfile.email
    if (userProfile.avatar) {
      userInfo.value.avatarUrl = `${PB_BASE_URL}/api/files/${userProfile.collectionName}/${userProfile.id}/${userProfile.avatar}`
    }
    if (userProfile.background) {
      userInfo.value.backgroundUrl = `${PB_BASE_URL}/api/files/${userProfile.collectionName}/${userProfile.id}/${userProfile.background}`
    }
    console.log('用户信息已更新', userInfo.value)
  }

  return {
    userInfo,
    updateUserInfo,
  }
})

export default useUserInfoStore
