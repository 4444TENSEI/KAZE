import pbServer from '@/api/pocketbase'
import router from '@/router'

function logout() {
  toast('退出登录', 'info')
  pbServer.authStore.clear()
  router.push('/login')
}

export default logout
