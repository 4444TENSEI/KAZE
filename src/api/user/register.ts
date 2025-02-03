import pb from '@/api/pocketbase'
import { useLoadingStore } from '@/stores'
import { TABLE_USERS } from '@/config/table'

const { setLoading } = useLoadingStore()

/**
 * 注册
 * @param email 邮箱, 密码
 */
async function createCasualUser(email: any, password: any) {
  setLoading(true)
  // 创建用户记录
  pb.collection(TABLE_USERS)
    .create({
      email: email,
      password: password,
      passwordConfirm: password,
    })
    .then(resp => {
      console.log('临时用户创建成功')
      return otpSend(email)
    })
    .finally(() => {
      setLoading(false)
    })
}

/** 发送邮件验证码（前提是先创建账号） */
async function otpSend(email: any) {
  return pb
    .collection(TABLE_USERS)
    .requestOTP(email)
    .then(otpId => {
      console.log('发送邮件成功', otpId)
      return otpId
    })
    .catch(err => {
      console.error('发送邮件失败', err)
    })
}

/** 校验邮箱验证码 */
async function otpVerify(codeID: string, code: string) {
  return pb
    .collection(TABLE_USERS)
    .authWithOTP(codeID, code)
    .then(res => {
      console.log('验证成功', res)
    })
    .catch(err => {
      console.error('验证失败', err)
    })
}

export { createCasualUser, otpVerify }
