<template>
  <v-progress-linear v-if="loading" color="light-blue" indeterminate />
  <router-view />
  <AppFrame v-if="pbServer.authStore.token" />
  <Footer v-else />
  <Toast />
</template>

<script lang="ts" setup>
  import pbServer from '@/api/pocketbase'
  import { useLoadingStore } from '@/stores'

  console.log('当前用户信息', pbServer.authStore.record)

  const { loading } = useLoadingStore()
</script>
