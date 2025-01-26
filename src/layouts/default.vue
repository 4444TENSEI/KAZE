<template>
  <router-view />
  <AppFrame v-if="USER_VALID" />
  <Footer v-else />
  <Toast />
</template>

<script lang="ts" setup>
  import { USER_VALID } from '@/config/authStore'
</script>
