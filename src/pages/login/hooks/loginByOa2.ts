import type PocketBase from 'pocketbase'

type Provider = 'github' | 'google' | 'microsoft' | 'gitlba' | 'apple'

async function loginByOA2(pbServer: PocketBase, provider: Provider) {
  try {
    const res = await pbServer?.collection('users').authWithOAuth2({
      provider,
    })
    const githubProfile = {
      昵称: res?.meta?.name,
      账号: res?.meta?.username,
      用户头像URL: res?.meta?.avatarUrl,
      个性签名: res?.meta?.rawUser?.bio,
      定位: res?.meta?.rawUser?.location,
      关注数: res?.meta?.rawUser?.followers,
      粉丝数: res?.meta?.rawUser?.following,
      平台网站: res?.meta?.rawUser?.html_url,
      个人网站: res?.meta?.rawUser?.blog,
      注册时间: res?.meta?.rawUser?.created_at,
      上次活跃: res?.meta?.rawUser?.updated_at,
    }
    console.table(githubProfile)
    console.log(`${provider} 认证成功:`, res)
    console.log('访问令牌', pbServer?.authStore.token)
    if (pbServer?.authStore.isValid) {
      console.log('用户信息', pbServer?.authStore.model)
    }
  } catch (error) {
    console.error(`${provider} 认证失败:`, error)
  }
}

export { loginByOA2 }
