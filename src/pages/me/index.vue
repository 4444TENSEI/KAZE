<template>
  <div class="flex-container justify-center align-center flex-column">
    <NavBar barTitle="个人中心" :showGoBack="false">
      <SearchBtn />
      <TestBtn />
      <ThemeBtn />
    </NavBar>
    <v-card>
      <v-list nav>
        <v-list-item
          v-for="item in settingItems"
          :key="item.id"
          link
          @click="router.push(item.path)"
        >
          <v-icon class="mr-6">{{ item.icon }}</v-icon>
          <span>{{ item.name }}</span>
        </v-list-item>
      </v-list>
    </v-card>
    <v-card>
      <v-list nav>
        <v-list-item link @click="logout">
          <v-icon class="mr-6">mdi-logout</v-icon>
          <span>退出登录</span>
        </v-list-item>
      </v-list>
    </v-card>
  </div>
</template>

<script lang="ts" setup>
  import logout from '@/api/user/logout'
  import router from '@/middleware'

  const settingItems = [
    {
      id: 1,
      name: '我的资料',
      icon: 'mdi-card-account-details',
      path: '/me/profile',
    },
    {
      id: 2,
      name: '设置',
      icon: 'mdi-creation-outline',
      path: '/me/setting',
    },
  ]
</script>

<style lang="scss" scoped>
  .v-card {
    width: 720px;
    margin-top: 1rem;
    max-width: 94vw;
  }
</style>
