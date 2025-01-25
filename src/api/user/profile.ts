import pb from '@/api/pocketbase'
import { TABLE_USERS, USER_PROFILE_FIELDS } from '@/hooks/map'

/**
 * 获取用户资料
 */
function getUserProfile() {
  return pb.collection(TABLE_USERS).getOne(pb.authStore.record!.id, {
    fields: USER_PROFILE_FIELDS.join(','),
  })
}

export { getUserProfile }
