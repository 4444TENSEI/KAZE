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
      console.log('已刷新用户资料/登录状态', pb.authStore.record)
      // 更新用户临时数据
      useUserInfoStore().updateUserInfo()
    })
}

export { refreshAuth }
