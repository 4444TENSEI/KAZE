import { defineStore } from 'pinia'
import pb from '@/api/pocketbase'
import { UserInfo } from '@/types/userInfo'
import { PB_BASE_URL, DEFAULT_AVATAR_URL, DEFAULT_BACKGROUND_URL } from '@/config/url'

/** 本地用户数据 */
const userLocalData = pb.authStore.record

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
    if (!userLocalData) {
      return console.error('用户数据为空')
    }
    userInfo.value.id = userLocalData.id
    userInfo.value.nickname = userLocalData.nickname
    userInfo.value.email = userLocalData.email
    if (userLocalData.avatar) {
      userInfo.value.avatarUrl = `${PB_BASE_URL}/api/files/${userLocalData.collectionName}/${userLocalData.id}/${userLocalData.avatar}`
    }
    if (userLocalData.background) {
      userInfo.value.backgroundUrl = `${PB_BASE_URL}/api/files/${userLocalData.collectionName}/${userLocalData.id}/${userLocalData.background}`
    }
    console.log('用户信息已更新', userInfo.value)
  }

  return {
    userInfo,
    updateUserInfo,
  }
})

export default useUserInfoStore
