import pbServer from '@/api/pocketbase'
import router from '@/router'

/**
 * 退出登录
 */
function logout() {
  pbServer.authStore.clear()
  push.info($t('message.logoutOk'))
  router.push('/login')
}

export default logout
