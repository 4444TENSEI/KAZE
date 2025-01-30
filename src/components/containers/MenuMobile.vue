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
      <v-avatar
        v-if="userInfo.avatarUrl && item.path == '/me'"
        :image="userInfo.avatarUrl + '?thumb=100x100'"
        size="24"
        class="my-1"
      />
      <v-icon v-else>{{ item.icon }}</v-icon>
      <span>{{ item.name }}</span>
    </v-btn>
  </v-bottom-navigation>
</template>

<script lang="ts" setup>
  import router from '@/router'
  import { useUserInfoStore } from '@/stores'

  const { userInfo } = useUserInfoStore()

  const menuMobile = [
    {
      id: 1,
      name: '消息',
      icon: 'mdi-chat',
      path: '/menu/chat',
    },
    {
      id: 2,
      name: '插件',
      icon: 'mdi-creation-outline',
      path: '/menu/plugin',
    },
    {
      id: 3,
      name: '好友',
      icon: 'mdi-account-details',
      path: '/menu/friend',
    },
    {
      id: 4,
      name: '我',
      icon: 'mdi-account',
      path: '/me',
    },
  ]
</script>
