<template>
  <AppFrame v-if="pb.authStore.isValid" />
  <Footer v-else />
  <Toast />
  <router-view />
  <Analytics />
</template>

<script lang="ts" setup>
  import pb from '@/api/pocketbase'
  import { Analytics } from '@vercel/analytics/vue'
</script>
