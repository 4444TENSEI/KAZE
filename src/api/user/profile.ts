import pb from '@/api/pocketbase'

function getProfile() {
  return pb.collection('users').getOne(pb.authStore.record!.id, {
    fields: 'id,name,email,emailVisibility,avatar,background,verified',
  })
}

export { getProfile }
