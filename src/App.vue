<template>
  <v-app>
    <v-main class="home-bg">
      <router-view />
    </v-main>
  </v-app>
</template>

<script lang="ts" setup>
  import { useAuth } from '@/hooks/user/auth'

  const router = useRouter()
  const { getAccToken } = useAuth()

  console.log('登录令牌', getAccToken())

  if (!getAccToken()) {
    router.replace('/login')
  } else {
    console.log('已登录')
    router.replace('/home')
  }
</script>

<style scoped>
  #app {
    overflow: hidden !important;
  }
</style>
