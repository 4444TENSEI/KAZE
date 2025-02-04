import pb from '@/api/pocketbase'
import { TABLE_USERS } from '@/config/table'

/**
 * 发送重置密码邮件
 * @param email 需要重置密码的邮箱
 */
async function changePsw(email: any) {
  return pb.collection(TABLE_USERS).requestPasswordReset(email)
}

export { changePsw }
