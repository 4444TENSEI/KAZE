<template>
  <v-bottom-navigation class="position-fixed" color="primary" grow mode="shift">
    <v-btn v-for="item in menuMobile" :key="item.id" @click="router.push(item.path)">
      <v-avatar
        v-if="USER_AVATAR_URL && item.path == '/me'"
        :image="USER_AVATAR_URL + '?thumb=100x100'"
        size="24"
      />
      <v-icon v-else>{{ item.icon }}</v-icon>
      <span>{{ item.name }}</span>
    </v-btn>
  </v-bottom-navigation>
</template>

<script lang="ts" setup>
  import router from '@/router'
  import { USER_AVATAR_URL } from '@/hooks/getProfileUrl'

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
