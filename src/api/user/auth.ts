import pb from '@/api/pocketbase'
import { TABLE_USERS } from '@/config/table'

/** 刷新登录认证 */
function refreshAuth() {
  return pb.collection(TABLE_USERS).authRefresh()
}

export { refreshAuth }
