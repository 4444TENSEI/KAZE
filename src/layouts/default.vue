<template>
  <v-progress-linear v-if="getLoading()" color="light-blue" indeterminate />
  <router-view />
  <AppFrame v-if="getAccToken()" />
  <Footer v-if="!getAccToken()" />
  <Toast />
</template>

<script lang="ts" setup>
  import { useLoadingStore } from '@/stores'
  import { useAuth } from '@/hooks/user/auth'

  const { getLoading } = useLoadingStore()
  const { getAccToken } = useAuth()
</script>
