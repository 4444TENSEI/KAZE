<template>
  <div class="position-fixed opacity-90">
    <v-navigation-drawer v-model="parentDrawer" rail>
      <v-list v-for="item in menuPc" :key="item.id" density="compact" nav>
        <v-list-item :prepend-icon="item.icon" :to="item.path" :value="item.name" />
      </v-list>
      <template #append>
        <v-list density="compact" nav>
          <v-list-item
            :prepend-icon="childDrawer ? 'mdi-menu-open' : 'mdi-menu'"
            @click="childDrawer = !childDrawer"
          />
        </v-list>
        <v-divider />
        <div class="d-flex justify-center align-center my-2">
          <v-btn rounded="circle" size="42" variant="tonal">
            <v-badge color="error" dot>
              <Avatar :size="34" />
            </v-badge>
            <v-menu activator="parent">
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
                <v-list-item link @click="logout">
                  <v-icon class="mr-6">mdi-logout</v-icon>
                  <span>退出登录</span>
                </v-list-item>
              </v-list>
            </v-menu>
          </v-btn>
        </div>
      </template>
    </v-navigation-drawer>

    <v-navigation-drawer v-model="childDrawer">
      <LoadingPlace />
    </v-navigation-drawer>
  </div>
</template>

<script setup lang="ts">
  import router from '@/middleware'
  import logout from '@/api/user/logout'

  const parentDrawer = ref(true)
  const childDrawer = ref(false)

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

  const menuPc = [
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
  ]
</script>
