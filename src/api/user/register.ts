import pb from '@/api/pocketbase'
// import { useLoadingStore } from '@/stores'
import { TABLE_USERS } from '@/config/table'

// const { setLoading } = useLoadingStore()

async function sendOTP(email: string) {
  try {
    const result = await pb.collection(TABLE_USERS).requestOTP(email)
    console.log('OTP 已发送，请检查邮箱。', result)
    return result.otpId // 返回 OTP 请求的唯一标识符
  } catch (err) {
    console.error('发送 OTP 失败:', err)
    throw err
  }
}

/**
 * 注册
 * @param email 邮箱, 密码
 */
async function sendEmailCode(email: string, password: string) {
  // 创建用户记录
  pb.collection(TABLE_USERS)
    .create({
      email: email,
      password: password,
      passwordConfirm: password,
    })
    .then(user => {
      console.log('用户记录创建成功:', user)
      // 邮箱激活账户
      if (!user.verified) {
        pb.collection(TABLE_USERS)
          .requestVerification(email)
          .then(resp => {
            console.log('验证邮件已发送，请检查邮箱。', resp)
          })
      }
    })
}

export { sendEmailCode, sendOTP }
