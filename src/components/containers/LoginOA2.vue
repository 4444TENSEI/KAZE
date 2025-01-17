<template>
  <div class="d-flex align-center justify-center ga-2">
    <v-btn
      color="primary"
      icon="mdi-github"
      title="GitHub"
      variant="tonal"
      @click="loginByOA2('github')"
    />
    <v-btn
      color="error"
      icon="mdi-google"
      title="Google"
      variant="tonal"
      @click="loginByOA2('google')"
    />
    <v-btn
      color="warning"
      icon="mdi-gitlab"
      title="Gitlab"
      variant="tonal"
      @click="loginByOA2('gitlab')"
    />
  </div>
</template>

<script setup lang="ts">
  import { pocketBaseSymbol } from '@/hooks/pocketbase/injectionSymbols'
  import { toast } from '@/hooks/toast'

  const pbServer = inject(pocketBaseSymbol)

  async function loginByOA2(provider: string) {
    try {
      const res = await pbServer?.collection('users').authWithOAuth2({
        provider,
      })

      const meta = res?.meta
      const rawUser = res?.meta?.rawUser

      const profile = {
        昵称: meta?.name,
        账号: meta?.username,
        个性签名: rawUser?.bio,
        用户头像URL: meta?.avatarUrl,
        定位: rawUser?.location,
        关注数: rawUser?.followers,
        粉丝数: rawUser?.following,
        平台网站: rawUser?.html_url,
        个人网站: rawUser?.blog,
        注册时间: rawUser?.created_at,
        上次活跃: rawUser?.updated_at,
      }
      console.table(profile)

      console.log(`${provider} 认证成功:`, res)
      console.log('访问令牌', pbServer?.authStore.token)
      console.log('授权状态', pbServer?.authStore.isValid)

      toast('欢迎回来，' + JSON.stringify(profile), 'info', 100000)
    } catch (error) {
      console.error(`${provider} 认证失败:`, error)
    }
  }
</script>
