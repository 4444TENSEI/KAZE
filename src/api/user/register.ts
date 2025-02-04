import pb from '@/api/pocketbase'
import { TABLE_USERS } from '@/config/table'

/**
 * 注册一个随机密码账户
 * @param email 邮箱
 */
async function createUser(email: string) {
  const password = Math.random().toString(36).slice(-8)
  return pb.collection(TABLE_USERS).create({
    email: email,
    password: password,
    passwordConfirm: password,
  })
}

/**
 * 发送“用于激活账户的验证码”邮件
 * @param email 待激活的邮箱
 */
async function otpSend(email: any) {
  return pb.collection(TABLE_USERS).requestOTP(email)
}

/**
 * 校验邮箱验证码以激活账户
 * @param codeID 邮箱验证码ID
 * @param code 邮箱验证码
 */
async function otpVerify(codeID: string, code: string) {
  return pb.collection(TABLE_USERS).authWithOTP(codeID, code)
}

export { createUser, otpSend, otpVerify }
