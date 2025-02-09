import pb from '@/api/pocketbase'
import { TABLE_USERS } from '@/config/table'
import { RecordOptions } from 'pocketbase'

/**
 * 发送重置密码邮件
 * @param email 需要重置密码的邮箱
 */
async function changePsw(email: any, captchaToken: string) {
  // 添加自定义请求头
  const options: RecordOptions = {
    headers: {
      'X-Captcha-Token': captchaToken,
    },
  }
  return pb.collection(TABLE_USERS).requestPasswordReset(email, options)
}

export { changePsw }
