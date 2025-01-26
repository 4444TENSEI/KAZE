import pb from '@/api/pocketbase'
import { TABLE_USERS } from '@/hooks/map'

/** 需要返回的用户资料字段 */
const USER_PROFILE_FIELDS = [
  'id',
  'name',
  'email',
  'emailVisibility',
  'avatar',
  'background',
  'verified',
]
/**
 * 获取用户资料
 */
const getUserProfile = async () => {
  return pb.collection(TABLE_USERS).getOne(pb.authStore.record!.id, {
    fields: USER_PROFILE_FIELDS.join(','),
  })
}

export { getUserProfile }
