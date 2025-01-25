import pb from '@/api/pocketbase'
import { getUserProfile } from '@/api/user/profile'
import { TABLE_USERS } from '@/hooks/map'

/**
 * 获取头像url
 * @param thumb 图像尺寸
 * @returns 头像url
 */
const getAvatarUrl = async (thumb?: string) => {
  return getUserProfile().then(res => getFileUrl(TABLE_USERS, res.id, res?.avatar, thumb))
}

/**
 * 获取背景url
 * @param thumb 图像尺寸
 * @returns 背景url
 */
const getBackgroundUrl = async (thumb?: string) => {
  return getUserProfile().then(res => getFileUrl(TABLE_USERS, res.id, res?.background, thumb))
}

/**
 * 获取文件url
 * @param table 数据表名
 * @param id 数据id
 * @param filename 文件名
 * @param thumb 图像尺寸
 * @returns 文件url
 */
const getFileUrl = async (table: string, id: string, filename: string, thumb?: string) => {
  return pb
    .collection(table)
    .getOne(id)
    .then(res => pb.files.getURL(res, filename, { thumb }))
}

export { getFileUrl, getAvatarUrl, getBackgroundUrl }
