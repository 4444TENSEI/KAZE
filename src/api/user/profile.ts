// 暂时废弃，基于后端获取用户资料，目前直接使用refreshAuth函數更新本地用户资料
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
