import pb from '@/api/pocketbase'

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

export { getFileUrl }
