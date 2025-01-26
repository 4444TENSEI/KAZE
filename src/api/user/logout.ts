import pb from '@/api/pocketbase'
import router from '@/router'

/**
 * 退出登录
 */
function logout() {
  pb.authStore.clear()
  push.info($t('message.logoutOk'))
  router.replace('/login')
}

export default logout
