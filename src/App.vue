<template>
  <v-app>
    <v-main class="bg" :style="{ backgroundImage: `url(${USER_BACKGROUND_URL})` }">
      <router-view />
    </v-main>
  </v-app>
</template>

<script lang="ts" setup>
  import { USER_BACKGROUND_URL } from '@/hooks/getProfileUrl'
</script>

<style scoped>
  #app {
    overflow: hidden !important;
  }
</style>
