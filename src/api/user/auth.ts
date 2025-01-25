import pb from '@/api/pocketbase'

/**
 * 刷新登录认证
 */
function refreshAuth() {
  const aaa = pb.collection('users').authRefresh()
  console.log(aaa)
  return aaa
}

export { refreshAuth }
