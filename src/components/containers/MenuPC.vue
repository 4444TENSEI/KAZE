<template>
  <v-navigation-drawer v-model="parentDrawer" class="position-fixed" rail>
    <v-list v-for="menuItem in menuPc" :key="menuItem.id" density="compact" nav>
      <v-list-item :prepend-icon="menuItem.icon" :to="menuItem.url" :value="menuItem.name" />
    </v-list>
    <template #append>
      <v-list density="compact" nav>
        <v-list-item
          :prepend-icon="childDrawer ? 'mdi-menu-open' : 'mdi-menu'"
          @click="childDrawer = !childDrawer"
        />
      </v-list>
      <v-divider />
      <div class="d-flex justify-center my-2">
        <v-btn class="text-none" icon size="42" slim variant="tonal">
          <v-badge color="error" dot>
            <v-avatar
              color="surface-light"
              image="https://testingcf.jsdelivr.net/gh/4444TENSEI/CDN/img/avatar/kaze/ico/public.ico"
              size="36"
            />
          </v-badge>
          <v-menu activator="parent">
            <v-list nav>
              <v-list-item v-for="item in settingItems" :key="item.id" link :to="item.url">
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
</template>

<script setup lang="ts">
  import { logout } from '@/hooks/user/logout'
  import { settingItems } from '@/pages/setting/hooks/list'

  const parentDrawer = ref(true)
  const childDrawer = ref(false)

  const menuPc = [
    {
      id: 1,
      name: '首页',
      icon: 'mdi-home',
      url: '/home',
    },
    {
      id: 2,
      name: '插件',
      icon: 'mdi-creation-outline',
      url: '/plugin',
    },
    {
      id: 3,
      name: '退出登录',
      icon: 'mdi-login',
      url: '/login',
    },
  ]
</script>
