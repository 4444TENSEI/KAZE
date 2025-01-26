import pb from '@/api/pocketbase'
import { AuthRecord } from 'pocketbase'

/** 浏览器缓存中的用户数据 */
const userLocalData: AuthRecord = pb.authStore.record

export default userLocalData
