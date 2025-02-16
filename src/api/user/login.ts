import pb from '@/api/pocketbase'
import type { Oa2Provider } from '@/types/login'
import { TABLE_USERS } from '@/config/table'
import { RecordOptions } from 'pocketbase'

/**
 * 邮箱+密码登录
 * @param formData 登录表单数据
 * @param captchaToken 验证码标识ID
 * @returns Promise
 */
async function loginByEmail(email: string, password: string, captchaToken: string) {
  const options: RecordOptions = {
    headers: {
      'X-Captcha-Token': captchaToken,
    },
  }
  return pb.collection(TABLE_USERS).authWithPassword(email, password, options)
}

/**
 * OA2单点登录
 * @param provider 单点登录平台
 * @returns Promise
 */
async function loginByOA2(provider: Oa2Provider) {
  return pb.collection(TABLE_USERS).authWithOAuth2({ provider })
}

export { loginByEmail, loginByOA2 }
