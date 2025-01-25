import pb from '@/api/pocketbase'
import { TABLE_USERS } from '@/hooks/map'

const userId = pb.authStore.record?.id
const userAvatar = pb.authStore.record?.avatar
const thumb = '100x100'

const avatarUrl = `${
  import.meta.env.VITE_POCKETBASE_URL
}/api/files/${TABLE_USERS}/${userId}/${userAvatar}?thumb=${thumb}`

const fileUrl = (tableName: string, id: string, fileName: string, thumb?: string) =>
  `${import.meta.env.VITE_POCKETBASE_URL}/api/files/${tableName}/${id}/${fileName}?thumb=${thumb}`

export { fileUrl, avatarUrl }
