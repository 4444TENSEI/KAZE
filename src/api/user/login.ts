import pbServer from '@/api/pocketbase'
import router from '@/router'
import { greeting } from '@/utils/greeting'
import type { LoginForm, Oa2Provider } from '@/types/login'
import { useLoadingStore } from '@/stores'

const { setLoading } = useLoadingStore()

// 通用登录逻辑
async function login(authMethod: Function, ...params: any[]) {
  const logging = push.promise($t('message.logging'))
  try {
    setLoading(true)
    await authMethod(...params)
    logging.resolve(`${greeting()}, ${pbServer.authStore.record?.name}~`)
    router.push('/home')
  } catch (err) {
    logging.reject($t('message.loginFail'))
  }
  setLoading(false)
}

/**
 * OA2单点登录
 * @param provider
 */
async function loginByOA2(provider: Oa2Provider) {
  await login(
    (provider: Oa2Provider) => pbServer.collection('users').authWithOAuth2({ provider }),
    provider,
  )
}

/**
 * 表单/邮箱登录
 * @param form
 */
async function loginByEmail(form: LoginForm) {
  await login(
    (form: LoginForm) => pbServer.collection('users').authWithPassword(form.email, form.password),
    form,
  )
}

export { loginByEmail, loginByOA2 }
