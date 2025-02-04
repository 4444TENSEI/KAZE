import pb from '@/api/pocketbase'
import { TABLE_USERS } from '@/config/table'

/**
 * 注册
 * @param email 邮箱
 * @param password 密码
 */
async function createUser(email: string, password: string) {
  return pb.collection(TABLE_USERS).create({
    email: email,
    password: password,
    passwordConfirm: password,
  })
}

/**
 * 发送邮件验证码（前提是先创建账号）
 * @param email 待激活的邮箱
 */
async function otpSend(email: any) {
  return pb.collection(TABLE_USERS).requestOTP(email)
}

/**
 * 校验邮箱验证码
 * @param codeID 邮箱验证码ID
 * @param code 邮箱验证码
 */
async function otpVerify(codeID: string, code: string) {
  return pb.collection(TABLE_USERS).authWithOTP(codeID, code)
}

export { createUser, otpSend, otpVerify }
