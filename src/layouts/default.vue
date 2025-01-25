<template>
  <router-view />
  <AppFrame v-if="pb.authStore.token" />
  <Footer v-else />
  <Toast />
</template>

<script lang="ts" setup>
  import pb from '@/api/pocketbase'
</script>
