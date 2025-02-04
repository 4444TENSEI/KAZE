import pb from '@/api/pocketbase'
import { TABLE_USERS } from '@/config/table'

/** 刷新登录认证 */
function refreshAuth() {
    // 使用时间戳和随机数生成一个唯一的请求标识符，避免取消重复请求导致的登录状态误判
    const uniqueRequestKey = `${Date.now()}-${Math.random()}`;
    return pb.collection(TABLE_USERS).authRefresh({ requestKey: uniqueRequestKey });
  }
  

export { refreshAuth }
