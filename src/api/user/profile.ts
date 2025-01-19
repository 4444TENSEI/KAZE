import pbServer from '@/api/pocketbase'

function getProfile() {
  return pbServer.collection('users').getOne(pbServer.authStore.record!.id, {
    fields: 'id,name,email,emailVisibility,avatar,avatarUrl,background,backgroundUrl,verified',
  })
}

export { getProfile }
