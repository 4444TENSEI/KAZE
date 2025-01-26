import pb from '@/api/pocketbase'
import { useUserInfoStore } from '@/stores'
import { TABLE_USERS } from '@/config/table'

/**
 * 刷新登录认证
 */
function refreshAuth() {
  return pb
    .collection(TABLE_USERS)
    .authRefresh()
    .then(() => {
      console.log('已刷新Token，当前用户信息', pb.authStore.record)
      // 更新浏览器缓存中的用户资料
      useUserInfoStore().updateUserInfo()
    })
}

export { refreshAuth }
