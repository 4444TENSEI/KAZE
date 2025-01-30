import pb from '@/api/pocketbase'
import { TABLE_USERS } from '@/config/table'

/** 需要接口返回的字段 */
const USER_PROFILE_FIELDS = [
  'id',
  'name',
  'email',
  'emailVisibility',
  'avatar',
  'background',
  'verified',
]

/** 从后端接口获取用户资料 */
const getUserProfile = async () => {
  return pb.collection(TABLE_USERS).getOne(pb.authStore.record?.id as string, {
    fields: USER_PROFILE_FIELDS.join(','),
  })
}

export { getUserProfile }
