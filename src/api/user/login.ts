import pb from '@/api/pocketbase'
import router from '@/router'
import { greeting } from '@/utils/greeting'
import type { LoginForm, Oa2Provider } from '@/types/login'
import { useLoadingStore } from '@/stores'
import { TABLE_USERS } from '@/config/table'

const { setLoading } = useLoadingStore()

/** 通用登录逻辑 */
async function login(authMethod: Function, ...params: any[]) {
  const loggingToast = push.promise($t('message.logging'))
  setLoading(true)
  try {
    await authMethod(...params)
    loggingToast.resolve(`${greeting()},${pb.authStore.record?.nickname}~`)
    router.push('/home')
  } catch (err: any) {
    if (err.response?.data?.email?.code === 'validation_required') {
      loggingToast.reject($t('message.loginFailOfNotEmail'))
    } else {
      loggingToast.reject($t('message.loginFail'))
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
  await login(
    (provider: Oa2Provider) => pb.collection(TABLE_USERS).authWithOAuth2({ provider }),
    provider,
  )
}

/**
 * 表单/邮箱登录
 * @param form 登录表单数据
 */
async function loginByEmail(form: LoginForm) {
  await login(
    (form: LoginForm) => pb.collection(TABLE_USERS).authWithPassword(form.email, form.password),
    form,
  )
}

export { loginByEmail, loginByOA2 }
