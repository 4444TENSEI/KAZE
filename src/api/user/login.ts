import pb from '@/api/pocketbase'
import router from '@/router'
import { greeting } from '@/utils/greeting'
import type { LoginForm, Oa2Provider } from '@/types/login'
import { TABLE_USERS } from '@/config/table'
import { RecordOptions } from 'pocketbase'

/** 通用登录逻辑 */
async function login(authMethod: Function, ...params: any[]) {
  try {
    await authMethod(...params)
    push.success(`${greeting()},${pb.authStore.record?.nickname}~`)
    router.push('/home')
  } catch (err: any) {
    if (err.response.data.email.code === 'validation_required') {
      push.error($t('message.loginFailOfNotEmail'))
    } else if (err.response.status === 429) {
      push.error($t('message.frequently'))
    } else {
      push.error($t('message.loginFail'))
    }
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
 * @param captchaID 验证码标识ID
 */
async function loginByEmail(formData: LoginForm, captchaToken: string) {
  await login(() => {
    // 添加自定义请求头
    const options: RecordOptions = {
      headers: {
        'X-Captcha-Token': captchaToken,
      },
    }
    return pb.collection(TABLE_USERS).authWithPassword(formData.email, formData.password, options)
  })
}

export { loginByEmail, loginByOA2 }
