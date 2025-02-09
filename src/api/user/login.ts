import pb from '@/api/pocketbase'
import router from '@/router'
import { greeting } from '@/utils/greeting'
import type { LoginForm, Oa2Provider } from '@/types/login'
import { useLoadingStore } from '@/stores'
import { TABLE_USERS } from '@/config/table'

const { setLoading } = useLoadingStore()

/** 通用登录逻辑 */
async function login(authMethod: Function, ...params: any[]) {
  /** 登录状态Toast */
  const waiting = push.promise($t('message.logging'))
  setLoading(true)
  try {
    await authMethod(...params)
    waiting.resolve(`${greeting()},${pb.authStore.record?.nickname}~`)
    router.push('/home')
  } catch (err: any) {
    if (err.response?.data?.email?.code === 'validation_required') {
      waiting.reject($t('message.loginFailOfNotEmail'))
    } else {
      waiting.reject($t('message.loginFail'))
    }
  } finally {
    setLoading(false)
  }
}

/**
 * OA2单点登录
 * @param provider 单点登录平台
 */
async function loginByOA2(provider: Oa2Provider) {
  await login(() => pb.collection(TABLE_USERS).authWithOAuth2({ provider }), provider)
}

/**
 * 表单/邮箱登录
 * @param formData 登录表单数据
 */
async function loginByEmail(formData: LoginForm, captchaToken: string) {
  await login(
    () => pb.collection(TABLE_USERS).authWithPassword(formData.email, formData.password),
    captchaToken,
  )
}

export { loginByEmail, loginByOA2 }
