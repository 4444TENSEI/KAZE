import { toast } from '@/hooks/toast'
import { useAuth } from './auth'
import router from '@/router'

const { delAccToken } = useAuth()

function logout() {
  delAccToken()
  toast('退出登录', 'info')
  router.push('/login')
}

export { logout }
