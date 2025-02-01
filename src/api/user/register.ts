import pb from '@/api/pocketbase'
// import { useLoadingStore } from '@/stores'
import { TABLE_USERS } from '@/config/table'

// const { setLoading } = useLoadingStore()

/**
 * 发送邮箱验证码
 * @param email 邮箱
 */
async function sendEmailCode(email: string) {
  // 发送验证邮件
  const resp = await pb.collection(TABLE_USERS).requestVerification(email)
  console.log(resp)
  // 确认验证并更新用户状态
    await pb.collection('users').confirmVerification('VERIFICATION_TOKEN')
}

/**
 * 表单/邮箱登录
 * @param form 登录表单数据
 */
async function registerByEmail(form: any) {
  const resp = await pb.collection(TABLE_USERS).authWithPassword(form.email, form.password)
  console.log(resp)
}

export { registerByEmail, sendEmailCode }
