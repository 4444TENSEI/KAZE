import { useLocalStorage } from '@vueuse/core'
import { ACC_TOKEN } from '@/hooks/map/user'

/**
 * 用户认证
 */
const useAuth = () => {
  const accToken = useLocalStorage(ACC_TOKEN, '')

  /**
   * 储存用户登录Token
   */
  function setAccToken(newToken: string) {
    accToken.value = newToken
  }

  /**
   * 获取用户登录Token
   */
  function getAccToken() {
    return accToken.value
  }

  /**
   * 删除用户登录Token
   */
  function delAccToken() {
    accToken.value = ''
  }

  return {
    setAccToken,
    getAccToken,
    delAccToken,
  }
}

export { useAuth }
