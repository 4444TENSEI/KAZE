import pbServer from '@/api/pocketbase'

/**
 * 刷新登录认证
 */
function refreshAuth() {
  return pbServer.collection('users').authRefresh()
}

export { refreshAuth }
