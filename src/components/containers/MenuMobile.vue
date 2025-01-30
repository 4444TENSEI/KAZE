<template>
  <v-bottom-navigation
    class="position-fixed opacity-90"
    color="primary"
    grow
    mode="shift"
    mandatory
    rounded="true"
  >
    <v-btn v-for="item in menuMobile" :key="item.id" @click="router.push(item.path)">
      <Avatar v-if="item.path === '/me'" :size="28"/>
      <v-icon v-else>{{ item.icon }}</v-icon>
      <span>{{ item.name }}</span>
    </v-btn>
  </v-bottom-navigation>
</template>

<script lang="ts" setup>
  import router from '@/router'

  const menuMobile = [
    {
      id: 1,
      name: '消息',
      icon: 'mdi-chat',
      path: '/home',
    },
    {
      id: 2,
      name: '插件',
      icon: 'mdi-creation-outline',
      path: '/plugin',
    },
    {
      id: 3,
      name: '好友',
      icon: 'mdi-account-details',
      path: '/friend',
    },
    {
      id: 4,
      name: '我',
      icon: 'mdi-account',
      path: '/me',
    },
  ]
</script>
