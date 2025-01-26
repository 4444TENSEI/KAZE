<template>
  <v-app>
    <v-main class="bg" :style="{ backgroundImage: `url(${userInfo.background})` }">
      <router-view />
    </v-main>
  </v-app>
</template>

<script lang="ts" setup>
  import { useUserInfoStore } from '@/stores'

  const { userInfo } = useUserInfoStore()
</script>

<style scoped>
  #app {
    overflow: hidden !important;
  }
</style>
